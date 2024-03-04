import * as fs from "fs";
import * as iconv from "iconv-lite";
import * as readline from "readline";
import { EventEmitter } from "node:events";
import { logLib } from "./logLib";
import { LogInfo } from "./logInfo";
import { FSWatcher } from "node:fs";

export class LogWatch extends EventEmitter {
    private _logInfoList: LogInfo[] = [];
    private _readlineInterface: readline.Interface;
    private _fileStream: NodeJS.ReadWriteStream;
    private _watcher: FSWatcher;

    get logInfoList() {
        return this._logInfoList;
    }

    get readlineInterface() {
        return this._readlineInterface;
    }

    set readlineInterface(value: readline.Interface) {
        this._readlineInterface = value;
    }

    get fileStream(): NodeJS.ReadWriteStream {
        return this._fileStream;
    }

    set fileStream(value: NodeJS.ReadWriteStream) {
        this._fileStream = value;
    }

    get watcher(): FSWatcher {
        return this._watcher;
    }

    set watcher(value: FSWatcher) {
        this._watcher = value;
    }
}

const getLog = (logWatch: LogWatch, line: string): LogInfo => {
    let logInfo: LogInfo;
    try {
        logInfo = logLib.getLog(line);
    } catch (e) {
        logWatch.emit("error", e);
        logInfo = null;
    }
    return logInfo;
};

const watchFile = (logPath: string, logWatch: LogWatch) => {
    console.log("Listen for changes in file...");
    let buffer = "";

    const watcher = fs.watch(logPath, { encoding: "buffer" });

    logWatch.watcher = watcher;

    watcher.on("change", () => {
        fs.readFile(logPath, (err, data) => {
            if (err) throw err;

            const newData = iconv.decode(data.subarray(buffer.length), "windows-1252");

            buffer += newData;

            newData.split("\n").forEach((line) => {
                const logInfo = getLog(logWatch, line);
                if (logInfo) {
                    logWatch.emit("lineChanged", logInfo);
                    logWatch.logInfoList.push(logInfo);
                }
            });
        });
    });
};

const stopLogWatch = (logWatch: LogWatch) => {
    logWatch.readlineInterface.close();
    logWatch.fileStream.end();
    logWatch.watcher.close();
};

const initLogWatch = (logPath: string, firstScan: boolean = true): LogWatch => {
    const logWatch = new LogWatch();

    if (!fs.existsSync(logPath)) {
        logWatch.emit("error", new Error("File path must be filled and exist"));
    }

    const fileStream = fs.createReadStream(logPath).pipe(iconv.decodeStream("windows-1252"));

    logWatch.fileStream = fileStream;

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    logWatch.readlineInterface = rl;

    if (firstScan) {
        console.log("First scan...");

        rl.on("line", (line) => {
            const logInfo = getLog(logWatch, line);
            if (logInfo) {
                logWatch.emit("firstScan", logInfo);
                logWatch.logInfoList.push(logInfo);
            }
        });

        rl.on("close", () => {
            console.log("First scan finished.");
            logWatch.emit("firstScanFinished");
            watchFile(logPath, logWatch);
        });
    } else {
        watchFile(logPath, logWatch);
    }

    return logWatch;
};

export const logAPI = {
    initLogWatch,
    stopLogWatch,
    getLog: logLib.getLog,
    resetJobName: logLib.resetJobName,
};

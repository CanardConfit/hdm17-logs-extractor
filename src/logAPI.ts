import * as fs from "fs";
import * as iconv from "iconv-lite";
import { EventEmitter } from "node:events";
import * as readline from "readline";
import { logLib } from "./logLib";
import { LogInfo } from "./loginfo";

export class LogWatch extends EventEmitter {
    private _logInfoList: LogInfo[];
    private _readlineInterface: readline.Interface;

    constructor(readlineInterface: readline.Interface) {
        super();
        this._logInfoList = [];
        this._readlineInterface = readlineInterface;
    }

    get logInfoList() {
        return this._logInfoList;
    }

    get readlineInterface() {
        return this._readlineInterface;
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

    watcher.on("change", () => {
        fs.readFile(logPath, (err, data) => {
            if (err) throw err;

            const newData = iconv.decode(data.subarray(buffer.length), "windows-1252");

            buffer += newData;

            newData.split("\n").forEach((line) => {
                const logInfo = getLog(logWatch, line);
                if (logInfo) {
                    logWatch.emit("line", logInfo);
                    logWatch.emit("lineChanged", logInfo);
                    logWatch.logInfoList.push(logInfo);
                }
            });
        });
    });
};

const initLogWatch = (logPath: string, firstScan: boolean = true): LogWatch => {
    const fileStream = fs.createReadStream(logPath).pipe(iconv.decodeStream("windows-1252"));

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    const logWatch = new LogWatch(rl);

    if (firstScan) {
        console.log("First scan...");

        rl.on("line", (line) => {
            const logInfo = getLog(logWatch, line);
            if (logInfo) {
                logWatch.emit("line", logInfo);
                logWatch.logInfoList.push(logInfo);
            }
        });

        rl.on("close", () => {
            console.log("First scan finished.");

            watchFile(logPath, logWatch);
        });
    } else {
        watchFile(logPath, logWatch);
    }

    return logWatch;
};

export const logAPI = {
    initLogWatch,
    getLog: logLib.getLog,
    resetJobName: logLib.resetJobName,
};
import * as fs from "fs";
import * as iconv from "iconv-lite";
import * as readline from "readline";
import { EventEmitter } from "node:events";
import { logLib } from "./logLib";
import { LogInfo } from "./logInfo";
import { FSWatcher } from "node:fs";

/**
 * A class for watching log files, emitting events when logs change or errors occur.
 */
export class LogWatch extends EventEmitter {
    private _logInfoList: LogInfo[] = [];
    private _readlineInterface: readline.Interface;
    private _fileStream: NodeJS.ReadWriteStream;
    private _watcher: FSWatcher;

    /**
     * Gets the list of LogInfo objects that have been processed.
     */
    get logInfoList() {
        return this._logInfoList;
    }

    /**
     * Gets the readline.Interface instance used for reading the log file line by line.
     */
    get readlineInterface() {
        return this._readlineInterface;
    }

    /**
     * Sets the readline.Interface instance used for reading the log file.
     */
    set readlineInterface(value: readline.Interface) {
        this._readlineInterface = value;
    }

    /**
     * Gets the file stream used for reading the log file.
     */
    get fileStream(): NodeJS.ReadWriteStream {
        return this._fileStream;
    }

    /**
     * Sets the file stream used for reading the log file.
     */
    set fileStream(value: NodeJS.ReadWriteStream) {
        this._fileStream = value;
    }

    /**
     * Gets the FSWatcher instance used for watching the log file for changes.
     */
    get watcher(): FSWatcher {
        return this._watcher;
    }

    /**
     * Sets the FSWatcher instance used for watching the log file for changes.
     */
    set watcher(value: FSWatcher) {
        this._watcher = value;
    }
}

/**
 * Processes a single line of log, returning a LogInfo object.
 * @param logWatch The LogWatch instance associated with this log.
 * @param line The log line to process.
 * @returns A LogInfo object representing the processed log line.
 */
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

/**
 * Starts watching a log file for changes, emitting events when new logs are detected.
 * @param logPath The path to the log file to watch.
 * @param logWatch The LogWatch instance to use for watching the file.
 */
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

/**
 * Stops watching the log file and cleans up resources.
 * @param logWatch The LogWatch instance to stop.
 */
const stopLogWatch = (logWatch: LogWatch) => {
    logWatch.readlineInterface.close();
    logWatch.fileStream.end();
    logWatch.watcher.close();
};

/**
 * Initializes a LogWatch instance for a given hdm17 log file.
 * @param logPath The path to the log file to watch.
 * @param firstScan Whether to perform an initial scan of the file.
 * @returns A LogWatch instance configured for the specified log file.
 */
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

/**
 * A collection of API methods for managing log watching and processing.
 */
export const logAPI = {
    initLogWatch,
    stopLogWatch,
    getLog: logLib.getLog,
    resetJobName: logLib.resetJobName,
};

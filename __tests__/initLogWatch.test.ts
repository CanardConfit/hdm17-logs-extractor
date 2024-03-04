import { logAPI } from "../src/logAPI";
import { LogInfo } from "../src/loginfo";

test("initWatch Listen line not null", () => {
    const logPath = "D:\\Users\\Tom\\Desktop\\New folder\\hdmengine_jobs.log";

    const logWatch = logAPI.initLogWatch(logPath);

    logWatch.once("line", (logInfo: LogInfo) => {
        expect(logInfo).not.toBeNull();
    });

    //TODO: Find a way to kill / stop logWatch
});

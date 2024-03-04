import { DELIMITER, LogInfo } from "../src/logInfo";

describe("LogInfo tests", () => {
    test("LogInfo toString", () => {
        const logInfo = new LogInfo();
        logInfo.dateTime = new Date("2024-05-05T10:05:10.004Z");
        logInfo.jobName = "Test";
        logInfo.logType = DELIMITER;
        logInfo.processId = 4932;
        logInfo.operationType = "virtual";
        logInfo.logValue = undefined;

        expect(logInfo.toString()).toEqual(
            `Job Name: Test, Log Type: {"logTypeName":"DELIMITER","logRegex":{},"dataType":2}, Log Value: undefined, Date: 2024-05-05T10:05:10.004Z, Operation: virtual, Process ID: 4932`,
        );
    });
});

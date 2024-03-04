import { logAPI } from "../src/logAPI";
import {
    JOB_START_TIME,
    JOB_GUID,
    BACKUP_CHAIN_TYPE,
    BACKUP_CHAIN_SIZE,
    BACKUP_COUNT_ARCHIVES_KEEP,
    BACKUP_SET_PATH,
    BACKUP_SETS_COUNT,
    BACKUP_LAST_SET,
    BACKUP_LAST_SET_SIZE,
    JOB_BACKUP_TYPE,
    JOB_ARCHIVE_PATH,
    RETENTION_TYPE,
    RETENTION_NUMBER_BACKUP_SETS,
    RETENTION_NUMBER_ARCHIVE,
    RETENTION_NEED_NUMBER_ARCHIVE,
    RETENTION_NUMBER_ARCHIVE_SET,
    RETENTION_NOT_ENOUGH,
    LTS_NOTIFICATION_STATUS,
    SEND_MAIL_STATUS,
    JOB_HISTORY_GUID,
    JOB_EXIT_CODE,
    JOB_END_TIME,
    SPACER,
    DELIMITER,
} from "../src/logInfo";

describe("LogAPI getLog tests", () => {
    test("getLog JOB_START_TIME", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:52:56.743,virtual ,[19208]  JOB_Job_Do started, start time: 02.03.2024 11:52:56";
        const EXPECTED_LOG_INFO = {
            jobName: "Job_Do",
            dateTime: new Date("2024-03-02T11:52:56.743Z"),
            operationType: "virtual",
            processId: 19208,
            logType: JOB_START_TIME,
            logValue: new Date("2024-03-02T11:52:56Z"),
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog JOB_GUID", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:52:56.743,virtual ,[19208]  Job guid: '50389249-b262-3809-56f1-cef4484be936'";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:52:56.743Z"),
            operationType: "virtual",
            processId: 19208,
            logType: JOB_GUID,
            logValue: "50389249-b262-3809-56f1-cef4484be936",
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog BACKUP_CHAIN_TYPE", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:52:56.837,physical,[19208]  (Policy) Backup set chain type : Base archive and increments";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:52:56.837Z"),
            operationType: "physical",
            processId: 19208,
            logType: BACKUP_CHAIN_TYPE,
            logValue: "Base archive and increments",
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog JOB_BACKUP_TYPE", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:58:31.167,physical,[19208]  Create new incremental archive ... Success";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.167Z"),
            operationType: "physical",
            processId: 19208,
            logType: JOB_BACKUP_TYPE,
            logValue: "incremental",
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog BACKUP_CHAIN_SIZE", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:52:56.838,physical,[19208]  (Policy) Backup set size       : 4";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:52:56.838Z"),
            operationType: "physical",
            processId: 19208,
            logType: BACKUP_CHAIN_SIZE,
            logValue: 4,
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog RETENTION_TYPE", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:52:56.839,physical,[19208]  (Policy) Retention type        : Keep N backups";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:52:56.839Z"),
            operationType: "physical",
            processId: 19208,
            logType: RETENTION_TYPE,
            logValue: "Keep N backups",
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog BACKUP_COUNT_ARCHIVES_KEEP", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:52:56.839,physical,[19208]  Count of archives to keep      : 4";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:52:56.839Z"),
            operationType: "physical",
            processId: 19208,
            logType: BACKUP_COUNT_ARCHIVES_KEEP,
            logValue: 4,
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog BACKUP_SET_PATH", () => {
        logAPI.resetJobName();
        const line =
            "02.03.2024 11:53:00.375,physical,[19208]  Backup set found               : 'B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/Job-202401136204617_2024-02-17_12-21-58.pfi'";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:53:00.375Z"),
            operationType: "physical",
            processId: 19208,
            logType: BACKUP_SET_PATH,
            logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/Job-202401136204617_2024-02-17_12-21-58.pfi",
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog BACKUP_SETS_COUNT", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:53:00.410,physical,[19208]  Backup sets count              : 2";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:53:00.410Z"),
            operationType: "physical",
            processId: 19208,
            logType: BACKUP_SETS_COUNT,
            logValue: 2,
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog BACKUP_LAST_SET", () => {
        logAPI.resetJobName();
        const line =
            "02.03.2024 11:53:00.410,physical,[19208]  Last backup set                : 'B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/Job-202401136204617_2024-03-01_10-30-54.pfi'";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:53:00.410Z"),
            operationType: "physical",
            processId: 19208,
            logType: BACKUP_LAST_SET,
            logValue: "B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/Job-202401136204617_2024-03-01_10-30-54.pfi",
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog BACKUP_LAST_SET_SIZE", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:53:00.411,physical,[19208]  Last backup set size           : 1";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:53:00.411Z"),
            operationType: "physical",
            processId: 19208,
            logType: BACKUP_LAST_SET_SIZE,
            logValue: 1,
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog JOB_ARCHIVE_PATH", () => {
        logAPI.resetJobName();
        const line =
            "02.03.2024 11:58:31.168,physical,[19208]  Archive path: 'B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/inc_1_0_1/inc_1.pfi'";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.168Z"),
            operationType: "physical",
            processId: 19208,
            logType: JOB_ARCHIVE_PATH,
            logValue: "B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/inc_1_0_1/inc_1.pfi",
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog RETENTION_NUMBER_BACKUP_SETS", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:31.232,physical,[19208]  (Retention) Number of backup sets for retention     : 2";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.232Z"),
            operationType: "physical",
            processId: 19208,
            logType: RETENTION_NUMBER_BACKUP_SETS,
            logValue: 2,
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog RETENTION_NUMBER_ARCHIVE", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:31.232,physical,[19208]  (Retention) Number of archives for retention        : 6";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.232Z"),
            operationType: "physical",
            processId: 19208,
            logType: RETENTION_NUMBER_ARCHIVE,
            logValue: 6,
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog RETENTION_NUMBER_ARCHIVE_SET", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:31.264,physical,[19208]  (Retention) Number of archives in set for retention : 4";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.264Z"),
            operationType: "physical",
            processId: 19208,
            logType: RETENTION_NUMBER_ARCHIVE_SET,
            logValue: 4,
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog RETENTION_NEED_NUMBER_ARCHIVE", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:31.266,physical,[19208]  (Retention) Number of archives need for retention   : 8";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.266Z"),
            operationType: "physical",
            processId: 19208,
            logType: RETENTION_NEED_NUMBER_ARCHIVE,
            logValue: 8,
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog RETENTION_NOT_ENOUGH", () => {
        logAPI.resetJobName();
        const logLine = "02.03.2024 11:58:31.266,physical,[19208]  (Retention) Number of archives is not enough for retention ... Stop";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.266Z"),
            operationType: "physical",
            processId: 19208,
            logType: RETENTION_NOT_ENOUGH,
            logValue: undefined,
        };

        const logInfo = logAPI.getLog(logLine);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog LTS_NOTIFICATION_STATUS", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:31.268,physical,[19208]  LSL notification result status: 'Green'";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:31.268Z"),
            operationType: "physical",
            processId: 19208,
            logType: LTS_NOTIFICATION_STATUS,
            logValue: "Green",
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog SEND_MAIL_STATUS", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:34.717,physical,[19208]  Send mail via SMTP server to 'example@example.com' ... Success";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:34.717Z"),
            operationType: "physical",
            processId: 19208,
            logType: SEND_MAIL_STATUS,
            logValue: "Success",
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog JOB_HISTORY_GUID", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:34.782,physical,[19208]  New job history guid: 'eb32b85e-fc7c-4f6b-5631-8532d7354867'";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:34.782Z"),
            operationType: "physical",
            processId: 19208,
            logType: JOB_HISTORY_GUID,
            logValue: "eb32b85e-fc7c-4f6b-5631-8532d7354867",
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog JOB_EXIT_CODE", () => {
        logAPI.resetJobName();
        const line = '02.03.2024 11:58:35.858,virtual ,[19208]  JOB_Job_Do result: 0x0 ("Opération réussie")';
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:35.858Z"),
            operationType: "virtual",
            processId: 19208,
            logType: JOB_EXIT_CODE,
            logValue: 0,
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog JOB_END_TIME", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:35.858,virtual ,[19208]  Finish time: 02.03.2024 11:58:35";
        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:35.858Z"),
            operationType: "virtual",
            processId: 19208,
            logType: JOB_END_TIME,
            logValue: new Date("2024-03-02T11:58:35Z"),
        };

        const logInfo = logAPI.getLog(line);
        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog DELIMITER", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:52:44.334,virtual ,[19208]  ################################################################################";

        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:52:44.334Z"),
            operationType: "virtual",
            processId: 19208,
            logType: DELIMITER,
            logValue: undefined,
        };

        const logInfo = logAPI.getLog(line);

        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });

    test("getLog SPACER", () => {
        logAPI.resetJobName();
        const line = "02.03.2024 11:58:35.859,virtual ,[19208]  ";

        const EXPECTED_LOG_INFO = {
            jobName: null,
            dateTime: new Date("2024-03-02T11:58:35.859Z"),
            operationType: "virtual",
            processId: 19208,
            logType: SPACER,
            logValue: undefined,
        };

        const logInfo = logAPI.getLog(line);

        expect(logInfo).toEqual(EXPECTED_LOG_INFO);
    });
});

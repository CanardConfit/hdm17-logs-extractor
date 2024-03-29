import { logAPI } from "../src/logAPI";
import * as fs from "fs";
import { LogInfo } from "../src/logInfo";

const logPath = "./__tests__/hdmengine_jobs.example-log";

function removeLine(filePath: string, line: string) {
    const data = fs.readFileSync(filePath, "utf8");

    const lines = data.split("\n");
    const newLines = [];
    for (const l of lines) {
        if (l !== line) {
            newLines.push(l);
        }
    }
    fs.writeFileSync(filePath, newLines.join("\n"));
}

describe("LogAPI LogWatch tests", () => {
    test("initWatch not null", () => {
        const logWatch = logAPI.initLogWatch(logPath);

        expect(logWatch).not.toBeNull();

        logAPI.stopLogWatch(logWatch);
    });
    test("initWatch path null", () => {
        expect(() => logAPI.initLogWatch("")).toThrow("File path must be filled and exist");
        expect(() => logAPI.initLogWatch(null)).toThrow("File path must be filled and exist");
        expect(() => logAPI.initLogWatch("dodnsobq")).toThrow("File path must be filled and exist");
    });
    test("initWatch read base file", () => {
        const logWatch = logAPI.initLogWatch(logPath);

        const expected = [
            {
                jobName: null,
                dateTime: "2024-01-14T11:31:31.648Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "JobHistory_VerifyQuery",
                dateTime: "2024-01-14T11:31:31.650Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T11:31:31.000Z",
            },
            {
                jobName: "JobHistory_VerifyQuery",
                dateTime: "2024-01-14T11:31:31.702Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "JobHistory_VerifyQuery",
                dateTime: "2024-01-14T11:31:31.703Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T11:31:31.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-01-14T11:31:31.704Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-01-14T11:31:31.706Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T11:31:31.707Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T11:31:31.000Z",
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T11:31:31.711Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T11:31:31.712Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T11:31:31.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-01-14T11:31:31.713Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-01-14T11:31:31.721Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_DeleteQuery",
                dateTime: "2024-01-14T11:31:31.722Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T11:31:31.000Z",
            },
            {
                jobName: "Job_DeleteQuery",
                dateTime: "2024-01-14T11:31:31.741Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_DeleteQuery",
                dateTime: "2024-01-14T11:31:31.741Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T11:31:31.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-01-14T11:31:31.742Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-01-14T14:30:24.797Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T14:30:24.798Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T14:30:24.000Z",
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T14:30:27.737Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "BACKUP_SET_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202308242124755/Job-202308242124755_2024-01-13_11-01-58/Job-202308242124755_2024-01-13_11-01-58.pfi",
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T14:30:27.737Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "BACKUP_SETS_COUNT",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 1,
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T14:30:27.738Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "BACKUP_LAST_SET",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202308242124755/Job-202308242124755_2024-01-13_11-01-58/Job-202308242124755_2024-01-13_11-01-58.pfi",
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T14:30:30.538Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T14:30:30.538Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T14:30:30.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-01-14T14:30:30.539Z",
                operationType: "virtual",
                processId: 9736,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-01-14T22:11:44.386Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T22:11:44.388Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T22:11:44.000Z",
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T22:11:44.437Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_CHAIN_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T22:11:44.438Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_COUNT_ARCHIVES_KEEP",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T22:11:44.467Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_CreateUpdate",
                dateTime: "2024-01-14T22:11:44.467Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T22:11:44.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-01-14T22:11:44.467Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-01-14T22:12:31.039Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "JobHistory_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.040Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T22:12:31.000Z",
            },
            {
                jobName: "JobHistory_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.184Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "JobHistory_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.185Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T22:12:31.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-01-14T22:12:31.185Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-01-14T22:12:31.186Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.187Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T22:12:31.000Z",
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.280Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_CHAIN_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 2,
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.373Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_SET_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202308242124755/Job-202308242124755_2024-01-13_11-01-58/Job-202308242124755_2024-01-13_11-01-58.pfi",
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.374Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_SETS_COUNT",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 1,
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.375Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_LAST_SET",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202308242124755/Job-202308242124755_2024-01-13_11-01-58/Job-202308242124755_2024-01-13_11-01-58.pfi",
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.560Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_CHAIN_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.562Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "BACKUP_COUNT_ARCHIVES_KEEP",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.574Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_VerifyQuery",
                dateTime: "2024-01-14T22:12:31.575Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-01-14T22:12:31.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-01-14T22:12:31.575Z",
                operationType: "virtual",
                processId: 6676,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-02-25T13:40:13.018Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.019Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-02-25T13:40:13.000Z",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.019Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "JOB_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "50389249-b262-3809-56f1-cef4484be936",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.093Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.094Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_CHAIN_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Base archive and increments",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.094Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_CHAIN_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.095Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "RETENTION_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Keep N backups",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.095Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_COUNT_ARCHIVES_KEEP",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:13.096Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:16.413Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_SET_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-05_09-40-10/Job-202401136204617_2024-02-05_09-40-10.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:16.603Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_SET_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/Job-202401136204617_2024-02-17_12-21-58.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:16.604Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_SETS_COUNT",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 2,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:16.605Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_LAST_SET",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/Job-202401136204617_2024-02-17_12-21-58.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:16.605Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "BACKUP_LAST_SET_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 3,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:40:16.606Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.272Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.273Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "JOB_BACKUP_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "incremental",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.273Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "JOB_ARCHIVE_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/inc_3_2_3/inc_3.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.274Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.337Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "RETENTION_NUMBER_BACKUP_SETS",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 2,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.338Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "RETENTION_NUMBER_ARCHIVE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 8,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.370Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "RETENTION_NUMBER_ARCHIVE_SET",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.370Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "RETENTION_NEED_NUMBER_ARCHIVE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 8,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:45.387Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:52.886Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:52.918Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "RETENTION_NUMBER_BACKUP_SETS",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 1,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:52.919Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "RETENTION_NUMBER_ARCHIVE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:52.921Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:52.922Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "LTS_NOTIFICATION_STATUS",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Green",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:52.936Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:58.670Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SEND_MAIL_STATUS",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Success",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:58.747Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:58.748Z",
                operationType: "physical",
                processId: 11184,
                logType: {
                    logTypeName: "JOB_HISTORY_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "1a30dd7e-957b-43d3-146e-7a9eb722700a",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:59.868Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:59.869Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-02-25T13:44:59.869Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-02-25T13:44:59.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-02-25T13:44:59.870Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-02-25T13:44:59.870Z",
                operationType: "virtual",
                processId: 11184,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-01T10:30:38.949Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-01T10:30:39.011Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-01T10:30:38.000Z",
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-01T10:30:39.057Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "50389249-b262-3809-56f1-cef4484be936",
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-01T10:30:39.262Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-01T10:30:39.263Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-01T10:30:39.264Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-01T10:30:39.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-03-01T10:30:39.265Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-01T10:30:39.265Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-01T10:30:51.988Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:51.989Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-01T10:30:51.000Z",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:51.990Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "50389249-b262-3809-56f1-cef4484be936",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:52.060Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:52.061Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "BACKUP_CHAIN_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Base archive and increments",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:52.061Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "BACKUP_CHAIN_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:52.062Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "RETENTION_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Keep N backups",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:52.063Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "BACKUP_COUNT_ARCHIVES_KEEP",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:52.063Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:54.098Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "BACKUP_SET_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/Job-202401136204617_2024-02-17_12-21-58.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:54.098Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "BACKUP_SETS_COUNT",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 1,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:54.099Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "BACKUP_LAST_SET",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/Job-202401136204617_2024-02-17_12-21-58.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:54.100Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "BACKUP_LAST_SET_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T10:30:54.100Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:16.816Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_BACKUP_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "base",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:16.817Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_ARCHIVE_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/Job-202401136204617_2024-03-01_10-30-54.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:16.818Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.109Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "RETENTION_NUMBER_BACKUP_SETS",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 2,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.111Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "RETENTION_NUMBER_ARCHIVE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 5,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.143Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "RETENTION_NUMBER_ARCHIVE_SET",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.144Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "RETENTION_NEED_NUMBER_ARCHIVE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 8,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.145Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "RETENTION_NOT_ENOUGH",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.154Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.156Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "LTS_NOTIFICATION_STATUS",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Green",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:21.174Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:26.104Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SEND_MAIL_STATUS",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Success",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:26.154Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:26.156Z",
                operationType: "physical",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_HISTORY_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "e3a46d3e-8f3a-40a8-742f-0139766f6259",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:28.410Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:28.411Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-01T17:22:28.411Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-01T17:22:28.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-03-01T17:22:28.412Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-01T17:22:28.412Z",
                operationType: "virtual",
                processId: 28376,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-02T11:52:43.994Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-02T11:52:44.023Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-02T11:52:43.000Z",
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-02T11:52:44.069Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "50389249-b262-3809-56f1-cef4484be936",
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-02T11:52:44.332Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-02T11:52:44.333Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_PrepareRun",
                dateTime: "2024-03-02T11:52:44.333Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-02T11:52:44.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-03-02T11:52:44.334Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-02T11:52:44.334Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-02T11:52:56.742Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.743Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_START_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-02T11:52:56.000Z",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.743Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "50389249-b262-3809-56f1-cef4484be936",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.837Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.837Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_CHAIN_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Base archive and increments",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.838Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_CHAIN_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.839Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "RETENTION_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Keep N backups",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.839Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_COUNT_ARCHIVES_KEEP",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:52:56.840Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:53:00.375Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_SET_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-02-17_12-21-58/Job-202401136204617_2024-02-17_12-21-58.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:53:00.409Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_SET_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/Job-202401136204617_2024-03-01_10-30-54.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:53:00.410Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_SETS_COUNT",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 2,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:53:00.410Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_LAST_SET",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/Job-202401136204617_2024-03-01_10-30-54.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:53:00.411Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "BACKUP_LAST_SET_SIZE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 1,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:53:00.411Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.166Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.167Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_BACKUP_TYPE",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "incremental",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.168Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_ARCHIVE_PATH",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "B:/Job-202401136204617/Job-202401136204617_2024-03-01_10-30-54/inc_1_0_1/inc_1.pfi",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.169Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.232Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "RETENTION_NUMBER_BACKUP_SETS",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 2,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.232Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "RETENTION_NUMBER_ARCHIVE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 6,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.264Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "RETENTION_NUMBER_ARCHIVE_SET",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 4,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.266Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "RETENTION_NEED_NUMBER_ARCHIVE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 8,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.266Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "RETENTION_NOT_ENOUGH",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.267Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.268Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "LTS_NOTIFICATION_STATUS",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Green",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:31.284Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:34.717Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SEND_MAIL_STATUS",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "Success",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:34.781Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:34.782Z",
                operationType: "physical",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_HISTORY_GUID",
                    logRegex: {},
                    dataType: 2,
                },
                logValue: "eb32b85e-fc7c-4f6b-5631-8532d7354867",
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:35.857Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:35.858Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_EXIT_CODE",
                    logRegex: {},
                    dataType: 3,
                },
                logValue: 0,
            },
            {
                jobName: "Job_Do",
                dateTime: "2024-03-02T11:58:35.858Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "JOB_END_TIME",
                    logRegex: {},
                    dataType: 0,
                },
                logValue: "2024-03-02T11:58:35.000Z",
            },
            {
                jobName: null,
                dateTime: "2024-03-02T11:58:35.859Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
            {
                jobName: null,
                dateTime: "2024-03-02T11:58:35.859Z",
                operationType: "virtual",
                processId: 19208,
                logType: {
                    logTypeName: "SPACER",
                    logRegex: {},
                    dataType: 2,
                },
            },
        ];

        logWatch.on("firstScanFinished", () => {
            expect(logWatch.logInfoList).not.toHaveLength(0);
            expect(logWatch.logInfoList).toHaveLength(168);

            expect(logWatch.logInfoList).toEqual(expected);

            logAPI.stopLogWatch(logWatch);
        });
    });
    test("initWatch change in file", () => {
        const logWatch = logAPI.initLogWatch(logPath);

        const line = "18.01.2024 10:41:34.467,virtual ,[9068]  ################################################################################";

        const expected = [
            {
                jobName: null,
                dateTime: "2024-01-18T10:41:34.467Z",
                operationType: "virtual",
                processId: 9068,
                logType: {
                    logTypeName: "DELIMITER",
                    logRegex: {},
                    dataType: 2,
                },
            },
        ];

        fs.appendFileSync(logPath, line + "\n");

        logWatch.once("lineChanged", () => {
            expect(logWatch.logInfoList).toHaveLength(169);
            expect(logWatch.logInfoList.pop()).toEqual(expected);

            logAPI.stopLogWatch(logWatch);
        });

        removeLine(logPath, line);
    });
    test("LogWatch getter logInfoList not null", () => {
        const logWatch = logAPI.initLogWatch(logPath, false);

        expect(logWatch.logInfoList).not.toBeNull();

        logAPI.stopLogWatch(logWatch);
    });
    test("LogWatch getter logInfoList push LogInfo", () => {
        const logWatch = logAPI.initLogWatch(logPath, false);

        expect(logWatch.logInfoList.push(new LogInfo())).toEqual(1);
        expect(logWatch.logInfoList).toHaveLength(1);

        logAPI.stopLogWatch(logWatch);
    });
});

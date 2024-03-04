import { DataType, JOB_NAME, LOG_DATE, LogInfo, LogType, logTypes, OPERATION_TYPE, PROCESS_ID } from "./logInfo";

/**
 * Extracts base information from a log string.
 * @param log The log string to extract information from.
 * @returns An object containing the extracted log date, operation type, process ID, and optionally the job name.
 */
function extractBaseInfo(log: string): { logDate: Date; operation: string; processId: number; jobName?: string } {
    const logDate = processData<Date>(LOG_DATE, LOG_DATE.logRegex.exec(log)[1]);
    const operation = processData<string>(OPERATION_TYPE, OPERATION_TYPE.logRegex.exec(log)[1].trim());
    const processId = processData<number>(PROCESS_ID, PROCESS_ID.logRegex.exec(log)[1]);

    const matchJobName = JOB_NAME.logRegex.exec(log);
    let jobName: string;
    if (matchJobName) jobName = processData<string>(JOB_NAME, matchJobName[1]);

    return {
        logDate,
        operation,
        processId,
        jobName,
    };
}

/**
 * Processes data based on the specified log type.
 * @param logType The type of the log determining how the data should be processed.
 * @param data The raw string data to be processed.
 * @returns The processed data, converted to the appropriate type.
 * @throws Will throw an error if the data cannot be processed according to the log type.
 */
function processData<T>(logType: LogType, data: string): T {
    switch (logType.dataType) {
        case DataType.Date:
            try {
                const match = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2}):(\d{2})(\.\d{3})?$/.exec(data);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const year = match[3];
                const month = match[2];
                const day = match[1];
                const hours = match[4];
                const minutes = match[5];
                const seconds = match[6];
                const milliseconds = match[7] ? match[7] : ".000";

                const isoDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${milliseconds}Z`;

                return new Date(isoDate) as unknown as T;
            } catch (e) {
                throw new Error(`Failed to process date. Data provided: '${data}' is not in a valid format.`);
            }
        case DataType.Number:
            if (isNaN(parseInt(data))) {
                throw new Error(`Failed to process number. Data provided: '${data}' is not a valid number.`);
            }
            return parseInt(data) as unknown as T;
        /* SonarLint rule typescript:S6836 */
        case DataType.Boolean: {
            const normalizedData = data.trim().toLowerCase();
            if (["true", "yes", "1"].includes(normalizedData)) return true as unknown as T;
            if (["false", "no", "0"].includes(normalizedData)) return false as unknown as T;
            throw new Error(`Failed to process boolean. Data provided: '${data}' does not represent a boolean value.`);
        }
        case DataType.String:
            return data as unknown as T;
        default:
            throw new Error(`Unsupported data type: '${logType?.dataType}'. Unable to process data: '${data}'.`);
    }
}

let jobName: string = null;

/**
 * Resets the current job name to null.
 */
const resetJobName = () => {
    jobName = null;
};

/**
 * Processes a log string and returns a LogInfo object representing it.
 * @param log The log string to process.
 * @returns A LogInfo object containing details extracted from the log string.
 */
const getLog = (log: string): LogInfo => {
    for (const logType of logTypes) {
        const match = logType.logRegex.exec(log);

        if (match) {
            const data = match[1];
            const basicInfo = extractBaseInfo(log);

            if (basicInfo.jobName) jobName = basicInfo.jobName;
            else if (logType.logTypeName == "DELIMITER") jobName = null;

            const logInfo = new LogInfo();
            logInfo.dateTime = basicInfo.logDate;
            logInfo.operationType = basicInfo.operation;
            logInfo.processId = basicInfo.processId;
            logInfo.logType = logType;
            logInfo.jobName = jobName;
            logInfo.logValue = processData(logType, data);
            return logInfo;
        }
    }
};

export const logLib = {
    getLog,
    resetJobName,
    processData,
};

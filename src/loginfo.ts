/**
 * Enum representing different data types for log parsing.
 */
export enum DataType {
    Date,
    Boolean,
    String,
    Number,
}

/**
 * Interface defining the structure for log types.
 * @property logTypeName - The name identifier for the log type.
 * @property logRegex - The regular expression used to match and parse log entries of this type.
 * @property dataType - The data type of the log value, indicating how it should be processed.
 */
export interface LogType {
    logTypeName: string;
    logRegex: RegExp;
    dataType: DataType;
}

/**
 * Class representing detailed information about a log entry.
 */
export class LogInfo {
    jobName: string;
    dateTime: Date;
    operationType: string;
    processId: number;
    logType: LogType;
    logValue: unknown;

    /**
     * Converts the LogInfo instance into a string representation.
     * @returns A string containing detailed information about the log entry.
     */
    toString(): string {
        const formattedDate = this.dateTime.toISOString();

        return `Job Name: ${this.jobName}, Log Type: ${JSON.stringify(this.logType)}, Log Value: ${JSON.stringify(this.logValue)}, Date: ${formattedDate}, Operation: ${this.operationType}, Process ID: ${this.processId}`;
    }
}

/*
 *
 * Generic LogTypes
 *
 */

/**
 * LogType for capturing log date.
 */
export const LOG_DATE: LogType = {
    logTypeName: "LOG_DATE",
    logRegex: /^(\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}\.\d{3})/,
    dataType: DataType.Date,
};

/**
 * LogType for identifying the operation type (virtual or physical).
 */
export const OPERATION_TYPE: LogType = {
    logTypeName: "OPERATION_TYPE",
    logRegex: /,(virtual |physical),/,
    dataType: DataType.String,
};

/**
 * LogType for parsing the process ID from the log entry.
 */
export const PROCESS_ID: LogType = {
    logTypeName: "PROCESS_ID",
    logRegex: /\[\s*(\d+)\s*]/,
    dataType: DataType.Number,
};

/*
 *
 * LogTypes lines
 *
 */

/**
 * LogType for extracting the name of the job being executed.
 */
export const JOB_NAME: LogType = {
    logTypeName: "JOB_NAME",
    logRegex: /JOB_(\w+) started/,
    dataType: DataType.String,
};

/**
 * LogType for capturing the start time of a job.
 */
export const JOB_START_TIME: LogType = {
    logTypeName: "JOB_START_TIME",
    logRegex: /start time: (\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2})/,
    dataType: DataType.Date,
};

/**
 * Identifies the GUID of the job being logged.
 */
export const JOB_GUID: LogType = {
    logTypeName: "JOB_GUID",
    logRegex: /Job guid: '([^']+)'/,
    dataType: DataType.String,
};

/**
 * Captures the backup chain type from the log entry.
 */
export const BACKUP_CHAIN_TYPE: LogType = {
    logTypeName: "BACKUP_CHAIN_TYPE",
    logRegex: /Backup set chain type : (.+)/,
    dataType: DataType.String,
};

/**
 * Parses the size of the backup chain as a number.
 */
export const BACKUP_CHAIN_SIZE: LogType = {
    logTypeName: "BACKUP_CHAIN_SIZE",
    logRegex: /Backup set size\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Extracts the count of archives that are kept according to the policy.
 */
export const BACKUP_COUNT_ARCHIVES_KEEP: LogType = {
    logTypeName: "BACKUP_COUNT_ARCHIVES_KEEP",
    logRegex: /Count of archives to keep\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Retrieves the path of the backup set found in the log entry.
 */
export const BACKUP_SET_PATH: LogType = {
    logTypeName: "BACKUP_SET_PATH",
    logRegex: /Backup set found\s*:\s*'([^']+)'/,
    dataType: DataType.String,
};

/**
 * Determines the count of backup sets from the log entry.
 */
export const BACKUP_SETS_COUNT: LogType = {
    logTypeName: "BACKUP_SETS_COUNT",
    logRegex: /Backup sets count\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Identifies the last backup set mentioned in the log.
 */
export const BACKUP_LAST_SET: LogType = {
    logTypeName: "BACKUP_LAST_SET",
    logRegex: /Last backup set\s*:\s*'([^']+)'/,
    dataType: DataType.String,
};

/**
 * Parses the size of the last backup set as a number.
 */
export const BACKUP_LAST_SET_SIZE: LogType = {
    logTypeName: "BACKUP_LAST_SET_SIZE",
    logRegex: /Last backup set size\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Distinguishes between base and incremental backup archive types.
 */
export const JOB_BACKUP_TYPE: LogType = {
    logTypeName: "JOB_BACKUP_TYPE",
    logRegex: /Create new (base|incremental) archive/,
    dataType: DataType.String,
};

/**
 * Captures the archive path for the job being logged.
 */
export const JOB_ARCHIVE_PATH: LogType = {
    logTypeName: "JOB_ARCHIVE_PATH",
    logRegex: /Archive path: '([^']+)'/,
    dataType: DataType.String,
};

/**
 * Identifies the retention type policy from the log entry.
 */
export const RETENTION_TYPE: LogType = {
    logTypeName: "RETENTION_TYPE",
    logRegex: /\(Policy\) Retention type\s*:\s*(.+)/,
    dataType: DataType.String,
};

/**
 * Parses the number of backup sets for retention as a number.
 */
export const RETENTION_NUMBER_BACKUP_SETS: LogType = {
    logTypeName: "RETENTION_NUMBER_BACKUP_SETS",
    logRegex: /Number of backup sets for retention\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Extracts the number of archives for retention from the log entry.
 */
export const RETENTION_NUMBER_ARCHIVE: LogType = {
    logTypeName: "RETENTION_NUMBER_ARCHIVE",
    logRegex: /Number of archives for retention\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Determines the needed number of archives for retention.
 */
export const RETENTION_NEED_NUMBER_ARCHIVE: LogType = {
    logTypeName: "RETENTION_NEED_NUMBER_ARCHIVE",
    logRegex: /Number of archives need for retention\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Captures the number of archives in set for retention.
 */
export const RETENTION_NUMBER_ARCHIVE_SET: LogType = {
    logTypeName: "RETENTION_NUMBER_ARCHIVE_SET",
    logRegex: /Number of archives in set for retention\s*:\s*(\d+)/,
    dataType: DataType.Number,
};

/**
 * Indicates when the number of archives is insufficient for retention.
 */
export const RETENTION_NOT_ENOUGH: LogType = {
    logTypeName: "RETENTION_NOT_ENOUGH",
    logRegex: /Number of archives is not enough for retention ... Stop/,
    dataType: DataType.String,
};

/**
 * Captures the LSL notification result status.
 */
export const LTS_NOTIFICATION_STATUS: LogType = {
    logTypeName: "LTS_NOTIFICATION_STATUS",
    logRegex: /LSL notification result status: '([^']+)'/,
    dataType: DataType.String,
};

/**
 * Identifies the status of sending mail via SMTP server.
 */
export const SEND_MAIL_STATUS: LogType = {
    logTypeName: "SEND_MAIL_STATUS",
    logRegex: /Send mail via SMTP server to '[^']+' ... (Success|Error)/,
    dataType: DataType.String,
};

/**
 * Extracts the email address to which mail was sent.
 */
export const SEND_MAIL_EMAIL: LogType = {
    logTypeName: "SEND_MAIL_EMAIL",
    logRegex: /Send mail via SMTP server to '([^']+)'/,
    dataType: DataType.String,
};

/**
 * Parses the new job history GUID from the log entry.
 */
export const JOB_HISTORY_GUID: LogType = {
    logTypeName: "JOB_HISTORY_GUID",
    logRegex: /New job history guid: '([^']+)'/,
    dataType: DataType.String,
};

/**
 * Identifies the exit code of a job from the log.
 */
export const JOB_EXIT_CODE: LogType = {
    logTypeName: "JOB_EXIT_CODE",
    logRegex: /result: (0x\S+)/,
    dataType: DataType.Number,
};

/**
 * Captures the end time of a job as a date.
 */
export const JOB_END_TIME: LogType = {
    logTypeName: "JOB_END_TIME",
    logRegex: /Finish time: (\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2})/,
    dataType: DataType.Date,
};

/*
 *
 * Special logTypes
 *
 */

/**
 * LogType for matching spacer lines in the log.
 */
export const SPACER: LogType = {
    logTypeName: "SPACER",
    logRegex: /\S {2}$/,
    dataType: DataType.String,
};

/**
 * LogType for identifying delimiter lines consisting of hash characters.
 */
export const DELIMITER: LogType = {
    logTypeName: "DELIMITER",
    logRegex: /#+/,
    dataType: DataType.String,
};

/**
 * An array containing specific [@link LogType] instances for line and special types.
 * Excludes generic LogTypes for broader categorization.
 */
export const logTypes: LogType[] = [
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
    SEND_MAIL_EMAIL,
    JOB_HISTORY_GUID,
    JOB_EXIT_CODE,
    JOB_END_TIME,
    SPACER,
    DELIMITER,
];

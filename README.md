# Hard Disk Manager 17 Advanced Logs Extractor

![NPM Version](https://img.shields.io/npm/v/hdm17-logs-extractor)
![GitHub Release](https://img.shields.io/github/v/release/CanardConfit/hdm17-logs-extractor)
![GitHub Repo stars](https://img.shields.io/github/stars/CanardConfit/hdm17-logs-extractor)

The Hard Disk Manager 17 Advanced Logs Extractor is a TypeScript tool designed to monitor and process log file `hdmengine_jobs.log` in real-time and the past.

> **NOTE :** This library is only for the log file `hdmengine_jobs.log`

## Installation

To use the Log Watcher Library in your project, follow these steps:

1. Install the library via npm:

   ```sh
   npm install hdm17-logs-extractor
   ```

    Or via yarn:

   ```sh
   yarn add hdm17-logs-extractor
   ```

## Usage

To start using the Log Watcher Library, you need to import it into your project and initialize it with the path to the log file you want to monitor:

```typescript
import logAPI from 'hdm17-logs-extractor';

const logWatcher = logAPI.initLogWatch('path/to/your/log/file.log');

logWatcher.on('lineChanged', (logInfo) => {
  console.log('Log changed:', logInfo);
});

logWatcher.on('error', (error) => {
  console.error('Error:', error);
});

// To stop watching the log file
logAPI.stopLogWatch(logWatcher);
```

## API Reference

- `initLogWatch(logPath: string, firstScan: boolean = true): LogWatch`
  Initializes a new LogWatch instance for a given log file. If `firstScan` is `true`, performs an initial scan of the log file.

- `stopLogWatch(logWatch: LogWatch): void`
  Stops watching the log file and cleans up resources.

- `getLog(log: string): LogInfo`
  Processes a log string and returns a `LogInfo` object representing it.

For more details, refer to the inline documentation in the code.

## Contributing

Contributions to the project are welcome!
## License

This project is licensed under the MPL-2.0 License - see the [LICENSE](./LICENSE) file for details.
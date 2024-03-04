import { logLib } from "../src/logLib";
import { DataType } from "../src/logInfo";

describe("LogLib tests", () => {
    test("LogLib processData", () => {
        expect(() => logLib.processData({ logTypeName: undefined, logRegex: undefined, dataType: DataType.Date }, "test")).toThrow(
            "Failed to process date. Data provided: 'test' is not in a valid format.",
        );
        expect(() => logLib.processData({ logTypeName: undefined, logRegex: undefined, dataType: DataType.Number }, "test")).toThrow(
            "Failed to process number. Data provided: 'test' is not a valid number.",
        );
        expect(() => logLib.processData({ logTypeName: undefined, logRegex: undefined, dataType: DataType.Boolean }, "test")).toThrow(
            "Failed to process boolean. Data provided: 'test' does not represent a boolean value.",
        );
        expect(logLib.processData({ logTypeName: undefined, logRegex: undefined, dataType: DataType.Boolean }, "true")).toEqual(true);
        expect(logLib.processData({ logTypeName: undefined, logRegex: undefined, dataType: DataType.Boolean }, "false")).toEqual(false);
    });
});

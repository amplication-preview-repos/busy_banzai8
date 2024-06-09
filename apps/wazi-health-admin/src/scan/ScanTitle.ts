import { Scan as TScan } from "../api/scan/Scan";

export const SCAN_TITLE_FIELD = "name";

export const ScanTitle = (record: TScan): string => {
  return record.name?.toString() || String(record.id);
};

import { JsonValue } from "type-fest";
import { Patient } from "../patient/Patient";

export type Document = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  name: string | null;
  patient?: Patient | null;
  updatedAt: Date;
};

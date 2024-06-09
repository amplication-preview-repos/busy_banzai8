import { JsonValue } from "type-fest";
import { Patient } from "../patient/Patient";

export type Scan = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  name: string | null;
  patient?: Patient | null;
  updatedAt: Date;
};

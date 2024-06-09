import { Appointment } from "../appointment/Appointment";
import { Document } from "../document/Document";
import { Hospital } from "../hospital/Hospital";
import { Scan } from "../scan/Scan";

export type Patient = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  dateOfBirth: Date | null;
  documents?: Array<Document>;
  firstName: string | null;
  hospital?: Hospital | null;
  id: string;
  lastName: string | null;
  scans?: Array<Scan>;
  updatedAt: Date;
};

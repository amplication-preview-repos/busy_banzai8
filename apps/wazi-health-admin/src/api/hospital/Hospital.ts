import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Hospital = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  doctors?: Array<Doctor>;
  id: string;
  name: string | null;
  patients?: Array<Patient>;
  updatedAt: Date;
};

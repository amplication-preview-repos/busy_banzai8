import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  createdAt: Date;
  date: Date | null;
  doctor?: Doctor | null;
  id: string;
  patient?: Patient | null;
  updatedAt: Date;
};

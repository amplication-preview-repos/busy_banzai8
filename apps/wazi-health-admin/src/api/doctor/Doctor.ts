import { Appointment } from "../appointment/Appointment";
import { Hospital } from "../hospital/Hospital";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  firstName: string | null;
  hospital?: Hospital | null;
  id: string;
  lastName: string | null;
  specialty: string | null;
  updatedAt: Date;
};

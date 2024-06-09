import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  firstName?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  lastName?: string | null;
  specialty?: string | null;
};

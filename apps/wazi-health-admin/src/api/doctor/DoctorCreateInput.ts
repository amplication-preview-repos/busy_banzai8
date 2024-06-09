import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  firstName?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  lastName?: string | null;
  specialty?: string | null;
};

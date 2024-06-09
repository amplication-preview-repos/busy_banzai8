import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { DocumentCreateNestedManyWithoutPatientsInput } from "./DocumentCreateNestedManyWithoutPatientsInput";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { ScanCreateNestedManyWithoutPatientsInput } from "./ScanCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  dateOfBirth?: Date | null;
  documents?: DocumentCreateNestedManyWithoutPatientsInput;
  firstName?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  lastName?: string | null;
  scans?: ScanCreateNestedManyWithoutPatientsInput;
};

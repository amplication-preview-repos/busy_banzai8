import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { DocumentUpdateManyWithoutPatientsInput } from "./DocumentUpdateManyWithoutPatientsInput";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { ScanUpdateManyWithoutPatientsInput } from "./ScanUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  dateOfBirth?: Date | null;
  documents?: DocumentUpdateManyWithoutPatientsInput;
  firstName?: string | null;
  hospital?: HospitalWhereUniqueInput | null;
  lastName?: string | null;
  scans?: ScanUpdateManyWithoutPatientsInput;
};

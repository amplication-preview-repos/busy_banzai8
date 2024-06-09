import { DoctorUpdateManyWithoutHospitalsInput } from "./DoctorUpdateManyWithoutHospitalsInput";
import { PatientUpdateManyWithoutHospitalsInput } from "./PatientUpdateManyWithoutHospitalsInput";

export type HospitalUpdateInput = {
  address?: string | null;
  contactNumber?: string | null;
  doctors?: DoctorUpdateManyWithoutHospitalsInput;
  name?: string | null;
  patients?: PatientUpdateManyWithoutHospitalsInput;
};

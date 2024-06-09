import { DoctorCreateNestedManyWithoutHospitalsInput } from "./DoctorCreateNestedManyWithoutHospitalsInput";
import { PatientCreateNestedManyWithoutHospitalsInput } from "./PatientCreateNestedManyWithoutHospitalsInput";

export type HospitalCreateInput = {
  address?: string | null;
  contactNumber?: string | null;
  doctors?: DoctorCreateNestedManyWithoutHospitalsInput;
  name?: string | null;
  patients?: PatientCreateNestedManyWithoutHospitalsInput;
};

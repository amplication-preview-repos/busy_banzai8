import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";

export type HospitalWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  doctors?: DoctorListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patients?: PatientListRelationFilter;
};

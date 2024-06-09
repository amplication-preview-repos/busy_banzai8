import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ScanListRelationFilter } from "../scan/ScanListRelationFilter";

export type PatientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  documents?: DocumentListRelationFilter;
  firstName?: StringNullableFilter;
  hospital?: HospitalWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  scans?: ScanListRelationFilter;
};

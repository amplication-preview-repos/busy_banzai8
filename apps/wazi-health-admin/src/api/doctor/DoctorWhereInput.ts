import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HospitalWhereUniqueInput } from "../hospital/HospitalWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  firstName?: StringNullableFilter;
  hospital?: HospitalWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  specialty?: StringNullableFilter;
};

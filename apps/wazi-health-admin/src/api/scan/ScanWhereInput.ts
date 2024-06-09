import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ScanWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
};

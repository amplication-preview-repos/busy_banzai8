import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DocumentWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
};

import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DocumentCreateInput = {
  file?: InputJsonValue;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
};

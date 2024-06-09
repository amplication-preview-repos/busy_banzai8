import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type DocumentUpdateInput = {
  file?: InputJsonValue;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
};

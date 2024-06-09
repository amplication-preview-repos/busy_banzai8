import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ScanCreateInput = {
  image?: InputJsonValue;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
};

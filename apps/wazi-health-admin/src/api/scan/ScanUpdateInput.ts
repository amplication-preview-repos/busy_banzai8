import { InputJsonValue } from "../../types";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ScanUpdateInput = {
  image?: InputJsonValue;
  name?: string | null;
  patient?: PatientWhereUniqueInput | null;
};

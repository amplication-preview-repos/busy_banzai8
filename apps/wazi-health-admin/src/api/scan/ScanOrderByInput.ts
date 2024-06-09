import { SortOrder } from "../../util/SortOrder";

export type ScanOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};

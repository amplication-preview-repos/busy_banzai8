import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};

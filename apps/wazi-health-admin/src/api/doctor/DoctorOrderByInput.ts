import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  hospitalId?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  specialty?: SortOrder;
  updatedAt?: SortOrder;
};

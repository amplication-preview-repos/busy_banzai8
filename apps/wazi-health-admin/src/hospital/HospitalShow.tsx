import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HOSPITAL_TITLE_FIELD } from "./HospitalTitle";

export const HospitalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="contactNumber" source="contactNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Doctor"
          target="hospitalId"
          label="Doctors"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="firstName" source="firstName" />
            <ReferenceField
              label="hospital"
              source="hospital.id"
              reference="Hospital"
            >
              <TextField source={HOSPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="specialty" source="specialty" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Patient"
          target="hospitalId"
          label="Patients"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateOfBirth" source="dateOfBirth" />
            <TextField label="firstName" source="firstName" />
            <ReferenceField
              label="hospital"
              source="hospital.id"
              reference="Hospital"
            >
              <TextField source={HOSPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";
import { HospitalTitle } from "../hospital/HospitalTitle";

export const DoctorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="appointments"
          reference="Appointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstName" source="firstName" />
        <ReferenceInput
          source="hospital.id"
          reference="Hospital"
          label="hospital"
        >
          <SelectInput optionText={HospitalTitle} />
        </ReferenceInput>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="specialty" source="specialty" />
      </SimpleForm>
    </Edit>
  );
};

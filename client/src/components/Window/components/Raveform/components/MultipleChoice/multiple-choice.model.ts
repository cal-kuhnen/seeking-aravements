import { FieldValues, UseFormRegister } from "react-hook-form";

export interface MultipleChoiceModel {
  info: {
    id: string;
    label: string;
    values: string[];
  }
  register: UseFormRegister<FieldValues>;
  errors: any;
}
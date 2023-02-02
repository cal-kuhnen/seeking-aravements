import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface MultipleChoiceModel {
  info: {
    id: string;
    type: string;
    label: string;
    values: string[];
  }
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}
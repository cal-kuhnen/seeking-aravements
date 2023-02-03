import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface MultipleChoiceModel {
  info: Question;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export interface Question {
  id: string;
  type: string;
  label: string;
  values?: string[];
  error?: {
    validator: string;
    message: string;
  }
}
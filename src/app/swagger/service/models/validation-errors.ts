/* tslint:disable */
/* eslint-disable */
import { ValidationError } from './validation-error';
export interface ValidationErrors {
  allDeepValidationErrors?: Array<ValidationError>;
  allValidationErrors?: Array<ValidationError>;
}

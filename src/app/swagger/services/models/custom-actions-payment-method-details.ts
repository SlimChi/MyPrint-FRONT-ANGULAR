/* tslint:disable */
/* eslint-disable */
import { CustomActionsPaymentMethodField } from './custom-actions-payment-method-field';
export interface CustomActionsPaymentMethodDetails {
  actionName?: string;
  fields?: Array<CustomActionsPaymentMethodField>;
  globalId?: string;
  token?: string;
  uniqueNumberIdentifier?: string;
}

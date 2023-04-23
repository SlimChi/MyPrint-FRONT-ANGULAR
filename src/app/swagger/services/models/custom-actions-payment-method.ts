/* tslint:disable */
/* eslint-disable */
import { CustomActionsPaymentMethodField } from './custom-actions-payment-method-field';
export interface CustomActionsPaymentMethod {
  actionName?: string;
  createdAt?: string;
  customerId?: string;
  default?: boolean;
  fields?: Array<CustomActionsPaymentMethodField>;
  globalId?: string;
  imageUrl?: string;
  token?: string;
  uniqueNumberIdentifier?: string;
  updatedAt?: string;
}

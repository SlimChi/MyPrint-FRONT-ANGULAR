/* tslint:disable */
/* eslint-disable */
import { CreditCardVerification } from './credit-card-verification';
import { Plan } from './plan';
import { Subscription } from './subscription';
import { Transaction } from './transaction';
import { UsBankAccountVerification } from './us-bank-account-verification';
import { ValidationErrors } from './validation-errors';
export interface ResultTransaction {
  creditCardVerification?: CreditCardVerification;
  errors?: ValidationErrors;
  message?: string;
  parameters?: {
[key: string]: string;
};
  plan?: Plan;
  subscription?: Subscription;
  success?: boolean;
  target?: Transaction;
  transaction?: Transaction;
  usBankAccountVerification?: UsBankAccountVerification;
}

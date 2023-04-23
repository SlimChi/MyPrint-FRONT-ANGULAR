/* tslint:disable */
/* eslint-disable */
import { UsBankAccount } from './us-bank-account';
export interface UsBankAccountVerification {
  createdAt?: string;
  gatewayRejectionReason?: 'application_incomplete' | 'avs' | 'avs_and_cvv' | 'cvv' | 'duplicate' | 'excessive_retry' | 'fraud' | 'risk_threshold' | 'three_d_secure' | 'token_issuance' | 'unrecognized';
  id?: string;
  processorResponseCode?: string;
  processorResponseText?: string;
  status?: 'failed' | 'gateway_rejected' | 'processor_declined' | 'unrecognized' | 'verified' | 'pending';
  usBankAccount?: UsBankAccount;
  verificationDeterminedAt?: string;
  verificationMethod?: 'tokenized_check' | 'network_check' | 'independent_check' | 'unrecognized' | 'micro_transfers';
}

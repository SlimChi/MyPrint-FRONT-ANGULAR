/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { CreditCard } from './credit-card';
import { RiskData } from './risk-data';
import { ThreeDSecureInfo } from './three-d-secure-info';
export interface CreditCardVerification {
  amount?: number;
  avsErrorResponseCode?: string;
  avsPostalCodeResponseCode?: string;
  avsStreetAddressResponseCode?: string;
  billingAddress?: Address;
  createdAt?: string;
  creditCard?: CreditCard;
  currencyIsoCode?: string;
  cvvResponseCode?: string;
  gatewayRejectionReason?: 'application_incomplete' | 'avs' | 'avs_and_cvv' | 'cvv' | 'duplicate' | 'excessive_retry' | 'fraud' | 'risk_threshold' | 'three_d_secure' | 'token_issuance' | 'unrecognized';
  graphQLId?: string;
  id?: string;
  merchantAccountId?: string;
  networkResponseCode?: string;
  networkResponseText?: string;
  networkTransactionId?: string;
  processorResponseCode?: string;
  processorResponseText?: string;
  processorResponseType?: 'APPROVED' | 'SOFT_DECLINED' | 'HARD_DECLINED' | 'UNRECOGNIZED';
  riskData?: RiskData;
  status?: 'FAILED' | 'GATEWAY_REJECTED' | 'PROCESSOR_DECLINED' | 'UNRECOGNIZED' | 'VERIFIED';
  threeDSecureInfo?: ThreeDSecureInfo;
}

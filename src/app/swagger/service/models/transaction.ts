/* tslint:disable */
/* eslint-disable */
import { AchReturnResponse } from './ach-return-response';
import { AddOn } from './add-on';
import { Address } from './address';
import { AmexExpressCheckoutDetails } from './amex-express-checkout-details';
import { AndroidPayDetails } from './android-pay-details';
import { ApplePayDetails } from './apple-pay-details';
import { AuthorizationAdjustment } from './authorization-adjustment';
import { CreditCard } from './credit-card';
import { CustomActionsPaymentMethodDetails } from './custom-actions-payment-method-details';
import { Customer } from './customer';
import { Descriptor } from './descriptor';
import { DisbursementDetails } from './disbursement-details';
import { Discount } from './discount';
import { Dispute } from './dispute';
import { FacilitatedDetails } from './facilitated-details';
import { FacilitatorDetails } from './facilitator-details';
import { Installment } from './installment';
import { LocalPaymentDetails } from './local-payment-details';
import { MasterpassCardDetails } from './masterpass-card-details';
import { PayPalDetails } from './pay-pal-details';
import { PayPalHereDetails } from './pay-pal-here-details';
import { RiskData } from './risk-data';
import { SamsungPayCardDetails } from './samsung-pay-card-details';
import { SepaDirectDebitAccountDetails } from './sepa-direct-debit-account-details';
import { StatusEvent } from './status-event';
import { SubscriptionDetails } from './subscription-details';
import { ThreeDSecureInfo } from './three-d-secure-info';
import { UsBankAccountDetails } from './us-bank-account-details';
import { VenmoAccountDetails } from './venmo-account-details';
import { VisaCheckoutCardDetails } from './visa-checkout-card-details';
export interface Transaction {
  achReturnCode?: string;
  achReturnResponses?: Array<AchReturnResponse>;
  acquirerReferenceNumber?: string;
  addOns?: Array<AddOn>;
  additionalProcessorResponse?: string;
  amexExpressCheckoutDetails?: AmexExpressCheckoutDetails;
  amount?: number;
  androidPayDetails?: AndroidPayDetails;
  applePayDetails?: ApplePayDetails;
  authorizationAdjustments?: Array<AuthorizationAdjustment>;
  authorizationExpiresAt?: string;
  authorizedTransactionId?: string;
  avsErrorResponseCode?: string;
  avsPostalCodeResponseCode?: string;
  avsStreetAddressResponseCode?: string;
  billingAddress?: Address;
  channel?: string;
  createdAt?: string;
  creditCard?: CreditCard;
  currencyIsoCode?: string;
  customActionsPaymentMethodDetails?: CustomActionsPaymentMethodDetails;
  customFields?: {
[key: string]: string;
};
  customer?: Customer;
  cvvResponseCode?: string;
  descriptor?: Descriptor;
  disbursed?: boolean;
  disbursementDetails?: DisbursementDetails;
  discountAmount?: number;
  discounts?: Array<Discount>;
  disputes?: Array<Dispute>;
  escrowStatus?: 'HELD' | 'HOLD_PENDING' | 'RELEASE_PENDING' | 'RELEASED' | 'REFUNDED' | 'UNRECOGNIZED';
  facilitatedDetails?: FacilitatedDetails;
  facilitatorDetails?: FacilitatorDetails;
  gatewayRejectionReason?: 'application_incomplete' | 'avs' | 'avs_and_cvv' | 'cvv' | 'duplicate' | 'excessive_retry' | 'fraud' | 'risk_threshold' | 'three_d_secure' | 'token_issuance' | 'unrecognized';
  graphQLId?: string;
  id?: string;
  installmentCount?: number;
  installments?: Array<Installment>;
  localPaymentDetails?: LocalPaymentDetails;
  masterpassCardDetails?: MasterpassCardDetails;
  merchantAccountId?: string;
  networkResponseCode?: string;
  networkResponseText?: string;
  networkToken?: CreditCard;
  networkTransactionId?: string;
  orderId?: string;
  partialSettlementTransactionIds?: Array<string>;
  payPalDetails?: PayPalDetails;
  payPalHereDetails?: PayPalHereDetails;
  paymentInstrumentType?: string;
  planId?: string;
  processedWithNetworkToken?: boolean;
  processorAuthorizationCode?: string;
  processorResponseCode?: string;
  processorResponseText?: string;
  processorResponseType?: 'APPROVED' | 'SOFT_DECLINED' | 'HARD_DECLINED' | 'UNRECOGNIZED';
  processorSettlementResponseCode?: string;
  processorSettlementResponseText?: string;
  purchaseOrderNumber?: string;
  /** @deprecated */recurring?: boolean;
  refundIds?: Array<string>;
  refundedInstallments?: Array<Installment>;
  refundedTransactionId?: string;
  retried?: boolean;
  retrievalReferenceNumber?: string;
  riskData?: RiskData;
  samsungPayCardDetails?: SamsungPayCardDetails;
  scaExemptionRequested?: 'low_value' | 'secure_corporate' | 'trusted_beneficiary' | 'transaction_risk_analysis';
  sepaDirectDebitAccountDetails?: SepaDirectDebitAccountDetails;
  sepaDirectDebitReturnCode?: string;
  serviceFeeAmount?: number;
  settlementBatchId?: string;
  shippingAddress?: Address;
  shippingAmount?: number;
  shipsFromPostalCode?: string;
  status?: 'AUTHORIZATION_EXPIRED' | 'AUTHORIZED' | 'AUTHORIZING' | 'FAILED' | 'GATEWAY_REJECTED' | 'PROCESSOR_DECLINED' | 'SETTLED' | 'SETTLEMENT_CONFIRMED' | 'SETTLEMENT_DECLINED' | 'SETTLEMENT_PENDING' | 'SETTLING' | 'SUBMITTED_FOR_SETTLEMENT' | 'UNRECOGNIZED' | 'VOIDED';
  statusHistory?: Array<StatusEvent>;
  subscriptionDetails?: SubscriptionDetails;
  subscriptionId?: string;
  taxAmount?: number;
  taxExempt?: boolean;
  threeDSecureInfo?: ThreeDSecureInfo;
  type?: 'credit' | 'sale' | 'unrecognized';
  updatedAt?: string;
  usBankAccountDetails?: UsBankAccountDetails;
  venmoAccountDetails?: VenmoAccountDetails;
  visaCheckoutCardDetails?: VisaCheckoutCardDetails;
  voiceReferralNumber?: string;
}
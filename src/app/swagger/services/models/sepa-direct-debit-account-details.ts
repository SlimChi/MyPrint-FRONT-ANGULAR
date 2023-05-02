/* tslint:disable */
/* eslint-disable */
export interface SepaDirectDebitAccountDetails {
  bankReferenceToken?: string;
  captureId?: string;
  debugId?: string;
  last4?: string;
  mandateType?: 'ONE_OFF' | 'RECURRENT';
  merchantOrPartnerCustomerId?: string;
  payPalV2OrderId?: string;
  refundFromTransactionFeeAmount?: string;
  refundFromTransactionFeeCurrencyIsoCode?: string;
  refundId?: string;
  settlementType?: 'INSTANT' | 'DELAYED';
  token?: string;
  transactionFeeAmount?: string;
  transactionFeeCurrencyIsoCode?: string;
}

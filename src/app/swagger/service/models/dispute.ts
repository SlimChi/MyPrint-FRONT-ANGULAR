/* tslint:disable */
/* eslint-disable */
import { DisputeEvidence } from './dispute-evidence';
import { DisputePayPalMessage } from './dispute-pay-pal-message';
import { DisputeStatusHistory } from './dispute-status-history';
import { DisputeTransaction } from './dispute-transaction';
export interface Dispute {
  amount?: number;
  caseNumber?: string;
  /** @deprecated */chargebackProtectionLevel?: 'EFFORTLESS' | 'STANDARD' | 'NOT_PROTECTED';
  createdAt?: string;
  currencyIsoCode?: string;
  disputedAmount?: number;
  evidence?: Array<DisputeEvidence>;
  graphQLId?: string;
  id?: string;
  kind?: 'CHARGEBACK' | 'PRE_ARBITRATION' | 'RETRIEVAL' | 'UNRECOGNIZED';
  merchantAccountId?: string;
  openedDate?: string;
  originalDisputeId?: string;
  payPalMessages?: Array<DisputePayPalMessage>;
  preDisputeProgram?: 'NONE' | 'UNRECOGNIZED' | 'VISA_RDR';
  processorComments?: string;
  protectionLevel?: 'Effortless Chargeback Protection tool' | 'Chargeback Protection tool' | 'No Protection';
  reason?: 'CANCELLED_RECURRING_TRANSACTION' | 'CREDIT_NOT_PROCESSED' | 'DUPLICATE' | 'FRAUD' | 'GENERAL' | 'INVALID_ACCOUNT' | 'NOT_RECOGNIZED' | 'PRODUCT_NOT_RECEIVED' | 'PRODUCT_UNSATISFACTORY' | 'TRANSACTION_AMOUNT_DIFFERS' | 'RETRIEVAL';
  reasonCode?: string;
  reasonDescription?: string;
  receivedDate?: string;
  referenceNumber?: string;
  replyByDate?: string;
  status?: 'OPEN' | 'LOST' | 'WON' | 'UNRECOGNIZED' | 'ACCEPTED' | 'AUTO_ACCEPTED' | 'DISPUTED' | 'EXPIRED';
  statusHistory?: Array<DisputeStatusHistory>;
  transaction?: DisputeTransaction;
  updatedAt?: string;
  wonAmount?: number;
  wonDate?: string;
}

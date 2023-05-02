/* tslint:disable */
/* eslint-disable */
export interface DisputeStatusHistory {
  disbursementDate?: string;
  effectiveDate?: string;
  status?: 'OPEN' | 'LOST' | 'WON' | 'UNRECOGNIZED' | 'ACCEPTED' | 'AUTO_ACCEPTED' | 'DISPUTED' | 'EXPIRED';
  timestamp?: string;
}

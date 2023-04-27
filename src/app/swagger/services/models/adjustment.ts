/* tslint:disable */
/* eslint-disable */
export interface Adjustment {
  actualDisbursementDate?: string;
  amount?: number;
  kind?: 'REFUND' | 'DISPUTE' | 'UNRECOGNIZED';
  projectedDisbursementDate?: string;
}

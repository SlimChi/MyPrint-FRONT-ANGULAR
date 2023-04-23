/* tslint:disable */
/* eslint-disable */
import { Adjustment } from './adjustment';
export interface Installment {
  actualDisbursementDate?: string;
  adjustments?: Array<Adjustment>;
  amount?: number;
  id?: string;
  projectedDisbursementDate?: string;
}

/* tslint:disable */
/* eslint-disable */
import { LiabilityShift } from './liability-shift';
export interface RiskData {
  decision?: string;
  decisionReasons?: Array<string>;
  deviceDataCaptured?: boolean;
  fraudServiceProvider?: string;
  id?: string;
  liabilityShift?: LiabilityShift;
  transactionRiskScore?: string;
}

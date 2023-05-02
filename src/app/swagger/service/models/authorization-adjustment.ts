/* tslint:disable */
/* eslint-disable */
export interface AuthorizationAdjustment {
  amount?: number;
  processorResponseCode?: string;
  processorResponseText?: string;
  processorResponseType?: 'APPROVED' | 'SOFT_DECLINED' | 'HARD_DECLINED' | 'UNRECOGNIZED';
  success?: boolean;
  timestamp?: string;
}

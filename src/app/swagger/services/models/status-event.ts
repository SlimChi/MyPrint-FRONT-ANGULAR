/* tslint:disable */
/* eslint-disable */
export interface StatusEvent {
  amount?: number;
  source?: 'api' | 'control_panel' | 'recurring' | 'unrecognized';
  status?: 'AUTHORIZATION_EXPIRED' | 'AUTHORIZED' | 'AUTHORIZING' | 'FAILED' | 'GATEWAY_REJECTED' | 'PROCESSOR_DECLINED' | 'SETTLED' | 'SETTLEMENT_CONFIRMED' | 'SETTLEMENT_DECLINED' | 'SETTLEMENT_PENDING' | 'SETTLING' | 'SUBMITTED_FOR_SETTLEMENT' | 'UNRECOGNIZED' | 'VOIDED';
  timestamp?: string;
  user?: string;
}

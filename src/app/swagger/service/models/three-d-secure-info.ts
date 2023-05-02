/* tslint:disable */
/* eslint-disable */
import { ThreeDSecureAuthenticateInfo } from './three-d-secure-authenticate-info';
import { ThreeDSecureLookupInfo } from './three-d-secure-lookup-info';
export interface ThreeDSecureInfo {
  acsTransactionId?: string;
  cavv?: string;
  dsTransactionId?: string;
  eciflag?: string;
  enrolled?: string;
  liabilityShiftPossible?: boolean;
  liabilityShifted?: boolean;
  paresStatus?: string;
  status?: string;
  threeDSecureAuthenticateInfo?: ThreeDSecureAuthenticateInfo;
  threeDSecureAuthenticationId?: string;
  threeDSecureLookupInfo?: ThreeDSecureLookupInfo;
  threeDSecureServerTransactionId?: string;
  threeDSecureVersion?: string;
  xid?: string;
}

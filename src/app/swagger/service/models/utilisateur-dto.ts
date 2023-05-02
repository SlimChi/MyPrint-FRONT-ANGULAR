/* tslint:disable */
/* eslint-disable */
import { Adresse } from './adresse';
export interface UtilisateurDto {
  active?: boolean;
  adresse?: Array<Adresse>;
  email?: string;
  idUtilisateur?: number;
  links?: {
[key: string]: string;
};
  nom?: string;
  prenom?: string;
  telephone?: string;
}

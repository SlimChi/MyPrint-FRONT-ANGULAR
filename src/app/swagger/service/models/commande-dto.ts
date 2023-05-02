/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from './adresse-dto';
import { StatusDto } from './status-dto';
import { UtilisateurDto } from './utilisateur-dto';
export interface CommandeDto {
  adresseDto?: AdresseDto;
  date?: string;
  links?: {
[key: string]: string;
};
  numeroCommande?: number;
  prixCommande?: number;
  statusDto?: StatusDto;
  utilisateurDto?: UtilisateurDto;
}

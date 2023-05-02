/* tslint:disable */
/* eslint-disable */
import { FichierDto } from './fichier-dto';
import { StatusDto } from './status-dto';
export interface LigneCommandeDto {
  couleur?: boolean;
  fichierDto?: FichierDto;
  nombreExemplaire?: number;
  nombreFeuille?: number;
  numeroCommande?: number;
  numeroLigneCommande?: number;
  prixLigneCommande?: number;
  rectoVerso?: boolean;
  statusDto?: StatusDto;
}

/* tslint:disable */
/* eslint-disable */
import { InsertCommandeDto } from './insert-commande-dto';
import { InsertLigneCommandeDto } from './insert-ligne-commande-dto';
export interface InsertFullCommandeDto {
  commandeDto?: InsertCommandeDto;
  ligneCommandesDto?: Array<InsertLigneCommandeDto>;
}

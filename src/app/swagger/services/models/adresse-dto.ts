/* tslint:disable */
/* eslint-disable */
import { TypeAdresse } from './type-adresse';
export interface AdresseDto {
  codePostal?: string;
  complement?: string;
  id?: number;
  rue?: string;
  typeAdresse?: TypeAdresse;
  utilisateurId?: number;
  ville?: string;
}

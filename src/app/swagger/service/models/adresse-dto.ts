/* tslint:disable */
/* eslint-disable */
import { TypeAdresseDto } from './type-adresse-dto';
export interface AdresseDto {
  codePostal?: string;
  complement?: string;
  id?: number;
  rue?: string;
  typeAdresseDto?: TypeAdresseDto;
  utilisateurId?: number;
  ville?: string;
}

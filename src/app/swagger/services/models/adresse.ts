/* tslint:disable */
/* eslint-disable */
import { TypeAdresse } from './type-adresse';
export interface Adresse {
  codePostal?: string;
  complement?: string;
  id?: number;
  idUtilisateur?: number;
  rue?: string;
  typeAdresse?: TypeAdresse;
  ville?: string;
}

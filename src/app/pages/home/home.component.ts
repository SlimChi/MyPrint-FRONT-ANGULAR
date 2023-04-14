import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CategoriesService } from '../../swagger/services/services/categories.service';
import { CategorieDto } from '../../swagger/services/models/categorie-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLogout = true;
  categories: { idCategorie: number, libelle: string }[] = [
    { idCategorie: 1, libelle: 'Rapport de stage' },
    { idCategorie: 2, libelle: 'Thèse' },
    { idCategorie: 3, libelle: 'Catalogue' },
    { idCategorie: 4, libelle: 'Flyers' },
  ];
  constructor(private categorieService: CategoriesService) {}

  ngOnInit(): void {
  this.categorieUser()
  }

  categorieUser(){
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = new JwtHelperService().decodeToken(token);
      this.isLogout = !(decodedToken.authorities[0].authority === 'USER');
    }

    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      this.categories = JSON.parse(storedCategories);
    }
  }

  insertCategorie(idCategorie: number, libelle: string): void {
    this.categories.push({ idCategorie, libelle });
    console.log('Catégorie ajoutée : ', { idCategorie, libelle });
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }


}

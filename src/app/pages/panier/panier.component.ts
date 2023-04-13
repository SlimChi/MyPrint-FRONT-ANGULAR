import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AddressService} from "../../swagger/services/services/address.service";
import {UtilisateurDto} from "../../swagger/services/models/utilisateur-dto";
import {AdresseDto} from "../../swagger/services/models/adresse-dto";
import {TypeAdresse} from "../../swagger/services/models/type-adresse";
import {HelperService} from "../../services/helper/helper.service";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'app-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.css']
})
export class PanierComponent {
    total: number = 0; // variable to hold the total price of items in the cart
    users: UtilisateurDto[] = [];
    user: Array<UtilisateurDto> = [];
    adresse: Array<AdresseDto> = [];
    typesAdresse: Array<TypeAdresse> = []; // étape 1
    errorMessage: string | undefined;
    commandes: any[] = [];
    categories: any[] = [];
    fileName: string = '';
    file: string ='';
    fileUrl: string = ''; // L'URL sécurisée pour afficher l'icône

    constructor(private adresseService: AddressService,
                private userService: UtilisateursService,
                private helperService: HelperService,
                private snackBar: MatSnackBar,
                private sanitizer: DomSanitizer
                                                    ) {
    }

    ngOnInit(): void {

        this.findById()
        this.getAllTypeAdresse()
        this.getUserAdresse()
        this.getUploadFile()
        this.loadCart()
    }

    getUserAdresse() {
        // Récupération du user
        this.userService.findAll(this.helperService.userId).subscribe((user) => {
            this.user = user;
        });
        // Récupération des types d'adresse
        this.getAllTypeAdresse();
    }


    loadCart() {
        try {
            const panierData: string | null = localStorage.getItem('panier');
            if (panierData !== null) {
                this.commandes = JSON.parse(panierData);
            }
        } catch (error) {
            // Gérer l'erreur ici
        }
    }

    getCategoryLibelle(categorieId: number) {
        const categoriesDataString = localStorage.getItem('categories');
        if (categoriesDataString) {
            const categoriesData = JSON.parse(categoriesDataString);
            const categorie = categoriesData.find((c: { id: number; }) => c.id === categorieId);
            return categorie ? categorie.libelle : '';
        } else {
            return '';
        }
    }

    getUploadFile() {
        const uploadedFileString = localStorage.getItem('file');
        if (uploadedFileString) {
            const uploadedFile = JSON.parse(uploadedFileString);
            this.fileName = uploadedFile.name;
            this.file = uploadedFile.data;
            this.fileUrl = 'data:' + uploadedFile.type + ';base64,' + uploadedFile.data;

        }
    }

    // function to decrement the quantity of an item in the cart
    decrementQuantity(item: any) {
        if (item.tirage > 1) {
            item.tirage--;
            item.prixTotal -= item.prixUnitaire;
            this.total -= item.prixUnitaire;
            // Mettre à jour l'objet dans le tableau commandes
            const index = this.commandes.indexOf(item);
            if (index !== -1) {
                this.commandes[index] = item;
                // Mettre à jour le panier dans le localStorage
                localStorage.setItem('panier', JSON.stringify(this.commandes));
            }
        }
    }

    incrementQuantity(item: any) {
        item.tirage++;
        item.prixTotal += item.prixUnitaire;
        this.total += item.prixUnitaire;
        // Mettre à jour l'objet dans le tableau commandes
        const index = this.commandes.indexOf(item);
        if (index !== -1) {
            this.commandes[index] = item;
            // Mettre à jour le panier dans le localStorage
            localStorage.setItem('panier', JSON.stringify(this.commandes));
        }
    }


    // function to remove an item from the cart
    removeItem(item: any) {
        const index = this.commandes.indexOf(item);
        if (index !== -1) {
            this.commandes.splice(index, 1);
            localStorage.setItem('panier', JSON.stringify(this.commandes));
        }
    }


    private findById() {
        this.adresseService.findAll1(this.helperService.userId).subscribe({
            next: (adresses) => {
                this.adresse = adresses.filter((adresse) => adresse.utilisateurId === this.helperService.userId);
            },
            error: (err) => {
                console.error(err);
                // gérer le cas d'erreur ici
            }
        });
    }


    private getAllTypeAdresse() { // étape 2
        this.adresseService.findAll1().subscribe({
            next: (data) => {
                this.typesAdresse = data;
            },
            error: (err) => {
                console.error(err);
            }
        });
    }

    deleteAdresse(adresseId: number) {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette adresse ?")) {
            this.adresseService.delete2({'address-id': adresseId}).subscribe({
                next: () => {
                    this.snackBar.open('Adresse supprimée avec succès', 'Fermer', {
                        duration: 3000
                    });
                    // Remove the deleted address from the list of addresses shown in the UI
                    this.adresse = this.adresse.filter(a => a.id !== adresseId);
                },
                error: (err) => {
                    console.error(err);
                    this.errorMessage = 'Erreur lors de la suppression de l\'adresse';
                }
            });
        }
    }

    async back() {
        await window.history.back();
    }
}

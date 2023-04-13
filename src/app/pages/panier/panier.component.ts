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
    cartItems: any[] = []; // array to hold the items in the cart
    total: number = 0; // variable to hold the total price of items in the cart
    users: UtilisateurDto[] = [];
    user: Array<UtilisateurDto> = [];
    adresse: Array<AdresseDto> = [];
    typesAdresse: Array<TypeAdresse> = []; // étape 1
    errorMessage: string | undefined;
    commandes: any[] = [];
    categories: any[] = [];
    uploadedFile: string | null = null;
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
        this.commandeData();
        this.categoriesData()
        this.findById()
        this.getAllTypeAdresse()
        this.getUserAdresse()
        this.getUploadFile()
    }

    getUserAdresse() {
        // Récupération du user
        this.userService.findAll(this.helperService.userId).subscribe((user) => {
            this.user = user;
        });
        // Récupération des types d'adresse
        this.getAllTypeAdresse();
    }

    commandeData() {
        const commandeDataString = localStorage.getItem('commandeData');
        if (commandeDataString) {
            const commandeData = JSON.parse(commandeDataString);
            this.commandes.push({
                format: commandeData.format,
                couleur: commandeData.couleur,
                rectoVerso: commandeData.rectoVerso,
                tirage: commandeData.tirage

            });
        }
    }

    categoriesData() {
        const categoriesDataString = localStorage.getItem('categoriesData');
        if (categoriesDataString) {
            const categoriesData = JSON.parse(categoriesDataString);
            this.categories.push({
                libelle: categoriesData.libelle,

            });
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
        const uploadedFileString = localStorage.getItem('uploadedFile');
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
            localStorage.setItem('commandeData', JSON.stringify(item));
        }
    }

    incrementQuantity(item: any) {
        item.tirage++;
        item.prixTotal += item.prixUnitaire;
        this.total += item.prixUnitaire;
        localStorage.setItem('commandeData', JSON.stringify(item));
    }

    // function to remove an item from the cart
    removeItem(item: any) {
        const index = this.cartItems.indexOf(item);
        if (index > -1) {
            this.total -= item.price * item.quantity;
            this.cartItems.splice(index, 1);
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

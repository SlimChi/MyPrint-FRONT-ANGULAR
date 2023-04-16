import {Component} from '@angular/core';
import {AddressService} from "../../swagger/services/services/address.service";
import {UtilisateurDto} from "../../swagger/services/models/utilisateur-dto";
import {AdresseDto} from "../../swagger/services/models/adresse-dto";
import {TypeAdresse} from "../../swagger/services/models/type-adresse";
import {HelperService} from "../../services/helper/helper.service";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

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
    file: string ='';
    selectedFiles: File | null = null;


    constructor(private adresseService: AddressService,
                private userService: UtilisateursService,
                private helperService: HelperService,
                private snackBar: MatSnackBar,
                private http: HttpClient,
                                                    ) {
    }

    ngOnInit(): void {
        this.findById()
        this.getAllTypeAdresse()
        this.getUserAdresse()
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
    decrementQuantity(item: any) {
        if (item.tirage > 1) {
            item.tirage--;
        }
    }
    incrementQuantity(item: any) {
        item.tirage++;

    }


    // function to remove an item from the cart
// Supprime un fichier du local storage
    removeFileFromLocalStorage(fileId: string) {
        const files = JSON.parse(localStorage.getItem('files') || '[]');
        const fileIndex = files.findIndex((file: any) => file.id === fileId);
        if (fileIndex !== -1) {
            files.splice(fileIndex, 1);
            localStorage.setItem('files', JSON.stringify(files));
        }
    }

// Supprime un item du panier et son fichier associé
    removeItem(item: any) {
        const index = this.commandes.indexOf(item);
        if (index !== -1) {
            // Supprime le fichier du local storage
            const fileId = this.commandes[index].id;
            this.removeFileFromLocalStorage(fileId);

            // Supprime l'item du panier
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

    uploadFiles() {
        const files = JSON.parse(localStorage.getItem('files') || '[]');
        const formData = new FormData();

        // append each file to the form data
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileBlob = new Blob([file.data], { type: file.type });
            formData.append('file', fileBlob, file.name);
        }

        // send the form data to the server
        this.http.post('http://localhost:9090/fichiers', formData).subscribe(
            (response) => {
                console.log(response);
                this.snackBar.open('Fichier téléchargé avec succès', 'Fermer', { duration: 4000 });
            },
            (error) => {
                console.log(error);
                this.snackBar.open(`Erreur lors du téléchargement du fichier: ${error.error}`, 'Fermer', { duration: 4000 });
            }
        );
    }



}


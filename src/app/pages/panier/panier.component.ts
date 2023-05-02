import {Component} from '@angular/core';

import {HelperService} from "../../services/helper/helper.service";

import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {forkJoin} from "rxjs";
import {UtilisateurDto} from "../../swagger/service/models/utilisateur-dto";
import {AdresseDto} from "../../swagger/service/models/adresse-dto";
import {TypeAdresse} from "../../swagger/service/models/type-adresse";
import {AddressService} from "../../swagger/service/services/address.service";
import {UtilisateursService} from "../../swagger/service/services/utilisateurs.service";
import {CommandesService} from "../../swagger/service/services/commandes.service";
import {InsertFullCommandeDto} from "../../swagger/service/models/insert-full-commande-dto";



@Component({
    selector: 'app-panier',
    templateUrl: './panier.component.html',
    styleUrls: ['./panier.component.css']
})
export class PanierComponent {
    total: number = 0; // variable to hold the total price of items in the cart
    users: UtilisateurDto[] = [];
    userDto: unknown = {email: '', nom: '', prenom: ''};
    user: Array<UtilisateurDto> = [];
    adresse: Array<AdresseDto> = [];
    adresses: AdresseDto = {};
    typesAdresse: Array<TypeAdresse> = []; // étape 1
    errorMessage: string | undefined;
    commandes: any[] = [];
    categories: any[] = [];
    file: string = '';
    fileId: number;

    constructor(private adresseService: AddressService,
                private userService: UtilisateursService,
                private helperService: HelperService,
                private commandeService: CommandesService,
                private snackBar: MatSnackBar,
                private http: HttpClient,
    ) {
    }

    ngOnInit(): void {
        this.findById()

        this.loadCart()
    }

    loadCart() {
        try {
            const donneesLocalStoragePanier: string | null = localStorage.getItem('panier');
            if (typeof donneesLocalStoragePanier === 'string') {
                this.commandes = JSON.parse(donneesLocalStoragePanier);
            }
        } catch (error) {
            console.error(error);
            // Afficher un message d'erreur à l'utilisateur ou journaliser l'erreur
        }
    }

    getTotal(): string {
        let total = 0;
        let panier = localStorage.getItem("panier");
        if (panier !== null) {
            let panierObj = JSON.parse(panier);
            for (let commande of panierObj) {
                if (typeof commande === 'object' && commande !== null && 'prix' in commande) {
                    let prix = parseFloat(commande.prix);
                    console.log("prix = ", prix);
                    if (!isNaN(prix)) {
                        total += prix;
                    }
                }
            }
            let totalFormatted = total.toFixed(2);
            return `${totalFormatted}`;
        } else {
            return undefined;
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
            item.prix = (0.10 * (item.nbrPages * item.tirage)).toFixed(2);
            localStorage.setItem('panier', JSON.stringify(this.commandes));


        }
    }

    incrementQuantity(item: any) {
        item.tirage++;
        item.prix = (0.10 * (item.nbrPages * item.tirage)).toFixed(2);
        localStorage.setItem('panier', JSON.stringify(this.commandes));

    }

    // function to remove an item from the cart
    // Supprime un fichier du local storage
    removeFileFromLocalStorage(fileId: string) {
        const files = JSON.parse(localStorage.getItem('fileList') || '[]');
        const fileIndex = files.findIndex((file: any) => file.id === fileId);
        if (fileIndex !== -1) {
            files.splice(fileIndex, 1);
            localStorage.setItem('fileList', JSON.stringify(files));
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

    findById() {
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

    getUserAdresse() {
        // Récupération du user
        this.userService.findAll(this.helperService.userId).subscribe((user) => {
            this.user = user;
        });
        // Récupération des types d'adresse
        this.getAllTypeAdresse();
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

    private findUserById() {
        forkJoin([
            this.userService.getUtilisateurById({
                "idUtilisateur": this.helperService.userId
            }),
            this.adresseService.findAll1() // étape 2
        ]).subscribe({
            next: ([userData, typesAdresseData]) => {
                this.userDto = userData;
                this.typesAdresse = typesAdresseData;
            },
            error: (err) => {
                console.error(err);
                // handle the error scenario here
            }
        });
    }

    async back() {
        await window.history.back();
    }

    async sendCartToBackend() {
        const donneesLocalStoragePanier: string | null = localStorage.getItem('panier');
        const fileListString: string | null = localStorage.getItem('fileList'); // Récupérer la liste des fichiers
        if (typeof donneesLocalStoragePanier === 'string' && typeof fileListString === 'string') {
            const commandes = JSON.parse(donneesLocalStoragePanier);
            const fileList = JSON.parse(fileListString); // Convertir la chaîne JSON en objet JavaScript

            // Récupérer l'idAdresse à partir de la propriété adresse
            const idAdresse = this.adresse[0].id;

            // Upload files and get fileId
            const fileIds: number[] = [];
            for (let i = 0; i < fileList.length; i++) {
                const fileId = await this.uploadFile(fileList[i]);
                fileIds.push(fileId);
            }

            const insertFullCommandeDto: InsertFullCommandeDto = {
                commandeDto: {
                    idUtilisateur: this.helperService.userId,
                    idAdresse: idAdresse,
                    prix: parseFloat(this.getTotal()),
                },
                ligneCommandesDto: commandes.map((c, index) => ({
                    rectoVerso: c.rectoVerso,
                    format: c.format,
                    couleur: c.couleur,
                    nombreExemplaire: c.tirage,
                    nombreFeuille: c.nbrPages,
                    prixLigneCommande: c.prix,
                    idFichier: fileIds[index] // Associer l'ID du fichier téléchargé au fichier correspondant
                })),
            };

            this.commandeService.insertFullCommande({body: insertFullCommandeDto}).subscribe(
                () => {
                    this.commandes = [];
                    this.snackBar.open('Commande envoyée avec succès', 'Fermer', {duration: 3000});
                },
                (error) => {
                    this.errorMessage = error.message;
                }

            );

        }
    }
    async uploadFile(file: any): Promise<number> {
        const formData = new FormData();
        const fileBlob = new Blob([file.data], {type: file.type});
        formData.append('file', fileBlob, file.name);
        return this.http.post<{idFichier: number}>('http://localhost:9090/fichiers', formData).toPromise()
            .then((response: {idFichier: number}) => {
                console.log(response);
                this.snackBar.open('Fichier téléchargé avec succès', 'Fermer', {duration: 4000});
                return response.idFichier; // update the fileId variable with the ID of the uploaded file
            })
            .catch((error) => {
                console.log(error);
                this.snackBar.open(`Erreur lors du téléchargement des fichiers: ${error.error}`, 'Fermer', {duration: 4000});
                throw error;
            });
    }


}


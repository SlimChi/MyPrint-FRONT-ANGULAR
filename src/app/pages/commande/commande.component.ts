import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UploadService} from "../../services/uploadFile/upload.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FichiersService} from "../../swagger/services/services/fichiers.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TokenService} from "../../services/token-service/token.service";
import {Router} from "@angular/router";
import * as pdfjsLib from 'pdfjs-dist';


@Component({
    selector: 'app-commande',
    templateUrl: './commande.component.html',
    styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
    selectedFile: File | null = null;
    uploadForm: FormGroup;
    uploading: boolean = false;
    progress: number = 0;
    fileName: string = '';
    errorMessage: string = '';
    fileData: string | null = null;
    format: string = "a4";
    couleur: boolean = false;
    rectoVerso: boolean = false;
    tirage: number = 1;
    numPages: number;

    constructor(private fichierService: UploadService,
                private fileService: FichiersService,
                private tokenService: TokenService,
                private snackBar: MatSnackBar,
                private router: Router,
                private http: HttpClient,
                private formBuilder: FormBuilder) {

        this.numPages = 0;

        this.uploadForm = this.formBuilder.group({
            file: ['']
        });
    }


    ngOnInit(): void {

    }

    onFileSelected(event: any) {
        const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 Mo
        const file = event.target.files[0] as File;

        if (file.size > MAX_FILE_SIZE) {
            this.snackBar.open(`Le fichier sélectionné dépasse la taille limite : ${MAX_FILE_SIZE / (1024 * 1024)} Mo`, 'Fermer', {
                duration: 4000
            });
            this.selectedFile = null;
            return;
        }

        this.selectedFile = file;
        this.fileName = file.name;

        this.countPdfPages(); // appel de la méthode countPdfPages()
        console.log(this.countPdfPages());
        this.snackBar.open('Fichier sélectionné avec succès', 'Fermer', {
            duration: 4000
        });
    }


    countPdfPages() {
        if (this.selectedFile) {
            pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/pdf.worker.js';

            const fileReader = new FileReader();
            fileReader.onload = () => {
                const typedarray = new Uint8Array(fileReader.result as ArrayBuffer);
                pdfjsLib.getDocument({data: typedarray}).promise.then(pdf => {
                    this.numPages = pdf.numPages;
                });
            };
            fileReader.readAsArrayBuffer(this.selectedFile);
        }
    }


    storeFile(): void {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target) {
                this.fileData = event.target.result as string; // mettre à jour la valeur de fileData
                const fileName = this.selectedFile?.name ?? '';
                const fileSize = this.selectedFile?.size ?? 0;
                const fileDate = new Date();

                const file = {
                    name: fileName,
                    size: fileSize,
                    date: fileDate,
                    data: this.fileData, // utiliser la valeur mise à jour de fileData
                    nbrPages: this.numPages
                };

                // Récupérer la liste des fichiers à partir du localstorage
                const fileListString = localStorage.getItem('fileList');
                const fileList = fileListString ? JSON.parse(fileListString) : [];

                // Ajouter le nouveau fichier à la liste des fichiers
                fileList.push(file);

                // Sauvegarder la liste des fichiers dans le localstorage
                localStorage.setItem('fileList', JSON.stringify(fileList));
            }
        };
        reader.readAsDataURL(this.selectedFile as Blob);
    }


    ajouterAuPanier(): void {
        this.storeFile();
        const categoriesDataString = localStorage.getItem('categories');
        if (categoriesDataString) {
            const categoriesData = JSON.parse(categoriesDataString);
            const lastCategory = categoriesData.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id)[0];
            const lastCategoryId = lastCategory.id;
            const lastCategoryLabel = lastCategory.libelle;

            try {
                // Récupération des données du localStorage
                const panierDataString: string | null = localStorage.getItem('panier');
                let panier = [];

                // Si des données existent, on les parse en tant qu'objet JSON
                if (panierDataString !== null) {
                    panier = JSON.parse(panierDataString);
                }

                // Récupération des données de la fileList du localStorage
                const fileListDataString: string | null = localStorage.getItem('fileList');
                let fileList = [];

                // Si des données existent, on les parse en tant qu'objet JSON
                if (fileListDataString !== null) {
                    fileList = JSON.parse(fileListDataString);
                }

                // Vérifier que la valeur de "fileData" n'est pas null avant de l'utiliser
                const newOrder = {
                    format: this.format,
                    couleur: this.couleur,
                    rectoVerso: this.rectoVerso,
                    tirage: this.tirage,
                    fileName: this.selectedFile?.name ?? '',
                    nbrPages: this.numPages,
                    data: this.fileData !== null ? this.fileData : null,
                    lastCategory: lastCategoryLabel,
                    prix:(0.10 * (this.numPages * this.tirage)).toFixed(2)
                };
                panier = panier.concat(newOrder);

                // Stockage des données mises à jour dans le localStorage
                localStorage.setItem('panier', JSON.stringify(panier));

                // Redirection vers la page du panier
                this.router.navigate(['user/panier']);
            } catch (error) {
                console.error(error);
            }
        }
    }


    onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    onDragLeave(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    onFileDropped(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer?.files[0];
        this.uploadForm.patchValue({
            file: file
        });
    }

    selectFormat(event: any) {

        if (event && event.target && event.target.value) {
            this.format = event.target.value;
            console.log('Format sélectionné :', this.format);
        }
    }

    toggleCouleur() {

        this.couleur = !this.couleur;
        console.log('Couleur:', this.couleur);


    }

    toggleRectoVerso() {

        this.rectoVerso = !this.rectoVerso;
        console.log('RectoVerso:', this.rectoVerso);


    }

    deleteUploadedFile() {
        const confirmationSnackBar = this.snackBar.open('Êtes-vous sûr de vouloir supprimer ce fichier ?', 'Supprimer', {
            duration: 5000,
        });

        confirmationSnackBar.onAction().subscribe(() => {
            // Reset the file input element and selected file
            const fileInput = document.getElementById('fileInput') as HTMLInputElement;
            fileInput.value = '';
            this.selectedFile = null;
            this.fileName = '';
            this.numPages = 0;
            this.tirage = 1;
            this.snackBar.open('Fichier supprimé', 'Fermer', {
                duration: 4000
            });
        });
    }

    isAuthenticated(): boolean {
        return this.tokenService.isLogged();
    }

    onCommanderClicked(): void {
        if (this.isAuthenticated()) {
            this.router.navigate(['/user/panier']);
        } else {
            this.router.navigate(['/user']);
        }
    }

    async back() {
        window.history.back();
    }
}

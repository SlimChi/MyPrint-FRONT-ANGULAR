import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UploadService} from "../../services/uploadFile/upload.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FichiersService} from "../../swagger/services/services/fichiers.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TokenService} from "../../services/token-service/token.service";
import {Router} from "@angular/router";


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



  constructor(private fichierService: UploadService,
              private fileService: FichiersService,
              private tokenService: TokenService,
              private snackBar: MatSnackBar,
              private router: Router,
              private http: HttpClient,
              private formBuilder: FormBuilder) {


    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
  }


  ngOnInit(): void {

  }

  onFileSelected(event: any) {

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
    const file = event.target.files[0] as File;

    if (file.size > MAX_FILE_SIZE) {
      this.snackBar.open(`Le fichier sélectionné dépasse la limite de taille de ${MAX_FILE_SIZE} Mo`, 'Fermer', {
        duration: 4000
      });
      this.selectedFile = null;
      return;
    }

    this.selectedFile = file;
    this.fileName = file.name;

    this.snackBar.open('Fichier sélectionné avec succès', 'Fermer', {
      duration: 4000
    });
  }



  storeFile(): void {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        this.fileData = event.target.result as string; // update the value of fileData
        const fileName = this.selectedFile?.name ?? '';
        const fileSize = this.selectedFile?.size ?? 0;
        const fileDate = new Date();

        const file = {
          name: fileName,
          size: fileSize,
          date: fileDate,
          data: this.fileData // use the updated value of fileData
        };

        localStorage.setItem('file', JSON.stringify(file));

      }
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }



  ajouterAuPanier(): void {
    try {
      // Récupération des données du local storage
      const panierData: string | null = localStorage.getItem('panier');

      let panier = [];

      // Si des données existent, on les parse en tant qu'objet JSON
      if (panierData !== null) {
        panier = JSON.parse(panierData);
      }
      // Récupération des données du fichier dans le local storage
      const fileData: string | null = localStorage.getItem('file');

      // Ajout de la nouvelle commande à l'ancien panier
      const newOrder = {
        format: this.format,
        couleur: this.couleur,
        rectoVerso: this.rectoVerso,
        tirage: this.tirage,
        fileName: this.selectedFile?.name ?? '',
        fileData: fileData !== null ? JSON.parse(fileData).data : null


      };
      panier.push(newOrder);

      // Stockage des données mises à jour dans le local storage
      localStorage.setItem('panier', JSON.stringify(panier));

      // Redirection vers la page du panier
      this.router.navigate(['user/panier']);
    } catch (error) {

    }
  }



  async back() {
    window.history.back();
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  onFileDropped(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    this.uploadForm.get('file')!.setValue(file);
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


  incrementTirage() {
    this.tirage++;
  }

  decrementTirage() {
    if (this.tirage > 1) {
      this.tirage--;
    }
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
      this.ajouterAuPanier();
      this.router.navigate(['/user/panier']);
    } else {
      this.ajouterAuPanier();
      this.router.navigate(['/user']);
    }
  }
}

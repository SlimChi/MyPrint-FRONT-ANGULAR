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
  selectedFiles: { id: number, name: string }[] = [];
  uploadForm: FormGroup;
  uploading: boolean = false;
  progress: number = 0;
  fileName: string = '';
  errorMessage: string = '';

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
    this.loadData();
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




  uploadFile() {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:9090/fichiers', formData).subscribe(
      (response) => {
        console.log(response);
        this.snackBar.open('Fichier téléchargé avec succès', 'Fermer', {duration: 4000});
      },
      (error) => {
        console.log(error);
        this.snackBar.open(`Erreur lors du téléchargement du fichier: ${error.error}`, 'Fermer', {duration: 4000});
      }
    );
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
        this.saveData(); // ajout de l'appel à la fonction saveData()

      }
  }

  toggleCouleur() {
    this.couleur = !this.couleur;
    console.log('Couleur:', this.couleur);
    this.saveData(); // ajout de l'appel à la fonction saveData()

  }

  toggleRectoVerso() {
    this.rectoVerso = !this.rectoVerso;
    console.log('RectoVerso:', this.rectoVerso);
    this.saveData(); // ajout de l'appel à la fonction saveData()

  }

  incrementTirage() {
    this.tirage++;
    console.log('Tirage:', this.tirage);
    this.saveData(); // ajout de l'appel à la fonction saveData()

  }

  decrementTirage() {
    if (this.tirage > 1) {
      this.tirage--;
      console.log('Tirage:', this.tirage);
      this.saveData(); // ajout de l'appel à la fonction saveData()

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

  saveData() {
    const commandeData = {
      format: this.format,
      couleur: this.couleur,
      rectoVerso: this.rectoVerso,
      tirage: this.tirage
    };
    localStorage.setItem('commandeData', JSON.stringify(commandeData));
  }

  loadData() {
    try {
      const commandeDataString = localStorage.getItem('commandeData');
      if (commandeDataString) {
        const commandeData = JSON.parse(commandeDataString);
        this.format = commandeData.format;
        this.couleur = commandeData.couleur;
        this.rectoVerso = commandeData.rectoVerso;
        this.tirage = commandeData.tirage;
      }
    } catch(error) {
      console.error('Error parsing JSON data from local storage', error);
    }
  }

  isAuthenticated(): boolean {
    return this.tokenService.isLogged();
  }

  onCommanderClicked(): void {
    if (this.isAuthenticated()) {
      this.router.navigate(['/user/paiment']);
    } else {
      this.router.navigate(['/user']);
    }
  }
}

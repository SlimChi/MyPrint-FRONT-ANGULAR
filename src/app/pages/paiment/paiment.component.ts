import { Component, OnInit } from '@angular/core';
import {Observable, tap} from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentService } from '../../services/paymentService/payment.service';
import { PurchaseDto } from '../../services/paymentService/purchase-dto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-paiment',
    templateUrl: './paiment.component.html',
})
export class PaimentComponent implements OnInit {
    amount: number; // initialiser la variable amount en tant que nombre
    commandes: any[] = [];

    constructor(private paymentService: PaymentService, private router: Router) {}

    ngOnInit(): void {
        this.loadCart();
    }

    onPaymentStatus(event): void {
        if (event?.success) {
            // Paiement réussi
            console.log('Paiement réussi : ' + event.transactionId);
            // Afficher un message de confirmation et rediriger l'utilisateur vers une page de succès de paiement
            this.router.navigate(['/successPaiment']);
            this.removePanier();
        } else if (event?.error) {
            // Paiement échoué
            console.error('Erreur de paiement : ' + event.errorMessage);
            // Afficher un message d'erreur et inviter l'utilisateur à réessayer ou à contacter le support
            alert('Le paiement a échoué. Veuillez réessayer ou contacter le support.');
        } else {
            // Autre état de paiement
            console.log('État de paiement inconnu : ' + event?.status);
        }
    }

    loadCart() {
        try {
            const donneesLocalStoragePanier: string | null = localStorage.getItem('panier');
            if (typeof donneesLocalStoragePanier === 'string') {
                this.commandes = JSON.parse(donneesLocalStoragePanier);
                this.getTotal();
                console.log(this.getTotal());
            }
        } catch (error) {
            console.error(error);
                // Afficher un message d'erreur à l'utilisateur ou journaliser l'erreur
        }
    }

    getTotal(): number | undefined {
        let total = 0;
        let panier = localStorage.getItem('panier');
        if (panier !== null) {
            let panierObj = JSON.parse(panier);
            for (let commande of panierObj) {
                if (typeof commande === 'object' && commande !== null && 'prix' in commande) {
                    let prix = parseFloat(commande.prix);
                    // console.log('prix = ', prix);
                    if (!isNaN(prix)) {
                        total += prix;
                    }
                }
            }
            return parseFloat(total.toFixed(2));
        } else {
            return undefined;
        }
    }

    getClientToken(): Observable<any> {
        return this.paymentService.getToken().pipe(
            map((data) => {
                return data.token;
            })
        );
    }

    checkOut(nonce: string, cardholderName: string, cvv: string): Observable<any> {
        console.log('Nonce : ' + nonce);

        this.amount = this.getTotal();
        const dto = new PurchaseDto(nonce, this.amount, cardholderName, cvv);

        return this.paymentService.checkOut(dto).pipe(
            tap(() => {
                this.router.navigate(['/successPaiment']);
                this.removePanier();
            })
        );
    }

    // Supprime le panier
    removePanier() {
        this.commandes = [];
        localStorage.removeItem('panier');
        localStorage.removeItem('fileList');
    }

}

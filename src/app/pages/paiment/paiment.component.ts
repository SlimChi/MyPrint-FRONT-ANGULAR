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
// à compléter
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
                    console.log('prix = ', prix);
                    if (!isNaN(prix)) {
                        total += prix;
                    }
                }
            }
            return total;
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

    checkOut(nonce: string): Observable<any> {
        console.log('Nonce : ' + nonce);

        this.amount = this.getTotal();
        const dto = new PurchaseDto(nonce, this.amount);

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
    }


}

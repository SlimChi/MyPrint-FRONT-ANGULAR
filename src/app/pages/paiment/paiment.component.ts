import { Component } from '@angular/core';
import * as braintree from 'braintree-web';

@Component({
    selector: 'app-paiment',
    templateUrl: './paiment.component.html',
})
export class PaimentComponent {
    gateway: any;
    clientToken: string = '';
    nonce: string = '';

    ngOnInit() {
        this.gateway = braintree;
        this.gateway.client.create({
            authorization: 'sandbox_rzg8mkvp_3fw8jj3xr2wj6cxz',
        }, (err: any, clientInstance: any) => {
            if (err) {
                console.error(err);
                return;
            }
            this.gateway.dataCollector.create({
                client: clientInstance,
                paypal: true
            }, (err: any, dataCollectorInstance: any) => {
                if (err) {
                    console.error(err);
                    return;
                }
                dataCollectorInstance.deviceData(function () {
                    return JSON.stringify(dataCollectorInstance.deviceData);
                });
            });
        });

        this.gateway.clientToken.generate({}, (err: any, response: any) => {
            if (err) {
                console.error(err);
                return;
            }
            this.clientToken = response.clientToken;
        });
    }

    onSubmit() {
        this.gateway.client.tokenizeCard({
            number: '4111111111111111',
            expirationDate: '10/2022',
            cvv: '123'
        }, (err: any, nonce: any) => {
            if (err) {
                console.error(err);
                return;
            }
            this.nonce = nonce;
            // You can use this.nonce to submit the transaction to Braintree
            // using the Braintree API or a server-side SDK
        });
    }
}
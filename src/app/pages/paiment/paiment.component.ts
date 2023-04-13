import { Component } from '@angular/core';


@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html'
})
export class PaimentComponent  {
  // gateway: any;
  // clientToken: string = '';
  //
  // ngOnInit() {
  //   this.gateway = new braintree.BraintreeGateway({
  //     environment: braintree.Environment.Sandbox,
  //     merchantId: '3fw8jj3xr2wj6cxz',
  //     publicKey: '2kjpzbj9jywchn5n',
  //     privateKey: '2ae35fe1749f5d666739f2c12217583d'
  //   });
  //
  //   this.gateway.client.create({
  //     authorization: 'sandbox_rzg8mkvp_3fw8jj3xr2wj6cxz'
  //   }, (err: any, clientInstance: any) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     this.gateway.dataCollector.create({
  //       client: clientInstance,
  //       paypal: true
  //     }, (err: any, dataCollectorInstance: any) => {
  //       if (err) {
  //         console.error(err);
  //         return;
  //       }
  //       dataCollectorInstance.deviceData(function() {
  //         return JSON.stringify(dataCollectorInstance.deviceData);
  //       });
  //     });
  //   });
  //
  //   this.gateway.clientToken.generate({}, (err: any, response: any) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     this.clientToken = response.clientToken;
  //   });
  // }
}

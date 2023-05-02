/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UtilisateursService } from './services/utilisateurs.service';
import { TypeOptionsService } from './services/type-options.service';
import { StatusesService } from './services/statuses.service';
import { OptionsService } from './services/options.service';
import { OptionLigneCommandesService } from './services/option-ligne-commandes.service';
import { OptionCategoriesService } from './services/option-categories.service';
import { LigneCommandesService } from './services/ligne-commandes.service';
import { CommandesService } from './services/commandes.service';
import { CategoriesService } from './services/categories.service';
import { AddressService } from './services/address.service';
import { MailControllerService } from './services/mail-controller.service';
import { IntervenirsService } from './services/intervenirs.service';
import { FichiersService } from './services/fichiers.service';
import { AuthentificationService } from './services/authentification.service';
import { PaymentControllerService } from './services/payment-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UtilisateursService,
    TypeOptionsService,
    StatusesService,
    OptionsService,
    OptionLigneCommandesService,
    OptionCategoriesService,
    LigneCommandesService,
    CommandesService,
    CategoriesService,
    AddressService,
    MailControllerService,
    IntervenirsService,
    FichiersService,
    AuthentificationService,
    PaymentControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}

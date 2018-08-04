import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantsProvider {
  homeTitle:string='Home page';
  listTitle:string='List page';
  locationTitle:string = 'Location page'
  constructor(public http: HttpClient) {
    console.log('Hello ConstantsProvider Provider');
  }

}

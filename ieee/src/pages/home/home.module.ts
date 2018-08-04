import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ConstantsProvider } from '../../providers/constants/constants';

@NgModule({
  declarations: [
    HomePage
    ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers: [
    ConstantsProvider
  ]
})
export class HomePageModule {}

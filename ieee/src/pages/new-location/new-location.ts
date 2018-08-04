import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent, Marker} from '@ionic-native/google-maps';


/**
 * Generated class for the NewLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-location',
  templateUrl: 'new-location.html',
})
export class NewLocationPage {
  latitude:any;
  longitude:any;
  loading:any;
  map: GoogleMap
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation,public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
      // this.platforms.ready(()=> {
        this.getGeoLocation();
      // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewLocationPage');
    
  }
  getGeoLocation(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      loading.dismiss();
      // this.latitude = resp.coords.latitude
      // this.longitude = resp.coords.longitude
      this.loadMap(resp.coords.latitude,resp.coords.longitude)
    }).catch((error) => {
      loading.dismiss();
      console.log('Error getting location', error);
    });
  }

  loadMap(longitude,latitude) {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: latitude,
           lng: longitude
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('#map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: latitude,
        lng: longitude
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab-inicio',
  templateUrl: './tab-inicio.page.html',
  styleUrls: ['./tab-inicio.page.scss'],
})
export class TabInicioPage implements OnInit {

  constructor(public navCtrl: NavController) { }
   
  ionViewDidLoad(){
    console.log('ionViewDidLoad TabInicioPage');
  }

  ngOnInit() {
  }

}

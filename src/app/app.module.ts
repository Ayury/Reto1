import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TabInicioPage } from './tab-inicio/tab-inicio.page';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    TabInicioPage
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule, 
    TabInicioPage,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

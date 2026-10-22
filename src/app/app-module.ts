import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { appRoutingProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { MenuTablaMultiplicarComponent } from './components/menu-tabla-multiplicar-component/menu-tabla-multiplicar-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    NotFoundComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablaMultiplicarComponent,
    MenuTablaMultiplicarComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}

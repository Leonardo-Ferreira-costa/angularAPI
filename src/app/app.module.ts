import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { BodyLoginComponent } from './body-login/body-login.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { WhatsappbtnComponent } from './whatsappbtn/whatsappbtn.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuFooterComponent,
    BodyLoginComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    PerfilComponent,
    WhatsappbtnComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: '', component: LoginComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'whatsapp', component: WhatsappbtnComponent},
      {path: 'catalogo', component: CatalogoComponent},
      {path: '**', component: ErrorComponent},
  ]),
  HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

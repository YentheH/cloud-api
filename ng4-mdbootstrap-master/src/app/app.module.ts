import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Dota2Component } from './dota2/dota2.component';
import { LolComponent } from './lol/lol.component';
import { OverwatchComponent } from './overwatch/overwatch.component';
import { lolService } from './services/lol.service';
import { dota2Service } from './services/dota2.service';
import { overwatchService } from './services/overwatch.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";


@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    Dota2Component,
    LolComponent,
    OverwatchComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'lol', component: LolComponent},
      {path: 'dota2', component: Dota2Component},
      {path: 'overwatch', component: OverwatchComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: "**", component: PageNotFoundComponent}
    ], { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    overwatchService,
    lolService,
    dota2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

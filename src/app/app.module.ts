import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatSelectModule} from '@angular/material/select';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import {SlideshowModule} from 'ng-simple-slideshow';
import {HttpClientModule} from '@angular/common/http';
import {MainService} from './CommonService/main.service';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeadphonesComponent } from './headphones/headphones.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {ProductsListComponent} from './products-list/products-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeadphonesComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // BrowserAnimationsModule,
    // MatButtonModule, 
    // MatCheckboxModule,
    HttpClientModule,
    NgImageSliderModule,
    // MatSelectModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }

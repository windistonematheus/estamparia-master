import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { BudgetComponent } from './components/budget/budget.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { MugsComponent } from './components/mugs/mugs.component';
import { TShirtsComponent } from './components/t-shirts/t-shirts.component';
import { BabyLooksComponent } from './components/baby-looks/baby-looks.component';
import { BabyLookViewComponent } from './components/baby-look-view/baby-look-view.component';
import { TShirtViewComponent } from './components/t-shirt-view/t-shirt-view.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    BudgetComponent,
    LoginComponent,
    CartComponent,
    ProductsComponent,
    MugsComponent,
    TShirtsComponent,
    BabyLooksComponent,
    BabyLookViewComponent,
    TShirtViewComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

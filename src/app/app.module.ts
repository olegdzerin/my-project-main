import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './first/child-a/child-a.component';
import { ChildBComponent } from './first/child-b/child-b.component';



import { AdminModule } from './admin/admin.module';
import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { LoginComponent } from './login/login.component';
// import {AdminComponent } from './admin/admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    LoginComponent,
    // AdminComponent 
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AdminModule,
    CustomersModule,
    OrdersModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

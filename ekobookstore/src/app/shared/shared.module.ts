import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartItemComponent,
    PriceDetailsComponent,
    SidePanelComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CoreModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }

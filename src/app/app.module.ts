import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupInfoContainerComponent } from './core/components/popup-info-container/popup-info-container.component';
import { PopupInfoItemComponent } from './core/components/popup-info-container/popup-info-item/popup-info-item.component';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupInfoContainerComponent,
    PopupInfoItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

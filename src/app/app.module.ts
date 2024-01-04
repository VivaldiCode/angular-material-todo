// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // Importe o FormsModule se você estiver usando ngModel
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FormComponent} from './form/form.component';
import {ListComponent} from './list/list.component';
import {FooterComponent} from './footer/footer.component';
import {FilterComponent} from './filter/filter.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    HeaderComponent,
    FormComponent,
    ListComponent,
    FooterComponent,
    FilterComponent,
  ],
  bootstrap: [],
})
export class AppModule {
}

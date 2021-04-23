import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideComponent } from './layout/aside/aside.component';
import { MenuComponent } from './layout/aside/menu/menu.component';
import { ToolbarComponent } from './layout/header/toolbar/toolbar.component';
import { SearchbtnComponent } from './layout/header/toolbar/searchbtn.component';
import { HomeComponent } from './features/home/home.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { UsersComponent } from './features/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    MenuComponent,
    ToolbarComponent,
    SearchbtnComponent,
    HomeComponent,
    DropdownComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

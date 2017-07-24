import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { LoaderComponent } from './shared/loader/loader.component';
import { FormsModule }   from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
/* Home component */
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }],
  bootstrap: [AppComponent]
})
export class AppModule { }

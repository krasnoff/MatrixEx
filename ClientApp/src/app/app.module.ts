import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InputCharsOnlyDirective } from './input-chars-only.directive';
import { SignInComponent } from './sign-in/sign-in.component';
import { GlobalsService } from './globals.service';
import { YoutubeListComponent } from './youtube-list/youtube-list.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SignUpComponent,
    InputCharsOnlyDirective,
    SignInComponent,
    YoutubeListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    RouterModule.forRoot([
      { path: '', component: SignInComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'youtube', component: YoutubeListComponent, canActivate: [AuthenticatedGuard]},
    ])
  ],
  providers: [GlobalsService, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

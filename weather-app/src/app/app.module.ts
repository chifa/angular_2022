import { LoaderService } from './services/loader.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { FovoritesListComponent } from './fovorites-list/fovorites-list.component';
import { DayForecastComponent } from './day-forecast/day-forecast.component';
import { WeatherService } from './services/weather.service';
import { FavoriteCityListService } from './services/favorite-city-list.service';
import { HttpErrorInterceptor } from 'src/http-interceptors/http-request-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    SearchComponent,
    LandingPageComponent,
    FooterComponent,
    LoaderComponent,
    FovoritesListComponent,
    DayForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    WeatherService,
    FavoriteCityListService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

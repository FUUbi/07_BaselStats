import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPage } from '../pages/about/about';
import { HoloLensPage } from '../pages/holo-lens/holo-lens';
import { ContactAndLinksPage } from '../pages/contact-and-links/contact-and-links';
import { ApiPage } from '../pages/api/api';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AboutPage,
        ContactAndLinksPage,
        HoloLensPage,
        MapPage,
        ApiPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ComponentsModule,
        ChartsModule,
        BrowserAnimationsModule,
        NgxChartsModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AboutPage,
        ApiPage,
        HoloLensPage,
        ContactAndLinksPage,
        MapPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}

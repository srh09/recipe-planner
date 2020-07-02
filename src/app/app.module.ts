import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AngularFireModule } from "@angular/fire"
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { AngularFireStorageModule } from "@angular/fire/storage"
import { AngularFireAuthModule } from "@angular/fire/auth"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { SharedModule } from "./shared/shared.module"
import { HomePageComponent } from "./home-page/home-page.component"
import { environment } from "src/environments/environment"

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

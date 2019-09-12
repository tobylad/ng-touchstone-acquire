import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { TargetComponent } from './target/target.component';
import { TileContentComponent } from './tile-content/tile-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TitleComponent,
    TargetComponent,
    TileContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

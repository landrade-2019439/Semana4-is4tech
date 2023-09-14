import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberFormatDirective } from './directives/number-format.directive';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberFormatDirective,
    HoverHighlightDirective,
    CopyToClipboardDirective,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

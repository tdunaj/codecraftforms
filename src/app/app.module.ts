import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveModelFormComponent } from './reactive-model-form/reactive-model-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent,
    ReactiveModelFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

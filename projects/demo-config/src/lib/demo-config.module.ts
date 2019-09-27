import { NgModule } from '@angular/core';


 
import { MatCardModule, MatMenuModule, MatIconModule,  MatButtonModule, MatGridListModule, MatDividerModule, MatListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { DemoConfigComponent } from './demo-config.component';
import { UXP_ENTRY_COMPONENT, UXP_ENTRY_CONFIGURATION_COMPONENT } from '@uxp/framework';
import { DemoConfigConfigurationComponent } from './demo-config-configuration/demo-config-configuration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox'

import {Component} from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [DemoConfigComponent, DemoConfigConfigurationComponent],
  imports: [FormsModule , 
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
   
   
    CommonModule],
  entryComponents: [DemoConfigComponent, 
    DemoConfigConfigurationComponent],
  providers: [
    { provide: UXP_ENTRY_COMPONENT, useValue: DemoConfigComponent  },
    { provide: UXP_ENTRY_CONFIGURATION_COMPONENT, useValue: DemoConfigConfigurationComponent},
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],

  
  exports: [DemoConfigComponent, DemoConfigConfigurationComponent]
})
export class DemoConfigModule { }


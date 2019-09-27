import { NgModule } from '@angular/core';
import { WelcomeComponent } from './widget/welcome.component';
import { UXP_ENTRY_COMPONENT, UXP_ENTRY_CONFIGURATION_COMPONENT } from '@uxp/framework';
import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatGridListModule, MatDividerModule, MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AppNamePipe } from './welcome.pipe';
import { WelcomeConfigurationComponent } from './configuration/welcome-configuration.component';


@NgModule({
  declarations: [WelcomeComponent, AppNamePipe, WelcomeConfigurationComponent],
  imports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    MatDividerModule,
    MatListModule
  ],
  entryComponents: [
    WelcomeComponent,
    WelcomeConfigurationComponent
  ],
  providers: [
    { provide: UXP_ENTRY_COMPONENT, useValue: WelcomeComponent },
    { provide: UXP_ENTRY_CONFIGURATION_COMPONENT, useValue: WelcomeConfigurationComponent }
  ],
  exports: [WelcomeComponent, WelcomeConfigurationComponent]
})
export class WelcomeModule { }

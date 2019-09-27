import { NgModule } from '@angular/core';
import { UxpAppModule } from '@uxp/framework';



@NgModule({
  imports: [UxpAppModule.mainHybridApplication()],
  exports: [],
  declarations: [],
  providers: [
  
  ],
  entryComponents: [],
  bootstrap: []
})
export class AppModule {
  ngDoBootstrap() {}
}

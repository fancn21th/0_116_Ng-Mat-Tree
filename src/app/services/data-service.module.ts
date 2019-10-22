import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataServiceService } from "./data-service.service";
import { ModuleWithProviders } from "@angular/compiler/src/core";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})

// shared module
export class DataServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataServiceModule,
      providers: [DataServiceService]
    };
  }
}

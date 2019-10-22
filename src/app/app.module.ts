import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { TreeFolderComponent } from "./component/tree-folder/tree-folder.component";
import { HttpClientModule } from "@angular/common/http";
import { DataServiceModule } from "./services/data-service.module";
import { DataServiceService } from "./services/data-service.service";

@NgModule({
  declarations: [AppComponent, TreeFolderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    DataServiceModule
  ],
  providers: [
    {
      provide: DataServiceService,
      useClass: DataServiceService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "./services/data-service.service";
import { Folder } from "./model/folder";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  folders: Folder[];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.getFolders();
  }

  getFolders(): void {
    this.dataService.getAllFolders().subscribe(folders => {
      this.folders = folders;
    });
  }
}

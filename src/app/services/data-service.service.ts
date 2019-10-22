import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Folder } from "../model/folder";
import { Observable } from "rxjs";

@Injectable()
export class DataServiceService {
  private folderUrl = "http://localhost:3000/folders"; // URL to web api

  constructor(private http: HttpClient) {}

  getAllFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.folderUrl);
  }
}

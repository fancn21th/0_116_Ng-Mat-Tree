import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Folder } from "../model/folder";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  private folderUrl = "http://localhost:3000/folders"; // URL to web api

  constructor(private http: HttpClient) {}

  getAllFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(this.folderUrl);
  }
}

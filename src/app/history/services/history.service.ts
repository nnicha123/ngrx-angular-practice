import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { History } from "../definitions/module.definitions";

@Injectable({
  providedIn:'root'
})
export class HistoryService {
  private baseUrl = "http://localhost:8080/api/v1/histories";

  constructor(private httpClient:HttpClient){}
  getHistoryList():Observable<History[]>{
    return this.httpClient.get<History[]>(`${this.baseUrl}`);
  }

  createHistory(history:History):Observable<any>{
    return this.httpClient.post<History>(`${this.baseUrl}`,history);
  }

  getHistoryById(id:string):Observable<History> {
    return this.httpClient.get<History>(`${this.baseUrl}/${id}`);
  }

  updateHistory(id:string,history:History):Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,history);
  }

  deleteHistory(id:string):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
import { Injectable } from '@angular/core';
import { REQUESTS } from './mock-requests';
import { Request } from './request.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getRequests(): Observable<Request[]> {
    // return of(REQUESTS);
    return this.http.get<Request[]>(`${this.url}/requests`);
  }
  getRequestsPreview(): Observable<Request[]> {
     return of(REQUESTS);
  }
    //delete
    deleteRequest(id: number): Observable<any> {
      console.log('en borrado');
      
      return this.http.delete(`${this.url}/request/${id}`, this.httpOptions);
    }
  
  getRequest(id: number): Observable<Request> {
    return this.http.get<Request>(`${this.url}/requests/${id}`);
  }

  getResourceByDestination(destination:string): Observable<Request[]> {
    console.log("aquiii>>>>>>",destination)
   
    return this.http.get<Request[]>(`${this.url}/destination/${destination}`);
  }
  reserveRequest(request: Request): Observable<any> {
    return this.http.put(`${this.url}/reserve`, request, this.httpOptions);
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(`${this.url}/requests`, request, this.httpOptions);
  }

}

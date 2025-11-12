import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll.models';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  private baseUrl='http://localhost:8090/api/polls';


  constructor(private http: HttpClient){

  }



  createPoll(Poll : Poll): Observable<Poll>{
    return this.http.post<Poll>(this.baseUrl,Poll);
  }

  getPolls(): Observable<Poll[]>{
    return this.http.get<Poll[]>(this.baseUrl);
  }

  vote(pollId : number, optionIndex: number): Observable<void>
{
  const url = `${this.baseUrl}/vote`
  return this.http.post<void>(url, { pollId, optionIndex });
}  
}

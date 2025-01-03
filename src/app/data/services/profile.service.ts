import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http: HttpClient = inject(HttpClient)

  baseApiUrl: string = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() { 
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }
}

// some changes
// some more changes
// one more change in the same commit push to origin
// change 

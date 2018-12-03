import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private api: ApiService) { }

  getProfile(id: number = 1): Observable<any> {
    return this.api.get(`/profiles/${id}`);
  }

  getActiveProfile(): Observable<any> {
    return this.api.get(`/profiles?active=true`);
  }
  
  getAllProfiles(): Observable<any> {
    return this.api.get(`/profiles`);
  }

  updateProfile(profile: Profile): Observable<any> {
    return this.api.post('/profiles', profile);
  }
}

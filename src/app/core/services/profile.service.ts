import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';

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

  createProfile(profile: Profile): Observable<any> {
    return this.api.post('/profiles', profile);
  }

  updateProfile(profile: Profile): Observable<any> {
    return this.api.put('/profiles/' + profile.id, profile);
  }

  removeProfile(id: number): Observable<any> {
    return this.api.delete('/profiles/' + id);
  }
}

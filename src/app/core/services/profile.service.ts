import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private api: ApiService) { }

  getProfile(id: number = 1) {
    return this.api.get(`/profiles/${id}`);
  }

  getActiveProfile() {
    return this.api.get(`/profiles?active=true`);
  }
  
  getAllProfiles(): Observable<any> {
    return this.api.get(`/profiles`);
  }

  updateProfile(profile: Profile) {
    return this.api.post('/profiles', profile);
  }
}

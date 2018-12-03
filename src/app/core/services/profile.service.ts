import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

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
}

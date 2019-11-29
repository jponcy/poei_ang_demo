import { User, UserListDTO } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = `${environment.apiUrl}/user`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  getAll() {
    return this.http.get<UserListDTO[]>(URL);
  }

  getOne(id: number) {
    return this.http.get<User>(`${URL}/${id}`);
  }
}

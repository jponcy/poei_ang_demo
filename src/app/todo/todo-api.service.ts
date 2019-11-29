import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo, TodoFormDTO } from './todo';

const URL = `${environment.apiUrl}/todo`;

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(URL);
  }

  getOne(id: number) {
    // return this.http.get<Todo>(URL + '/' + id);
    return this.http.get<Todo>(`${URL}/${id}`);
  }

  deleteOne(id: number) {
    return this.http.delete<void>(`${URL}/${id}`);
  }

  createOne(data: TodoFormDTO) {
    return this.http.post<Todo>(URL, data);
  }

  updateOne(id: number, data: TodoFormDTO) {
    return this.http.put<Todo>(`${URL}/${id}`, data);
  }

  purge() {
    return this.http.delete<Todo[]>(URL);
  }
}

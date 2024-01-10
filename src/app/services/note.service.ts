import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../components/models/list.interface';
import { Note } from '../components/models/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  http = inject(HttpClient);

  constructor() { }

  create(value: string) {
    return this.http.post<Note>('http://127.0.0.1:8000/api/notes', {contenuDeLaNote: value})
  }

  update(value: string, id: number) {
    return this.http.post<Note>('http://127.0.0.1:8000/api/notes/'+id, {content: value});
  }

  list() {
    return this.http.get<List<Note>>('http://127.0.0.1:8000/api/notes');
  }

  get(id: number) {
    return this.http.get<Note>('http://127.0.0.1:8000/api/notes/'+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  http = inject(HttpClient);

  constructor() { }

  create(value: string) {
    return this.http.post('http://127.0.0.1:8000/api/notes', {contenuDeLaNote: value})
  }

  update(value: string, id: number) {
    return this.http.post('http://127.0.0.1:8000/api/notes/'+id, {content: value})
  }

  list() {
    return this.http.get('http://127.0.0.1:8000/api/notes');
  }
}

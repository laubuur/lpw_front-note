import { Component, inject } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Note } from '../models/note.interface';
import { List } from '../models/list.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, CommonModule, DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  service = inject(NoteService);

  notes: Note[] = [];

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.service.list().subscribe((result) => {
      this.notes = result.result;
    })
  }
}

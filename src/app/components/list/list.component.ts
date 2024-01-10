import { Component, inject } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, CommonModule, DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  service = inject(NoteService);

  notes: any[] = [];

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.service.list().subscribe((result: any) => {
      this.notes = result.result;
    })
  }
}

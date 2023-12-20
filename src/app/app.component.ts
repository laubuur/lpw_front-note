import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NoteComponent } from './components/note/note.component';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  service = inject(NoteService);

  notes: any[] = [];

  ngOnInit() {
    this.getAllNotes();
  }

  newNote() {
    this.service.create('test depuis angular').subscribe(result => {
    })
  }

  getAllNotes() {
    this.service.list().subscribe((result: any) => {
      this.notes = result.result;
    })
  }
}

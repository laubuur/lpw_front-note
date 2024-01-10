import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NoteComponent } from './components/note/note.component';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NoteComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  service = inject(NoteService);
  router = inject(Router);

  newNote() {
    this.service.create('a').subscribe(
      (result: any) => {
        this.router.navigateByUrl('note/'+result.id);
      }
    );
  }

}

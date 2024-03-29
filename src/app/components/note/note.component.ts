import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { NoteService } from '../../services/note.service';
import { Note } from '../models/note.interface';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, CKEditorModule, FormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  public editor = BalloonEditor;

  content: string = '';

  route = inject(ActivatedRoute);
  service = inject(NoteService);

  note?: Note; 

  timeout: any;

  test(){
    console.log(this.content)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id') !== null) {
        this.getNote(Number(params.get('id')));
      }
    })
  }

  private getNote(id: number) {
    this.service.get(id).subscribe(result => {
      this.note = result;
    })
  }

  updateNote() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }  

    this.timeout = setTimeout(() => {
      this.callUpdate();
    }, 500);
  }

  private callUpdate() {
    if (this.note) {
      this.service.update(this.note.content, this.note.id).subscribe();
    }
    
  }


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, CKEditorModule, FormsModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  public editor = BalloonEditor;

  content: string = '<h1>bonjour</h1>';

  test(){
    console.log(this.content)
  }
}

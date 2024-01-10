import { Routes } from '@angular/router';
import { NoteComponent } from './components/note/note.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    { path: 'note/:id', component: NoteComponent },
    { path: '**', component: ListComponent}
];

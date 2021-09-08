import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from '../../../models/note';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() note: Note = {
    noteId: '',
    title: 'Error',
    content: 'Error',
  };

  constructor(public noteDialog: MatDialog) {}

  ngOnInit(): void {}

  openNoteDialog() {
    let dialog = this.noteDialog.open(NoteDialogComponent, {
      data: {
        title: 'naslov',
        content: `dfdfdcdw
      
  ergfoi7h7ahdg8io9vjhadfukilbvhauifgha;uidrfbvhauidrhgpiuaerdrsghk`,
        delete: true,
      },
      width: '900px',
      height: '700px',
    });
    //select!!!!!!!!!!

    const subscriptionSave = dialog.componentInstance.onSave.subscribe(
      (data: { noteID: string; title: string; content: string }) => {
        //update deselect
        dialog.close();
      }
    );

    const subscriptionCancel = dialog.componentInstance.onCancel.subscribe(
      () => {
        //deselect
        dialog.close();
      }
    );

    const subscriptionDelete = dialog.componentInstance.onDelete.subscribe(
      (noteId) => {
        alert('deleted');
        //desecelt+//delete
        dialog.close();
      }
    );

    dialog.afterClosed().subscribe((result) => {
      subscriptionSave.unsubscribe();
      subscriptionCancel.unsubscribe();
      subscriptionDelete.unsubscribe();
    });
  }
}

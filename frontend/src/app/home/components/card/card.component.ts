import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from '../../../models/note';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() note: Note = {
    id: -1,
    title: 'Error',
    content: 'Error',
  };

  constructor(public accountDialog: MatDialog) {}

  ngOnInit(): void {}

  openNoteDialog() {
    let dialog = this.accountDialog.open(NoteDialogComponent, {
      data: { title: 'naslov',content:`dfdfdcdwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww < wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
      wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
      w
      w
      w
        
  
      w
      w
      w
      w
      w
      w
      w
      w
  
      w
      w
      w
      w
  
      w
      ww
      w
      w
      w
      w
      w
      w
      w
      w
      w
  
      wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
      wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdnfuifehg78owyhr7iouyghykjzosergfoi7h7ahdg8io9vjhadfukilbvhauifgha;uidrfbvhauidrhgpiuaerdrsghk` },
      width: '900px',
      height:"700px",
    });
    dialog.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

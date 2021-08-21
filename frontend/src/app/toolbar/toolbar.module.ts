import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponentComponent } from './components/toolbar-component/toolbar-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ToolbarComponentComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, FontAwesomeModule],
  exports: [ToolbarComponentComponent],
})
export class ToolbarModule {}

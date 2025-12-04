import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-modal',
  templateUrl: './bottom-modal.component.html',
  styleUrls: ['./bottom-modal.component.scss'],
  imports: [CommonModule]
})
export class BottomModalComponent  implements OnInit {
  @Output() closeModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}



  close() {
    this.closeModal.emit();
  }
}

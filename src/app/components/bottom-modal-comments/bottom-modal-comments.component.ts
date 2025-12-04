import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bottom-modal-comments',
  templateUrl: './bottom-modal-comments.component.html',
  styleUrls: ['./bottom-modal-comments.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class BottomModalCommentsComponent  implements OnInit {
  @Output() closeModal = new EventEmitter<void>();

  @Input() user!: string;
  @Input() time!: string;
  @Input() text!: string;

  @Input() comments: { user: string; text: string }[] = [];

  newComment = "";

  sendComment() {
    if (!this.newComment.trim()) return;

    this.comments.push({
      user: "Tú",
      text: this.newComment
    });

    this.newComment = "";
  }

  constructor() { }

  ngOnInit() {}

  close() {
    this.closeModal.emit();
  }
}

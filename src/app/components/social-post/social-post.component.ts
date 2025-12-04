import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BottomModalComponent } from "../bottom-modal/bottom-modal.component";
import { BottomBarComponent } from "../bottom-bar/bottom-bar.component";
import { BottomModalCommentsComponent } from "../bottom-modal-comments/bottom-modal-comments.component";

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.scss'],
  imports: [CommonModule, BottomModalComponent, BottomModalCommentsComponent]
})
export class SocialPostComponent implements AfterViewInit {
  @Input() user!: string;
  @Input() time!: string;
  @Input() text!: string;
  @Input() images: string[] = [];
  @Input() likes = 0;
  @Input() comments = 0;
  @Input() showComments = false;
  @ViewChild('carousel') carouselRef!: ElementRef<HTMLElement>;

  currentIndex = 0;
  show = false;

  ngAfterViewInit(): void {
    const carousel = this.carouselRef?.nativeElement;
    if (!carousel) return;
    carousel.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  scrollTo(index: number) {
    this.currentIndex = index;
    const carousel = this.carouselRef?.nativeElement;
    if (!carousel) return;
    const itemWidth = carousel.clientWidth;
    carousel.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
  }

  onScroll() {
    const carousel = this.carouselRef?.nativeElement;
    if (!carousel) return;
    const itemWidth = carousel.clientWidth || 1;
    const rawIndex = carousel.scrollLeft / itemWidth;
    const newIndex = Math.round(rawIndex);
    if (newIndex !== this.currentIndex) {
      this.currentIndex = newIndex;
    }
  }
}

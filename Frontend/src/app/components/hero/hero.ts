import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Slide } from '../../types/product';
import { sliderData } from '../../data/productsDummyData';

@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero implements OnInit, OnDestroy {
  slider: Slide[] = sliderData;

  currentSlide = 0;
  autoPlayInterval: any;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.ngZone.runOutsideAngular(() => {
      this.autoPlayInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.currentSlide = (this.currentSlide + 1) % this.slider.length;
          this.cdr.detectChanges();
        });
      }, 5000);
    });
  }

  handleSlideChange(index: number) {
    this.currentSlide = index;
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }

  getTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  ngOnDestroy() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }
}

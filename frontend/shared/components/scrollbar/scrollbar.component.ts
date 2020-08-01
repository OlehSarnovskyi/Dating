import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {fromEvent, Subscription} from "rxjs";
import {startWith} from "rxjs/operators";

@Component({
  selector: 'app-scrollbar',
  template: `
    <div class="scrollPath" #scrollPath></div>
    <div class="progressBar" #progressBar></div>
  `,
  styleUrls: ['./scrollbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ScrollbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('progressBar') progressBarRef: ElementRef
  @ViewChild('scrollPath') scrollPathRef: ElementRef

  subs$ = new Subscription()

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    let totalHeight = this.document.body.scrollHeight - window.innerHeight

    this.subs$.add(fromEvent(window, 'scroll')
      .pipe(startWith(true))
      .subscribe(() => {
        let progressHeight = (window.pageYOffset / totalHeight) * 100
        this.renderer.setStyle(this.progressBarRef.nativeElement, 'height', `${progressHeight}%`)
      }))

    this.subs$.add(fromEvent(this.progressBarRef.nativeElement, 'click')
      .subscribe(() => {
        const lessThanCurrentY = window.pageYOffset - 100
        window.scroll(0, lessThanCurrentY)
      }))

    this.subs$.add(fromEvent(this.scrollPathRef.nativeElement, 'click')
      .subscribe(() => {
        const moreThanCurrentY = window.pageYOffset + 100
        window.scroll(0, moreThanCurrentY)
      }))
  }

  ngOnDestroy() {
    this.subs$.unsubscribe()
  }
}

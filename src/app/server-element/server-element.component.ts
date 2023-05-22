import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation:ViewEncapsulation.Emulated //-> ANGULAR DEFAULT ISOLATED FOR COMPONENTS
  // encapsulation:ViewEncapsulation.None //-> RESPECTS DEFAULT CSS (DISABLES ENCAPSULATION)
  encapsulation: ViewEncapsulation.ShadowDom, //-> SAME AS EMULATED ONLY IN BROWSERS WHICH SUPPORT IT....DIG DEEPER
})
export class ServerElementComponent
  implements OnInit, AfterViewChecked, AfterContentInit
{
  // YOU CAN ASSIGN AN ALIAS TO THE INPUT, MAKE SURE IT IS UPDATED IN HTML IN THIS CASE srvElement is the alias for element
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges() {
    console.log('ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
    console.log(
      'Text Content of Paragraph:',
      this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentInit(): void {
    console.log(
      'Text Content of Paragraph:',
      this.paragraph.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log(this.header.nativeElement.textContent);
  }
}

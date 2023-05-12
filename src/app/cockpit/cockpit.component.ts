import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  // EVENTS
  @Output() serverCreatedEmitter = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // ALIAS
  @Output('bpcreated') blueprintCreatedEmitter = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // ORIGINAL VARIABLES FOR 2 WAY BINDING
  // newServerName = '';
  // newServerContent = '';

  // USING NOW REFERENCES IMPORTANT JUST FOR READING
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log(this.serverContentInput.nativeElement);
    this.serverCreatedEmitter.emit({
      // serverName: this.newServerName, // USING OLD METHOD WITH 2 WAY BINDING
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreatedEmitter.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}

// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
// The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild()
// (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

// If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

// If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.

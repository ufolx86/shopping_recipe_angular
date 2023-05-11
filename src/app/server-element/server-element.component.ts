import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  // YOU CAN ASSIGN AN ALIAS TO THE INPUT, MAKE SURE IT IS UPDATED IN HTML IN THIS CASE srvElement is the alias for element
  @Input('srvElement') element: { type: string; name: string; content: string };
}

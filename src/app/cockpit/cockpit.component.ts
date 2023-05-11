import { Component, EventEmitter, Output } from '@angular/core';

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
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreatedEmitter.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreatedEmitter.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}

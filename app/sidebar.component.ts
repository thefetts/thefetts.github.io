import {Component, Output, EventEmitter} from '@angular/core';
import {Section} from './types/section';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/templates/sidebar.html',
  styles: [`
    .shortcut {
      width: 50px;
      height: 50px;
      box-sizing: content-box;
      border: 3px solid brown;
      border-bottom: 0;
      background-color: #333;
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }
    
    .shortcut:last-child {
      border-bottom: 3px solid brown;
    }
    
    .shortcut img {
      width: 46px;
      height: 46px;
      position: absolute;
      left: 2px;
      top: 2px;
      background-color: #333;
    }
    
    .highlight {
      background-color: gold;
    }

    .hotkey {
      position: absolute;
      right: 2px;
      top: 2px;
      color: cornflowerblue;
      text-shadow: -1px 1px black;
    }
  `]
})

export class SidebarComponent {
  @Output() onSectionChange = new EventEmitter<string>();

  sections: [Section] = [
    {key: 'intro', hotkey: 'j', icon: 'photo.jpg', selected: true},
    {key: 'process', hotkey: 'p', icon: 'redgreenrefactor.png', selected: false},
    {key: 'frontEnd', hotkey: 'f', icon: 'chrome-512.png', selected: false},
    {key: 'backEnd', hotkey: 'b', icon: 'single_server.png', selected: false},
    {key: 'storage', hotkey: 's', icon: 'database.png', selected: false}
  ];
  section: Section = this.sections[0];

  select(sectionKey: string) {
    this.unHighlight();
    this.sections
      .filter(section => section.key === sectionKey)
      .forEach(section => section.selected = true);

    this.onSectionChange.emit(sectionKey);
  }

  unHighlight() {
    this.sections.forEach(section => section.selected = false);
  }

  onKeyup(event: any) {
    this.sections
      .filter(section => section.hotkey == event.key)
      .forEach(section => this.select(section.key));
  }
}

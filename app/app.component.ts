import {Component} from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: 'app/templates/app.html',
  styles: [`
    sidebar {
      display: inline-block;
      width: 56px;
      margin-right: 20px;
    }
  `]
})

export class AppComponent {
  section: String = 'intro';

  onSectionChange(section: String) {
    this.section = section;
  }
}

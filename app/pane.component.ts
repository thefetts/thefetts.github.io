import {Component, Input} from '@angular/core';

@Component({
  selector: 'pane',
  templateUrl: 'app/templates/pane.html',
  styles: [`
    .pane {
      color: white;
    }
  `]
})

export class PaneComponent {
  @Input() section: String;

  content = {
    intro: `I am Jordan Fallon, a senior full-stack engineer with an affinity for JavaScript`,
    process: `Test driven development, pair programming, continuous integration and continuous delivery`,
    frontEnd: `React/Redux, Angular1+2, TypeScript, CoffeeScript, jQuery and Vanilla.js`,
    backEnd: `Java Spring, Ruby on Rails, Python, PHP in a pinch`,
    storage: `Postgres, MySQL, Firebase, SOLR and GemFire`,
  };
}

import { Component } from '@angular/core';
import {InternshipEntryComponent} from "./internshipEntry2.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [InternshipEntryComponent]
})
export class AppComponent {
  title = 'app works!';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-person-reports',
  templateUrl: './person-reports.component.html',
  styleUrls: ['./person-reports.component.scss'],
})
export class PersonReportsComponent {
  public reports = [
    {
      id: 1,
      icon: 'person',
      name: 'Astro- psychological report',
    },
    {
      id: 2,
      icon: 'calendar_today',
      name: 'Monthly prediction report',
    },
    {
      id: 3,
      icon: 'domain_verification',
      name: 'Daily Prediction',
    },
    {
      id: 4,
      icon: 'favorite_border',
      name: 'Love report', 
    },
    {
      id: 1,
      icon: 'person',
      name: 'Astro- psychological report',
    },
    {
      id: 2,
      icon: 'calendar_today',
      name: 'Monthly prediction report',
    },
    {
      id: 3,
      icon: 'domain_verification',
      name: 'Daily Prediction',
    },
    {
      id: 4,
      icon: 'favorite_border',
      name: 'Love report', 
    }
  ];
}

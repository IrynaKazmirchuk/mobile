import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  public status = [
    {
      id:1,
      calendar: calendar_today,
      title: How was your day?,
      desc: Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio en urna ultrice...,
      arrow:navigate_next,

    },
    {
      id:2,
      clock: schedule,
      title: Current Transist: 3rd House,
      desc: This is demonstrate siblings, hobbies,efforts, confidence, friends and short tr...,
      arrow:navigate_next,

    },
    
  
  ]
}

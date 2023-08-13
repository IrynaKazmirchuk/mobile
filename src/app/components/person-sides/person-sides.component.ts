import { Component } from '@angular/core';

@Component({
  selector: 'app-person-sides',
  templateUrl: './person-sides.component.html',
  styleUrls: ['./person-sides.component.scss']
})
export class PersonSidesComponent {
public sides = [ 
  {
  id: 1,
  title: 'Strong side:',
  name1: 'Analytics',
  name2: 'Perfectionism',
  name3: 'Analytics',
},
{
  id: 2,
  title: 'Weak side:',
  name1: 'Perfectionism',
  name2: 'Analytics',
  // name3: undefined,
}
  
]
}

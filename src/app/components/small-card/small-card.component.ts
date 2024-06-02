import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string="https://th.bing.com/th/id/OIP.Y5dsZfsTFldh1jgIjqiOPAHaEK?w=291&h=180&c=7&r=0&o=5&pid=1.7" 
  @Input()
  cardTitle: string="novo filme da viuva negra"
  

  constructor (){}
  ngOnInit(): void {

  }

}

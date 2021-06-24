import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPill, IPlanRange } from 'src/app/interfaces';
import { Plan } from 'src/app/models/plan';
import { Pill, PlanRange } from 'src/app/models/plan-range';

@Component({
  selector: 'app-pill-container',
  templateUrl: './pill-container.component.html',
  styleUrls: ['./pill-container.component.scss']
})
export class PillContainerComponent implements OnInit {


  @Input() pillData: IPill[] = [];
  @Input() defaultSelectedPill: number = -1;
  @Output() selectPill: EventEmitter<number> =  new EventEmitter();

  pills: Pill[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pillData.forEach(pill=>{
      this.pills.push(new Pill(pill.text));
    })
    this.pills[this.defaultSelectedPill].select();
  }

  onSelect(index: number) {
    this.resetPills();
    this.pills[index].select();
    this.selectPill.emit(index)

  }

  resetPills() {
    this.pills.forEach(pill=>pill.deselect());
  }

}

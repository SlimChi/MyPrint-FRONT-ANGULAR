import {Component, Input, OnInit} from '@angular/core';
import {StatusDto} from "../../swagger/services/models/status-dto";

@Component({
  selector: 'app-status-response',
  templateUrl: './status-response.component.html',
  styleUrls: ['./status-response.component.css']
})
export class StatusResponseComponent implements OnInit{
  @Input() status: StatusDto;
  ngOnInit(): void {
  }
  getStepClass(stepIndex: number): string {
    if (stepIndex < this.status.idStatus) {
      return "step completed";
    } else if (stepIndex === this.status.idStatus) {
      return "step completed";
    } else {
      return "step";
    }
  }


}

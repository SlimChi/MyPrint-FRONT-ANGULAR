import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.css']
})
export class ConfirmRegisterComponent implements OnInit{
  onEmitStatusChange = new EventEmitter();
  ngOnInit(): void {
  }

}

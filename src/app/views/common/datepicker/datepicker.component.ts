import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
moment.locale('es-es');

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})

export class DatepickerComponent implements OnInit {
  
  inZone:boolean=false;
  showcalendar:boolean=false;
  datevalue: string;
  selected: any;
  month: any;
  weeks: any;

  constructor() {
  }

  enterZone(){
    this.inZone = true;
    console.log(this.inZone)
  }
  leaveZone(){
    this.inZone = false;
    console.log(this.inZone)
  }
  checkZone(){
    console.log(this.inZone)
    if(!this.inZone){
      this.hideCalendarf()
    }
  }

  ngOnInit() {
    this.selected = moment();
    this.selected = this._removeTime(this.selected);
    this.month = this.selected.clone();

    var start = this.selected.clone();
    start.date(1);
    this._removeTime(start.day(0));

    this._buildMonth(start, this.month);


  }

  CalendarShowHide(){
    if(this.showcalendar){
      this.showcalendar=false;
    }else{
      this.showcalendar=true;
    }
  }

  showCalendarf(){
    this.showcalendar=true;
  }
  hideCalendarf(){
    this.showcalendar=false;
  }
  
  select(day:any) {
    this.selected = day.date;
    this.datevalue = this.selected.format('DD/MM/YYYY');
    this.hideCalendarf()

  };

  _removeTime(date:any) {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  _buildMonth(start:any, month:any) {
    this.weeks = [];
    var done = false,
      date = start.clone(),
      monthIndex = date.month(),
      count = 0;
    while (!done) {
      this.weeks.push({
        days: this._buildWeek(date.clone(), month)
      });
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
  }

  _buildWeek(date:any, month:any) {
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push({
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      });
      date = date.clone();
      date.add(1, "d");
    }
    return days;
  }

  next() {
    var next = this.month.clone();
    this._removeTime(next.month(next.month() + 1).date(1));
    this.month.month(this.month.month() + 1);
    this._buildMonth(next, this.month);
  };

  previous() {
    var previous = this.month.clone();
    this._removeTime(previous.month(previous.month() - 1).date(1));
    this.month.month(this.month.month() - 1);
    this._buildMonth(previous, this.month);
  };

  

}




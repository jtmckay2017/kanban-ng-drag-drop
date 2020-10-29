import { Task } from './../models/task';
import { Injectable, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numTicketsPerBoard = 100;
  numOfColumns = 15;
  constructor() {
    for (let colIndex = 0; colIndex < this.numOfColumns; colIndex++) {
      this._kanbanModal[0].columns[colIndex] = new Column('Backlog', []);
      this._kanbanModal[1].columns[colIndex] = new Column('Backlog', []);
    }
    for (let colIndex = 0; colIndex < this.numOfColumns; colIndex++) {
      for (let index = 0; index < this.numTicketsPerBoard; index++) {
      this._kanbanModal[0].columns[colIndex].tasks[index] = new Task(index.toString(), 5, 'Jimenez Maxwell');
      }
    }
    for (let colIndex = 0; colIndex < this.numOfColumns; colIndex++) {
      for (let index = 0; index < this.numTicketsPerBoard; index++) {
      this._kanbanModal[1].columns[colIndex].tasks[index] = new Task(index.toString(), 5, 'Jimenez Maxwell');
      }
    }
  }

  private _kanbanModal: Board[] = [
    new Board('Scrum Team - Mobile App Development', []),
    new Board('Scrum Team - Mobile App Development', [])
  ];

  public getData(id): Board {
    return this._kanbanModal[id];
  }
}

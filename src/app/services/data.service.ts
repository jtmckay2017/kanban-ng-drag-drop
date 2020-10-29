import { Task } from './../models/task';
import { Injectable, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numTicketsPerCol = 10;
  numOfColumns = 15;
  numOfBoards = 10;
  constructor() {
    for (let bdIndex = 0; bdIndex < this.numOfColumns; bdIndex++) {
      this._kanbanModal[bdIndex] = new Board('Scrum Team - Mobile App Development', []);
      for (let colIndex = 0; colIndex < this.numOfColumns; colIndex++) {
        this._kanbanModal[bdIndex].columns[colIndex] = new Column('Backlog', []);
        for (let index = 0; index < this.numTicketsPerCol; index++) {
          this._kanbanModal[bdIndex].columns[colIndex].tasks[index] = new Task(index.toString(), 5, 'Jimenez Maxwell');
        }
      }
    }
  }

  private _kanbanModal: Board[] = [];
  public getData(): Board[] {
    return this._kanbanModal;
  }
}

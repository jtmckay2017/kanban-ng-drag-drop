import { Task } from './../models/task';
import { Injectable, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { Column } from '../models/column';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    for (let colIndex = 0; colIndex < 4; colIndex++) {
      for (let index = 0; index < 100; index++) {
      this._kanbanModal[0].columns[colIndex].tasks[index] = new Task(index.toString(), 5, 'Jimenez Maxwell');
      }
    }
    for (let colIndex = 0; colIndex < 4; colIndex++) {
      for (let index = 0; index < 100; index++) {
      this._kanbanModal[1].columns[colIndex].tasks[index] = new Task(index.toString(), 5, 'Jimenez Maxwell');
      }
    }
  }

  private _kanbanModal: Board[] = [
    new Board('Scrum Team - Mobile App Development', [
      new Column('Backlog', [
        new Task('Sit enim dolore sint voluptate sunt nisi id est eu', 5, ''),
        new Task('Sunt nisi id est eu dolore eu esse ullamco. Amet ut', 5),
        new Task('Cillum ut do mollit ut aute nisi consectetur duis ut velit eiusmod aliqua elit', 3),
        new Task('Velit fugiat pariatur amet adipisicing ad ex occaecat officia', 1)
      ]),
      new Column('Todo', [
        new Task('Tempor anim aute elit adipisicing aliqua in eiusmod laboris amet', 8),
        new Task('Est exercitation Lorem exercitation incididunt tempor velit', 13),
        new Task('Lorem consequat culpa minim. Ad voluptate laboris ullamco laboris reprehenderit', 5)
      ]),
      new Column('InProgress', [
        new Task('Ad laboris aute dolor voluptate commodo dolore', 5, 'Bertie Kidd'),
        new Task('Ad exercitation non consequat cupidatat dolor adipisicing', 1, 'Kane Foley')
      ]),
      new Column('Done', [
        new Task('Adipisicing sunt occaecat et sunt reprehenderit magna fugiat', 5, 'Jimenez Maxwell'),
        new Task('Proident ut adipisicing est ex duis. Excepteur aliquip nostrud', 3, 'Kane Foley'),
        new Task('Commodo nulla nisi consectetur amet incididunt cupidatat in', 1, 'Linda Campbell'),
      ]),
    ]),
    new Board('Scrum Team - Mobile App Development', [
      new Column('Backlog', [
        new Task('Sit enim dolore sint voluptate sunt nisi id est eu', 5, ''),
        new Task('Sunt nisi id est eu dolore eu esse ullamco. Amet ut', 5),
        new Task('Cillum ut do mollit ut aute nisi consectetur duis ut velit eiusmod aliqua elit', 3),
        new Task('Velit fugiat pariatur amet adipisicing ad ex occaecat officia', 1)
      ]),
      new Column('Todo', [
        new Task('Tempor anim aute elit adipisicing aliqua in eiusmod laboris amet', 8),
        new Task('Est exercitation Lorem exercitation incididunt tempor velit', 13),
        new Task('Lorem consequat culpa minim. Ad voluptate laboris ullamco laboris reprehenderit', 5)
      ]),
      new Column('InProgress', [
        new Task('Ad laboris aute dolor voluptate commodo dolore', 5, 'Bertie Kidd'),
        new Task('Ad exercitation non consequat cupidatat dolor adipisicing', 1, 'Kane Foley')
      ]),
      new Column('Done', [
        new Task('Adipisicing sunt occaecat et sunt reprehenderit magna fugiat', 5, 'Jimenez Maxwell'),
        new Task('Proident ut adipisicing est ex duis. Excepteur aliquip nostrud', 3, 'Kane Foley'),
        new Task('Commodo nulla nisi consectetur amet incididunt cupidatat in', 1, 'Linda Campbell'),
      ]),
    ])
  ];

  public getData(id): Board {
    return this._kanbanModal[id];
  }
}

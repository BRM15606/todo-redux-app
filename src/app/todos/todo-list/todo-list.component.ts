import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos as FiltrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  filtroActual: FiltrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(
      ({todos, filtro}: AppState) => {
        this.todos = todos;
        this.filtroActual = filtro;
      });
  }
}

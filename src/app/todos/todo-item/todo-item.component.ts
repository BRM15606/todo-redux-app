import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @ViewChild('inputFisico') inputFisico: ElementRef;

  checkCompletado: FormControl;

  inputText: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.checkCompletado = new FormControl( this.todo.completado);
    this.inputText = new FormControl(this.todo.texto, Validators.required);
    this.checkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    })
  }

  editar() {
    this.editando = true;
    this.inputText.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.inputText.invalid || this.inputText.value === this.todo.texto) {
      return;
    }
    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.inputText.value
      })
    );
  }

  borrar() {
    this.store.dispatch(actions.borrar({id : this.todo.id}));
  }
}

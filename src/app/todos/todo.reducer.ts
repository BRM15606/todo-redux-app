import { ActionCreator, createReducer, on } from '@ngrx/store';
import * as actions from "./todo.actions";
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de IronMan'),
  new Todo('Robar escudo al cap'),
];

const _todoReducer = createReducer(estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(actions.borrar, (state, { id }) => state.filter((todo: Todo) => todo.id !== id)),

  on(actions.limpiarCompletados, (state) => state.filter((todo: Todo) => !todo.completado)),

  on(actions.toggle, (state, { id }) => {
    return state.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      }
      return todo;
    });
  }),

  on(actions.toggleAll, (state, { completado }) => {
    return state.map((todo: Todo) => {
      return {
        ...todo,
        completado
      };
    });
  }),

  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto
        };
      }
      return todo;
    });
  }),
);

export function todoReducer(state: Todo[], action: ActionCreator): Todo[] {
  return _todoReducer(state, action);
}

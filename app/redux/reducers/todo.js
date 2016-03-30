export const ADD_TODO = 'TODO/ADD_TODO';
export const DELETE_TODO = 'TODO/DELETE_TODO';
export const EDIT_TODO = 'TODO/EDIT_TODO';
export const COMPLETE_TODO = 'TODO/COMPLETE_TODO';
export const COMPLETE_ALL = 'TODO/COMPLETE_ALL';
export const CLEAR_COMPLETED = 'TODO/CLEAR_COMPLETED';

const initialState = [
  {
    text: 'Intial Todo',
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );
    case EDIT_TODO:
      return state.map((todo) => {
        const newtoDo = todo.id === action.id ?
            Object.assign({}, todo, { text: action.text }) :
            todo;
        return newtoDo;
      }
    );
    case COMPLETE_TODO: {
      return state.map((todo) => {
        const newtoDo = todo.id === action.id ?
            Object.assign({}, todo, { completed: !todo.completed }) :
            todo;
        return newtoDo;
      }
      );
    }
    case COMPLETE_ALL: {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }));
    }
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
}
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}

export function editTodo(id, text) {
  return { type: EDIT_TODO, id, text };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function completeAll() {
  return { type: COMPLETE_ALL };
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED };
}

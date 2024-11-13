import { combineReducers } from 'redux';
import TaskStorageController from '../TaskStorageController';
import Task from '../Task';

const controller = new TaskStorageController();

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = new Task(action.payload.title, action.payload.body);
      const updatedState = [
        ...state,
        newTask,
      ];
      controller.addTask(newTask);
      return updatedState;
    }
    case 'EDIT_TASK': {
      const updatedState = state.map((task, idx) => {
        if (idx === action.payload.index) {
          return new Task(action.payload.newTitle, action.payload.newBody);
        }
        return task;
      });
      controller.editTask(action.payload.index, action.payload.newTitle, action.payload.newBody); 
      return updatedState;
    }
    case 'DELETE_TASK': {
      const newState = state.filter((_, idx) => idx !== action.payload.index);
      controller.delTask(action.payload.index);
      return newState;
    }
    case 'MOVE_TASK': {
      const { oldIndex, newIndex } = action.payload;
      const movedTask = state[oldIndex];
      let newState = [...state];
      newState.splice(oldIndex, 1); 
      newState.splice(newIndex, 0, movedTask); 
      
      controller.moveTask(oldIndex, newIndex);

      return newState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
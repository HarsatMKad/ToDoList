import { createStore } from 'redux';
import rootReducer from './reducers';
import TaskStorageController from './TaskStorageController';

const controller = new TaskStorageController();
const persistedState = controller.getTaskList() || [];

const store = createStore(rootReducer, { tasks: persistedState });

export default store;
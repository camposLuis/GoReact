import { createStore, compose } from 'redux';
import reducers from './reducers';

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : createStore;

const store = createStore(reducers, compose(createAppropriateStore(...[])));

export default store;

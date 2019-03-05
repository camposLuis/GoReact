import { combineReducers } from 'redux';

import users from './users';
import modal from './modal';

const reducers = combineReducers({ users, modal });

export default reducers;

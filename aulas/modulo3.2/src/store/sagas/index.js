import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorites';

import { Types as FavoritesTypes } from '../ducks/favorites';

export default function* rootSaga() {
  yield all([takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite)]);
}

import { call, put } from "redux-saga/effects";
import api from "axios";
import { Creators as RepositoriesActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(
      api.get,
      "https://api.github.com/users/camposLuis/repos"
    );

    yield put(RepositoriesActions.successRepos(response.data));
  } catch (err) {
    yield put(RepositoriesActions.failureRepos());
  }
}

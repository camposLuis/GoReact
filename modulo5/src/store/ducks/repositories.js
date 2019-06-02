/**
 * Types
 */
export const Types = {
  REQUEST: "REPOS_REQUEST",
  SUCCESS: "REPOS_SUCCESS",
  FAILURE: "REPOS_FAILURE"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  requestRepos: () => ({
    type: Types.REQUEST
  }),

  successRepos: data => ({
    type: Types.SUCCESS,
    payload: { data }
  }),

  failureRepos: () => ({
    type: Types.FAILURE
  })
};

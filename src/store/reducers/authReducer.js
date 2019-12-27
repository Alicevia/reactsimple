import * as TYPES from '../action-types'

let initState = {
  token: ''
}

export default function auth(state=initState, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // case TYPES.GET_USER_INFO:
    //   state = { ...state, ...action.data }
    //   break;
    // case TYPES.GET_USER_INFO:
    //   state = { ...state, ...action.data }
    //   break;
    // case TYPES.GET_USER_INFO:
    //   state.msg = action.msg
    //   break;
    // case TYPES.GET_USER_INFO:
    //   state = { ...initState };
    //   break;
  }
  return state
}
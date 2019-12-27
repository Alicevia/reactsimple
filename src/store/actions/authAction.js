import * as TYPES from '../action-types'

export default  {
  getUserInfo(payload){
    return async (dispatch,getState) =>{
      //getState是一个函数执行会获得state
      let {data} = await reqUserInfo(payload)
      //根据返回值派发不同的action
      dispatch({
        type:TYPES.GET_USER_INFO,
        data
      })
    }
  }
}
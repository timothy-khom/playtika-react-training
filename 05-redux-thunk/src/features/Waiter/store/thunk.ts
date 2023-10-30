import {
  createItemAction,
  removeItemAction,
  updateItemAction,
  getListActionLoading,
  getListActionSuccess,
  getListActionError,
} from "./actions";
import {WaiterApi} from "../api/server";
import {WaiterI} from "../type";

export function getList() {
  return (dispatch: any) => {
    dispatch(getListActionLoading())
    WaiterApi
        .getList()
        .then((waiterList) => {
          dispatch(getListActionSuccess(waiterList))
        })
        .catch((error) => {
          dispatch(getListActionError(error))
        })
  }
}

export function removeItem(id: number) {
  return (dispatch: any) => {
    WaiterApi.delete(id).then(() => {
      dispatch(removeItemAction(id))
    })
  }
}

export function saveItem(waiter: WaiterI) {
  return (dispatch: any) => {
    if (waiter.id) {
      WaiterApi.update(waiter.id, waiter).then((updatedWaiter) => {
        dispatch(updateItemAction(updatedWaiter))
      })
    } else {
      WaiterApi.create(waiter).then((newWaiter) => {
        dispatch(createItemAction(newWaiter))
      })
    }
  }
}

// dispatch(getList()) -> f -> thunk -> f(dispatch, getState) -> dispatch({}) -> {} -> reducer -> state
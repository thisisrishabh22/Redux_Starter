import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import store from "./store";

store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch({
  type: BUG_ADDED,
  payload: {
    description: "Bugg 1",
  },
});

console.log(store.getState());

store.dispatch({
  type: BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());

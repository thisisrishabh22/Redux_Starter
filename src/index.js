import { bugAdded, bugRemoved, bugResolved } from "./actionConstructor";
import store from "./store";

store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

store.dispatch(bugAdded("Bug 2"));

console.log(store.getState());

store.dispatch(bugRemoved(1));

console.log(store.getState());

store.dispatch(bugResolved(2));
console.log(store.getState());

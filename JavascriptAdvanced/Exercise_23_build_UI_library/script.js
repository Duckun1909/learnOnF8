import {html} from "./core.js"
import {attach} from "./store.js"
import todo from "./component/todo.js"
import dispatch from "./store.js"

attach(todo, document.querySelector("#root"))





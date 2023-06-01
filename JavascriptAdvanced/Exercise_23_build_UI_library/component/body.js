import {html} from "../core.js"
import { bodyItem } from "./todoItem.js"

export default function body(todos, editIndex, filter, filters){
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox"
                ${todos.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all" onclick="dispatch('ChekedToggle')">Mark all as complete</label>
            <ul class="todo-list">
                ${
                    todos.filter(filters[filter])
                    .map((todo, index) => bodyItem(todo, index, editIndex))
                }
            </ul>
        </section>
    `
}
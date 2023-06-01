import {html} from "../core.js"

export function bodyItem(todo, index, editIndex){
    return html`
        <li class="${todo.isCompleted && 'completed' || index===editIndex && 'editing'}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.isCompleted && 'checked'}
                    onclick = "dispatch('SwitchCompleted', ${index})"
                >
                <label ondblclick="dispatch('StartEdit', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('REMOVE', ${index})"></button>
            </div>
            <input class="edit" value="${todo.title}" 
            onkeyup="if(event.keyCode===13){dispatch('Save', this.value.trim())}">
        </li>
    `
}
import {html} from "../core.js"

export default function footer(todos, filter ,filters){
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                ${
                    Object.keys(filters).map(fill => {
                        return `<li onclick="dispatch('Filters', '${fill}')">
                            <a class="${fill === filter && 'selected'}" >${fill}</a>
                        </li>`
                    })
                }
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed" onclick="dispatch('ClearCompleted')">Clear completed</button>
        </footer>
    `
}
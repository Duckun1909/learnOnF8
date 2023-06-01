import { html } from "../core.js";
import dispatch from "../store.js";
import {connect } from "../store.js";
import header from "./header.js"
import body from "./body.js"
import footer from "./footer.js"

const connector = connect()

function todo({todos, editIndex, filter, filters}){
    return html`
        <section class="todoapp">
            ${header()}
            ${todos.length>0 && body(todos, editIndex, filter ,filters)}
            ${todos.length>0 && footer(todos, filter ,filters)}
        </section>
    `
}

export default connector(todo)
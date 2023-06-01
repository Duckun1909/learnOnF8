import logger from "./logger.js"

var html = function([first, ...strings], ...values){
    return values.reduce((init, val)=>{
        return init.concat(val, strings.shift()) 
    },[first])
    .filter(x => typeof x !== 'boolean' )
    .join("")
}

function createStore(reducer){
    let state = reducer()
    const roots = new Map()

    function render(){
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root){
            // Hàm attach mục đích để nhận view và đẩy vào các root
            roots.set(root, component)
            render()
        },
        connect(selector = state => state){
            // Dùng để kết nối dữ liệu từ store vào view
            // Selector là một hàm với tham số đầu vào là dữ liệu(state) của một view để lựa chọn dữ liệu cho view
            return component => (props, ...args) =>
                // props là dữ liệu muốn truyền vào component
                component(Object.assign({}, props, selector(state), args))
        },
        dispatch(action, ...args){
            // Dùng để nhận các hành động và dữ liệu sau đó đẩy sang cho reducer làm việc
            // action là mô tả hành động như là thêm sửa xóa
            state = reducer(state, action, args)
            render()
        }
    }
}

export default createStore
export {html}
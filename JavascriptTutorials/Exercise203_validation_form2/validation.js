function Validation(formElm){

    var form = document.querySelector(formElm)
    
    var formRules = {};

    var getParent = function(inputElement, selector){
        while(true){
            inputElement = inputElement.parentElement
            if(inputElement.matches(selector)){
                return inputElement  
            }
        }
    }

    var validate = {
        required : function(value){
            return value==="" ? "Vui lòng nhập trường này" : null;
        },
        email : function(value){
            var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return !emailRegex.test(value) ? "Email không hợp lệ" : null;
        },
        min : function(min){
            return function(value){ 
                return value.length < min ? `Vui lòng nhập tối thiểu ${min} kí tự` : null;
            }
        },
        max : function(max){
            return function(value){
                return value.length >max ? `Vui lòng nhập tối đa ${max} kí tự` : null;
            }
                
        },
        matches: function(selector){
            return function(value){
                var match = form.querySelector(`[name=${selector}]`)
                return match.value !== value ? "Mật khẩu không trùng khớp" : null;
            }
        }
    }

    

    if(form){
        var handleValidate = function(){
            var flag = true
            for (const rule of rulesInfo[this.name]) {
                var parent = getParent(this, ".form-group")
                var messElm = parent.querySelector(".form-message")
                var mess = rule(this.value)

                // nếu có lỗi thì thông báo ra ui
                if(mess){
                    parent.classList.add("invalid")
                    messElm.innerText = mess
                    flag = false
                    break;
                }
            }
            return flag
        }

        var handleClearError = function(){
            var parent = getParent(this, ".form-group")
                var messElm = parent.querySelector(".form-message")
                parent.classList.remove("invalid")
                messElm.innerText = ''
        }

        var handleSubmitForm = function(e){
            e.preventDefault()
            var corrects=0 
            for (const input of inputs) {
                if(handleValidate.call(input)){
                    corrects+=1
                }
            }

            if(corrects===inputs.length){
                var url = "http://localhost:3000/users"
                var formData = new FormData(form)
                var data = {
                    fullname: formData.get("fullname"),
                    email: formData.get("email"),
                    password: formData.get("password")
                }
                
                var options = {
                    methos:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }

                fetch(url, options)
            }
        }

        var inputs = form.querySelectorAll("[name][rules]")
        let rulesInfo = {};
        for (const input of inputs) {
            rules = input.getAttribute("rules").split("|")
            var item = []
            for (const rule of rules) {
                if(rule.includes(":")){
                    var ruleItem = rule.split(":")
                    console.log(ruleItem)
                    item.push(validate[ruleItem[0]](ruleItem[1]))
                    continue
                }
                item.push(validate[rule])
            }
            rulesInfo[input.name] = item

            // lắng nghe sự kiện onblur và oninput
            input.onblur = handleValidate
            input.oninput = handleClearError
        }
        
        // lắng nghe sự kiện khi submit form
        form.onsubmit = handleSubmitForm
    }
}
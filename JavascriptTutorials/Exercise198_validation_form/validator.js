function validator(options){
    var form = document.querySelector(options.form)
    let selectorRules = {}
    let flag;

    // xử lý sự kiện khi người dùng submit form
    form.onsubmit = function(e){
        e.preventDefault();
        var quantityTrue = 0;
        options.rules.forEach(function(rule){
            var inputElement = form.querySelector(rule.selector)
            if(validate(inputElement, rule)){
                quantityTrue+=1
            }
        })

        if(quantityTrue==options.rules.length){
            var path = "http://localhost:3000/customer"
            var formdata = new FormData(form)
            var data = {
                fullname: formdata.get("fullname"),
                email: formdata.get("email"),
                password: formdata.get("password")
            }

            var config = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
            }

            fetch(path, config)
            .then(function(res){
                return {
                    status : res.status,
                    data : res.json()
                }
            })
            .then(function(res){
                if(res.status === 201){
                    alert("Tạo tài khoản thành công!")
                    form.reset()
                }
            })
        }
    }

    var getParentElement = function(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    // Xử lý lỗi và in ra thông báo
    var validate = function(inputElement, rule){
        var ruleLst = selectorRules[rule.selector]
        var length = ruleLst.length
        var parenElement = getParentElement(inputElement, options.formGroupSelector)
        var errorMessage = parenElement.querySelector(options.errorSelector)
        var value = inputElement.value
        switch (inputElement.type) {
            case 'checkbox':
            case 'radio':
                var elements = document.querySelectorAll(rule.selector)
                Array.from(elements).forEach(function(val,index){
                    console.log(val.checked)
                    if(val.checked){
                        errorMessage.innerText = ''
                        parenElement.classList.remove("invalid")
                        flag = true
                    }else{
                        var mess = ruleLst[0]('')
                        errorMessage.innerText = mess
                        parenElement.classList.add("invalid")
                        flag = false
                    }
                })

                elements.forEach(function(val){
                    val.oninput = function(){
                        errorMessage.innerText = '' 
                        parenElement.classList.remove("invalid")
                    }
                })
                break;
        
            default:
                for (let index = 0; index < length; index++) {
                    var mess = ruleLst[index](value)
                    if(mess === undefined){
                        errorMessage.innerText = ''
                        parenElement.classList.remove("invalid")
                        flag = true;
                    }else{
                        errorMessage.innerText = mess
                        parenElement.classList.add("invalid")
                        flag = false;
                        break;
                    }
                }
                inputElement.oninput = function(){
                    errorMessage.innerText = '' 
                    parenElement.classList.remove("invalid")
                }
                return flag;
                break;
        }
    }

    // lặp qua các rule và kiểm tra có lỗi không
    options.rules.forEach(function(rule){
        var inputElement = form.querySelector(rule.selector)

        inputElement.onblur = function(){
            validate(inputElement, rule)
        }

        // lưu lại các rule cho mỗi input
        if(Array.isArray(selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test)
        }else{
            selectorRules[rule.selector] = [rule.test]
        }
    })
}

validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value !== '' ? undefined : message || "Vui lòng nhập trường này"
        }
    }
}

validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var emailRegex = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            return value.match(emailRegex) ? undefined : message || "Vui lòng nhập trường này"
        }
    }
}

validator.minLength = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value.length>=6 ? undefined : message || "Vui lòng nhập trường này"
        }
    }
}

validator.isConfirmed = function(selector, message, getConfirmPassword){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmPassword() ? undefined : message || "Vui lòng nhập trường này"
        }
    }
}


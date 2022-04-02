const form = document.querySelector("#submit")

import CC from "axios"
const token = localStorage.getItem("recordToken")


// ---------------------------資料

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email =document.querySelector("#email").value
    console.log(email);
    const nickname =document.querySelector("#nickname").value
    console.log(nickname);
    const password =document.querySelector("#password").value
    console.log(password);

    if (email.trim() !== "" && password.trim() !== ""){
        const userData = { 
            user: {
                email,
                nickname,
                password,
            },
        }
        // fetch("https://todoo.5xcamp.us/users", {
        //     method: "POST",
        //     body: JSON.stringify(userData),
        //     headers: new Headers({
        //       "Content-Type": "application/json",
        //     }),
        //   })
        //     .then((resp) => {
        //       return resp.json()
        //     })
        //     .then((data) => {
        //       console.log(data)
        //     })
        //     .catch((err) => {
        //       console.log(err)
        //     })

        CC.post("https://todoo.5xcamp.us/users", userData).then(({ data }) => {
            console.log(data)
            const token = document.querySelector("#token")
          })
    }

 
})

// ---------------------------登入

const loginform = document.querySelector("#logInForm")

loginform.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const email =document.querySelector("#loginemail").value
    console.log(email);
    const password =document.querySelector("#loginpassword").value
    console.log(password);

    if (email.trim() !== "" && password.trim() !== ""){
        const userData = { 
            user: {
                email,
                password,
            },
        }
        CC.post("https://todoo.5xcamp.us/users/sign_in", userData).then((resp) => {

            // const token = document.querySelector("#tokenArea").textContent = resp.headers.authorization

            const token = resp.headers.authorization
            localStorage.setItem("recordToken", token)
            document.querySelector("#result").textContent = resp.data.message;

          })
    }
})

// ---------------------------檢查登入

document.querySelector("#checkForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    // const token = document.querySelector("#tokenArea").value

    

    if(token){

         CC.get("https://todoo.5xcamp.us/check", {
             headers:{
               Authorization: token,
             },
         }).then((resp)=> {
             document.querySelector("#result").textContent = resp.data.message;
         }).catch(err => document.querySelector("#result").textContent = "登入失敗")
    }

})

// ---------------------------登出

document.querySelector("#logOutForm").addEventListener("submit",(e)=>{
    e.preventDefault();

    

    CC.delete("https://todoo.5xcamp.us/users/sign_out", {
        headers:{
          Authorization: token,
        },
    }).then((resp)=>{
        document.querySelector("#result").textContent = resp.data.message;
    })

})

// ---------------------------TodoList

document.querySelector("#todoForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    const todo =document.querySelector("#todo").value
    
    const todoData = {
        content: todo
    }

    CC.post("https://todoo.5xcamp.us/todos",todoData, {
        headers:{
          Authorization: token,
        },
    }).then((resp)=>{

        const todoList = document.querySelector("#todoList")
        const todoItem = `<li data-id ="${todo.id}">
        <div>X</div>
        ${resp.data.content}
        </li>`
        todoList.insertAdjacentHTML("afterbegin",todoItem)
        e.target.reset()
    }).catch((err)=>{
        console.log(err);
    })

})

// ---------------------------Get TodoList

if (token) {
    CC.get("https://todoo.5xcamp.us/todos" , {
        headers:{
            Authorization: token,
        } 
    }).then(({data}) => {
        const todoList = document.querySelector("#todoList")
        data.todos.forEach((todo) => {
            const todoItem = `<li data-id ="${todo.id}">
            <div>X</div>
            ${todo.content}
            </li>`
            todoList.insertAdjacentHTML("beforeend",todoItem)
        });
    })
}

// ---------------------------Delete Todo (dataset)

document.querySelector("#todoForm").addEventListener("click",(e)=>{
    if(e.target.matches("div")){
        const li = e.target.parentElement
        const id = li.dataset.id
        li.remove();
        CC.delete(`https://todoo.5xcamp.us/todos/${id}`,{
            headers: {
                Authorization: token,
            }
        })
        
    }

})

// data-id ="${todo.id}
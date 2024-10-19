var addBtn = document.querySelector("#add-btn");
var info_page = document.querySelector(".info-page");
var close_btn = document.querySelector("#close_icon");
addBtn.onclick = function(){
    info_page.classList.add("active");
}
close_btn.onclick = function(){
    info_page.classList.remove("active")
};

// ___________________________________________________________
var userData = [];
var idEl = document.querySelector("#id");
var nameEl = document.querySelector("#name");
var lnameEl = document.querySelector("#lname");
var emailEl = document.querySelector("#email");
var ofcEl = document.querySelector("#ofc");
var jobEl = document.querySelector("#job");
var register_form = document.querySelector("#register_form");

var register_btn = document.querySelector("#register-btn");
var profile_data;

register_btn.onclick = function(e){
   
    e.preventDefault();
    regestartion();
    getDataFromLocal();
    register_form.reset('');
}

var userString = JSON.stringify(userData);
    localStorage.setItem("userData",userString);

if(localStorage.getItem("userData") != null){
        userData = JSON.parse(localStorage.getItem("userData"));
    }    

function regestartion(){
    userData.push({
        id : idEl.value,
        name : nameEl.value,
        lname : lnameEl.value,
        email : emailEl.value,
        ofc : ofcEl.value,
        job :jobEl.value,
        profile : profile_data.src
    })
    
    
}



var table_data = document.querySelector("#table_data");

const getDataFromLocal = () =>{

    table_data.innerHTML = "";
    userData.forEach((data,index)=>{ 
    table_data.innerHTML += `
            <tr>
                <td>${index+1}</td>
                <td><img src=${data.profile} width="50" height="40"></td>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.lname}</td>
                <td>${data.email}</td>
                <td>${data.ofc}</td>
                <td>${data.job}</td>
                <td>
                    <button> <i class="fa fa-eye"></i></button>
                    <button id="trash"> <i class="fa fa-trash"></i></button>
                </td>
            </tr>`;
    })
}




// __________________________________image___________________________

var upload = document.querySelector("#upload-file");
var profile_data = document.querySelector("#profile-pic");
upload.onchange = function(){
    let file = upload.files[0];
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.addEventListener('load', () => {
         profile_data.src = fr.result;
    })
}



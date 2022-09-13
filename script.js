/*  id = id of the div where you want to append the menu btn
    keys = an array containing the names of the menu key
    title = some identificative title for create the ids
    menuInnerHtml = scritta sul bottone menu
*/

function createMenu (id,keys,title,menuInnerHtml) {
    let menu_div = document.getElementById(id);
    menu_div.classList.add("menu_div");
    let menu_btn_container = document.createElement("div");
    menu_btn_container.id = title + "_menu_container_div";
    menu_btn_container.classList.add("menu_btn_container");
    let menu_btn = document.createElement("button");
    menu_btn.id = title + "menu_btn";
    menu_btn.classList.add("menu_btn");
    menu_btn.setAttribute("press",false);
    menu_btn.innerHTML = menuInnerHtml ;

    menu_div.appendChild(menu_btn_container);
    menu_btn_container.appendChild(menu_btn);

    menu_btn.addEventListener("click",clickMenuBtn);

    let menu_keys = {
        divs : {},
        buttons : {},
    } ; 

    for(let i=0; i<keys.length; i++){
        menu_keys["divs"][keys[i]] = document.createElement("div");
        menu_keys["divs"][keys[i]].id = keys[i] + "_menu_key_div";
        menu_keys["divs"][keys[i]].classList.add("menu_key_div");
        menu_keys["buttons"][keys[i]] = document.createElement("button");
        menu_keys["buttons"][keys[i]].id = keys[i] + "_menu_key_button";
        menu_keys["buttons"][keys[i]].classList.add("menu_key_button");
        menu_keys["buttons"][keys[i]].innerHTML = keys[i];
    }

    function clickMenuBtn () {

        if(menu_btn.getAttribute("press")=="false"){
            menu_btn.setAttribute("press","true");
            for(let i=0; i<keys.length; i++){
                menu_btn_container.appendChild(menu_keys["divs"][keys[i]]);
                menu_btn_container.appendChild(menu_keys["buttons"][keys[i]]);
            }
        } 
        else {
            menu_btn.setAttribute("press","false");
            for(let i=0; i<keys.length; i++){
                menu_btn_container.removeChild(menu_keys["divs"][keys[i]]);
                menu_btn_container.removeChild(menu_keys["buttons"][keys[i]]);
            }
        }
    }

    function addClickEvent (target_btn_name , functionToActivate ){
        menu_keys["buttons"][target_btn_name].addEventListener("click",functionToActivate);
    }

    let obj = {menu_keys,menu_btn,clickMenuBtn,addClickEvent};
    
    return obj;

}


let Menu = createMenu("menu_div",["key1","key2","key3","key4"],"first-test","Menu");

Menu.addClickEvent("key1",()=>{console.log("hello")});
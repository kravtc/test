const submit_button = document.getElementById("btn");
const form = document.getElementById("form");
const form_view = document.getElementById("view");



submit_button.addEventListener('click', ()=>{
    const formData = new FormData(form)

    let object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    let json = JSON.stringify(object,undefined,2);
    form_view.textContent = json
});






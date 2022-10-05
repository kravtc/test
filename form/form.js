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
    form_view.innerHTML = '<pre>' + json + '</pre>';
    dataRequest(formData);
});


const host_query = '/server/'; /*абстрактный сервер*/

async function dataRequest(formData){
    const data = [...formData.entries()];// получаем сущности из объекта формы
    const queryString = data //перебираем массив сущностей и создаем из него строку запроса
        .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join('&');

    const response = await fetch(`${host_query}?${queryString}`);
    if(response.ok){  /*проверка на успешность получения данных сервером*/
        alert("Success")
        return;
    }
    alert('Error')
    return;
}





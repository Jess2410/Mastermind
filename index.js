let colors = ["bleu","rouge","jaune","vert"];

let array = []
for( let i = 0; i<4 ; i++){
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    array.push(randColor)
    console.log(array)
}
console.log(array)

let code = document.querySelector('#code')
array.forEach(element=> {
    let codeColors = document.createElement("div")
    codeColors.classList.add(element)
    codeColors.setAttribute("hidden", true)
    code.appendChild(codeColors)
})


let val;
let valeur;

$('.radio-group .radio').click(function(e){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    val = e.target.attributes.value.value;

    valeur = $(this).parent().find('input').val(val);

});

let reponse = [];

let form = document.querySelector('#form')
form.addEventListener('submit',handlerSubmit)

function handlerSubmit (e){
    e.preventDefault()
    let input1 = document.getElementById("radio-value1").value;
    let input2 = document.getElementById("radio-value2").value;
    let input3 = document.getElementById("radio-value3").value;
    let input4 = document.getElementById("radio-value4").value;
    reponse.push(input1,input2,input3,input4)
const list = document.querySelector('#list')
const essai = document.createElement("li")

if(JSON.stringify(reponse)==JSON.stringify(colors)){
console.log("c'est trouvé")
  }else{
  console.log("réessayez !")
}
    reponse.forEach(element=> {
        let div = document.createElement("div")
        div.classList.add(element)
        essai.appendChild(div)
    })
list.appendChild(essai); 
reponse=[]
}



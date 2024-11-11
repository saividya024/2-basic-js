let input=document.getElementById("color")
let input2=document.getElementById("bRadius")
let image=document.querySelector("img");

function colorchange(z){
    console.log(z);
    if(z.key==="Enter"){
        document.body.style.backgroundColor=input.value
    }

}
function bRadiuschange(z){
    console.log(z);
    if(z.key==="Enter"){
   image.style.borderRadius=`${input2.value}px`
    }

}
const clock=document.getElementById('clock')
//const clock = document.querySelector('#clock'



//setInterval(function(){},1000) // always write as this, and then start coding

setInterval(function(){
    let date =new Date()
    //console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString();
},1000)

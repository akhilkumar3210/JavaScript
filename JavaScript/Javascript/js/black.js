function bonus(){
    let s=parseInt(document.getElementById("a1").value)
    let y=parseInt(document.getElementById("a2").value)
    if(y>5){
        result=document.getElementById("res").innerHTML=s*5/100
        console.log(s*5/100);
    }
    else{
        result=document.getElementById("res").innerHTML=s
    }
}

function divisible(){
    let a=parseInt(document.getElementById("a1").value)
    let b=a%10
    result=document.getElementById("res").innerHTML=b
    if(b%3==0){
        result=document.getElementById("res").innerHTML="Divisible"
    }
    else{
        result=document.getElementById("res").innerHTML=" Not Divisible"

    }
}

function electricbill(){
    let u=parseInt(document.getElementById("a1").value)
    if(u<100){
        result=document.getElementById("res").innerHTML=" No Charge"
    }
    else if(u<200){
        result=document.getElementById("res").innerHTML=(u-100)*5
    }
    else{
        result=document.getElementById("res").innerHTML=(100*5)+(u-200)*10
    }
}

function city(){
    let c=(document.getElementById("a1").value)
    if(c=='delhi'){
        result=document.getElementById("res").innerHTML="Red Fort"
    }
    else if(c=='agra'){
        result=document.getElementById("res").innerHTML="Taj Mahal" 
    }
    else if(c=='jaipur'){
        result=document.getElementById("res").innerHTML="Jal Mahal" 
    }
    else{
        result=document.getElementById("res").innerHTML="no monument in cities"
    }
}

function day(){
    let d=parseInt(document.getElementById("a1").value)
    if(d==1){
        result=document.getElementById("res").innerHTML="Sunday"
    }
    else if(d==2){
        result=document.getElementById("res").innerHTML="Monday" 
    }
    else if(d==3){
        result=document.getElementById("res").innerHTML="Tuesday" 
    }
    else if(d==4){
        result=document.getElementById("res").innerHTML="Wednesday"
    }
    else if(d==5){
        result=document.getElementById("res").innerHTML="Thursday"
    }
    else if(d==6){
        result=document.getElementById("res").innerHTML="Friday"
    }
    else if(d==7){
        result=document.getElementById("res").innerHTML="Saturday"
    }
    else{
        result=document.getElementById("res").innerHTML="Invaild Days"

    }
}

function tax(){
    let t=parseInt(document.getElementById("a1").value)
    if(t<=50000){
        result=document.getElementById("res").innerHTML=t*5/100
    }
    else if(t>50000 && t<=100000){
        result=document.getElementById("res").innerHTML=t*10/100 
    }
    else if(t>100000){
        result=document.getElementById("res").innerHTML=t*15/100 
    }
    else{
        result=document.getElementById("res").innerHTML="No Tax Available Now"
    }
}

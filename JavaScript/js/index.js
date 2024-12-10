// const a=10
// const b=10.5
// const c=[1,2,3,4,5]
// const d={name:'anu',age:20}
// const e=true
// console.log(typeof e);
// let e
// console.log(e);

// let a=10
// let b=20
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// a++
// ++a
// --a
// a--
// console.log(a);

// let a=10
// a+=10
// a-=10
// a*=10
// a%=10
// a/=10
// a**=10
// console.log(a);


// console.log(5==5);
// console.log(5=="5");
// console.log(5==="5");
// console.log(5!="5");
// console.log(5!=5);
// console.log(5!=="5");

// console.log(2>1);
// console.log(2<1);
// console.log(2>=2);
// console.log(2>=5);
// console.log(2<=2);
// console.log(2<=1);

// console.log(10==10 && 5==5);
// console.log(10==5 && 5==10);
// console.log(10==10 || 2==5);
// console.log(10==5 || 5==10);
// console.log(10==10 != 10==10);


// function sample(){
//     let a=parseInt(document.getElementById("a1").value)
//     let b=parseInt(document.getElementById("a2").value)
//     result=document.getElementById("res").innerHTML=a+b
//     console.log(a+b);
// }
// function sample1(){
//     let a=parseInt(document.getElementById("a1").value)
//     let b=parseInt(document.getElementById("a2").value)
//     result=document.getElementById("res").innerHTML=a-b
//     console.log(a-b);
// }
// function sample2(){
//     let a=parseInt(document.getElementById("a1").value)
//     let b=parseInt(document.getElementById("a2").value)
//     result=document.getElementById("res").innerHTML=a*b
//     console.log(a*b);
// }
// function sample3(){
//     let a=parseInt(document.getElementById("a1").value)
//     let b=parseInt(document.getElementById("a2").value)
//     result=document.getElementById("res").innerHTML=a/b
//     console.log(a/b);
// }
// function sample4(){
//     let a=parseInt(document.getElementById("a1").value)
//     let b=parseInt(document.getElementById("a2").value)
//     result=document.getElementById("res").innerHTML=a%b
//     console.log(a%b);
// }
// function sample5(){
//     let a=parseInt(document.getElementById("a1").value)
//     let b=parseInt(document.getElementById("a2").value)
//     result=document.getElementById("res").innerHTML=a**b
//     console.log(a**b);
// }

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// let i=0
// while(i<=10){
//     console.log(i);
//     i++
// }

// let i=0
// do{
//     console.log(i);
//     i++
// }
// while(i<=10)

function eveod(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    for(i=a;i<=b;i++){
        if(i%2==0){
            console.log(i);
        }
        
    }
}

function odd(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    for(i=a;i<=b;i++){
        if(i%2!==0){
            console.log(i);
        }
        
    }
}

function multi(){
    let a=parseInt(document.getElementById("a1").value)
    for(i=1;i<=10;i++){
        b=i*a
        console.log(b);
    }

}

function rev(){
    let a=document.getElementById("a1").value
    b=''
    i=0
    let l=a.length
    while(i<l){
        b=a[i]+b
        i++
        
    }
    console.log(b);

}

// let l=[1,2,3,4]
// let d={name:'Anu',age:21,place:'kochi'}
// let a='CommingSoon'
// for(i of a){
//     console.log(i);
// }

function reve(){
    let a=document.getElementById("a1").value
    b=''
    for(i of a){
        b=i+b
        
    }
    console.log(b);
}

// let data=[{name:'sanju',age:'20'},{name:'anju',age:'19'},{name:'arjun',age:'25'},{name:'sinju',age:'30'},{name:'anu',age:'22'},{name:'lachu',age:'21'},{name:'athul',age:'24'},{name:'hari',age:'26'},{name:'vishnu',age:'27'},]
// console.log(data);
// let table=document.querySelector("tbody")
// for(i of data){
//     let tr=document.createElement("tr")
//     let td=document.createElement("td")
//     let td1=document.createElement("td")
//     td.innerHTML=i.name
//     tr.appendChild(td)
//     td1.innerHTML=i.age
//     tr.appendChild(td1)
//     table.appendChild(tr)


// }

let data=[{name:'sanju',age:'20'},{name:'anju',age:'19'},{name:'arjun',age:'25'},{name:'sinju',age:'30'},{name:'anu',age:'22'},{name:'lachu',age:'21'},{name:'athul',age:'24'},{name:'hari',age:'26'},{name:'vishnu',age:'27'},]
console.log(data);
let table=document.querySelector("tbody")
for(i of data){
    let tr=document.createElement("tr")
    
    table.appendChild(tr)


}
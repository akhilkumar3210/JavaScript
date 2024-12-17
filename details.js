
let data=[{id:1,name:'sanju',age:'20',place:'ekm'},{id:2,name:'anju',age:'19',place:'tsr'},{id:3,name:'arjun',age:'35',place:'tvm'},{id:4,name:'deepu',age:'25',place:'pkd'},]

function tdetail(){
let table=document.querySelector("tbody")
table.innerHTML=''
data.forEach((i)=>{
    let tr=document.createElement("tr")
    let id_td=document.createElement("td")
    id_td.innerHTML=i.id
    tr.appendChild(id_td)
    let name_td=document.createElement("td")
    name_td.innerHTML=i.name
    tr.appendChild(name_td)
    let age_td=document.createElement("td")
    age_td.innerHTML=i.age
    tr.appendChild(age_td)
    let place_td=document.createElement("td")
    place_td.innerHTML=i.place
    tr.appendChild(place_td)

    let edit_td=document.createElement("td")
    let edit_btn=document.createElement("button")
    edit_btn.textContent="Edit"
    edit_btn.onclick= function(){
        edit_form(i.id)
    }
    edit_td.appendChild(edit_btn)
    tr.appendChild(edit_td)

    let delete_td=document.createElement("td")
    let delete_btn=document.createElement("button")
    delete_btn.textContent="Delete"
    delete_btn.onclick= function(){
        delete_form(i.id)
    }
    delete_td.appendChild(delete_btn)
    tr.appendChild(delete_td)

    table.appendChild(tr)
})

}

document.getElementById('addform').addEventListener('submit',function(event){

    event.preventDefault()
    const id=document.getElementById('no').value 
    const name=document.getElementById('name').value 
    const age=document.getElementById('age').value 
    const place=document.getElementById('place').value 
    data.push({id:id,name:name,age:age,place:place})
    document.getElementById('no').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''
    tdetail()
})
let edit_id=''
function edit_form(id){
    document.getElementById("editform").style.display='block'
    document.getElementById("addform").style.display='none'

    edit_data=data.find(user=>user.id==id)
    document.getElementById("eno").value=edit_data.id
    document.getElementById("ename").value=edit_data.name
    document.getElementById("eage").value=edit_data.age
    document.getElementById("eplace").value=edit_data.place
    edit_id=edit_data.id

}

document.getElementById('editform').addEventListener('submit',function(event){
    event.preventDefault()
    const eid=document.getElementById('eno').value 
    const ename=document.getElementById('ename').value 
    const eage=document.getElementById('eage').value 
    const eplace=document.getElementById('eplace').value     
    data=data.map(user=>{
        if(user.id==edit_id){
            return {...user,id:eid,name:ename,age:eage,place:eplace}
        }return user
    })
    document.getElementById("editform").style.display='none'
    document.getElementById("addform").style.display='block'
    tdetail()
})

function delete_form(id){
    data=data.filter(user=>{
        if(user.id=id){
            return user
        }
    })
   tdetail()
}



tdetail()
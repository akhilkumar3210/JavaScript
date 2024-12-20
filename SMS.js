let data=[{id:10,name:'sanju',age:'17',place:'ekm',department:'bcom'},{id:9,name:'Neeraj',age:'18',place:'tsr',department:'bca'},{id:8,name:'Sonu',age:'19',place:'pkd',department:'bba'},]

document.getElementById('search').addEventListener("input",function(){

    const qry = this.value.toLowerCase()
    const res = data.filter((student)=>student.name.toLowerCase().includes(qry) || student.place.toLowerCase().includes(qry))
    sms(res)
})

function sms(d=data){

    let table=document.querySelector("tbody")
    table.innerHTML=''
    d.forEach((i)=>{
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
        let department_td=document.createElement("td")
        department_td.innerHTML=i.department
        tr.appendChild(department_td)

        let edit_td=document.createElement("td")
        let edit_btn=document.createElement("button")
        edit_btn.textContent='Edit'
        edit_btn.onclick=function(){
            editform(i.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement("td")
        let delete_btn=document.createElement("button")
        delete_btn.textContent='Delete'
        delete_btn.onclick=function(){
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
    const department=document.getElementById('department').value
    data.push({id:id,name:name,age:age,place:place,department:department})
    document.getElementById('no').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''
    document.getElementById('department').value=''
    sms()
})

edit_id=''
function editform(id){
    document.getElementById("editform").style.display='block'
    document.getElementById("addform").style.display='none'

    edit_data=data.find(student=>student.id==id)
    document.getElementById("uno").value=edit_data.id
    document.getElementById("uname").value=edit_data.name
    document.getElementById("uage").value=edit_data.age
    document.getElementById("uplace").value=edit_data.place
    document.getElementById("udepartment").value=edit_data.department
    edit_id=edit_data.id
}

document.getElementById('editform').addEventListener('submit',function(event){
    event.preventDefault()
    const uid=document.getElementById('uno').value 
    const uname=document.getElementById('uname').value 
    const uage=document.getElementById('uage').value 
    const uplace=document.getElementById('uplace').value
    const udepartment=document.getElementById('udepartment').value     
    data=data.map(student=>{
        if(student.id==edit_id){
            return {...student,id:uid,name:uname,age:uage,place:uplace,department:udepartment}
        }return student
    })
    document.getElementById("editform").style.display='none'
    document.getElementById("addform").style.display='block'
    sms()
})
function delete_form(id){
    data=data.filter(student=>{
        if(student.id!=id){
            return student
        }
    })
   sms()
}

sms()
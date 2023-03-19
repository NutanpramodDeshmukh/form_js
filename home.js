const header = `
            <tr>
            <th>profilepic</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Deparment</th>
            <th>Salary</th>
            <th>Actions</th>
            </tr>            
            `;

   async function loadPage(){
  var table = document.querySelector('#table');
   var list = await GetData("http://localhost:3000/employees");
  if (list != null) {
    var contentrow = header;
    list.forEach(emp => {
      contentrow += `
        <tr id=${emp.id}>
        <td><img src=${emp.profilePic} style="width: 50px;"></td>
        <td>${emp.name}</td>
        <td>${emp.gender}</td>
        <td>${emp.department}</td>
        <td>${emp.salary}</td>
        <td>
        <img name="1" onclick="remove('${emp.id}')" src="images/delete.png">
        <img name="1" onclick="update('${emp.id}')" src="images/edit.png">
        </td>
        </tr>     
      `
    });
    table.innerHTML = contentrow
  }
}
var remove = async(id)=>{
          var doc= document.getElementById(id);
          doc.style.display = 'none';
  await DeleteRequest(id);

}
function update(id){

  window.location.replace("http://127.0.0.1:5500/PayRollForm.html?id="+id);
}

loadPage();

 async function GetData(url) {
  let Data;
  let reponse= await fetch(url)
    Data=await reponse.json()
  return Data
}
 async function DeleteRequest(id){
	let u= url;
	if(id!=null){
		u = url+"/"+id;
	}
	var resp = await fetch(u,{method:"DELETE"});
	var data = await resp.json();
	return data;
}
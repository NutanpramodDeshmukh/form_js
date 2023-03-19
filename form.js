var index = 1;
function save(){
    var emp = new Employee();
    emp.id = index++;
    var nameElement = Get('#name');
    emp.salary = Get('#salary').value;
    emp.note = Get('#note').value;
    emp.department = GetDepartment('[name=department]');
    emp.gender = GetGender('[name=gender]');
    emp.name = nameElement.value;
    emp.profilepic = GetImagesrc('[name=profile]');

    var st_arr = localStorage.getItem('list');
    if(st_arr != null){
        let arr = JSON.parse(st_arr);
        arr.push(emp);
        var json_arr = JSON.stringify(arr);
        localStorage.setItem('list',json_arr);
    }else{
        let arr=[];
        arr.push(emp);
        let json_arr = JSON.stringify(arr);
        localStorage.setItem('list',json_arr);

    }
    window.Location.replace("");
    return true;
}
function Initialload(){
    var getName = localStorage.getItem("name");
    if(get == null){
        return false;
    }
    var arr = JSON.parse(localStorage.getItem("list"));
    var index = arr.findIndex(x => x.name == getName);
    var emp = arr[index];
    Get('#name').value = emp.name;
    Get('#salary').value = emp.salary;
    Get('#note').value = emp.note;
    checkDepartment('[name=department]',emp.department)

    var profileCheckbox = getExactCheckBox('[name=profile]',emp.profilepic)
    profileCheckbox.checked = true;

    var genderElement = selectExactGender('[name=gender]',emp.gender);
    genderElement.checked = true;
}
function checkDepartment(id,depts){
    let deptArr = depts.spilt("");
    let AllDeptElement = document.queryselectorAll(id);
    
}
function getExactCheckBox(id,pic){
var ele;
var AllElements = docment.queryselectorAll(id);
AllElements.forEach(element => {
    var src = element.nextElementSibling.getAttribute('src');
    if(src == pic){
       ele = element;
    }
});
return ele;
}
function SelectExactGender(id, value) {
    var ele;
    var genderElements = document.querySelectorAll(id)
    genderElements.forEach(element => {
        if (element.value == value) {
            ele = element
        }
    })
    return ele
}
InitialLoad();

function Get(id) {
    return document.querySelector(id);
}
function GetImageSrc(id) {
    var AllItems = document.querySelectorAll(id);
    var selectedItems = [];
    AllItems.forEach(element => {
        if (element.checked) {
            selectedItems.push(element);
        }
    });
    var selectedFirst = selectedItems[0];
    var src = selectedFirst.nextElementSibling;
    return src.getAttribute('src');
}
function GetGender(id) {
    var selected;
    var AllElements = document.querySelectorAll(id);
    AllElements.forEach(x => {
        if (x.checked) {
            selected = x.value;
        }
    });
    return selected;
}
function GetDepartment(id) {
    var st = "";
    var deptElements = document.querySelectorAll(id);
    deptElements.forEach(element => {
        if (element.checked) {
            st += element.nextElementSibling.innerText + ",";
        }
    })

    return st;
}
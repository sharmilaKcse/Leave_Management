var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["Register Number"] = document.getElementById("Register Number").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["Mobile Number"] = document.getElementById("Mobile Number").value;
   
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.RegisterNumber;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Name;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.MobileNumber;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('Register Number').value = '';
    document.getElementById('Name').value = '';
    document.getElementById('Mobile Number').value = '';
   
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Register Number').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Mobile Number').value = selectedRow.cells[2].innerHTML;
   
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.RegisterNumber;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.MobileNumber;
    
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}
}
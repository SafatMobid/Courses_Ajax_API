window.onload = function(){
    document.getElementById("optionDropdown").onchange = monthDropChange
    let addBtn = document.getElementById("addBtn")
    addBtn.onclick = addBtnClick;
}

function monthDropChange(){
    if(document.getElementById("optionDropdown").value == "Feb"){
        document.getElementById("startDateInput").max = 28
    }
    if(document.getElementById("optionDropdown").value == "Apr"&&"Jun"&&"Sep"&&"Nov"){
        document.getElementById("startDateInput").max = 30
    }
}

function addBtnClick(){
    
    let bodyData = {
        id: " ",
        dept: document.getElementById("courseDeptInput").value,
        courseNum: document.getElementById("courseNumInput").value,
        courseName: document.getElementById("courseNameInput").value,
        instructor: document.getElementById("instructorNameInput").value,
        startDate: document.getElementById("optionDropdown").value +" "+  document.getElementById("classDayInput").value,
        numDays: document.getElementById("classDayInput").value 

    }

    fetch("http://localhost:8081/api/courses",
        {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {"Content-type":
            "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("infoContainer").innerHTML = "New Class Added"
        });
/*         .catch (err => {
            document.getElementById("infoContainer").innerHTML = "Unexpected error "
        }); */
}
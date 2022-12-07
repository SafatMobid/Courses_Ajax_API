window.onload = function() {

    const tbody = document.getElementById("tbody");

    populateTable()
}


function populateTable(){
    const tbody = document.getElementById("tbody");
    
   
    fetch("http://localhost:8081/api/courses")
    .then(response => response.json())
    .then (courses => {
        for (let i in courses){
            let tbody = document.getElementById("tbody");

            let tr = document.createElement("tr");
            tbody.appendChild(tr);

            let td1 = document.createElement("td");
            td1.innerHTML = courses[i].dept

            let td2 = document.createElement("td");
            td2.innerHTML = courses[i].courseNum

            let td3 = document.createElement("td")
            td3.innerHTML = courses[i].courseName

            let anchor = document.createElement("a");
            anchor.href = `http://127.0.0.1:5500/details.html?courseid=${courses[i].id}`;
            anchor.text = "See details"; 

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(anchor)
    }


    })

}
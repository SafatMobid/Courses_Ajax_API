window.onload = function(){
    const urlParams = new URLSearchParams(location.search);
// location.search is the way you access
// the query string portion of the URL
    const infoCard = document.getElementById("infoCard")
    courseInfo()
/*       infoCard.innerHTML = urlParams */
}

function courseInfo(){
    const infoCard = document.getElementById("infoCard")
    const urlParams = new URLSearchParams(location.search);
    let id = -1;
    if (urlParams.has("courseid") === true)
    {
        id = urlParams.get("courseid")
 // Now that you know the course id, make an
 // AJAX call to get that one course
 // and in the callback, display it.
 // Hint: you can create the URL you need for
 // the ajax request by concatenating
 // "http://localhost:8081pi/courses/" with the id!
    fetch(`http://localhost:8081/api/courses/${id}`)
        .then(response => response.json())
        .then (courses =>{
            const infoCard = document.getElementById("infoCard")
              
            let tr = document.createElement("tr");
            infoCard.appendChild(tr);

            let td1 = document.createElement("td");
            td1.innerHTML = courses.id

            let td2 = document.createElement("td");
            td2.innerHTML = courses.dept

            let td3 = document.createElement("td")
            td3.innerHTML = courses.courseNum

            let td4 = document.createElement("td")
            td4.innerHTML = courses.courseName

            let td5 = document.createElement("td")
            td5.innerHTML = courses.instructor

            let td6 = document.createElement("td")
            td6.innerHTML = courses.startDate

            let td7 = document.createElement("td")
            td7.innerHTML = courses.numDays
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
        })
       
    }
}
 
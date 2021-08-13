//calling onload event to lead project list
window.addEventListener('load', (event) => {
    displayProjects();
})


const frontend = 1;
const backend = 2;
const fullstack = 3;

//making array object for project list

let ProjectList = [
    {
        "id": frontend,
        "title": "To Do List",
        "desc": "basically a task keeper web project where you can add task and schedule it.",
        "hosted_url": "https://sptodos.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/To-Do-List-JS",
        "date": new Date('July 30, 2021'),
        "Tech_Stack": "HTML | CSS | JavaScript"
    },
    {
        "id": frontend,
        "title": "Online NotePad",
        "desc": "A simple responsive online notepad where users can write notes and can retrieve them at any time.",
        "hosted_url": "https://sponlinenotepad.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/Online-Notepad",
        "date": new Date('July 27, 2021'),
        "Tech_Stack": "HTML | CSS | JavaScript"

    },
    {
        "id": frontend,
        "title": "Weather web app",
        "desc": "It provides dynamic weather data like temp, min-max temp, feels like, humidity, pressure, wind speed etc.",
        "hosted_url": "https://spweather.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/Weather_webApp",
        "date": new Date('July 25, 2021'),
        "Tech_Stack": "HTML | CSS | JavaScript"
    },
    {
        "id": backend,
        "title": "Math operations",
        "desc": "A math problem solving web app where i applied some math functions to get result ",
        "hosted_url": "https://spweather.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/Weather_webApp",
        "date": new Date('July 25, 2021'),
        "Tech_Stack": "HTML | CSS | Bootstrap | JavaScript"

    },

]




// console.log(filterProject);

function displayProjects() {
    let main = document.getElementById('projects');
    let row = document.getElementById('row');

    ProjectList.forEach(element => {
        let col = document.createElement('div');
        col.className = 'col my-2 ';
        col.innerHTML =
            `
        <div class="card h-100 ">
        <div class="card-body">
            <h5 class="card-title __h2"> ${element.title} </h5>
            <p class="card-text">${element.desc}</p>         
            <p class="card-text"><b>Tech Stack </b> : ${element.Tech_Stack}</p>         
         </div> 
         <div class="card-footer">
         <a href="${element.hosted_url}" target="_blank" class="btn btn-info btn-sm">Live Demo</a>
         <a href="${element.github_url}" target="_blank" class="font-icon">   <i class="fab fa-github"></i> </a>
         </div>         
        </div>

        `
        row.append(col);
    })
    main.append(row);
}





let filterProject;

function updateFilter() {
    let select = document.getElementById('selectUnit');
    var option = select.options[select.selectedIndex].value;
    if (option === "1") {

        //applying filter
         filterProject = ProjectList.filter(function fun(el) {
            return el.id ==1;
        })
    } else if (option === "2") {
         filterProject = ProjectList.filter(function fun(el) {
            return el.id ==1;
        })
    }else{
        filterProject=ProjectList;
    }
}

updateFilter();
console.log(filterProject);

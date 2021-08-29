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
        "title": "Math operations",
        "desc": "This is  web application, where user can get result of certain  math problem. ",
        "hosted_url": "https://spweather.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/Weather_webApp",
        "date": 'July 20, 2021',
        "Tech_Stack": "HTML | CSS | Bootstrap | JavaScript",
        "Role": "Developer",

    },
    {
        "id": frontend,
        "title": "To Do List",
        "desc": "Basically a task keeper web project where you can add task and schedule it.",
        "hosted_url": "https://sptodos.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/To-Do-List-JS",
        "date": 'July 30, 2021',
        "Tech_Stack": "HTML | CSS | JavaScript",
        "Role": "Developer",

    },
    {
        "id": frontend,
        "title": "Online NotePad",
        "desc": "Beautiful  responsive online notepad web application where users can write notes and can retrieve them at any time.",
        "hosted_url": "https://sponlinenotepad.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/Online-Notepad",
        "date": 'July 27, 2021',
        "Tech_Stack": "HTML | CSS | JavaScript",
        "Role": "Developer",


    },
    {
        "id": frontend,
        "title": "Weather web app",
        "desc": "This is web application, provides dynamic weather data like temp, min-max temp, feels like, humidity, pressure, wind speed etc.",
        "hosted_url": "https://spweather.netlify.app/",
        "github_url": "https://github.com/sachinprajapati8604/Weather_webApp",
        "date": 'July 25, 2021',
        "Tech_Stack": "HTML | CSS | JavaScript",
        "Role": "Developer",

    },
    {
        "id": frontend,
        "title": "Tic-Tac-Toe",
        "desc": "This is game  web application, where any users can play tic tac toe game with me  .",
        "hosted_url": "https://sachinprajapati8604.github.io/Tic-Tac-Toe-JS/",
        "github_url": "https://github.com/sachinprajapati8604/Tic-Tac-Toe-JS",
        "date": 'July 12, 2021',
        "Tech_Stack": "HTML | CSS | JavaScript",
        "Role": "Developer",

    },

    {
        "id": backend,
        "title": "BU Book/Paper Website",
        "desc": "This web application is  complete website for  books and paper for Bundelkhand University Student . Student can read or download it. I implemented  admin panel  to manage website.",
        "hosted_url": "http://buepaper.great-site.net/?i=1",
        "github_url": "https://github.com/sachinprajapati8604/BuBook/tree/main",
        "date": "July 20, 2019",
        "Tech_Stack": "HTML | CSS | Bootstrap | JavaScript | PHP | MySQL",
        "Role": "Developer",


    },
    {
        "id": backend,
        "title": "Urban Kleid Shopping site",
        "desc": "This web application is   complete shopping site for both side user and  admin.Users can buy ,trasaction, order tracking,return/refund , PDF invoice etc.",
        "hosted_url": "http://spurbankleid.great-site.net/",
        "github_url": "https://github.com/sachinprajapati8604/Urban-Kleid-e-commerce-website",
        "date": 'July 20, 2020',
        "Tech_Stack": "HTML | CSS | Bootstrap | JavaScript | PHP | MySQL",
        "Role": "Developer",


    },
    {
        "id": backend,
        "title": "Coding Forum ",
        "desc": "This is web application, where users can discuss the problem to each other.",
        "hosted_url": "http://spcodeforum.epizy.com/?i=1",
        "github_url": "https://github.com/sachinprajapati8604/Urban-Kleid-e-commerce-website",
        "date": 'July 20, 2020',
        "Tech_Stack": "HTML | CSS | Bootstrap | JavaScript | PHP | MySQL",
        "Role": "Developer",


    },


]


function displayProjects() {
    let main = document.getElementById('projects');
    let row = document.getElementById('row');

    ProjectList.forEach(element => {
        let col = document.createElement('div');
        col.className = 'col my-2 ';
        col.innerHTML +=
            `
        <div class="card h-100 my-projectcol">
        <div class="card-body">
            <h5 class="card-title __h2"> ${element.title} </h5>
            <p class="card-text">${element.desc}</p>         
            <p class="card-text"><b>Role  </b> : ${element.Role}</p>         
            <p class="card-text"><b>Tech Stack </b> : ${element.Tech_Stack}</p>         
         </div> 
         <div class="card-footer">
         <a href="${element.hosted_url}" target="_blank" class="btn btn-info btn-sm mx-4">Live Demo</a>
         <a href="${element.github_url}" target="_blank" class="font-icon">   <i class="fab fa-github"></i> </a>
         </div>         
        </div>

        `
        row.append(col);
    })
    main.append(row);
}




/*
applying filter but not working as i want

let filterProject;
function updateFilter() {
    let select = document.getElementById('selectUnit');
    var option = select.options[select.selectedIndex].value;
    if (option === "1") {

        //applying filter
        filterProject = ProjectList.filter(function fun(el) {
            return el.id == 1;
        })

        console.log(filterProject)
    } else if (option === "2") {
        filterProject = ProjectList.filter(function fun(el) {
            return el.id == 1;
        })
        console.log(filterProject)


    } else {
        filterProject = ProjectList;
        console.log(filterProject)

    }
}

updateFilter();

console.log(filterProject);

*/


document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log("calling")

    //get values 
    let name = getInputVal('name');
    let email = getInputVal('email');
    let message = getInputVal('message');

    let alert = document.querySelector('.myalert');
    if (name !== "" && email !== "" && message !== "") {
        alert.innerHTML = `Thanks ${name}, Your response has been recieved.`;
        alert.style.display = "block";
    }


    setTimeout(() => {
        alert.style.display = "none";
    }, 3000);

    document.getElementById('contactForm').reset();

})

// funtion to get form values 

function getInputVal(id) {
    return document.getElementById(id).value;
}

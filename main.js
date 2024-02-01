
const projects = [
    {
        "name": "GENIE LOG",
        "desc": "A complete website with front-end and back-end aspects. The site showcases the services of Genie Log and also includes an administration section to manage clients and their requests.",
        "url": "https://genielog.000webhostapp.com/",
        "type": "web",
        "img" : "genielog.png"
    },
    {
        "name": "Tacik",
        "desc": "Web site for Tacik.",
        "url": "https://testdevelopergroup.000webhostapp.com/",
        "type": "web",
        "img" : "tacik.png"
    },
    {
        "name": "Dashboard for Management",
        "desc": "Dashboard for Management",
        "url": null,
        "type": "app-web",
        "img" : "dashbord.png"
    },
    {
        "name": "Bank Account Management Application",
        "desc": "Some banking applications occasionally face reservations from users due to two main issues. Firstly, the design of some of these applications is criticized for its lack of visual appeal. At the same time, it is observed at certain moments that some of these applications fail to provide adequate security measures, thereby raising concerns about the protection of users' financial data.",
        "url": null,
        "type": "app-mobile",
        "img" : "bank.png"
    },
    {
        "name": "Image Processing Application",
        "desc": "An Image Processing Application using Tkinter is a program that utilizes the Tkinter library in Python to create a graphical user interface (GUI) for performing various image processing tasks. Tkinter is a standard GUI toolkit for Python, and it allows developers to build interactive applications with ease.",
        "url": null,
        "type": "app-desktop",
        "img" : "imgapp.png"
    }
];


let nav = document.querySelectorAll('.shuffle li');

let aff_pro =  document.querySelector('.imgs-container');


handleProject('ALL');

nav.forEach(ele=>{
    ele.onclick = ()=>{
        
        nav.forEach(navs=>{
            navs.classList.remove('active');

        })
        ele.classList.add('active');

        let name = ele.dataset.name ;
        handleProject(name);
        
        
    }
})

function handleProject(name){
    let box = "";
    if(name == "ALL"){
        projects.forEach(p=>{
            
                box += `
                <div class="box">
                <img src="imgs/projects/${p['img']}" alt="" />
                <div class="caption">
                  <h4>${p['desc']}</h4>
                  <div>
                    <p>${p['name']}</p>

                    ${p['url'] !== null ? `<a href="${p['url']}"><i class="fa-regular fa-eye"></i></a>` : ''}
                    
                  </div>
                  
                </div>
              </div>
                `;
            
           
        });
    }
    else{
        projects.forEach(p=>{
            if(p['type'] == name){
                box += `
                <div class="box">
                <img src="imgs/projects/${p['img']}" alt="" />
                <div class="caption">
                  <h4>${p['desc']}</h4>
                  <div>
                    <p>${p['name']}</p>
                    <a href=""><i class="fa-regular fa-eye"></i></a>
                  </div>
                </div>
              </div>
                `;
            }
           
        });
    }
    
    aff_pro.innerHTML = box;

}
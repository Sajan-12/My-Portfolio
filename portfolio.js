const roles = [
    "Software Developer.",
    "Web Developer.",
    "Full-Stack Developer.",
    "Data Analyst."
];

let i=0;
function rotateRole(){
        let roleElement=document.getElementById("role");
        console.log("role");
        roleElement.textContent=roles[i];
        i=(i+1)%roles.length;
    
}

setInterval(rotateRole,2000);
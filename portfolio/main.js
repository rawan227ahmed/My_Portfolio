window.addEventListener('DOMContentLoaded', () => {
/////////////////////////////// projects Buttons//////////////////////////////////// 
const projectsButtons=document.getElementsByClassName('proj-button');
const Projects=document.getElementsByClassName('project');
const projectsGrid=document.getElementsByClassName('projects-container');

const oopButtonClicked= ()=>{
    for(let i=0;i<Projects.length;i++)
        Projects[i].classList.add('disappear');
    Projects[1].classList.remove('disappear');
}
const AllButtonClicked= ()=>{
    for(let i=0;i<Projects.length;i++)
        Projects[i].classList.remove('disappear');
}
const LDButtonClicked= ()=>{
    for(let i=0;i<Projects.length;i++)
        Projects[i].classList.add('disappear');
    Projects[0].classList.remove('disappear');
    Projects[4].classList.remove('disappear');
}
const DSButtonClicked= ()=>{
    for(let i=0;i<Projects.length;i++)
        Projects[i].classList.add('disappear');
    Projects[3].classList.remove('disappear');
}
const AppButtonClicked= ()=>{
    for(let i=0;i<Projects.length;i++)
        Projects[i].classList.add('disappear');
    Projects[2].classList.remove('disappear');
}

projectsButtons[0].addEventListener('click',AllButtonClicked);
projectsButtons[1].addEventListener('click',oopButtonClicked);
projectsButtons[2].addEventListener('click',LDButtonClicked);
projectsButtons[3].addEventListener('click',DSButtonClicked);
projectsButtons[4].addEventListener('click',AppButtonClicked);
////////////////////////////navbar scrolling////////////////////////////////////////
window.onscroll=()=>{
    if (document.documentElement.scrollTop >= 70 ) {
        document.querySelector('nav').classList.add('scrollnav');}
    else{
        document.querySelector('nav').classList.remove('scrollnav');}

}
/////////////////////////////////scrolling reveal///////////////////////////////////
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:900,
    delay:50
});
ScrollReveal().reveal('.Intro-text,.heading',{origin:'top'});
ScrollReveal().reveal('.Intro-image, .skill, .projects-container, .review',{origin:'bottom'});
});
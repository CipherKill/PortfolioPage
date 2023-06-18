//tab links area
const tablinks=document.querySelectorAll(".skill-link");
const tabcontents=document.querySelectorAll('.tab-contents');

function refreshActiveTabs(){
    tablinks.forEach(link=>link.classList.remove('active-link'));
    tabcontents.forEach(content=>content.classList.remove('active-tab'));
}

function handleDisplayInformationTab(tabname){
    tabcontents.forEach(tab=>{
        if(tabname===tab.id){
            tab.classList.add('active-tab');
        }
    });
}

function handleTabClick(e){
    refreshActiveTabs();
    e.classList.add('active-link');
    handleDisplayInformationTab(e.getAttribute('data-content'));
    
}

tablinks.forEach(links=>{
    links.addEventListener('click',e=>handleTabClick(e.target));
})

//sidemenu area

const sidebar=document.querySelector('#sidemenu');
const closeBtn=document.querySelector('#mclose-btn');
const openBtn=document.querySelector('#mopen-btn');

closeBtn.addEventListener('click',handleClose);
openBtn.addEventListener('click',handleOpen);

function handleOpen(e){
    sidebar.style.right="0";
}

function handleClose(e){
    sidebar.style.right="-18rem";
}
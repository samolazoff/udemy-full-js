'use strict'
window.addEventListener('DOMContentLoaded',()=>{
    const tabs=document.querySelectorAll('.tabheader__item'),
          tabContent=document.querySelectorAll('.tabcontent'),
          tabsParent=document.querySelector('.tabheader__items');
    
    function hideTabContent(){
        tabContent.forEach(elm=>{
            elm.style.display='none';
        })
        tabs.forEach(tab=>{
           tab.classList.remove('tabheader__item_active');
        })
    }
    function showTabContent(i=0){
        tabContent[i].style.display='block';
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (event)=>{
        const target=event.target;
        if(target&&target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target==item){
                    hideTabContent();
                    showTabContent(i); 
                }
            } )
        }
    })
})
'use strict'
window.addEventListener('DOMContentLoaded',()=>{
    // tabs
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

    // timer

    const deadline='2022-02-28';
    function getTimeRemaining(endtime){
        const t= (Date.parse(endtime)-Date.parse(new Date()))/1000,
              days=Math.floor(t/(60*60*24)),
              hours=Math.floor((t-days*60*60*24)/(60*60)),
              minutes=Math.floor((t-days*60*60*24-hours*60*60)/(60)),
              seconds=Math.floor(t-days*60*60*24-hours*60*60-minutes*60);
        return {
            'total':t,
            'days':days,
            'hours':hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function setClock(selector, endtime){
        const timer=document.querySelector(selector),
                days=timer.querySelector('#days'),
                hours=timer.querySelector('#hours'),
                minutes=timer.querySelector('#minutes'),
                seconds=timer.querySelector('#seconds'),
                timeInterval= setInterval(updateClock,1000);
        updateClock();
        function updateClock(){
            const t=getTimeRemaining(endtime);
            days.innerHTML=(t.days<10?'0'+t.days:t.days);
            hours.innerHTML=(t.hours<10?'0'+t.hours:t.hours);
            minutes.innerHTML=(t.minutes<10?'0'+t.minutes:t.minutes);
            seconds.innerHTML=(t.seconds<10?'0'+t.seconds:t.seconds);
            if(t.total<=0){
                clearInterval(timeInterval);
            }
        }
    };
    setClock('.timer', deadline)
//modal window

    const modalTrigger=document.querySelectorAll('[data-modal]'),
          modal=document.querySelector('.modal'),
          modalCloseBtn=document.querySelector('[data-close]');
    function openModal(){
        document.body.style.overflow='hidden';
        modal.classList.add('show');
        modal.classList.remove('hide');
        clearInterval(modalTimerId);
    }
    function closeModal(){
        document.body.style.overflow='scroll';
        modal.classList.add('hide');
        modal.classList.remove('show');
    }
    modalTrigger.forEach((e)=>{
        e.addEventListener('click',openModal)
    })
    modalCloseBtn.addEventListener('click',closeModal)
    modal.addEventListener('click',(e)=>{
        if(e.target===modal){
            closeModal();
        }
    })
    document.addEventListener('keydown',(e)=>{
        if(e.code==='Escape'&&modal.classList.contains('hide')){
            closeModal();
        }
    })
    const modalTimerId=setTimeout(openModal,4000);

    window.addEventListener('scroll',()=>{
        if(window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
            openModal();
        }
    })

})
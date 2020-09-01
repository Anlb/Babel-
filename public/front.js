 
     const openMenu = document.querySelector('.burger');
     openMenu.addEventListener('click', open);
     
   function open(){
      
        const navMenu = document.querySelector('#nave');
        navMenu.classList.add('active-menu');
        
        
   }
    
    const closeMenu = document.querySelector('.menu-close');
    closeMenu.addEventListener('click', close);
    function close(){
        const navMenu = document.querySelector('#nave');
        navMenu.classList.remove('active-menu');
    }

    
    const openProfil = document.querySelector('.profil');
    openProfil.addEventListener('click', openProf);
    function openProf(){
        const isOpen = document.querySelector('.pop-up-profil');
        isOpen.classList.add('active-menu-profil');
    }
    const openInscription = document.querySelector('.ins');
    openInscription.addEventListener('click', openIns);
    function openIns(){
        const isOpenI = document.querySelector('.pop-up-inscription');
        const isOpen = document.querySelector('.pop-up-profil')
        isOpenI.classList.add('active-menu-inscription');
        isOpen.classList.remove('active-menu-profil')

    }
    const choixCo = document.querySelector('.check');
    choixCo.addEventListener('click', toggleChoix);
    function toggleChoix(){ 
        choixCo.classList.toggle('check-active');
    }
    const choixCon = document.querySelector('.checke');
    choixCon.addEventListener('click', toggleChoixe);
    function toggleChoixe(){ 
        choixCon.classList.toggle('check-active');
    }
    const closeLogin = document.querySelector('.profil-close');
    closeLogin .addEventListener('click', closeL);
    function closeL(){
        const isOpen = document.querySelector('.pop-up-profil');
        isOpen.classList.remove('active-menu-profil');
    }
    const closeInscription = document.querySelector('.profil-close-inscription');
    closeInscription .addEventListener('click', closeI);
    function closeI(){
        const isOpenI = document.querySelector('.pop-up-inscription');
        isOpenI.classList.remove('active-menu-inscription');
    }
    
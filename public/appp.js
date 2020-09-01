   
        const openMenu = document.querySelector('.burger');
        openMenu.addEventListener('click', open);
    
        function open() {
    
            const navMenu = document.querySelector('#nave');
            navMenu.classList.add('active-menu');
    
    
        }
    
        const closeMenu = document.querySelector('.menu-close');
        closeMenu.addEventListener('click', close);
    
        function close() {
            const navMenu = document.querySelector('#nave');
            navMenu.classList.remove('active-menu');
        }
        
        
        
        const openProf = document.querySelector('#profil');
        openProf.addEventListener('click', opened);
    
        function opened() {
    
            const popUpProfil = document.querySelector('.pop-up-profil');
            popUpProfil.classList.add('active-menu-profil');
    
    
        }
    
        const closeMenuProf = document.querySelector('.profil-close');
        closeMenuProf.addEventListener('click', closed);
    
        function closed() {
            const navMenuProf = document.querySelector('.pop-up-profil');
            navMenuProf.classList.remove('active-menu-profil');
        }
    
             const check = document.querySelector('.check');
        check.addEventListener('click', valid);
    
        function valid() {
    
            let checkValid = document.querySelector('.check');
            checkValid.classList.toggle('check-active');
        }
        
        const buttonInscription = document.querySelector('div.ins');
        buttonInscription.addEventListener('click', formulaireInscription);
        function formulaireInscription(){
            
            const inscription = document.querySelector('.pop-up-inscription');
            const popUpProfil = document.querySelector('.pop-up-profil')
            inscription.classList.add('active-menu-inscription');
            popUpProfil.classlist.remove('.active-menu-profil');
    
        }
        const formValid = document.querySelector('#button');
        
        formValid.addEventListener('click', authentification);
        
        function authentification(){
            let inputName = document.querySelector('#adresse').value;
        let speudo = "horus@simplon.co";
        let mdp = "babel123";
            if (inputName == speudo){
                window.location.href= "detail.html"; 
            }else{
             alert('erreur');
            }
        }
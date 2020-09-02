
    const banner = document.createElement('div');
    banner.innerHTML=
   `  <div id="js-cookie-box" class="cookie-box cookie-box--hide">
      En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies 🍪 !<span id="js-cookie-button" class="cookie-button">Allez pourquoi pas</span>
    </div>`
    document.body.appendChild(banner)
    function vanish() {
        if(document.cookie =='user=admin'){
            banner.style.display='none';
        }
    };
    const accept = document.getElementById('js-cookie-button');
    accept.addEventListener('click', (event)=>{
        event.preventDefault();
        document.cookie = 'user=admin';
        vanish();
    });
    vanish();
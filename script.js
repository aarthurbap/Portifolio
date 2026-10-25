// Menu responsivo. Nenhuma biblioteca externa é necessária.
    const toggle=document.getElementById('menu-toggle');
    const navigation=document.getElementById('main-navigation');
    const closeMenu=()=>{navigation.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu')};
    toggle.addEventListener('click',()=>{const open=navigation.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
    navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
    document.getElementById('copyright-year').textContent=new Date().getFullYear();
    // Indicação sutil da seção atual na navegação.
    if('IntersectionObserver' in window){
      const links=[...navigation.querySelectorAll('a')];
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}})
      },{rootMargin:'-25% 0px -55% 0px',threshold:0});
      document.querySelectorAll('section[id]').forEach(section=>observer.observe(section));
    }

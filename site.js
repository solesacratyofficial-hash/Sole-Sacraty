var burger = document.getElementById('burgerBtn');
var navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', function(){
    navLinks.classList.toggle('open');
    var icon = burger.querySelector('i');
    icon.className = navLinks.classList.contains('open') ? 'fas fa-xmark' : 'fas fa-bars';
  });
  navLinks.querySelectorAll('a:not(#servicesToggle)').forEach(function(a){
    a.addEventListener('click', function(){
      navLinks.classList.remove('open');
      burger.querySelector('i').className = 'fas fa-bars';
    });
  });
}

var servicesToggle = document.getElementById('servicesToggle');
var servicesDrop = document.getElementById('servicesDrop');
if (servicesToggle && servicesDrop) {
  servicesToggle.addEventListener('click', function(e){
    if (window.innerWidth <= 860) {
      e.preventDefault();
      servicesDrop.classList.toggle('open');
    }
  });
}

var revealEls = document.querySelectorAll('.rv');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15, rootMargin: '0px 0px -40px 0px'});
  revealEls.forEach(function(el){ io.observe(el); });
} else {
  revealEls.forEach(function(el){ el.classList.add('in'); });
}

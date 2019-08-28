// Resize topbar, topnav and bottomnav according to the main div
const tnav = document.querySelector('#top-nav');
const bnav = document.querySelector('#bottom-nav');
const unitbar = document.querySelector('#unit-selected');

window.addEventListener('load', changeFixedElementWidth);
window.addEventListener('resize', changeFixedElementWidth);

function changeFixedElementWidth() {
    // displayUnits(unit)
    parent = $('.main').width()
    tnav.style.width = parent + 'px';
    tnav.style.display = 'block';
    bnav.style.width = parent + 'px';
    bnav.style.display = 'block';
    if (unitbar !== null){
        unitbar.style.width = parent + 'px';
        unitbar.style.display = 'block';
    }
}

// Toggle topnav on scroll
let prev = 0;
$( window ).on( "scroll",  function( e ) {
    let scrollTop = $( this ).scrollTop();
    // console.log( scrollTop > prev )
    $('#top-nav').toggleClass( 'affix', scrollTop > prev);  
    $('#main-content').toggleClass( 'fix', scrollTop > prev);       
    prev = scrollTop;
});
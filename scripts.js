function openNav () {
    document.getElementById('sidenav').style.left = '0px';
}
function closeNav () {
    if(window.innerWidth <=700)
    document.getElementById('sidenav').style.left = '-250px';
}

window.onresize = () => {
    if(window.innerWidth >700)
    document.getElementById('sidenav').style.left = '0px';
    else
    document.getElementById('sidenav').style.left = '-250px';
}
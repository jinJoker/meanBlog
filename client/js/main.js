function generateFloatLayer(){
    document.getElementById('overlay').style.display = "block";
    document.getElementById('popup').style.display = "block";
    popupCenter('popup');
    document.body.style.overflow = "hidden";
}

function popupCenter(popupName){    
    _windowHeight = window.innerHeight;//获取当前窗口高度  
    _windowWidth = window.innerWidth;//获取当前窗口宽度
    _divHeight = document.getElementById(popupName).clientHeight;
    _divWidth = document.getElementById(popupName).clientWidth;
    _posiTop = (_windowHeight - _divHeight) /2;  
    _posiLeft = (_windowWidth - _divWidth) /2;  
    document.getElementById(popupName).style.left = _posiLeft + "px";
    document.getElementById(popupName).style.top = _posiTop + "px";  
}  

function removeFloatLayer(){
    document.getElementById('overlay').style.display = "none";
    document.getElementById('popup').style.display = "none";
    document.body.style.overflow = "auto";
}
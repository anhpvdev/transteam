




// show info ================================================
document.getElementById("showinfo").onclick = function(){
    document.getElementById("transinfo").style.display='block'
    document.getElementById("main-info").style.display='none'
    document.getElementById("transcomic").style.display = 'none'
    document.getElementById("transdonate").style.display='none'
     
}

document.getElementById("hideinfo").onclick = function(){
    document.getElementById("transinfo").style.display='none'
    document.getElementById("main-info").style.display='block'
     
}

//------------------------------------------------------------

//show comic ================================================
document.getElementById("showcomic").onclick = function(){
    document.getElementById("transcomic").style.display='block'
    document.getElementById("main-info").style.display='none'
    document.getElementById("transdonate").style.display='none'
    document.getElementById("transinfo").style.display='none'

     
}

document.getElementById("hidecomic").onclick = function(){
    document.getElementById("transcomic").style.display = 'none'
    document.getElementById("main-info").style.display='block'
     
}


//show donate ================================================

document.getElementById("showdonate").onclick = function(){
    document.getElementById("transdonate").style.display='block'
    document.getElementById("main-info").style.display='none'
    document.getElementById("transinfo").style.display='none'
    document.getElementById("transcomic").style.display = 'none'

     
}

document.getElementById("hidedonate").onclick = function(){
    document.getElementById("transdonate").style.display='none'
    document.getElementById("main-info").style.display='block'
}    






//-------------------------------------------------------------



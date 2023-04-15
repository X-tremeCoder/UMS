const realFilebtn = document.getElementById("real-file");
const custombtn = document.getElementById("custom-button");
const customtxt = document.getElementById("custom-text");

custombtn.addEventListener("click", function(){
    realFilebtn.click();
});


realFilebtn.addEventListener("change", function(){
    if(realFilebtn.value){
        customtxt.innerHTML = realFilebtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        custombtn.innerHTML = "Uploaded";
    }
    else{
        customtxt.innerHTML = "No file chosen";
    }
});
function GetFileInfo() {
    var message = "";

    // if (document.fileModifiedDate) {
    //     message += "Last updated: " + document.fileModifiedDate;
    // }
    // if (document.lastModified) {
    //     message += "Last updated: " + document.lastModified;
    // }
    // if (document.fileUpdatedDate) {
    //     message += "Last updated: " + document.fileUpdatedDate;
    // }

    // var info = document.getElementById("updatedDate");
    // info.textContent = message;
    var m_names = ["January", "February", "March", 
    "April", "May", "June", "July", "August", "September", 
    "October", "November", "December"];
    
    var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"];
    
    var myDate = new Date();
    var curr_date = myDate.getDate();
    var curr_month = myDate.getMonth();
    var curr_day  = myDate.getDay();
    var curr_year = myDate.getFullYear();
    message = (d_names[curr_day] + ", " +  curr_day + " " + m_names[curr_month] + " " +curr_year);

    var date = new Date();
    var currYear = document.getElementById("currentDate");
    // message += date.getDate();
    currYear.textContent = message;  
}

function toggleMenu() {
    document
        .getElementsByClassName("flex-nav")[0]
        .classList.toggle("responsive");

  }
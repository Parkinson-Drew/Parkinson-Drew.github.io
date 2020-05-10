function GetFileInfo() {
    var message = "";

    if (document.fileModifiedDate) {
        message += "Last updated: " + document.fileModifiedDate;
    }
    if (document.lastModified) {
        message += "Last updated: " + document.lastModified;
    }
    if (document.fileUpdatedDate) {
        message += "Last updated: " + document.fileUpdatedDate;
    }

    var info = document.getElementById("updatedDate");
    info.textContent = message;

    var date = new Date();
    var currYear = document.getElementById("year");
    currYear.textContent = date.getFullYear();  
}

// $(function() {
//     $('.toggleNav').on('click',function() {
//       $('.flex-nav ul').toggleClass('open');
//     });
//   });
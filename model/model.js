export function getRoute() {
    let hashID = window.location.hash;
    let pageID = hashID.replace("#","");

    if (pageID != ""){
        $.get(`pages/${pageID}.html`, function(data){
            $("#inject").html(data);
        });
    } else {
        $.get(`pages/home.html`, function(data){
            $("#inject").html(data);
        })
    }
}


export function blankURL(pageID){
    if (pageID == ""){
        $.get(`pages/home.html`, function(data){
            $("#home").html(data);
        })
    }
}

// Show certificates, hide show button, and show hide button

$("#showCertificateButton").click( ()=>
{   
    $(".certificates-wrapper").fadeIn(1000);
    $(".certificates-wrapper").css("display", "grid");
    
    $("#showCertificateButton").hide();
    $("#hideCertificateButton").show();

});

// Hide certificates, hide hide button, show show button

$("#hideCertificateButton").click( ()=>
{   
    $(".certificates-wrapper").fadeOut(1000);
    $("#hideCertificateButton").hide();
    $("#showCertificateButton").show();

});
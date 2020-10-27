if(-1 != location.pathname.indexOf("event_signup.aspx")) {
    var formSubTitle = document.getElementsByTagName("H2")[0];
	formSubTitle.textContent = formSubTitle.textContent.slice(0,formSubTitle.textContent.lastIndexOf(" on "));
}
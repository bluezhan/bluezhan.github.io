var loadPresentation = function() {

	var presentation = document.getElementById("commentTemplate").innerHTML;

	var config = JSON.parse(localStorage.getItem('preview-config'));

	if (presentation) {
		document.body.innerHTML = presentation;
	//	document.body.className = config.surface + " " + document.body.className;
	}
};

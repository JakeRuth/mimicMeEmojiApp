

function capturePhoto(){
	navigator.camera.getPicture(uploadPhoto, null, { quality:50, destinationType:Camera.DestinationType.DATA_URL, correctOrientation: true });
}

function uploadPhoto(data){
// this is where you would send the image file to server

	cameraPic.src = "data:image/jpeg;base64," + data;
	// Successful upload to the server
	navigator.notification.alert(
		'Your Photo has been captured!',  // message
		okay,                            // callback
	    'Photo Status',                // title
	    'OK'                             // buttonName
	);

	// upload has failed Fail
	/* 
	if (failedToUpload){

	navigator.notification.alert(
		'Your Photo has failed to upload',
		failedDismissed,
	    'Photo Not Uploaded',
	    'OK'
		);
	} 
	*/


}

function okay(){
	// Do something
}
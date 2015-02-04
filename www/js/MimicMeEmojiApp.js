//SOME TEST DATA, delete once db is set up
var sampleMimicData = {
	id: 123456789,
	username: 'user123456',
	thumbnailFilePath: 'images/sampleMimicPhotos/034.PNG', //this will be thumbailUrl
	photoFileNames: ['','',''], //this will be photoUrls
	views: 8,
	ups: 4,
	downs: 2,
	description: 'This is a sample mimic-me-emoji'
}
var sampleMimicData2 = {
	id: 123456789,
	username: 'billy joe',
	thumbnailFilePath: 'images/sampleMimicPhotos/035.PNG', //this will be thumbailUrl
	photoFileNames: ['','',''], //this will be photoUrls
	views: 43,
	ups: 23,
	downs: 55,
	description: 'Woow is billy joe back at it again hes the man!'
}
var sampleMimicData3 = {
	id: 123456789,
	username: 'lala doop',
	thumbnailFilePath: 'images/sampleMimicPhotos/036.PNG', //this will be thumbailUrl
	photoFileNames: ['','',''], //this will be photoUrls
	views: 0,
	ups: 1,
	downs: 999,
	description: 'Why do I have no friends wah'
}
var sampleMimicData4 = {
	id: 123456789,
	username: 'testaccount',
	thumbnailFilePath: 'images/sampleMimicPhotos/037.PNG', //this will be thumbailUrl
	photoFileNames: ['','',''], //this will be photoUrls
	views: 234,
	ups: 324,
	downs: 32,
	description: 'Wow this mimic is really popular i wonder why?!'
}
var sampleMimicData5 = {
	id: 123456789,
	username: 'basdilbfasuil',
	thumbnailFilePath: 'images/sampleMimicPhotos/038.PNG', //this will be thumbailUrl
	photoFileNames: ['','',''], //this will be photoUrls
	views: 44,
	ups: 44,
	downs: 44,
	description: 'bnsfilbafgas g asfjklgbf safgjklbjklf asfjkl'
}

$(function() {
    var template = getHandleBarsTemplate();

    //sample code to put a mimic me emoji on the feed
    var html = template(sampleMimicData);
    $('#news-feed').append(html);
	html = template(sampleMimicData2);
    $('#news-feed').append(html);
	html = template(sampleMimicData3);
    $('#news-feed').append(html);
	html = template(sampleMimicData4);
    $('#news-feed').append(html);
	html = template(sampleMimicData5);
    $('#news-feed').append(html);

    function getHandleBarsTemplate() {
        var source = $("#news-feed-template").html();
        return template = Handlebars.compile(source);
    }

});



export const getImage = function(document, images){
	// check if this post even has an image
	if (!document._links['wp:featuredmedia']){
		return 'http://demo.geekslabs.com/materialize/v2.1/layout03/images/user-profile-bg.jpg';
	}

	// setup function that is fed into the find method. see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	function findImage(image) {
		let postId = document.id;
	    return image.post === postId
	}

	// run the find method, then store the found image object into variable imageObject
	let imageObject = images.find(findImage);
	// return the URL inside of the imageObject at guide.rendered
	return imageObject.guid.rendered;
		
}
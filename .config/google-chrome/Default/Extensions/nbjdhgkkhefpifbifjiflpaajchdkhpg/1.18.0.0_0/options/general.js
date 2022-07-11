"use strict";

$(document).ready(function () {
	var currentPage = window.location.href.match(/\w+\.html/i)[0];
	$(".menu1>a[href='" + currentPage + "']").addClass("current");
	loadImage("img1", "https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif");
	loadImage("img2", "https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif");
});
var loadImage = function loadImage(id, url) {
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onload = function () {
		try {
			document.getElementById(id).src = window.URL.createObjectURL(xhr.response);
		} catch (e) {}
	};
	xhr.open('GET', url, true);
	xhr.send();
};
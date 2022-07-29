'use strict';

const laptopImage1Elm = document.querySelector('#laptop-1');
const laptopImage2Elm = document.querySelector('#laptop-2');
const laptopImage3Elm = document.querySelector('#laptop-3');
const laptopImage4Elm = document.querySelector('#laptop-4');
const laptopImage5Elm = document.querySelector('#laptop-5');

const imageGallery = document.querySelector('.main-image img');


laptopImage1Elm.addEventListener('click',(evt) => 
{
	imageGallery.src = '';
	imageGallery.src = 'image/image-number1.jpg'
});

laptopImage2Elm.addEventListener('click',(evt) => 
{
	imageGallery.src = '';
	imageGallery.src = 'image/image-number2.jpg';
});

laptopImage3Elm.addEventListener('click',(evt) => 
{
	imageGallery.src = '';
	imageGallery.src = 'image/image-number3.jpg';
});

laptopImage4Elm.addEventListener('click',(evt) => 
{
	imageGallery.src = '';
	imageGallery.src = 'image/image-number4.jpg';
});

laptopImage5Elm.addEventListener('click',(evt) => 
{
	imageGallery.src = '';
	imageGallery.src = 'image/image-number5.jpg';
})


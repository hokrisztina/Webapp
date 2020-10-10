let imagesData = [{
  photo: 'firstpic.JPG',
  title: 'My title',
  description: 'What happened here, why is this a very nice image',
},
{
  photo: "secondpic.JPG",
  title: 'Second picture',
  description: 'Hahaha fun',
},
{
  photo: 'thirdpic.JPG',
  title: 'Third picture',
  description: 'Another funny picture',
},
{
  photo: 'fourthpic.JPG',
  title: 'Fourth Picture',
  description: 'Halloween funny pic',
},
{
  photo: 'lastpic.JPG',
  title: 'Last pic',
  description: 'Haha really funny ninja',
},
];
$('#photo').attr('src', imagesData.photo);
let currentPhoto = 0;
$('#photo').attr('src', imagesData[currentPhoto].photo);
let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);
};
$('#rightArrow').click(() => {
  if (currentPhoto < 5) {
    currentPhoto++;
  } else { currentPhoto = 0 };
  loadPhoto(currentPhoto);
});
$('#leftArrow').click(() => {
  if (currentPhoto > 0) {
    currentPhoto--;
  } else { currentPhoto = 5 };
  loadPhoto(currentPhoto);
});
imagesData.forEach((photo, index) => {
  $('#thumbContainer').append(`<img class="thumb" data-index="${index}" src="${imagesData[index].photo}">`);
  });
$('.thumb').click((event) => {
  let thumbClicked = $(event.target).attr('data-index');
  currentPhoto = parseInt(thumbClicked);
  loadPhoto(currentPhoto);
});
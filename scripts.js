let data = [{
    photo: 'firstpic.JPG',
    title: 'My title',
    description: 'What happened here, why is this a very nice image',
  };
  {
    photo: '20191031_203433_074_IMG_0007.JPG',
    title: 'Second picture',
    description: 'Hahaha fun',
  };
  {
  photo: '20191031_220226_624_IMG_0115.JPG',
  title: 'Third picture',
  description: 'Another funny picture',
};
{
  photo: '20191031_214917_483_IMG_0105.JPG',
    title: 'Fourth Picture',
    description: 'Halloween funny pic',
};
{
  photo: '20191031_220158_639_IMG_0113.JPG',
    title: 'Last pic',
    description: 'Haha really funny ninja',
  };
]
$('#photo').attr('src', data.photo);
let currentPhoto=0;
let imagesData = [...] => {
  $('#photo').attr('src', imagesData[currentPhoto].photo);
}
$('#cls-1').click(()=> {
  if(currentPhoto>0){
    currentPhoto--;
}
imagesData(currentPhoto);
});
$('#cls-2').click(()=> {
  if(currentPhoto <5){
    currentPhoto++;
  }
  imagesData(currentPhoto);
});
imagesData(currentPhoto);
  
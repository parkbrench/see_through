//https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c
// ?
//

const ALBUM_ID = 'https://photos.app.goo.gl/RJFWtSZ4hyoq3Tko8'


fetch(ALBUM_ID)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson.ip);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });



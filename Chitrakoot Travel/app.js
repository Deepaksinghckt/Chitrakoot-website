var images = ['Image/chitrakoot-poi3.jpg','Image/Ram ghat.jpg','Image/Gupt Godavri.jpg','Image/Janki Kund.jpg','Image/image1.jpg','Image/image2.jpg','Image/image3.jpg','Image/image4.jpg','Image/image5.jpg','Image/image6.jpg','Image/image7.jpg','Image/image8.jpg','Image/image9.jpg','Image/image10.jpg','Image/image12.jpg','Image/image13.jpg','Image/image14.jpg','Image/image15.jpg','Image/image16.jpg','Image/image17.jpg','Image/image18.jpg','Image/image19.jpg','Image/image20.jpg','Image/image21.jpg','Image/image22.jpg','Image/image23.jpg','Image/image24.jpg','Image/image25.jpg','Image/image26.jpg','Image/image27.jpg','Image/image28.jpg','Image/image29.jpg',
'Image/image30.jpg','Image/image31.jpg','Image/image32.jpg','Image/image33.jpg','Image/image34.jpg','Image/image35.jpg','Image/image36.jpg','Image/image37.jpg','Image/image38.jpg','Image/image39.jpg','Image/image40.jpg','Image/image41.jpg','Image/image43.jpg','Image/image44.jpg','Image/image45.jpg','Image/image46.jpg','Image/image47.jpg','Image/image49.jpg','Images/Kamidgiri.jpg',];
var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;




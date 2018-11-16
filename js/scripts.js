$(document).ready(function(){
    var slides = [
        {
            id :  1,
            img : "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=cold-vehicles-water-531880.jpg&fm=jpg",
            text : "Consumer Products Consulting",
            link : "https://google.com"

        },
        {
            id :  2,
            img : "https://i.ytimg.com/vi/daeNo1Y4Mjg/maxresdefault.jpg",
            text : "Consumer Products Consulting",
            link : "https://facebook.com"

        },
        {
            id :  3,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IcXHR0vaKNCOu2Qex3dUabfhD4yt2o4u6hOgvyFBxxTt0Fb8",
            text : "Consumer Products Consulting",
            link : "https://youtube.com"

        }
    ];
    var slider = new CustomSlider(slides);
    slider.init();
    //
    // for(var i = 0; i < array.length; i++) {
    //     $.tmpl( `
    //         <div class="col-lg-3 col-md-6 col-sm-12">
    //             <p class="counter">
    //                 ${count}
    //             </p>
    //             <p class="counter-title">
    //                  ${name}
    //             </p>
    //         </div>
    //     `, { "Name" : array[i].name, "count": array[i].count }).appendTo( "#target" );
    // }
});
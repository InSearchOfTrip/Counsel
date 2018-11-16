function CustomSlider(slides) {
    this.activeSlideIndex;
    this.countSlides;
    this.slides = slides;
    this.prev = function () {
        this.activeSlideIndex--;
        if(this.activeSlideIndex < 0){
            this.activeSlideIndex = (this.countSlides - 1);
        }
        this.setParams(this.slides[this.activeSlideIndex]);
    };

    this.next = function() {
        this.activeSlideIndex++;
        if(!(this.activeSlideIndex < this.countSlides)){
            this.activeSlideIndex = 0;
        }
        this.setParams(this.slides[this.activeSlideIndex]);

    };
    this.init = function () {
        this.activeSlideIndex = 0;
        this.countSlides = this.slides.length;
        this.setParams(this.slides[this.activeSlideIndex]);
        document.getElementById("prev").addEventListener("click", this.prev.bind(this));
        document.getElementById("next").addEventListener("click", this.next.bind(this));
        // $("header").delay(3000).queue(function () {
        //
        // }.bind(this));
        setInterval(function(){
            this.activeSlideIndex++;
            if(!(this.activeSlideIndex < this.countSlides)){
                this.activeSlideIndex = 0;
            }
            this.setParams(this.slides[this.activeSlideIndex]);
        }.bind(this),5000);
    };
    this.setParams = function(obj){
        // initialize img
        var img = document.getElementsByClassName("custom-slider-img")[0];
        img.style.backgroundImage = "url("+obj.img+")";
        // initialize text
        var text = document.getElementsByClassName("custom-slider-text")[0];
        text.innerText = obj.text;
        // initialize link
        var link = document.getElementsByClassName("custom-slider-link")[0];
        link.setAttribute( "href",obj.link );
    }
}


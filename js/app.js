$.getJSON('https://swatiswa.github.io/Portfolio/attachments/data.json',function(data){
        var carouselExampleIndicators = document.getElementById('carouselExampleIndicators');
        var imagesHtml = "";
        var slideIndicatorHtml = "";
    
        for(var i=0;i<data.images.length;i++){
            slideIndicatorHtml = slideIndicatorHtml + `<li data-target="#carouselExampleIndicators" data-slide-to=`+i +(i==0?'  class="active"':'')+`></li>`;

            imagesHtml = imagesHtml+`<div class="carousel-item`+(i==0?' active':'')+` ">
                                        <img class="d-block w-100" src="attachments/`+data.images[i]+`" alt="`+i+1+`slide">
                                    </div>`;
        }

        carouselExampleIndicators.innerHTML = `<ol class="carousel-indicators">`+
                                                    slideIndicatorHtml
                                                +`</ol>
                                                <div id="galleryCarousel" class="carousel-inner">
                                                    <!--Carousel Content-->
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>`;

        var galleryCarousel = document.getElementById('galleryCarousel');
        galleryCarousel.innerHTML = imagesHtml;
    });
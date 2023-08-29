import { Swiper, FreeMode, Autoplay } from "swiper";


const gallerySlider = document.querySelectorAll('.gallery .swiper');
if (gallerySlider.length)
    gallerySlider.forEach(slider => {
        const slides = slider.querySelectorAll('.swiper-slide');

        if (slides.length)
            new Swiper(slider, {
                modules: [
                    FreeMode, Autoplay
                ],
                loop: true,
                spaceBetween: 24,
                autoplay: {
                    delay: 1,
                    enabled: true,
                    disableOnInteraction: false
                },
                speed: 3000,
                freeMode: true,

                breakpoints: {
                    300: {
                        slidesPerView: 1.5,
                    },
                    769: {
                        slidesPerView: 2,
                    },
                    1025: {
                        slidesPerView: 3,
                    },
                }
            })
    })
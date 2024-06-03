
        
        
        let currentIndex = 0;
        const slides = document.querySelectorAll('.services .service');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }

            const slideWidth = slides[currentIndex].clientWidth;
            document.querySelector('.carousel-slide').style.transform = `translateX(${-slideWidth * currentIndex}px)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }

        function autoSlide() {
            showSlide(currentIndex + 1);
        }

        function currentSlide(index) {
            showSlide(index - 1);
        }

        document.addEventListener('DOMContentLoaded', () => {
            setInterval(autoSlide, 3000);

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => currentSlide(index + 1));
            });
        });


        //our project
        function changeImage(imageSrc) {
            const projectImage = document.getElementById('project-image');
            projectImage.src = imageSrc;

            const textItems = document.querySelectorAll('.text-item');
            textItems.forEach(item => item.classList.remove('active'));

            event.currentTarget.classList.add('active');
        }


        // contact Us
        document.addEventListener("DOMContentLoaded", function() {
            const contactButton = document.getElementById("contactButton");
            const modal = document.getElementById("contactModal");
            const closeButton = document.querySelector(".close-button");

            contactButton.addEventListener("click", function() {
                modal.style.display = "block";
            });

            closeButton.addEventListener("click", function() {
                modal.style.display = "none";
            });

            window.addEventListener("click", function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        });

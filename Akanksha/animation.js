const img = document.querySelector('.animate-on-scroll');

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScroll() {
            if (isElementInViewport(img)) {
                img.classList.add('show-animation');
                window.removeEventListener('scroll', handleScroll);
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on page load
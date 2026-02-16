// Loading animation
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 1500);
        });

        // Smooth scroll functionality
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1200;
                    let start = null;

                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }

                    function easeInOutCubic(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t * t + b;
                        t -= 2;
                        return c / 2 * (t * t * t + 2) + b;
                    }

                    requestAnimationFrame(animation);
                }
            });
        });

        // Mobile navigation
        const burger = document.getElementById('burger');
        const navLinks = document.getElementById('navLinks');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Scroll animations (fade-in/fade-out)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll progress indicator
        window.addEventListener('scroll', () => {
            const scrollIndicator = document.getElementById('scrollIndicator');
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = scrollTop / (docHeight - winHeight);
            const scrollPercentRounded = Math.round(scrollPercent * 100);

            scrollIndicator.style.width = scrollPercentRounded + '%';
        });

        // Add stagger animation to service items
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });

        // Gallery Carousel
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const prevBtn = document.querySelector('.carousel-btn-prev');
        const nextBtn = document.querySelector('.carousel-btn-next');
        const counterCurrent = document.querySelector('.counter-current');
        const counterTotal = document.querySelector('.counter-total');

        let currentSlide = 0;
        const totalSlides = carouselSlides.length;

        // Set total counter
        if (counterTotal) {
            counterTotal.textContent = totalSlides;
        }

        function showSlide(index) {
            // Remove active class from all slides
            carouselSlides.forEach(slide => {
                slide.classList.remove('active');
            });

            // Add active class to current slide
            carouselSlides[index].classList.add('active');

            // Update counter
            if (counterCurrent) {
                counterCurrent.textContent = index + 1;
            }
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }

        // Event listeners for carousel buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }

        // Keyboard navigation for carousel
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Text reveal animation
        function revealText(element) {
            const text = element.textContent;
            element.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.style.opacity = '0';
                span.style.animation = `fadeInUp 0.5s ease ${i * 0.05}s forwards`;
                element.appendChild(span);
            }
        }

        // Apply text reveal to section titles when they become visible
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
                    entry.target.classList.add('revealed');
                    revealText(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.section-title').forEach(title => {
            titleObserver.observe(title);
        });




        // Instagram Feed - Using SnapWidget or similar embed
        // Note: For production, you'll need to use Instagram's official API or a third-party service
        function loadInstagramFeed() {
            const instagramFeed = document.getElementById('instagram-feed');

            // This is a placeholder implementation
            // In production, you would either:
            // 1. Use Instagram Basic Display API with an access token
            // 2. Use a third-party service like SnapWidget, Curator.io, or Instafeed.js
            // 3. Use server-side scraping (check Instagram's terms of service)

            // For now, we'll use a simple iframe embed approach
            // You can replace this with actual Instagram posts

            const username = 'ycbarber06';

            // Placeholder: Show message to use embed widget
            setTimeout(() => {
                instagramFeed.innerHTML = `
                    <div class="instagram-embed-message" style="grid-column: 1 / -1; padding: 3rem; border: 3px solid #fff; text-align: center;">
                        <h3 style="font-weight: 900; font-size: 1.5rem; margin-bottom: 1rem; text-transform: uppercase;">Instagram Feed</h3>
                        <p style="margin-bottom: 1.5rem;">Pour afficher les posts Instagram en temps réel, vous devez :</p>
                        <ol style="text-align: left; max-width: 600px; margin: 0 auto 1.5rem; line-height: 1.8;">
                            <li>Créer un compte développeur Instagram</li>
                            <li>Obtenir un Access Token via l'API Instagram Basic Display</li>
                            <li>Ou utiliser un service comme <strong>SnapWidget</strong>, <strong>Curator.io</strong>, ou <strong>EmbedSocial</strong></li>
                        </ol>
                        <a href="https://www.instagram.com/${username}/" target="_blank" class="hero-cta" style="display: inline-block; margin-top: 1rem;">
                            Voir sur Instagram
                        </a>
                    </div>
                `;
            }, 1000);
        }

        // Uncomment to load Instagram feed
        // loadInstagramFeed();

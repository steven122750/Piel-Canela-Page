document.addEventListener("DOMContentLoaded", function() {
    const userLangs = navigator.languages || [navigator.language || navigator.userLanguage];
    const primaryLang = userLangs[0].split('-')[0];  // Obtener el primer idioma (ej: 'es', 'en')

    const content = {
        es: {
            home: "Inicio",
            about: "Nosotros",
            services: "Servicios",
            prices: "Precios",
            pages: "Páginas",
            appointment: "Cita",
            opening: "Horas de atención",
            team: "Nuestro equipo",
            testimonials: "Testimonios",
            contact: "Contacto",
            reserve: "Reserva ahora",
            carousel: [
                {
                    title: "Bronceado Brasileño",
                    heading: "Luce un bronceado perfecto",
                    description: "Descubre la magia del bronceado brasileño con nuestro servicio exclusivo. Luce radiante todo el año.",
                    button: "Agenda tu cita"
                },
                {
                    title: "Estilo Miami",
                    heading: "Bronceado de lujo",
                    description: "El toque dorado que necesitas para brillar bajo el sol de Miami. Un bronceado sofisticado y elegante.",
                    button: "Reserva ahora"
                },
                {
                    title: "Experiencia Exclusiva",
                    heading: "Dale vida a tu piel",
                    description: "Revitaliza tu piel con nuestro tratamiento de bronceado, ideal para obtener ese tono dorado perfecto.",
                    button: "Haz tu cita"
                }
            ],
            aboutUs: {
                heading: "El Mejor Centro de Bronceado y Cuidado de la Piel en Miami",
                paragraph: "En Piel Canela, ofrecemos una experiencia de bronceado brasileño inigualable. Nuestro equipo de especialistas está dedicado a brindarte un servicio de alta calidad, asegurando que luzcas un bronceado perfecto, sin importar la época del año. La belleza y el cuidado de la piel son nuestra prioridad.",
                specialists: "Especialistas en Bronceado",
                satisfiedClients: "Clientes Satisfechos"
            },
            serviceHeading: 'Nuestros Servicios',
            serviceTitle: 'Servicios de Bronceado & Cuidado de la Piel',
            services: [
                {
                    title: 'Bronceado Express',
                    desc: 'Obtén un bronceado brasileño rápido y uniforme en menos de 20 minutos, perfecto para cualquier ocasión especial.',
                    btn: 'Hacer Cita'
                },
                {
                    title: 'Bronceado Brasilero con Bikini en Cinta',
                    desc: 'Restaura la humedad y el brillo natural de tu piel con nuestra terapia de hidratación intensiva post-bronceado, combinada con la técnica de bikini en cinta para un acabado impecable.',
                    btn: 'Hacer Cita'
                }
            ],
            appointmentTitle: 'Agendar Cita',
            appointmentName: 'Tu Nombre',
            appointmentEmail: 'Tu Correo',
            appointmentDate: 'Seleccionar Fecha',
            appointmentTime: 'Seleccionar Hora',
            appointmentService: 'Seleccionar un Servicio',
            appointmentSubmit: 'Agendar Cita'
        },
        en: {
            home: "Home",
            about: "About Us",
            services: "Services",
            prices: "Pricing",
            pages: "Pages",
            appointment: "Appointment",
            opening: "Opening Hours",
            team: "Our Team",
            testimonials: "Testimonials",
            contact: "Contact",
            reserve: "Book Now",
            carousel: [
                {
                    title: "Brazilian Tanning",
                    heading: "Get a Perfect Tan",
                    description: "Discover the magic of Brazilian tanning with our exclusive service. Look radiant all year round.",
                    button: "Book your appointment"
                },
                {
                    title: "Miami Style",
                    heading: "Luxury Tanning",
                    description: "The golden touch you need to shine under the Miami sun. A sophisticated and elegant tan.",
                    button: "Book now"
                },
                {
                    title: "Exclusive Experience",
                    heading: "Bring Your Skin to Life",
                    description: "Revitalize your skin with our tanning treatment, ideal for achieving that perfect golden tone.",
                    button: "Make your appointment"
                }
            ],
            aboutUs: {
                heading: "The Best Tanning and Skincare Center in Miami",
                paragraph: "At Piel Canela, we offer an unparalleled Brazilian tanning experience. Our team of specialists is dedicated to providing high-quality service, ensuring you have a perfect tan, no matter the time of year. Beauty and skincare are our top priorities.",
                specialists: "Tanning Specialists",
                satisfiedClients: "Satisfied Clients"
            },
            serviceHeading: 'Our Services',
            serviceTitle: 'Tanning & Skincare Services',
            services: [
                {
                    title: 'Express Tanning',
                    desc: 'Get a quick and even Brazilian tan in less than 20 minutes, perfect for any special occasion.',
                    btn: 'Make an Appointment'
                },
                {
                    title: 'Brazilian Tanning with Tape Bikini',
                    desc: 'Restore the moisture and natural glow of your skin with our intensive hydration therapy after tanning, combined with the tape bikini technique for a flawless finish.',
                    btn: 'Make an Appointment'
                }
            ],
            appointmentTitle: 'Book an Appointment',
            appointmentName: 'Your Name',
            appointmentEmail: 'Your Email',
            appointmentDate: 'Select Date',
            appointmentTime: 'Select Time',
            appointmentService: 'Select a Service',
            appointmentSubmit: 'Book Now'
        }
    };

    // Función para actualizar el contenido del navbar
    function setNavbarContent(lang) {
        const selectedContent = content[lang] || content['es'];  // Español como fallback
  
        document.getElementById('nav-home').textContent = selectedContent.home;
        document.getElementById('nav-about').textContent = selectedContent.about;
        document.getElementById('nav-services').textContent = selectedContent.services;
        document.getElementById('nav-prices').textContent = selectedContent.prices;
        document.getElementById('nav-pages').textContent = selectedContent.pages;
        document.getElementById('nav-appointment').textContent = selectedContent.appointment;
        document.getElementById('nav-opening').textContent = selectedContent.opening;
        document.getElementById('nav-team').textContent = selectedContent.team;
        document.getElementById('nav-testimonials').textContent = selectedContent.testimonials;
        document.getElementById('nav-contact').textContent = selectedContent.contact;
        document.getElementById('nav-reserve').textContent = selectedContent.reserve;
    }

    function setCarouselContent(lang) {
        const selectedContent = content[lang] || content['es'];  // Español como fallback
        const carouselItems = document.querySelectorAll('.carousel-item');
        selectedContent.carousel.forEach((item, index) => {
            carouselItems[index].querySelector('h6').textContent = item.title;
            carouselItems[index].querySelector('h3').textContent = item.heading;
            carouselItems[index].querySelector('p').textContent = item.description;
            carouselItems[index].querySelector('a').textContent = item.button;
        });
    }

    function setAboutContent(lang) {
        const selectedContent = content[lang] || content['es'];  // Español como fallback
        document.querySelector('.about-heading-subtitle').textContent = lang === 'es' ? 'Acerca de Nosotros' : 'About Us';
        document.querySelector('.about-heading-title').textContent = selectedContent.aboutUs.heading;
        document.querySelector('.about-description').textContent = selectedContent.aboutUs.paragraph;
        document.querySelector('.specialists-count').textContent = "2";
        document.querySelector('.specialists-label').textContent = selectedContent.aboutUs.specialists;
        document.querySelector('.clients-count').textContent = "700";
        document.querySelector('.clients-label').textContent = selectedContent.aboutUs.satisfiedClients;
    }

    function setServiceContent(lang) {
        const selectedContent = content[lang] || content['es'];
        updateElementContent('service-heading', selectedContent.serviceHeading);
        updateElementContent('service-title', selectedContent.serviceTitle);

        selectedContent.services.forEach((serviceItem, index) => {
            updateElementContent(`service-${index + 1}-title`, serviceItem.title);
            updateElementContent(`service-${index + 1}-desc`, serviceItem.desc);
            updateElementContent(`service-${index + 1}-btn`, serviceItem.btn);
        });

        updateElementContent('appointment-title', selectedContent.appointmentTitle);
        document.getElementById('appointment-name').placeholder = selectedContent.appointmentName;
        document.getElementById('appointment-email').placeholder = selectedContent.appointmentEmail;
        document.getElementById('appointment-date').placeholder = selectedContent.appointmentDate;
        document.getElementById('appointment-time').placeholder = selectedContent.appointmentTime;
        document.getElementById('appointment-service').firstElementChild.textContent = selectedContent.appointmentService;
        updateElementContent('appointment-submit', selectedContent.appointmentSubmit);
    }

    function updateElementContent(id, content) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = content;
        }
    }

    setNavbarContent(primaryLang);
    setCarouselContent(primaryLang);
    setAboutContent(primaryLang);
    setServiceContent(primaryLang);
});

document.addEventListener("DOMContentLoaded", function() {
    // Initialize language
    let currentLanguage = "fr";
    const translations = {
        fr: {
            homeDescription: "Bienvenue sur mon portfolio personnel. Explorez mes projets, compétences et passions à travers une expérience digitale immersive.",
            skillsTitle: "COMPÉTENCES PROFESSIONNELLES",
            networkLabel: "RÉSEAU",
            networkItem1: "Conception d'architecture réseau",
            networkItem2: "Routage (Statique, OSPF)",
            networkItem3: "Segmentation (VLAN)",
            networkItem4: "Gestion de services (Apache2, Samba)",
            cybersecurityLabel: "CYBERSÉCURITÉ",
            cybersecurityItem1: "Reconnaissance et évaluation",
            cybersecurityItem2: "Escalade de privilèges",
            cybersecurityItem3: "Test d'intrusion",
            cybersecurityItem4: "Scripts d'automatisation (Python)",
            cybersecurityItem5: "Documentation technique",
            administrationLabel: "ADMINISTRATION",
            administrationItem1: "Administration Linux",
            administrationItem2: "Surveillance (Centreon)",
            softwareLabel: "LOGICIELS",
            softwareItem1: "GNS3",
            softwareItem2: "Cisco Packet Tracer",
            softwareItem3: "Make",
            personalAttributesLabel: "COMPÉTENCES PERSONNELLES",
            personalAttributesItem1: "Diligent",
            personalAttributesItem2: "Esprit d'équipe",
            personalAttributesItem3: "Autodidacte",
            personalAttributesItem4: "Permis de conduire (B)",
            ctaInternship: "Résumé de mon stage",
            ctaCV: "TÉLÉCHARGER MON CV",
            viewProject: "VOIR LE PROJET",
            aboutTitle: "À PROPOS DE MOI",
            projectsTitle: "PROJETS",
            contactTitle: "CONTACT",
            footer: "&copy; 2025 CALPETARD MAHE PORTFOLIO. Tous droits réservés."
        },
        en: {
            homeDescription: "Welcome to my personal portfolio. Explore my projects, skills, and passions through an immersive digital experience.",
            skillsTitle: "PROFESSIONAL SKILLS",
            networkLabel: "NETWORK",
            networkItem1: "Network Architecture Design",
            networkItem2: "Routing (Static, OSPF)",
            networkItem3: "Segmentation (VLAN)",
            networkItem4: "Service Management (Apache2, Samba)",
            cybersecurityLabel: "CYBERSECURITY",
            cybersecurityItem1: "Reconnaissance and Assessment",
            cybersecurityItem2: "Privilege Escalation",
            cybersecurityItem3: "Penetration Testing",
            cybersecurityItem4: "Automation Scripts (Python)",
            cybersecurityItem5: "Technical Documentation",
            administrationLabel: "ADMINISTRATION",
            administrationItem1: "Linux Administration",
            administrationItem2: "Monitoring (Centreon)",
            softwareLabel: "SOFTWARE",
            softwareItem1: "GNS3",
            softwareItem2: "Cisco Packet Tracer",
            softwareItem3: "Make",
            personalAttributesLabel: "PERSONAL SKILLS",
            personalAttributesItem1: "Diligent",
            personalAttributesItem2: "Team-oriented",
            personalAttributesItem3: "Self-taught",
            personalAttributesItem4: "Driver's License (B)",
            ctaInternship: "My internship abstract",
            ctaCV: "DOWNLOAD MY CV",
            viewProject: "VIEW PROJECT",
            aboutTitle: "ABOUT ME",
            projectsTitle: "PROJECTS",
            contactTitle: "CONTACT",
            footer: "&copy; 2025 CALPETARD MAHE PORTFOLIO. All rights reserved."
        }
    };

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Add hover effect for skill items
    document.querySelectorAll('.skill-category li').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--accent-color');
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--text-color');
        });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            ripple.addEventListener('animationend', () => {
                ripple.remove();
            });
        });
    });
});

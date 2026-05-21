// ============================================
// SHARED.JS — Vibe & Build Multi-Page Site
// Navbar, Footer, i18n, Reveal, Data Layer
// ============================================

(function () {
  'use strict';

  // ===== DEFAULT DATA =====
  const DEFAULT_EVENTS = [
    {
      id: 'vol1',
      title: 'Vibe & Build vol.I',
      titleEn: 'Vibe & Build vol.I',
      date: '2026-04-15',
      time: '19:00 – 21:00',
      location: 'Αθήνα, Ελλάδα',
      locationEn: 'Athens, Greece',
      description: 'Το πρώτο Vibe & Build workshop — εκεί που ξεκίνησαν όλα.',
      descriptionEn: 'The first Vibe & Build workshop — where it all began.',
      lumaLink: '',
      status: 'past'
    },
    {
      id: 'vol2',
      title: 'Vibe & Build vol.II',
      titleEn: 'Vibe & Build vol.II',
      date: '2026-05-20',
      time: '19:00 – 21:00',
      location: 'Αθήνα, Ελλάδα',
      locationEn: 'Athens, Greece',
      description: 'Πρακτικό workshop με 100 δωρεάν Lovable credits, καθοδήγηση και demo stage.',
      descriptionEn: 'Hands-on workshop with 100 free Lovable credits, guidance, and demo stage.',
      lumaLink: 'https://luma.com/lljxukb3',
      status: 'past'
    },
    {
      id: 'vol3',
      title: 'Vibe & Build vol.III',
      titleEn: 'Vibe & Build vol.III',
      date: '2026-06-15',
      time: '19:00 – 21:00',
      location: 'Αθήνα, Ελλάδα',
      locationEn: 'Athens, Greece',
      description: 'Επιστρέφουμε με νέες ιδέες, νέα εργαλεία, και ακόμα περισσότερη ενέργεια. Φέρε τη δική σου ιδέα!',
      descriptionEn: 'We\'re back with new ideas, new tools, and even more energy. Bring your own idea!',
      lumaLink: 'https://luma.com/UnscriptedCircles',
      status: 'upcoming'
    },
    {
      id: 'vol4',
      title: 'Vibe & Build vol.IV',
      titleEn: 'Vibe & Build vol.IV',
      date: '2026-07-20',
      time: '18:30 – 20:30',
      location: 'Θεσσαλονίκη, Ελλάδα',
      locationEn: 'Thessaloniki, Greece',
      description: 'Το Vibe & Build ταξιδεύει στη Θεσσαλονίκη! Πρώτη φορά εκτός Αθήνας.',
      descriptionEn: 'Vibe & Build travels to Thessaloniki! First time outside Athens.',
      lumaLink: 'https://luma.com/UnscriptedCircles',
      status: 'upcoming'
    },
    {
      id: 'vol5',
      title: 'Vibe & Build vol.V',
      titleEn: 'Vibe & Build vol.V',
      date: '2026-09-10',
      time: '19:00 – 21:00',
      location: 'Αθήνα, Ελλάδα',
      locationEn: 'Athens, Greece',
      description: 'Φθινοπωρινό workshop — ιδανικό για να ξεκινήσεις τη νέα σεζόν με ένα νέο project.',
      descriptionEn: 'Fall workshop — ideal for starting the new season with a new project.',
      lumaLink: 'https://luma.com/UnscriptedCircles',
      status: 'upcoming'
    },
    {
      id: 'startup',
      title: 'Vibe & Build: Startup Edition',
      titleEn: 'Vibe & Build: Startup Edition',
      date: '2026-10-05',
      time: '18:00 – 20:00',
      location: 'Online (Zoom)',
      locationEn: 'Online (Zoom)',
      description: 'Ειδική έκδοση για startups! Χτίσε το MVP σου live, πάρε feedback, και κέρδισε μέντορινγκ.',
      descriptionEn: 'Special edition for startups! Build your MVP live, get feedback, and win mentoring.',
      lumaLink: 'https://luma.com/UnscriptedCircles',
      status: 'upcoming'
    }
  ];

  const DEFAULT_VIDEOS = [
    {
      id: 'intro',
      title: 'Τι είναι το Vibe & Build;',
      titleEn: 'What is Vibe & Build?',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Μια σύντομη εισαγωγή στη φιλοσοφία και τον στόχο του Vibe & Build.',
      descriptionEn: 'A brief introduction to the philosophy and goal of Vibe & Build.',
      featured: true
    },
    {
      id: 'demo-vol2',
      title: 'Highlights: Vol.II Workshop',
      titleEn: 'Highlights: Vol.II Workshop',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Τα καλύτερα στιγμιότυπα από το δεύτερο workshop.',
      descriptionEn: 'Best moments from the second workshop.',
      featured: false
    },
    {
      id: 'lovable-tutorial',
      title: 'Πώς να χτίσεις με το Lovable',
      titleEn: 'How to Build with Lovable',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Step-by-step tutorial για αρχάριους.',
      descriptionEn: 'Step-by-step tutorial for beginners.',
      featured: false
    }
  ];

  const DEFAULT_SETTINGS = {
    defaultLang: 'el',
    affiliateLink: 'https://lovable.dev',
    hostName: 'Odisseas M. Karipis',
    orgName: 'Unscripted Circles',
    adminPassword: 'vibeandbuild2026'
  };

  // ===== DATA LAYER =====
  window.VB = window.VB || {};

  VB.getEvents = function () {
    try {
      const stored = localStorage.getItem('vb_events');
      return stored ? JSON.parse(stored) : [...DEFAULT_EVENTS];
    } catch { return [...DEFAULT_EVENTS]; }
  };

  VB.saveEvents = function (events) {
    localStorage.setItem('vb_events', JSON.stringify(events));
  };

  VB.getVideos = function () {
    try {
      const stored = localStorage.getItem('vb_videos');
      return stored ? JSON.parse(stored) : [...DEFAULT_VIDEOS];
    } catch { return [...DEFAULT_VIDEOS]; }
  };

  VB.saveVideos = function (videos) {
    localStorage.setItem('vb_videos', JSON.stringify(videos));
  };

  VB.getSettings = function () {
    try {
      const stored = localStorage.getItem('vb_settings');
      return stored ? { ...DEFAULT_SETTINGS, ...JSON.parse(stored) } : { ...DEFAULT_SETTINGS };
    } catch { return { ...DEFAULT_SETTINGS }; }
  };

  VB.saveSettings = function (settings) {
    localStorage.setItem('vb_settings', JSON.stringify(settings));
  };

  VB.isAdminLoggedIn = function () {
    return sessionStorage.getItem('vb_admin') === 'true';
  };

  VB.adminLogin = function (password) {
    const settings = VB.getSettings();
    if (password === settings.adminPassword) {
      sessionStorage.setItem('vb_admin', 'true');
      return true;
    }
    return false;
  };

  VB.adminLogout = function () {
    sessionStorage.removeItem('vb_admin');
  };

  // ===== i18n =====
  let currentLang = 'el';

  VB.getCurrentLang = function () { return currentLang; };

  VB.switchLang = function (lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('.i18n').forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) el.innerHTML = text;
    });

    // Dispatch event for pages that need custom i18n logic
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  };

  // ===== NAVBAR =====
  VB.initNavbar = function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navHTML = `
    <nav class="main-nav" id="mainNav">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand">
          <span class="nav-brand-text gradient-text">Vibe & Build</span>
        </a>

        <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <div class="nav-links" id="navLinks">
          <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}" data-el="Αρχική" data-en="Home"><span class="i18n" data-el="Αρχική" data-en="Home">Αρχική</span></a>
          <a href="schedule.html" class="nav-link ${currentPage === 'schedule.html' ? 'active' : ''}" data-el="Πρόγραμμα" data-en="Schedule"><span class="i18n" data-el="Πρόγραμμα" data-en="Schedule">Πρόγραμμα</span></a>
          <a href="lovable.html" class="nav-link ${currentPage === 'lovable.html' ? 'active' : ''}" data-el="Lovable" data-en="Lovable">Lovable</a>
          <a href="videos.html" class="nav-link ${currentPage === 'videos.html' ? 'active' : ''}" data-el="Βίντεο" data-en="Videos"><span class="i18n" data-el="Βίντεο" data-en="Videos">Βίντεο</span></a>

          <div class="nav-spacer"></div>

          <div class="lang-toggle" id="langToggle">
            <button class="active" data-lang="el" aria-label="Ελληνικά">GR</button>
            <button data-lang="en" aria-label="English">EN</button>
          </div>

          <a href="admin.html" class="nav-admin-link" title="Admin">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </a>
        </div>
      </div>
    </nav>
    <div class="nav-spacer-block"></div>`;

    // Insert at top of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Hamburger toggle
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
      });
    }

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // Language toggle
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => VB.switchLang(btn.dataset.lang));
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('mainNav');
      if (!nav) return;
      const scrollY = window.pageYOffset;
      nav.classList.toggle('scrolled', scrollY > 40);
      lastScroll = scrollY;
    }, { passive: true });
  };

  // ===== FOOTER =====
  VB.initFooter = function () {
    const footerHTML = `
    <footer class="footer">
      <p class="i18n"
         data-el="Vibe & Build — Μια σειρά workshops από τον <a href='https://luma.com/UnscriptedCircles' target='_blank' rel='noopener'>Unscripted Circles</a>. Powered by <a href='https://lovable.dev' target='_blank' rel='noopener'>Lovable</a>."
         data-en="Vibe & Build — A workshop series by <a href='https://luma.com/UnscriptedCircles' target='_blank' rel='noopener'>Unscripted Circles</a>. Powered by <a href='https://lovable.dev' target='_blank' rel='noopener'>Lovable</a>.">
        Vibe & Build — Μια σειρά workshops από τον <a href="https://luma.com/UnscriptedCircles" target="_blank" rel="noopener">Unscripted Circles</a>. Powered by <a href="https://lovable.dev" target="_blank" rel="noopener">Lovable</a>.
      </p>
    </footer>`;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  };

  // ===== SCROLL REVEAL =====
  VB.initReveal = function () {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
  };

  // ===== SMOOTH SCROLL =====
  VB.initSmoothScroll = function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  };

  // ===== BACKGROUND ORBS =====
  VB.initOrbs = function () {
    const orbsHTML = `
    <div class="bg-orbs" aria-hidden="true">
      <div class="orb"></div>
      <div class="orb"></div>
      <div class="orb"></div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', orbsHTML);
  };

  // ===== UTILITY FUNCTIONS =====
  VB.formatDate = function (dateStr, lang) {
    const d = new Date(dateStr + 'T00:00:00');
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return d.toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-US', options);
  };

  VB.generateId = function () {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  // ===== CAROUSEL =====
  VB.initCarousel = function () {
    const track = document.getElementById('heroTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      
      track.style.transform = `translateX(-${index * 100}%)`;
      
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      
      slides[index].classList.add('active');
      if(dots[index]) dots[index].classList.add('active');
      
      currentIndex = index;
    }

    function nextSlide() { goToSlide(currentIndex + 1); }
    function prevSlide() { goToSlide(currentIndex - 1); }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startAutoPlay();
      });
    });

    // Touch Support
    let startX = 0;
    let endX = 0;
    track.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, {passive: true});

    track.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      if (startX - endX > 50) nextSlide();
      else if (endX - startX > 50) prevSlide();
      startAutoPlay();
    }, {passive: true});

    // Initialize
    goToSlide(0);
    startAutoPlay();
  };

  // ===== AUTO-INIT =====
  // Pages can call VB.init() or individual init functions
  VB.init = function (options = {}) {
    if (options.orbs !== false) VB.initOrbs();
    if (options.navbar !== false) VB.initNavbar();
    if (options.footer !== false) VB.initFooter();
    if (options.reveal !== false) {
      // Delay reveal init to allow DOM to settle
      requestAnimationFrame(() => VB.initReveal());
    }
    if (options.smoothScroll !== false) VB.initSmoothScroll();
    if (document.getElementById('heroTrack')) VB.initCarousel();

    // Apply saved language
    const settings = VB.getSettings();
    if (settings.defaultLang) {
      currentLang = settings.defaultLang;
    }
  };

})();

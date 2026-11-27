(() => {
  "use strict";

  const WHATSAPP_NUMBER = "919847922080";

  /* ------------------------------------------------------------------------
     Curated Gallery Catalogue (all 50 real villa photos, categorized cleanly)
     ------------------------------------------------------------------------ */
  const GALLERY_PHOTOS = [
    // Featured / Pools & Views
    { src: "images/gallery (36).jpeg", cat: "pools", featured: true, alt: "Private pool overlooking Chembra Peak and Wayanad hills" },
    { src: "images/gallery (2).jpeg", cat: "estate", featured: true, alt: "Both terracotta-roofed villas nestled in the lush Meppadi tea plantation at sunset" },
    { src: "images/gallery (13).jpeg", cat: "villas", featured: true, alt: "Sunlit en-suite bedroom with timber ceiling and panoramic glass doors" },
    { src: "images/gallery (19).jpeg", cat: "pools", featured: true, alt: "Private plunge pool framed by Kerala brick jali wall and villa verandah" },
    { src: "images/gallery (30).jpeg", cat: "pools", featured: true, alt: "Covered patio dining deck beside the private pool facing green hills" },
    { src: "images/gallery (8).jpeg", cat: "estate", featured: true, alt: "Golden sunset sky above Mayflower Holiday Villa and tea slopes" },
    { src: "images/gallery (27).jpeg", cat: "villas", featured: true, alt: "Corner-window villa room overlooking the private pool and misty valley" },
    { src: "images/gallery (34).jpeg", cat: "pools", featured: true, alt: "Private pool patio with terracotta roof and red brick jali privacy screen" },
    { src: "images/gallery (11).jpeg", cat: "villas", featured: true, alt: "Spacious double bedroom with warm pitched wood ceiling" },
    { src: "images/gallery (28).jpeg", cat: "estate", featured: true, alt: "Private villa perched amidst vibrant emerald tea bushes" },
    { src: "images/gallery (22).jpeg", cat: "pools", featured: true, alt: "Elevated view of the private pool surrounded by misty Wayanad treetops" },
    { src: "images/gallery (29).jpeg", cat: "estate", featured: true, alt: "Chembra mountain range rising beyond the villa rooftops and palms" },

    // Additional Pools & Patios
    { src: "images/gallery (16).jpeg", cat: "pools", featured: false, alt: "Private pool and sunlit glass lounge verandah" },
    { src: "images/gallery (20).jpeg", cat: "pools", featured: false, alt: "Private pool deck beside the terracotta villa" },
    { src: "images/gallery (25).jpeg", cat: "pools", featured: false, alt: "Shaded patio overlooking the private pool and mountain ridge" },
    { src: "images/gallery (26).jpeg", cat: "pools", featured: false, alt: "Long timber-decked balcony along the private pool" },
    { src: "images/gallery (32).jpeg", cat: "pools", featured: false, alt: "Poolside balcony with brick jali and hillside breeze" },
    { src: "images/gallery (33).jpeg", cat: "pools", featured: false, alt: "Outdoor seating beside the private pool overlooking tea gardens" },
    { src: "images/gallery (37).jpeg", cat: "pools", featured: false, alt: "Private pool deck looking directly onto the tea plantation slope" },
    { src: "images/gallery (47).jpeg", cat: "pools", featured: false, alt: "Exterior corner view of the villa, patio, and private pool" },
    { src: "images/gallery (48).jpeg", cat: "pools", featured: false, alt: "Terracotta verandah overlooking the pool and forest canopy" },
    { src: "images/gallery (49).jpeg", cat: "pools", featured: false, alt: "Crystal-clear tiled private pool" },
    { src: "images/gallery (52).jpeg", cat: "pools", featured: false, alt: "Private pool bordered by warm wooden-framed glass windows" },
    { src: "images/gallery (18).jpeg", cat: "pools", featured: false, alt: "Misty morning view from the brick-jali balcony and pool deck" },

    // Additional Villas & Interiors
    { src: "images/gallery (15).jpeg", cat: "villas", featured: false, alt: "Wrap-around glass verandah catching morning light" },
    { src: "images/gallery (17).jpeg", cat: "villas", featured: false, alt: "Open-plan glass lounge looking out onto Wayanad greenery" },
    { src: "images/gallery (21).jpeg", cat: "villas", featured: false, alt: "Wide window view from inside the villa looking over the pool" },
    { src: "images/gallery (31).jpeg", cat: "villas", featured: false, alt: "Chembra hill peak framed directly through the villa window" },
    { src: "images/gallery (38).jpeg", cat: "villas", featured: false, alt: "Covered sit-out dining space facing the tea estate" },
    { src: "images/gallery (39).jpeg", cat: "villas", featured: false, alt: "Balcony dining table with uninterrupted mountain panorama" },
    { src: "images/gallery (14).jpeg", cat: "villas", featured: false, alt: "Clean modern en-suite bathroom" },
    { src: "images/gallery (41).jpeg", cat: "villas", featured: false, alt: "Shaded indoor verandah looking out to the plantation" },
    { src: "images/gallery (42).jpeg", cat: "villas", featured: false, alt: "Cozy veranda view surrounded by greenery" },
    { src: "images/gallery (44).jpeg", cat: "villas", featured: false, alt: "Patio seating area framing the Wayanad valley" },
    { src: "images/gallery (46).jpeg", cat: "villas", featured: false, alt: "Bamboo-lined private villa walkway and verandah" },

    // Additional Tea Estate & Scenic Views
    { src: "images/gallery (1).jpeg", cat: "estate", featured: false, alt: "Mayflower villa set against a twilight sky and palm silhouettes" },
    { src: "images/gallery (3).jpeg", cat: "estate", featured: false, alt: "Terracotta-tiled villa surrounded by manicured tea bushes" },
    { src: "images/gallery (4).jpeg", cat: "estate", featured: false, alt: "Front elevation of the private pool villa in Meppadi" },
    { src: "images/gallery (5).jpeg", cat: "estate", featured: false, alt: "Golden hour light over the misty valley behind the villa" },
    { src: "images/gallery (6).jpeg", cat: "estate", featured: false, alt: "Evening warm glow from the villa entrance" },
    { src: "images/gallery (7).jpeg", cat: "estate", featured: false, alt: "Twin private pool villas overlooking the sunset hills" },
    { src: "images/gallery (9).jpeg", cat: "estate", featured: false, alt: "Misty rolling tea plantation right outside the property" },
    { src: "images/gallery (10).jpeg", cat: "estate", featured: false, alt: "Fog drifting over the tea gardens viewed from the balcony" },
    { src: "images/gallery (24).jpeg", cat: "estate", featured: false, alt: "Both hillside villas nestled among silver oak trees and tea estates" },
    { src: "images/gallery (35).jpeg", cat: "estate", featured: false, alt: "Hillside view framed through traditional terracotta jali blocks" },
    { src: "images/gallery (40).jpeg", cat: "estate", featured: false, alt: "Full view of the private pool villa amid tropical foliage" },
    { src: "images/gallery (43).jpeg", cat: "estate", featured: false, alt: "Garden pathway leading to the cottages" },
    { src: "images/gallery (45).jpeg", cat: "estate", featured: false, alt: "Distant Wayanad mountain peaks peeking through tall trees" },
    { src: "images/gallery (50).jpeg", cat: "estate", featured: false, alt: "Both villas seen across the tea slope in daylight" },
    { src: "images/gallery (51).jpeg", cat: "estate", featured: false, alt: "Lush tea plantation ridge surrounding Mayflower Holiday Villa" },
  ];

  /* ------------------------------------------------------------------------
     Sticky Header & Mobile Navigation
     ------------------------------------------------------------------------ */
  const header = document.querySelector(".site-header");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const setDrawer = (open) => {
    if (!mobileDrawer || !menuToggle) return;
    mobileDrawer.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener("click", () => {
      setDrawer(!mobileDrawer.classList.contains("is-open"));
    });
    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setDrawer(false));
    });
  }

  /* ------------------------------------------------------------------------
     Pre-filled WhatsApp Booking Bar
     ------------------------------------------------------------------------ */
  const bookingForm = document.getElementById("bookingForm");
  const checkinInput = document.getElementById("checkin");
  const checkoutInput = document.getElementById("checkout");
  const guestsSelect = document.getElementById("guests");
  const villaSelect = document.getElementById("villaCount");
  const bookingError = document.getElementById("bookingError");

  const formatISODate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const formatReadableDate = (iso) => {
    if (!iso) return "";
    const [y, m, d] = iso.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  };

  if (checkinInput && checkoutInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 2);

    const todayStr = formatISODate(today);
    checkinInput.min = todayStr;
    checkinInput.value = formatISODate(tomorrow);
    checkoutInput.min = formatISODate(tomorrow);
    checkoutInput.value = formatISODate(dayAfter);

    checkinInput.addEventListener("change", () => {
      if (!checkinInput.value) return;
      const [y, m, d] = checkinInput.value.split("-").map(Number);
      const next = new Date(y, m - 1, d + 1);
      const nextStr = formatISODate(next);
      checkoutInput.min = nextStr;
      if (!checkoutInput.value || checkoutInput.value <= checkinInput.value) {
        checkoutInput.value = nextStr;
      }
      if (bookingError) bookingError.classList.remove("is-visible");
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const ci = checkinInput?.value || "";
      const co = checkoutInput?.value || "";
      const guests = guestsSelect?.value || "2 Guests";
      const villa = villaSelect?.value || "1 Private Pool Villa";

      if (ci && co && co <= ci) {
        if (bookingError) {
          bookingError.textContent = "Please select a check-out date after your check-in date.";
          bookingError.classList.add("is-visible");
        }
        return;
      }
      if (bookingError) bookingError.classList.remove("is-visible");

      const lines = [
        "Hello Mayflower Holiday Villa! I would like to check availability & rates:",
        ci ? `• Check-in: ${formatReadableDate(ci)}` : null,
        co ? `• Check-out: ${formatReadableDate(co)}` : null,
        `• Guests: ${guests}`,
        `• Preference: ${villa}`,
      ].filter(Boolean);

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  /* ------------------------------------------------------------------------
     Gallery Rendering, Filtering & Accessible Lightbox
     ------------------------------------------------------------------------ */
  const galleryGrid = document.getElementById("galleryGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const showAllBtn = document.getElementById("showAllPhotosBtn");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  let activeFilter = "featured";
  let currentPhotos = [];
  let lightboxIndex = 0;

  const getFilteredPhotos = (filter) => {
    if (filter === "featured") return GALLERY_PHOTOS.filter((p) => p.featured);
    if (filter === "all") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.cat === filter);
  };

  const renderGallery = (filter) => {
    if (!galleryGrid) return;
    activeFilter = filter;
    currentPhotos = getFilteredPhotos(filter);

    galleryGrid.innerHTML = "";
    const frag = document.createDocumentFragment();

    currentPhotos.forEach((photo, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gallery-item" + (filter === "featured" && idx === 0 ? " is-featured-span" : "");
      btn.setAttribute("aria-label", `View photo: ${photo.alt}`);

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.alt;
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 1024;
      img.height = 578;

      const cap = document.createElement("span");
      cap.className = "gallery-caption";
      cap.innerHTML = `<span>${photo.alt}</span>`;

      btn.appendChild(img);
      btn.appendChild(cap);
      btn.addEventListener("click", () => openLightbox(idx));
      frag.appendChild(btn);
    });

    galleryGrid.appendChild(frag);

    filterButtons.forEach((b) => {
      const match = b.dataset.filter === filter;
      b.classList.toggle("is-active", match);
      b.setAttribute("aria-pressed", String(match));
    });

    if (showAllBtn) {
      showAllBtn.style.display = filter === "all" ? "none" : "inline-flex";
    }
  };

  const updateLightboxSlide = () => {
    if (!currentPhotos.length || !lightboxImg) return;
    const item = currentPhotos[lightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    if (lightboxCaption) lightboxCaption.textContent = item.alt;
    if (lightboxCounter) lightboxCounter.textContent = `${lightboxIndex + 1} / ${currentPhotos.length}`;
  };

  const openLightbox = (index) => {
    if (!lightbox) return;
    lightboxIndex = index;
    updateLightboxSlide();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightboxClose?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const stepLightbox = (dir) => {
    if (!currentPhotos.length) return;
    lightboxIndex = (lightboxIndex + dir + currentPhotos.length) % currentPhotos.length;
    updateLightboxSlide();
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => renderGallery(btn.dataset.filter || "featured"));
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      renderGallery("all");
    });
  }

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrev?.addEventListener("click", () => stepLightbox(-1));
  lightboxNext?.addEventListener("click", () => stepLightbox(1));

  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (lightbox?.classList.contains("is-open")) closeLightbox();
      if (mobileDrawer?.classList.contains("is-open")) setDrawer(false);
    } else if (lightbox?.classList.contains("is-open")) {
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    }
  });

  // Touch swipe inside lightbox
  let touchStartX = 0;
  lightbox?.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].clientX;
    },
    { passive: true }
  );
  lightbox?.addEventListener(
    "touchend",
    (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 45) stepLightbox(dx > 0 ? -1 : 1);
    },
    { passive: true }
  );

  renderGallery("featured");

  /* ------------------------------------------------------------------------
     Scroll Reveal Observer & Dynamic Copyright Year
     ------------------------------------------------------------------------ */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

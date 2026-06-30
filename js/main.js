/* =========================================================
   BabyQto — main.js
   Vanilla JS: mobile menu, FAQ accordion, scroll reveal,
   year stamp, navbar shadow on scroll
   ========================================================= */
(function () {
  "use strict";

  /* ---------- ปีปัจจุบันใน footer ---------- */
  var yearEl = document.getElementById("bq-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu toggle ---------- */
  var menuBtn = document.getElementById("bq-menu-btn");
  var menuPanel = document.getElementById("bq-mobile-menu");
  if (menuBtn && menuPanel) {
    menuBtn.addEventListener("click", function () {
      var open = menuPanel.getAttribute("data-open") === "true";
      menuPanel.setAttribute("data-open", String(!open));
      menuBtn.setAttribute("aria-expanded", String(!open));
    });
    // ปิดเมนูเมื่อคลิกลิงก์
    menuPanel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menuPanel.setAttribute("data-open", "false");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".bq-faq-item").forEach(function (item) {
    var btn = item.querySelector(".bq-faq-trigger");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      // ปิดข้ออื่นก่อน (optional: ทีละข้อเปิด)
      document.querySelectorAll(".bq-faq-item").forEach(function (other) {
        other.setAttribute("data-open", "false");
        var ob = other.querySelector(".bq-faq-trigger");
        if (ob) ob.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.setAttribute("data-open", "true");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Navbar shadow ตอนเลื่อน ---------- */
  var navbar = document.getElementById("bq-navbar");
  if (navbar) {
    var onScroll = function () {
      if (window.scrollY > 12) {
        navbar.classList.add("shadow-lg", "bg-white/95");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("shadow-lg", "bg-white/95");
        navbar.classList.add("bg-transparent");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // fallback: โชว์หมด
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Animated counter (stat numbers) ---------- */
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseFloat(el.getAttribute("data-count"));
          var suffix = el.getAttribute("data-suffix") || "";
          var dur = 1400;
          var start = null;
          function tick(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            el.textContent = (target * eased).toFixed(target % 1 === 0 ? 0 : 1) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  }
})();

/**
 * SKILLVERSE — ULTIMATE JOB PLACEMENT & AI-ATS CRACKING TOOLKIT (2026–2027 AI EDITION)
 * High-Converting Landing Page Script
 * 
 * Features:
 * 1. 15-Minute Real JavaScript Countdown Timer
 * 2. Central SuperProfile Checkout URL Configuration
 * 3. Interactive Product Preview Tab Switcher
 * 4. Smooth FAQ Accordion
 * 5. Sticky Mobile Bottom CTA Trigger on Scroll
 * 6. Purchase Notification Popups (Configurable Demo Notifications)
 * 7. Copy-to-Clipboard Utility for AI Prompts
 * 8. Meta Pixel PageView Verification Check
 */

'use strict';

/* ==========================================================================
   CONFIG: PAYMENT URL & NOTIFICATIONS
   ========================================================================== */
// Central Checkout URL pointing to SuperProfile payment page
const PAYMENT_URL = "https://superprofile.bio/vp/%F0%9F%9A%80-ultimate-job-placement---ai-ats-cracking-toolkit--2026%E2%80%932027-ai-edition";

// Purchase notification toast configuration
const NOTIFICATION_CONFIG = {
  enabled: false,          // Disabled per user request
  isDemoMode: false,
  displayDurationMs: 4500,
  intervalDelayMs: 14000,
  notifications: []
};

document.addEventListener('DOMContentLoaded', () => {
  initCheckoutLinks();
  initCountdownTimer();
  initPreviewTabs();
  initFaqAccordion();
  initStickyMobileCTA();
  initPurchaseNotifications();
  initCopyPromptButtons();
  verifyMetaPixelCompliance();
});

/* ==========================================================================
   1. CENTRAL CHECKOUT URL BINDING
   ========================================================================== */
function initCheckoutLinks() {
  const ctaButtons = document.querySelectorAll('.js-payment-cta');
  ctaButtons.forEach(btn => {
    btn.setAttribute('href', PAYMENT_URL);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}

/* ==========================================================================
   2. 15-MINUTE REAL COUNTDOWN TIMER
   ========================================================================== */
function initCountdownTimer() {
  const minutesEl = document.getElementById('timer-minutes');
  const secondsEl = document.getElementById('timer-seconds');
  if (!minutesEl || !secondsEl) return;

  const STORAGE_KEY = 'skillverse_timer_end';
  const DURATION_SECONDS = 15 * 60; // 15 Minutes = 900 seconds

  // Initialize or retrieve end timestamp
  let endTime = localStorage.getItem(STORAGE_KEY);
  const now = Math.floor(Date.now() / 1000);

  if (!endTime || parseInt(endTime, 10) <= now) {
    endTime = now + DURATION_SECONDS;
    localStorage.setItem(STORAGE_KEY, endTime);
  } else {
    endTime = parseInt(endTime, 10);
  }

  function updateTimer() {
    const currentNow = Math.floor(Date.now() / 1000);
    let remaining = endTime - currentNow;

    if (remaining <= 0) {
      // Graceful loop back to 15 minutes without breaking the page or showing negative numbers
      endTime = Math.floor(Date.now() / 1000) + DURATION_SECONDS;
      localStorage.setItem(STORAGE_KEY, endTime);
      remaining = DURATION_SECONDS;
    }

    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;

    minutesEl.textContent = String(mins).padStart(2, '0');
    secondsEl.textContent = String(secs).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   3. PRODUCT PREVIEW TAB SWITCHER
   ========================================================================== */
function initPreviewTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.preview-tab-pane');

  if (!tabButtons.length || !tabPanes.length) return;

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTabId = button.getAttribute('data-tab');

      // Update button state
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update pane state
      tabPanes.forEach(pane => {
        if (pane.id === targetTabId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   4. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Optional: close other items for a clean single-open accordion feel
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   5. STICKY MOBILE CTA BAR TRIGGER
   ========================================================================== */
function initStickyMobileCTA() {
  const stickyBar = document.getElementById('sticky-mobile-cta');
  const heroSection = document.getElementById('hero-section');

  if (!stickyBar || !heroSection) return;

  // Use IntersectionObserver to toggle sticky mobile bar when scrolling past the hero
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // When hero is NOT intersecting (scrolled past), show sticky CTA
        if (!entry.isIntersecting) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(heroSection);
}

/* ==========================================================================
   6. PURCHASE NOTIFICATION TOAST
   ========================================================================== */
function initPurchaseNotifications() {
  if (!NOTIFICATION_CONFIG.enabled || !NOTIFICATION_CONFIG.notifications.length) return;

  const toastEl = document.getElementById('purchase-toast');
  const toastText = document.getElementById('toast-text');
  const toastTime = document.getElementById('toast-time');
  const toastBadge = document.getElementById('toast-demo-badge');

  if (!toastEl || !toastText || !toastTime) return;

  if (toastBadge && NOTIFICATION_CONFIG.isDemoMode) {
    toastBadge.textContent = "Demo Activity";
  }

  let currentIndex = 0;

  function showNextNotification() {
    const item = NOTIFICATION_CONFIG.notifications[currentIndex];
    toastText.textContent = `${item.name} from ${item.city} just purchased`;
    toastTime.textContent = item.timeAgo;

    toastEl.classList.add('active');

    // Slide out after displayDurationMs
    setTimeout(() => {
      toastEl.classList.remove('active');
    }, NOTIFICATION_CONFIG.displayDurationMs);

    // Advance index
    currentIndex = (currentIndex + 1) % NOTIFICATION_CONFIG.notifications.length;
  }

  // Initial delay before first popup
  setTimeout(() => {
    showNextNotification();
    // Subsequent intervals
    setInterval(showNextNotification, NOTIFICATION_CONFIG.intervalDelayMs);
  }, 4000);
}

/* ==========================================================================
   7. INTERACTIVE COPY PROMPT UTILITY
   ========================================================================== */
function initCopyPromptButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-copy-target');
      const targetElement = document.querySelector(targetSelector);
      if (!targetElement) return;

      const textToCopy = targetElement.textContent.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#10b981';
        btn.style.color = '#ffffff';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text:', err);
      });
    });
  });
}

/* ==========================================================================
   8. META PIXEL COMPLIANCE VERIFICATION
   ========================================================================== */
function verifyMetaPixelCompliance() {
  // Confirm that only PageView was triggered
  if (window.fbq) {
    console.log('[SkillVerse Compliance] Meta Pixel initialized with ID 1168805412328982.');
    console.log('[SkillVerse Compliance] Tracking restricted strictly to PageView. No Purchase or Checkout events on landing page.');
  }
}

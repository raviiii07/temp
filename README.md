# SkillVerse — Ultimate Job Placement & AI-ATS Cracking Toolkit (2026–2027 AI Edition)
### Premium High-Converting Digital Product Landing Page

This repository contains the complete production-grade landing page for **SkillVerse: Ultimate Job Placement & AI-ATS Cracking Toolkit (2026–2027 AI Edition)** priced at **₹199**.

---

## 📁 Project Structure

```text
├── index.html               # Main semantic HTML5 landing page with SEO, Meta Pixel & conversion structure
├── css/
│   └── style.css            # Custom CSS with design tokens, glassmorphism, responsive breakpoints & animations
├── js/
│   └── script.js            # 15-min countdown timer, FAQ accordion, tabs, mobile sticky bar & checkout logic
├── assets/
│   └── images/              # High-resolution WebP and JPEG mockup and sample assets
│       ├── hero-product.webp / .jpg      # 3D Toolkit Mockup (Laptop with 95% ATS score, box, tablet)
│       ├── ats-resume.webp / .jpg        # Clean ATS Resume sample
│       ├── linkedin-kit.webp / .jpg      # LinkedIn Optimization Guide mockup
│       ├── job-tracker.webp / .jpg       # Google Sheets / Excel application tracker
│       ├── interview-kit.webp / .jpg     # Interview dashboard & question bank mockup
│       └── career-prompts.webp / .jpg    # 200+ AI career prompts UI
├── server.js                # Zero-dependency local Node.js HTTP server
└── README.md                # Project documentation and configuration guide
```

---

## 🚀 How to Run the Website

### Option 1: Direct Browser Launch (No server required)
Because this project is built with standard HTML5, CSS3, and Vanilla JavaScript with no build steps or frameworks, you can simply **double-click `index.html`** in File Explorer, or open it with any web browser (Chrome, Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Node.js)
Open PowerShell / Terminal in this directory and run:
```powershell
agy-node server.js
# Or if standard node is in your system PATH:
node server.js
```
Then visit: `http://localhost:3000/`

---

## 💳 SuperProfile Payment URL Configuration

All primary purchase buttons and CTAs throughout the page are linked to your official checkout link:
`https://superprofile.bio/vp/%F0%9F%9A%80-ultimate-job-placement---ai-ats-cracking-toolkit--2026%E2%80%932027-ai-edition`

### Where it is configured:
1. **HTML:** Bound directly as fallback href in all `.js-payment-cta` links in `index.html` (Hero, Solution, Previews, Pricing, Testimonials, Final CTA, Sticky Mobile Bar).
2. **JavaScript:** Centrally managed at the top of `js/script.js` (`const PAYMENT_URL = "..."`), which automatically attaches to every CTA button on DOM load and opens safely in a new tab.

---

## 📊 Meta Pixel Setup & Compliance Confirmation

- **Pixel ID:** `1607708017329407`
- **Location:** Inside the `<head>` of `index.html` (Lines 40–58).
- **Compliance Confirmation:**
  - **ONLY `PageView` is tracked:** `fbq('track', 'PageView');`
  - **NO `Purchase` event:** Neither `Purchase`, `InitiateCheckout`, `AddToCart`, `Lead`, nor `ViewContent` are called on this landing page.
  - Purchase tracking will be handled exclusively on your SuperProfile checkout/thank-you page, ensuring zero duplicate or false event firing.

---

## 🖼️ Image Replacements & AI Prompts

All image files are located in `assets/images/`. To replace any image, drop your new image file in `assets/images/` using the matching filename (`.webp` or `.jpg`).

### Image Generation Prompts (Included in `index.html` comments):

1. **Hero Product Mockup (`hero-product.webp`):**
   > *"Create a premium black and orange digital career toolkit product mockup showing a laptop with ATS resume analysis, an interview dashboard, LinkedIn optimization interface and digital product box. Dark charcoal background, warm orange/gold rim lighting, premium e-commerce advertising aesthetic, realistic 3D product rendering, high contrast, sophisticated and trustworthy."*

2. **ATS Resume Preview (`ats-resume.webp`):**
   > *"Create a realistic professional ATS-friendly resume shown on a clean white document, modern single-column layout, sections for summary, experience, skills, projects and education, subtle ATS optimization interface, professional corporate aesthetic."*

3. **LinkedIn Kit Preview (`linkedin-kit.webp`):**
   > *"Create a premium dark navy and gold LinkedIn profile optimization digital guide mockup, elegant typography, professional career branding, modern editorial design."*

4. **Job Tracker Preview (`job-tracker.webp`):**
   > *"Create a professional Microsoft Excel / Google Sheets style job application tracker dashboard showing applications, interviews, follow-ups, offers and analytics, clean modern UI."*

5. **Interview Kit Preview (`interview-kit.webp`):**
   > *"Create a premium interview preparation dashboard with interview questions, answer frameworks, mock interview preparation and AI interview practice interface."*

6. **Career Prompts Preview (`career-prompts.webp`):**
   > *"Create a modern sleek dark mode interface showcasing 200+ AI career prompts, career roadmaps, and cheat sheets with orange and gold glowing accent cards, clean typography, futuristic tech aesthetics."*

---

## ⚡ Key Features Implemented

- **15-Minute Countdown Timer:** Real second-by-second countdown with `localStorage` persistence that smoothly loops without breaking.
- **Glassmorphism Design:** Dark charcoal (`#060709`) aesthetic with glowing amber/orange accents (`#ff6a00`, `#ffb429`).
- **Exact Toolkit Inventory:** All 12 toolkit categories with the required counts (200+ ATS Templates, 250+ AI Prompts, 100+ Cover Letter Guides, 300+ HR Scripts, 300+ Interview Questions, 300+ AI Interview Prompts, 200+ Career Prompts).
- **Interactive Previews:** Tabbed showcase with live copy-to-clipboard functionality for sample prompts.
- **Sticky Mobile CTA Bar:** Fixed bottom bar displaying "₹199 Only" and "Get Access →" appearing when mobile users scroll past the hero.
- **Demo Purchase Toasts:** Non-intrusive purchase activity notifications clearly marked with demo status and easily configurable in `js/script.js`.
- **Accessibility & SEO:** 100% semantic tags, Open Graph cards, Twitter metadata, and responsive layouts across 320px–1440px+.

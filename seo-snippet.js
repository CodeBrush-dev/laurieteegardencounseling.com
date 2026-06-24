// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.laurieteegardencounseling.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.laurieteegardencounseling.com/","title_tag":"Trauma-informed therapy Bowling Green | Laurie Teegarden Counseling","meta_description":"Holistic counseling in Bowling Green, KY for adult survivors, attachment wounds, codependency and shame, with mind-body healing for deep emotional transformation."},{"page_url":"https://www.laurieteegardencounseling.com/about-laurie","title_tag":"Holistic counseling Bowling Green | About Laurie Teegarden","meta_description":"Learn how Laurie provides trauma-informed, holistic counseling and mind-body healing to support emotional healing, shame and self-worth, and relational trauma recovery."},{"page_url":"https://www.laurieteegardencounseling.com/services-4","title_tag":"Childhood trauma counseling KY | Services Laurie Teegarden","meta_description":"Services include childhood trauma counseling, relational trauma counseling, shame and self-worth therapy, codependency support, and holistic mind-body healing in Kentucky."}],"keywords":["trauma-informed therapy Bowling Green","childhood trauma counseling KY","emotional healing Bowling Green","codependency support Kentucky","adult survivors therapy Bowling Green","relational trauma counseling KY","mind-body healing Bowling Green","shame and self-worth therapy KY","holistic counseling Bowling Green","attachment wounds therapy Kentucky"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "PsychologicalCare",
  "@id": "https://www.laurieteegardencounseling.com/#psychologicalcare",
  "name": "Laurie Teegarden Counseling",
  "alternateName": "Laurie Teegarden Counseling - Trauma-Informed Therapy & Coaching",
  "url": "https://www.laurieteegardencounseling.com/",
  "description": "Laurie Teegarden Counseling provides trauma-informed, holistic counseling and coaching for adults healing from complex relational and childhood trauma, attachment wounds, shame, codependency, perfectionism, burnout, and neurodivergence, with in-person therapy in Bowling Green, Kentucky and telehealth for adults in Kentucky and Florida.",
  "image": [
    "https://static.wixstatic.com/media/c274b8_115c731e899947ba9138d67bab7c89f1~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/KEP_8268_edited.jpg",
    "https://static.wixstatic.com/media/c274b8_f0ee4d6433554c62981c83665d388aaa%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/c274b8_f0ee4d6433554c62981c83665d388aaa%7Emv2.png"
  ],
  "telephone": "+1-615-693-1116",
  "email": "laurie@laurieteegardencounseling.com",
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Kentucky"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Florida"
    },
    {
      "@type": "City",
      "name": "Bowling Green"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Laurie Cape",
    "description": "Licensed Professional Clinical Counselor and trauma-informed consultant and coach, specializing in complex relational and developmental trauma, attachment wounds, shame, perfectionism, burnout, codependency, and leadership development for helping professionals.",
    "jobTitle": "Licensed Professional Clinical Counselor, Trauma Therapist",
    "knowsAbout": [
      "Complex relational trauma",
      "Childhood trauma",
      "Attachment wounds",
      "Mother wound healing",
      "Inner child and reparenting therapy",
      "Complex PTSD from primary relationships in childhood",
      "Shame and self-worth struggles",
      "Identity loss",
      "Anxiety and perfectionism in high-achieving people",
      "Codependency and people-pleasing",
      "Chronic depression from childhood trauma",
      "Emotional overwhelm and dysregulation",
      "Process addictions and compulsive behaviors",
      "Highly Sensitive Person (HSP) and intellectual giftedness issues",
      "ADHD and neurodivergence",
      "Narcissistic abuse recovery",
      "Leadership development for helping and healing professionals",
      "Holistic, mind-body-spirit healing",
      "Advanced Integrative Therapy",
      "Internal Family Systems and parts work",
      "Gottman Method couples therapy"
    ],
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Western Kentucky University"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Adler Graduate School"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Ball State University"
      }
    ]
  },
  "provider": {
    "@type": "Person",
    "name": "Laurie Cape"
  },
  "sameAs": [
    "https://www.laurieteegardencounseling.com/about-laurie",
    "https://www.laurieteegardencounseling.com/services-4"
  ],
  "serviceArea": [
    {
      "@type": "AdministrativeArea",
      "name": "Kentucky"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Florida"
    }
  ],
  "availableService": [
    {
      "@type": "Service",
      "name": "Individual Trauma-Informed Counseling",
      "description": "Individual counseling for adults healing from complex relational and childhood trauma, attachment wounds, shame, anxiety, depression, perfectionism, burnout, and emotional dysregulation.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Bowling Green"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Kentucky"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Florida"
        }
      ],
      "provider": {
        "@type": "Person",
        "name": "Laurie Cape"
      }
    },
    {
      "@type": "Service",
      "name": "Couples Therapy",
      "description": "Couples counseling integrating attachment-based and Gottman Method approaches to heal relational wounds and build secure, authentic connection.",
      "provider": {
        "@type": "Person",
        "name": "Laurie Cape"
      }
    },
    {
      "@type": "Service",
      "name": "Group Therapy",
      "description": "Therapeutic groups for adult survivors of childhood relational trauma seeking kinship, belonging, and deep healing in a safe, closed-group environment.",
      "provider": {
        "@type": "Person",
        "name": "Laurie Cape"
      }
    },
    {
      "@type": "Service",
      "name": "Trauma-Informed Life Coaching",
      "description": "Holistic, trauma-informed life coaching to support personal and professional growth, work-life balance, stress management, and life visioning.",
      "provider": {
        "@type": "Person",
        "name": "Laurie Cape"
      }
    },
    {
      "@type": "Service",
      "name": "Leadership Coaching for Helping Professionals",
      "description": "Leadership development coaching for therapists, educators, healthcare providers, social workers, and other helping professionals ready for deep, lasting transformation in their personal and professional lives.",
      "provider": {
        "@type": "Person",
        "name": "Laurie Cape"
      }
    },
    {
      "@type": "Service",
      "name": "Clinical Supervision",
      "description": "Clinical supervision for Licensed Professional Clinical Counselor Associates in Kentucky and Registered Interns for Mental Health Counseling in Florida.",
      "provider": {
        "@type": "Person",
        "name": "Laurie Cape"
      }
    },
    {
      "@type": "Service",
      "name": "Organizational Development & Consulting",
      "description": "Consulting on organizational development, work culture improvement, staff leadership and development, and talent utilization through groups, workshops, intensives, retreats, and speaking events.",
      "provider": {
        "@type": "Person",
        "name": "Laurie Cape"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapeutic and Coaching Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Counseling for Healing: Core Trauma, Emotional & Identity Struggles, and Behavioral & Nervous System Responses",
          "description": "Individual, couples, and group therapy to heal core trauma, emotional and identity struggles, and behavioral and nervous system responses using IFS, somatic work, attachment-based therapy, narrative therapy, AEDP, and Advanced Integrative Therapy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coaching for Personal and Professional Growth & Exploration",
          "description": "Coaching for work-life balance, time management, work identity and purpose, leadership development, holistic wellness, stress management, burnout recovery and prevention, life planning and visioning, career exploration, and home and office organization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clinical Supervision",
          "description": "Clinical supervision for counseling associates and registered interns seeking support in developing their professional identity and clinical skills."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Organizational Consulting",
          "description": "Organizational development, work culture improvement, staff leadership and development, and talent utilization services delivered via workshops, intensives, retreats, and speaking engagements."
        }
      }
    ]
  },
  "knowsAbout": [
    "Complex relational and developmental trauma",
    "Childhood relational trauma",
    "Attachment wounds and attachment trauma",
    "Mother wound healing",
    "Inner child and reparenting therapy",
    "Emotional neglect and abandonment",
    "Shame, self-worth, and identity loss",
    "Anxiety and perfectionism in high-achieving adults",
    "Codependency, people-pleasing, and emotional caretaking",
    "Chronic depression related to childhood trauma",
    "Emotional overwhelm and dysregulation",
    "Process addictions and compulsive behaviors",
    "Highly Sensitive Person (HSP) challenges",
    "Intellectual giftedness and emotional intensity",
    "ADHD and neurodivergence in adults",
    "Narcissistic abuse recovery",
    "Burnout recovery and prevention",
    "Leadership development for helping and healing professionals",
    "Internal Family Systems (IFS) and parts work",
    "Somatic and mind-body approaches",
    "Emotion-focused and attachment-based therapy",
    "Narrative therapy",
    "Accelerated Experiential Dynamic Psychotherapy (AEDP)",
    "Advanced Integrative Therapy (AIT)",
    "Holistic, mind-body-spirit integration",
    "Gottman Method couples therapy"
  ],
  "hasFAQPage": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should I consider group counseling or coaching? What’s it like and what are the benefits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Group counseling and coaching can offer powerful meta-benefits, including a strong sense of kinship and belonging that enhances the healing gains of individual counseling. With careful attention to confidentiality, mutual trust, and safety, closed groups with set start and end times can foster community, commitment, and a feeling of having a dedicated place among peers who are all working toward greater happiness and peace."
        }
      },
      {
        "@type": "Question",
        "name": "How much do counseling and coaching services cost? Can I afford it? Does Lifelong You take my insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Counseling and coaching services are a valuable investment in your current and future health, and both are priced similarly because the work is equally powerful. Services are private pay and insurance is not billed directly, but documentation can be provided for out-of-network reimbursement. Current rates, payment details, and limited sliding scale options based on need and commitment to healing are discussed during a free 10-minute consultation."
        }
      },
      {
        "@type": "Question",
        "name": "How long will I need help? How does this work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Length of counseling or coaching varies by client, healing pace, engagement in the work, past therapy experiences, and specific needs. Many clients can expect to work together for at least three months to between six months and a year, and some continue for a year or two for maintenance and ongoing support. A tentative time frame and plan are developed collaboratively beginning with the first session, and can be further discussed during a free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What is Lifelong You’s style? Is Laurie a good fit for me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Therapist fit is important, and each practitioner has a unique style. Many clients experience Laurie as kind, personable, relatable, and able to balance wisdom with genuine care. She draws on a wide range of professional and personal experiences, and often shares appropriately from her own story to offer courage and inspiration. You can review the About Laurie information for more on her approach, background, and qualifications, and you are welcome to ask specifically about her credentials."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();


/**
'''Purpose:
A tiny, framework-free i18n helper for static sites. It:
- Stores translations in a dictionary (TRANSLATIONS) keyed by language code
- Applies translations to any element with [data-i18n="token"]
- Supports attribute translation via [data-i18n-attr="placeholder"] etc.
- Persists preferred language in localStorage ("lang") and sets <html lang="...">

Variables:
- TRANSLATIONS: Object<{langCode: Object<key: string, value: string>>}>; translation dictionaries
- DEFAULT_LANG: string; fallback language code
Acceptable Range:
- langCode: "en", "zh-TW", "zh-CN" (extendable)
- tokens: any string keys present in TRANSLATIONS[langCode]

Error Handling:
- All public functions are wrapped with try/catch and log errors without throwing.
'''
*/

/** Translation dictionaries */
const TRANSLATIONS = {
  "en": {
    "nav.brand": "g-Pico Automation home",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.contact": "Contact",
    "nav.donation": "Donation",

    "index.hero_title": "Welcome to g-Pico Automation site",
    "index.hero_paragraph": "Designed for beginners, with simple deployment and ease of use in mind, our automation tools allow anyone to get started quickly, without the need for technical expertise. We provide comprehensive resources and guides to ensure a smooth learning experience. Our mission is to make automation accessible across the globe, starting from essential tools to advanced automation solutions for all industries. We aim to free you from tedious tasks, so you can focus on what truly drives your passion. Enjoy and have fun! :) g-Pico team",
    "index.tab.news": "News",
    "index.tab.tech_docs": "Tech Documents",
    "index.tab.links": "Useful Links",
    "index.h.latest_news": "Latest News",
    "index.th.date": "Date",
    "index.th.news_info": "News Information",
    "index.h.tech_docs": "Technical Documents",
    "index.th.doc_link": "Document Link",
    "index.th.description": "Description",
    "index.h.links": "Useful Links",
    "index.th.hyper_link": "Hyper Link",

    "products.title": "Our Products",
    "products.price": "Price:",
    "products.view_details": "View Details",
    "products.buy_now": "Buy Now",

    "contact.title": "Contact Us",
    "contact.p.intro": "Our team is not only professional and passionate but also highly values work-life balance. In addition to our YouTube channel and discussion forums, we also have an official Instagram account where we share updates. We hope to connect with fellow engineering enthusiasts like you, sharing both our daily lives and experiences, making every step of this life journey count.",
    "contact.youtube": "YouTube Channel:",
    "contact.youtube_tip": "Learn from videos",
    "contact.fb": "Facebook Group:",
    "contact.fb_tip": "Discuss at community",
    "contact.ig": "Instagram:",
    "contact.ig_tip": "Building the future through silent breakthroughs, embracing adventure and enjoying engineer life!",
    "contact.mail": "Email:"
  },

  "zh-TW": {
    "nav.brand": "橘皮客自動化首頁",
    "nav.home": "首頁",
    "nav.products": "產品",
    "nav.contact": "聯絡我們",
    "nav.donation": "贊助",

    "index.hero_title": "歡迎來到 橘皮客自動化網站",
    "index.hero_paragraph": "我們以初學者友善為核心，強調簡單部署與易於上手，讓任何人都能快速投入自動化，而不必具備深厚的技術背景。我們提供完整的學習資源與指引，確保順暢的學習體驗。使命是讓自動化走入全世界的每個角落，從基礎工具到跨產業的進階解決方案。我們希望替你省下繁瑣作業，把時間留給真正有熱情的事。好好享受，玩得開心！: )  g-Pico 團隊",
    "index.tab.news": "最新消息",
    "index.tab.tech_docs": "技術文件",
    "index.tab.links": "實用連結",
    "index.h.latest_news": "最新消息",
    "index.th.date": "日期",
    "index.th.news_info": "消息內容",
    "index.h.tech_docs": "技術文件",
    "index.th.doc_link": "文件連結",
    "index.th.description": "說明",
    "index.h.links": "實用連結",
    "index.th.hyper_link": "超連結",

    "products.title": "我們的產品",
    "products.price": "價格：",
    "products.view_details": "查看詳情",
    "products.buy_now": "立即購買",

    "contact.title": "聯絡我們",
    "contact.p.intro": "我們的團隊專業且熱情，同時重視工作與生活的平衡。除了 YouTube 與討論社團外，也有官方 Instagram 分享近況。我們希望與同好工程師彼此連結，分享日常與經驗，讓人生每一步都更有意義。",
    "contact.youtube": "YouTube 頻道：",
    "contact.youtube_tip": "觀看教學影片",
    "contact.fb": "Facebook 社團：",
    "contact.fb_tip": "加入技術討論",
    "contact.ig": "Instagram：",
    "contact.ig_tip": "默默突破、擁抱冒險、享受工程生活！",
    "contact.mail": "Email："
  },

  "zh-CN": {
    "nav.brand": "橘皮客自动化首页",
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.contact": "联系我们",
    "nav.donation": "赞助",

    "index.hero_title": "欢迎来到 橘皮客自动化网站",
    "index.hero_paragraph": "我们以新手友好为核心，强调简单部署与易用性，让任何人无需深厚技术背景即可快速上手。我们提供完整的学习资源与指南，确保顺畅学习体验。使命是让自动化走向全球，从基础工具到跨行业的进阶方案。希望帮你摆脱繁琐任务，把时间留给真正热爱的事。玩得开心！: )  g-Pico 团队",
    "index.tab.news": "最新消息",
    "index.tab.tech_docs": "技术文档",
    "index.tab.links": "实用链接",
    "index.h.latest_news": "最新消息",
    "index.th.date": "日期",
    "index.th.news_info": "消息内容",
    "index.h.tech_docs": "技术文档",
    "index.th.doc_link": "文档链接",
    "index.th.description": "说明",
    "index.h.links": "实用链接",
    "index.th.hyper_link": "超链接",

    "products.title": "我们的产品",
    "products.price": "价格：",
    "products.view_details": "查看详情",
    "products.buy_now": "立即购买",

    "contact.title": "联系我们",
    "contact.p.intro": "我们的团队专业且热情，同时重视工作与生活的平衡。除了 YouTube 与讨论社群，也有官方 Instagram 分享近况。期待与工程同好建立连接，分享日常与经验，让人生每一步都更有意义。",
    "contact.youtube": "YouTube 频道：",
    "contact.youtube_tip": "观看教学影片",
    "contact.fb": "Facebook 社群：",
    "contact.fb_tip": "加入技术讨论",
    "contact.ig": "Instagram：",
    "contact.ig_tip": "默默突破、拥抱冒险、享受工程生活！",
    "contact.mail": "Email："
  }
};

/** Default / fallback language */
const DEFAULT_LANG = "en";
/** Read ?lang=xx from URL once and persist to localStorage (if valid) */
try {
  /*
  '''Purpose:
  Allow setting language via URL like ?lang=en|zh-TW|zh-CN and persist it.
  Variables:
  - langParam: string from URLSearchParams
  Acceptable Range:
  - Must be a key in TRANSLATIONS, e.g., "en", "zh-TW", "zh-CN"
  Error Handling:
  - Wrapped in try/catch; logs error without throwing.

  Example: using below link, give to customer: 
  https://your.site/index.html?lang=zh-TW

  ?lang=zh-TW, en, or zh-CN can assign different language 
  '''
  */
  const usp = new URLSearchParams(window.location.search);
  const langParam = usp.get("lang");
  if (langParam && TRANSLATIONS[langParam]) {
    localStorage.setItem("lang", langParam);
  }
} catch (e) {
  console.error("error parsing lang param:", e);
  // pass
} // end_of_lang_param_persist


/** Get current language from localStorage or browser, fallback to DEFAULT_LANG */
function getCurrentLanguage() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    } else {
      // Try browser language like 'zh-TW' / 'zh-CN' / 'en'
      const nav = (navigator.language || navigator.userLanguage || "").trim();
      if (TRANSLATIONS[nav]) return nav;
      if (nav.startsWith("zh")) {
        // Default to Traditional Chinese for zh if region unknown
        return TRANSLATIONS["zh-TW"] ? "zh-TW" : DEFAULT_LANG;
      }
      return DEFAULT_LANG;
    }
  } catch (e) {
    console.error(`getCurrentLanguage error: ${e}`);
    return DEFAULT_LANG;
  } // end_of_getCurrentLanguage
}

/** Persist language choice, update <html lang="...">, and re-apply translations */
function setLanguage(lang) {
  try {
    if (!TRANSLATIONS[lang]) lang = DEFAULT_LANG;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    applyTranslations(document);
    // Update language selector if present
    const sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;
  } catch (e) {
    console.error(`setLanguage error: ${e}`);
    // pass
  } // end_of_setLanguage
}

/** Apply translations to all elements with [data-i18n] */
function applyTranslations(root) {
  try {
    const lang = getCurrentLanguage();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    const nodes = (root || document).querySelectorAll("[data-i18n]");
    nodes.forEach((el) => {
      try {
        const key = el.getAttribute("data-i18n");
        const attr = el.getAttribute("data-i18n-attr");
        const val = dict[key];
        if (!val) return;
        if (attr) {
          el.setAttribute(attr, val);
        } else {
          el.textContent = val;
        }
      } catch (inner) {
        console.error(`applyTranslations node error: ${inner}`);
        // pass
      }
    });
  } catch (e) {
    console.error(`applyTranslations error: ${e}`);
    // pass
  } // end_of_applyTranslations
}

/** Initialize i18n on DOM ready */
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Sync <html lang> and selector
    const lang = getCurrentLanguage();
    document.documentElement.setAttribute("lang", lang);

    // Bind language selector if exists
    const sel = document.getElementById("langSelect");
    if (sel) {
      sel.value = lang;
      sel.addEventListener("change", function (ev) {
        try {
          setLanguage(ev.target.value);
          // No page reload needed
        } catch (e) {
          console.error(`langSelect change error: ${e}`);
          // pass
        }
      });
    }

    // First pass
    applyTranslations(document);
  } catch (e) {
    console.error(`i18n init error: ${e}`);
    // pass
  }
}); // end_of_DOMReady

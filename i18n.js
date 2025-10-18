
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
    "index.hero_paragraph": `Designed for beginners, with simple deployment and ease of use in mind, 
    our automation tools allow anyone to get started quickly, without the need for technical expertise.
    We provide comprehensive resources and guides to ensure a smooth learning experience. <br><br>
    Our mission is to make automation accessible across the globe, starting from essential tools to advanced 
    automation solutions for all industries. We aim to free you from tedious tasks, so you can focus on what 
    truly drives your passion. Enjoy and have fun! :) <br><br>g-Pico team`,
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

    "products.title": "Supported Hardware",
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
    "contact.mail": "Email:",

    "donation.title": "Support and encouragement",
    "donation.p1": "Your support is the lifeblood of our growth, sparking innovation and progress!",
    "donation.p2": "There are 3 different currency we're able to accept: USD, RMB, NTD, please choose and use related QR-code",
    "donation.form.amount": "Donation Amount",
    "donation.form.amount_ph": "Enter amount",
    "donation.form.email": "Your Email",
    "donation.form.email_ph": "Enter your email",
    "donation.thanks": "Thank you for your generosity. We will make sure to use every penny wisely and with appreciation.",
    "donation.submit": "Submit info and let us know who to thank for!~ ",
    "donation.alert.confirm": "Are you sure you want to submit the donation?",
    "donation.alert.ok": "Donation confirmed! Thank you for your support.",
    "donation.alert.fail": "There was an issue with your donation. Please try again.",
    "donation.alert.error": "An error occurred while processing your donation.",
    "donation.alert.cancel": "Donation cancelled.",
    
    "donation.qr.label": "Choose a method",
    "donation.qr.opt.paypal": "PayPal (USD) ",
    "donation.qr.opt.wechat": "WeChat Pay (RMB) ",
    "donation.qr.opt.yoyo": "YoYoPay (NTD) ",
    "donation.qr.opt.jko": "JKOPay (NTD)",
    "donation.qr.opt.taiwanpay": "Taiwan Pay (NTD)",

    "donation.p3.paypal_html": "Prefer desktop flow? Click <a href=\"https://www.paypal.com/\" target=\"_blank\" rel=\"noopener noreferrer\">PayPal</a> to open in a new tab, then complete your donation there. The QR works on mobile scanners.",
    "donation.p3.wechat_html": "Only support for related app.",
    "donation.p3.yoyo_html": "Only support for related app.",
    "donation.p3.jko_html": "Only support for related app.",
    "donation.p3.taiwanpay_html": "Only support for Taiwan bank or app.",



  },

  "zh-TW": {
    "nav.brand": "橘皮客自動化首頁",
    "nav.home": "首頁",
    "nav.products": "產品",
    "nav.contact": "聯絡我們",
    "nav.donation": "贊助",

    "index.hero_title": "歡迎來到 橘皮客自動化網站",
    "index.hero_paragraph": `我們以初學者友善為核心，強調簡單部署與易於上手，讓任何人都能快速投入自動化，而不必具備深厚的技術背景。
    我們提供完整的學習資源與指引，確保順暢的學習體驗。<br><br>
    我們的使命是讓自動化走入全世界的每個角落，從基礎工具到跨產業的進階解決方案。
    我們希望替你省下繁瑣作業，把時間留給真正有熱情的事。好好享受，玩得開心！: )  <br><br>g-Pico 團隊`,
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

    "products.title": "相容硬體一覽",
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
    "contact.mail": "Email：",

    "donation.title": "支持與鼓勵",
    "donation.p1": "您的支持是我們成長的養分，點燃創新與前進的火花！",
    "donation.p2": "我們能夠接受三種不同的貨幣：美元 (USD)、人民幣 (RMB)、新臺幣 (NTD)，請選擇並使用相關的 QR 碼。",
    "donation.form.amount": "贊助金額",
    "donation.form.amount_ph": "請輸入金額",
    "donation.form.email": "您的 Email",
    "donation.form.email_ph": "請輸入您的 Email",
    "donation.thanks": "感謝您的慷慨支持，我們會珍惜每一分資源並妥善運用。",
    "donation.submit": "送出資料，讓我們知道該向誰致謝！",
    "donation.alert.confirm": "確定要送出贊助資訊嗎？",
    "donation.alert.ok": "贊助已確認！感謝您的支持。",
    "donation.alert.fail": "處理您的贊助時發生問題，請再試一次。",
    "donation.alert.error": "系統處理時發生錯誤。",
    "donation.alert.cancel": "已取消贊助。", 

    "donation.qr.label": "選擇付款方式",
    "donation.qr.opt.paypal": "PayPal",
    "donation.qr.opt.wechat": "微信支付（簡體中文）",
    "donation.qr.opt.yoyo": "悠遊付",
    "donation.qr.opt.jko": "街口支付",
    "donation.qr.opt.taiwanpay": "台灣Pay",

    "donation.p3.paypal_html": "偏好電腦操作？請點擊 <a href=\"https://www.paypal.com/\" target=\"_blank\" rel=\"noopener noreferrer\">PayPal</a>（新分頁開啟），於 PayPal 頁面完成贊助。手機則可直接掃描左側 QR。",
    "donation.p3.wechat_html": "只能搭配對應的 App 進行使用",
    "donation.p3.yoyo_html": "請使用悠遊付掃描 QR  code",
    "donation.p3.jko_html": "請使用街口支付掃描 QR code",
    "donation.p3.taiwanpay_html": "請使用台灣Pay 掃描QR code. 請先確認已安裝支援的銀行 App。",
    
  },

  "zh-CN": {
    "nav.brand": "橘皮客自动化首页",
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.contact": "联系我们",
    "nav.donation": "赞助",

    "index.hero_title": "欢迎来到 橘皮客自动化网站",
    "index.hero_paragraph": `我们以新手友好为核心，强调简单部署与易用性，让任何人无需深厚技术背景即可快速上手。
    我们提供完整的学习资源与指南，确保顺畅学习体验。<br><br>我们的使命是让自动化走向全球，从基础工具到跨行业的进阶方案。
    希望帮你摆脱繁琐任务，把时间留给真正热爱的事。玩得开心！: )  <br><br>g-Pico 团队`,
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

    "products.title": "兼容硬件一览",
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
    "contact.mail": "Email：",

    "donation.title": "支持与鼓励",
    "donation.p1": "您的支持是我们成长的动力，点燃创新与前行的火花！",
    "donation.p2": "我们能够接受三种不同的货币，请选择并使用相关的 QR 我们能够接受三种不同的货币：美元 (USD)、人民币 (RMB)、新台币 (NTD)，请选择并使用相关的 QR 码。",
    "donation.form.amount": "赞助金额",
    "donation.form.amount_ph": "请输入金额",
    "donation.form.email": "您的邮箱",
    "donation.form.email_ph": "请输入您的邮箱",
    "donation.thanks": "感谢您的慷慨支持，我们会珍惜并妥善运用每一分资源。",
    "donation.submit": "提交资料，让我们知道该向谁致谢！",
    "donation.alert.confirm": "确定要提交赞助信息吗？",
    "donation.alert.ok": "赞助已确认！感谢您的支持。",
    "donation.alert.fail": "处理赞助时出现问题，请重试。",
    "donation.alert.error": "系统处理时发生错误。",
    "donation.alert.cancel": "已取消赞助。", 

    "donation.qr.label": "选择付款方式",
    "donation.qr.opt.paypal": "PayPal",
    "donation.qr.opt.wechat": "微信支付（简体中文）",
    "donation.qr.opt.yoyo": "悠游付",
    "donation.qr.opt.jko": "街口支付",
    "donation.qr.opt.taiwanpay": "台湾Pay",

    "donation.p3.paypal_html": "更偏好电脑操作？点击 <a href=\"https://www.paypal.com/\" target=\"_blank\" rel=\"noopener noreferrer\">PayPal</a>（新标签打开），在 PayPal 页面完成赞助。手机则可直接扫码左侧二维码。",
    "donation.p3.wechat_html": "请使用微信扫描左侧二维码。",
    "donation.p3.yoyo_html": "请使用悠游付扫描二维码",
    "donation.p3.jko_html": "请使用街口支付扫描二维码",
    "donation.p3.taiwanpay_html": "请使用台湾Pay 扫码。请先确认已安装支持的银行 App。",

    
  }
};

/** Default / fallback language */
const DEFAULT_LANG = "en";

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
          el.innerHTML  = val;
        }

        /**
         * if (attr) {
          el.setAttribute(attr, val);
        } else {
          el.textContent = val;
        }
        */

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

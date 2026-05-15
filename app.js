const translations = {
  ja: {
    label: "Flutter / Dart Engineer",
    heroTitle: "シンプルで使いやすい Flutter プロダクトを作ります。",
    heroLead:
      "Windows アプリケーション、バックエンド、Flutter を用いたモバイルアプリの開発に携わってきました。近年は特に Flutter を中心に取り組んでいます（2026年現在）。また最近では、日本に拠点を置く世界的な企業において、新人向けの Flutter 指導にも関わっています。このページで紹介しているものは、個人で取り組んだ成果物のみです。",
    workTitle: "主な実績",
    work1:
      "Flutter 向けの画像アノテーションウィジェットです。回転、図形描画、テキスト追加、Undo/Redo、画像エクスポートなどに対応しています。",
    work2:
      "7桁の郵便番号から日本の住所情報を取得する Dart / Flutter パッケージです。住所情報と API エラーを型付きで扱えます。",
    work3:
      "`StatefulShellBranch` で `NavigatorObserver` のリストを扱えるようにした OSS コントリビューションです。",
    work4Title: "語学ラボ / LinguaLab",
    work4:
      "AI を使って読解教材を生成し、音読録音、単語抽出、単語カード化、オフライン音声再生までできる語学学習アプリです。",
    articlesTitle: "記事",
    article1:
      "Android と iOS でシステムの手動プロキシ設定を検知し、Flutter アプリの通信に適用する方法について書いた記事です。",
    article2:
      "TypeScript を使って After Effects などの Adobe アプリを操作するための開発環境や実装方法をまとめた記事です。",
    article3:
      "iOS で PAC ベースの自動プロキシがそのままでは効かない理由と、その対応方法について整理した記事です。",
    aboutTitle: "できること",
    about1: "Flutter アプリの新規開発",
    about2: "既存アプリの改善や機能追加",
    about3: "Dart / Flutter パッケージ開発",
    about4: "OSS への機能追加や不具合修正",
    about5: "Ruby、Node.js、TypeScript を用いた Web フロントエンド開発",
    about6: "Ruby、Node.js、TypeScript を用いた Web バックエンド開発",
    contactTitle: "連絡先",
    contactBody: "Flutter 関連の開発や改善の相談があればご連絡ください。",
  },
  en: {
    label: "Flutter / Dart Engineer",
    heroTitle: "I build simple and easy-to-use Flutter products.",
    heroLead:
      "I have worked on Windows applications, backend systems, and mobile apps built with Flutter. In recent years, my main focus has been Flutter as of 2026. More recently, I have also been involved in teaching Flutter to new engineers at a globally recognized company in Japan. Everything presented on this page is from my personal work only.",
    workTitle: "Selected work",
    work1:
      "A Flutter image annotation widget with support for rotation, shapes, text, undo/redo, and image export.",
    work2:
      "A Dart / Flutter package for retrieving Japanese address information from a 7-digit postal code, with typed handling for address data and API errors.",
    work3:
      "An open-source contribution that added support for using a list of `NavigatorObserver`s with `StatefulShellBranch`.",
    work4Title: "LinguaLab / 語学ラボ",
    work4:
      "A language-learning app that uses AI to generate reading material and supports read-aloud recording, vocabulary extraction, flashcards, and offline voice playback.",
    articlesTitle: "Articles",
    article1:
      "An article about detecting manual system proxy settings on Android and iOS and applying them to network communication in a Flutter app.",
    article2:
      "An article that summarizes the setup and implementation approach for controlling Adobe apps such as After Effects with TypeScript.",
    article3:
      "An article explaining why PAC-based automatic proxies do not work as-is on iOS in Flutter apps, and how to handle that.",
    aboutTitle: "What I can help with",
    about1: "New Flutter app development",
    about2: "Improving existing apps and adding features",
    about3: "Dart / Flutter package development",
    about4: "OSS contributions and bug fixes",
    about5: "Web frontend development using Ruby, Node.js, and TypeScript",
    about6: "Web backend development using Ruby, Node.js, and TypeScript",
    contactTitle: "Contact",
    contactBody:
      "If you need help with Flutter development or product improvements, feel free to contact me.",
  },
};

const storageKey = "satoyan-portfolio-lang";
const toggle = document.querySelector("#lang-toggle");

function setLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  toggle.textContent = lang === "ja" ? "EN" : "JP";
  localStorage.setItem(storageKey, lang);
}

toggle.addEventListener("click", () => {
  const next = document.documentElement.lang === "ja" ? "en" : "ja";
  setLanguage(next);
});

setLanguage(localStorage.getItem(storageKey) || "ja");

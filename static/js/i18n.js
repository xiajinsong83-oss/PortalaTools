/* Portala — client-side i18n */
(function () {
  'use strict';
  var CATS = {
    "File Tools":{es:"Archivos",fr:"Fichiers",de:"Dateien",ja:"ファイル",ko:"파일",ru:"Файлы",pt:"Arquivos"},
    "Text Tools":{es:"Texto",fr:"Texte",de:"Text",ja:"テキスト",ko:"텍스트",ru:"Текст",pt:"Texto"},
    "Random & Decisions":{es:"Aleatorio",fr:"Aléatoire",de:"Zufall",ja:"ランダム",ko:"랜덤",ru:"Случайно",pt:"Aleatório"},
    "Time & Date":{es:"Tiempo",fr:"Temps",de:"Zeit",ja:"時間",ko:"시간",ru:"Время",pt:"Tempo"},
    "Developer Tools":{es:"Desarrollo",fr:"Développement",de:"Entwicklung",ja:"開発",ko:"개발",ru:"Разработка",pt:"Desenvolvimento"},
    "Device Tests":{es:"Dispositivos",fr:"Appareils",de:"Geräte",ja:"デバイス",ko:"기기",ru:"Устройства",pt:"Dispositivos"},
    "Education":{es:"Educación",fr:"Éducation",de:"Bildung",ja:"教育",ko:"교육",ru:"Образование",pt:"Educação"},
    "Health & Lifestyle":{es:"Salud",fr:"Santé",de:"Gesundheit",ja:"健康",ko:"건강",ru:"Здоровье",pt:"Saúde"},
    "Writing & Office":{es:"Oficina",fr:"Bureau",de:"Büro",ja:"オフィス",ko:"오피스",ru:"Офис",pt:"Escritório"},
    "Fun & Generators":{es:"Diversión",fr:"Divertissement",de:"Spaß",ja:"楽しい",ko:"재미",ru:"Развлечения",pt:"Diversão"},
    "Social Media":{es:"Redes Sociales",fr:"Réseaux sociaux",de:"Soziale Medien",ja:"ソーシャル",ko:"소셜",ru:"Соцсети",pt:"Redes sociais"},
    "Security":{es:"Seguridad",fr:"Sécurité",de:"Sicherheit",ja:"セキュリティ",ko:"보안",ru:"Безопасность",pt:"Segurança"},
    "Daily Queries":{es:"Consultas",fr:"Recherche",de:"Suche",ja:"検索",ko:"검색",ru:"Запросы",pt:"Consultas"}
  };
  var UI = {
    "All Tools":{es:"Todas",fr:"Tous",de:"Alle",ja:"すべて",ko:"전체",ru:"Все",pt:"Todas"},
    "Popular":{es:"Populares",fr:"Populaires",de:"Beliebt",ja:"人気",ko:"인기",ru:"Популярные",pt:"Populares"},
    "How to use this tool":{es:"Cómo usar",fr:"Comment utiliser",de:"Anleitung",ja:"使い方",ko:"사용법",ru:"Как использовать",pt:"Como usar"},
    "Frequently asked questions":{es:"Preguntas",fr:"FAQ",de:"FAQ",ja:"よくある質問",ko:"자주 묻는 질문",ru:"FAQ",pt:"Perguntas"},
    "Related Tools":{es:"Relacionados",fr:"Similaires",de:"Ähnliche",ja:"関連",ko:"관련",ru:"Похожие",pt:"Relacionadas"},
    "Privacy Policy":{es:"Privacidad",fr:"Confidentialité",de:"Datenschutz",ja:"プライバシー",ko:"개인정보",ru:"Конфиденциальность",pt:"Privacidade"},
    "Terms of Service":{es:"Términos",fr:"Conditions",de:"AGB",ja:"利用規約",ko:"이용약관",ru:"Условия",pt:"Termos"},
    "About Us":{es:"Acerca de",fr:"À propos",de:"Über uns",ja:"概要",ko:"회사 소개",ru:"О нас",pt:"Sobre"},
    "Contact Us":{es:"Contacto",fr:"Contact",de:"Kontakt",ja:"お問い合わせ",ko:"문의",ru:"Контакты",pt:"Contato"},
    "DMCA":{es:"DMCA",fr:"DMCA",de:"DMCA",ja:"DMCA",ko:"DMCA",ru:"DMCA",pt:"DMCA"},
    "Free Online Web Tools — Run Locally in Your Browser":{es:"Herramientas gratis — locales en navegador",fr:"Outils gratuits — locaux navigateur",de:"Kostenlose Tools — lokal im Browser",ja:"無料ツール — ブラウザローカル実行",ko:"무료 도구 — 브라우저 로컬 실행",ru:"Бесплатные инструменты — локально в браузере",pt:"Ferramentas grátis — locais no navegador"},
    "Everyday online tools, open and use":{es:"Herramientas online del día a día",fr:"Outils du quotidien en ligne",de:"Tägliche Online-Tools",ja:"日常のオンラインツール",ko:"일상 온라인 도구",ru:"Повседневные онлайн-инструменты",pt:"Ferramentas online do dia a dia"},
    "Search tools… try json, base64, password, qr…":{es:"Buscar herramientas… json, base64, contraseña…",fr:"Rechercher… json, base64, mot de passe…",de:"Suchen… json, base64, Passwort…",ja:"ツールを検索… json, base64, パスワード…",ko:"도구 검색… json, base64, 비밀번호…",ru:"Поиск инструментов… json, base64, пароль…",pt:"Buscar ferramentas… json, base64, senha…"},
    "100% free":{es:"100% gratis",fr:"100% gratuit",de:"100% kostenlos",ja:"100%無料",ko:"100% 무료",ru:"100% бесплатно",pt:"100% grátis"},
    "No signup":{es:"Sin registro",fr:"Sans inscription",de:"Ohne Anmeldung",ja:"登録不要",ko:"회원가입 불필요",ru:"Без регистрации",pt:"Sem cadastro"},
    "Instant use":{es:"Uso inmediato",fr:"Utilisation instantanée",de:"Sofort nutzen",ja:"すぐ使える",ko:"즉시 사용",ru:"Мгновенно",pt:"Uso instantâneo"},
    "No upload":{es:"Sin subir archivos",fr:"Sans envoi",de:"Kein Upload",ja:"アップロードなし",ko:"업로드 없음",ru:"Без загрузки",pt:"Sem upload"},
    "View all":{es:"Ver todo",fr:"Voir tout",de:"Alle ansehen",ja:"すべて見る",ko:"전체 보기",ru:"Смотреть все",pt:"Ver tudo"}
  };
  var LANGS = [
    {code:"en",label:"English"},{code:"zh",label:"简体中文"},{code:"zh-tw",label:"繁體中文"},
    {code:"es",label:"Español"},{code:"fr",label:"Français"},{code:"de",label:"Deutsch"},
    {code:"ja",label:"日本語"},{code:"ko",label:"한국어"},{code:"ru",label:"Русский"},{code:"pt",label:"Português"}
  ];
  function buildDict(lang) {
    var d = {};
    Object.keys(UI).forEach(function(k){ if(UI[k][lang]) d[k]=UI[k][lang]; });
    Object.keys(CATS).forEach(function(k){ if(CATS[k][lang]) d[k]=CATS[k][lang]; });
    return d;
  }
  function apply(lang) {
    var d = buildDict(lang);
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var nodes=[], n; while(n=w.nextNode()) nodes.push(n);
    nodes.forEach(function(node){
      var t = node.textContent.trim();
      if (d[t]) node.textContent = node.textContent.replace(t, d[t]);
    });
  }
  function build() {
    var a = document.querySelector('.header-actions'); if(!a) return;
    var cur = localStorage.getItem('pl-lang')||(location.pathname.startsWith('/zh')?'zh':'en');
    var wrap=document.createElement('div'); wrap.style.cssText='position:relative;display:inline-block;margin-left:8px';
    var btn=document.createElement('button'); btn.className='tool-btn'; btn.style.cssText='padding:4px 10px;font-size:13px';
    btn.textContent=(LANGS.find(function(l){return l.code===cur})||LANGS[0]).label;
    var menu=document.createElement('div');
    menu.style.cssText='display:none;position:absolute;right:0;top:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);z-index:9999;min-width:140px';
    LANGS.forEach(function(l){
      var it=document.createElement('div');
      it.style.cssText='padding:8px 14px;cursor:pointer;font-size:13px';
      it.textContent=l.label;
      it.onmouseenter=function(){this.style.background='#f1f5f9'};
      it.onmouseleave=function(){this.style.background='transparent'};
      it.onclick=function(e){
        e.stopPropagation(); menu.style.display='none';
        localStorage.setItem('pl-lang',l.code);
        if(l.code==='zh-tw'){
          if(typeof OpenCC==='undefined'){
            var s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/opencc-js@1.0.5/dist/umd/full.js';
            s.onload=function(){document.body.innerHTML=new OpenCC('s2t').convert(document.body.innerHTML); btn.textContent=l.label;};
            document.head.appendChild(s);
          } else { document.body.innerHTML=new OpenCC('s2t').convert(document.body.innerHTML); btn.textContent=l.label; }
        } else if(l.code==='zh'){ location.href='/zh/'; }
        else if(l.code==='en'){ location.href='/'; }
        else { apply(l.code); btn.textContent=l.label; }
      };
      menu.appendChild(it);
    });
    btn.onclick=function(e){e.stopPropagation(); menu.style.display=menu.style.display==='none'?'block':'none';};
    document.addEventListener('click',function(){menu.style.display='none';});
    wrap.appendChild(btn); wrap.appendChild(menu); a.appendChild(wrap);
    if(cur && buildDict(cur)) apply(cur);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build); else build();
})();

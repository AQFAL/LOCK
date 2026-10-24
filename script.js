/* ===== AQFAL GROUP — script.js ===== */
(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Translations (UZ / EN) ---------- */
  const T = {
    uz: {
      nav_about:'Biz haqimizda', nav_product:'Mahsulot', nav_how:'Qanday ishlaydi', nav_app:'Ilova', nav_gallery:'Galereya', nav_contact:'Aloqa',
      hero_pill:'Retrofit Smart Lock', hero_h1a:"Qulfni almashtirmang —", hero_h1b:'uni aqlli qiling.',
      hero_lead:"AQFAL mavjud qulfingiz ustiga o'rnatiladi. NFC karta, PIN-kod yoki telefon bilan oching — eshik ham, qulf ham o'zgarmaydi.",
      hero_watch:"Videoni ko'rish", hero_more:'Batafsil', tag_motor:'Motorli',
      about_eyebrow:'AQFAL GROUP', about_h2:"Xavfsiz va qulay kirish — har bir eshik uchun.",
      about_p1:"AQFAL GROUP eshiklarni almashtirmasdan aqlli qiladigan yechimlarni yaratadi. Bizning asosiy mahsulotimiz — AQFAL Retrofit Smart Lock: mavjud qulfingiz ustiga o'rnatiladigan ikki qismli tizim.",
      about_p2:"Maqsadimiz oddiy: qulfni, eshikni va odatlaringizni o'zgartirmasdan, zamonaviy kirish tajribasini berish.",
      ap1:"Almashtirish shart emas", ap2:"Kalitsiz kirish usullari", ap3:"Zamonaviy ko'rinish",
      prod_eyebrow:'Mahsulot', prod_h2:'Meet AQFAL — ikki qism, bitta tizim.', prod_sub:"Ichki motor bloki va tashqi NFC + PIN reader bir-biri bilan ishlaydi.",
      p1_h:'Ichki motor bloki', p1_p:"Mavjud kalit yoki qulf mexanizmi ustiga o'rnatiladi va uni sizning o'rningizga buradi.",
      p1_l1:"Kalit ustiga mahkam o'rnashadi", p1_l2:'Motorli ochish va yopish', p1_l3:"Holat chirog'i (LED)",
      p2_h:'Tashqi NFC + PIN reader', p2_p:"Eshikning tashqi tomoniga o'rnatiladi. Karta yoki raqamli kod bilan kirish imkonini beradi.",
      p2_l1:'NFC karta bilan kirish', p2_l2:'Raqamli PIN-kod klaviaturasi', p2_l3:'Ixcham, zamonaviy dizayn',
      p3_h:'AQFAL ilovasi', p3_p:"Kalitni unutdingizmi? Eshikni telefondan oching — qulfni yoki eshikni almashtirish kerak emas.",
      p3_l1:'Telefon orqali ochish', p3_l2:'Mehmonlarga ruxsat berish', p3_l3:"Qulf holatini ko'rish",
      inst_eyebrow:"O'rnatish", inst_h2:'Mavjud qulfingizni yangilang.',
      st1_h:'Kalit joyida qoladi', st1_p:"Sizning mavjud kalitingiz yoki qulf mexanizmingiz o'zgarmaydi.",
      st2_h:"Motor bloki kalit ustiga o'rnatiladi", st2_p:"Ichki blok kalitni o'rab oladi va uni buraydi.",
      st3_h:'Tashqi reader qarama-qarshi tomonda', st3_p:"NFC va PIN reader eshikning tashqi tomoniga o'rnatiladi.",
      inst_note:"Qulfni to'liq almashtirish shart emas.",
      how_eyebrow:'Qanday ishlaydi', how_h2:'Uch usul. Bitta eshik.',
      tab_nfc:'NFC', tab_pin:'PIN-kod', tab_app:'Ilova',
      nfc_h:'NFC Access.', nfc_p:"Kartani readerga tegizing. Tizim kartani taniydi va ichki motor blokiga buyruq beradi.",
      pin_h:'PIN Code Entry.', pin_p:"Karta yo'qmi? Klaviaturada kodni kiriting — eshik ochiladi.",
      app_h3:'AQFAL App.', app_p3:"Kalitni unutsangiz ham muammo yo'q: eshikni telefoningiz bilan oching.",
      motor_h:'Motorized Lock Operation.', motor_p:"Qaysi usul bilan buyruq bersangiz ham, ichki blok mavjud qulfni sizning o'rningizga buraydi.",
      feat_eyebrow:'Afzalliklar', feat_h2:'Nega AQFAL?',
      f1_h:'Retrofit qulaylik', f1_p:'Qulf ham, eshik ham almashtirilmaydi.',
      f2_h:'NFC kirish', f2_p:'Karta bilan tez va qulay.',
      f3_h:'PIN-kod', f3_p:'Raqamli klaviatura bilan kirish.',
      f4_h:'Telefon ilovasi', f4_p:'Kalit unutilsa ham eshik ochiladi.',
      f5_h:'Motorli ishlash', f5_p:"Ichki blok qulfni o'zi buraydi.",
      f6_h:'Zamonaviy dizayn', f6_p:"Eshigingizga mos qora, ixcham ko'rinish.",
      app_h2:'Kalitni unutdingizmi?', app_lead:"Eshikni telefoningiz bilan oching. Qulfni ham, eshikni ham almashtirish kerak emas.",
      app_btn:"Ilovani sinab ko'rish", app_note:'Namuna: tugma ilova holatini almashtiradi.',
      gal_eyebrow:'Galereya', gal_h2:'AQFAL yaqindan.',
      cta_h:'AQFAL — A Smarter Way In.', cta_btn:'Buyurtma yoki savol',
      con_eyebrow:'Aloqa', con_h2:"Biz bilan bog'laning.", con_p:"Mahsulot, hamkorlik yoki buyurtma bo'yicha yozing.",
      con_mail:'Email', con_phone:'Telefon', con_addr:'Manzil',
      f_name:'Ismingiz', f_contact:'Email yoki telefon', f_msg:'Xabar', f_send:'Yuborish',
      foot_rights:'Barcha huquqlar himoyalangan.', foot_top:'Yuqoriga ↑',
      msg_ok:"Rahmat! Xabaringiz qabul qilindi. Tez orada javob beramiz.", msg_err:"Iltimos, barcha maydonlarni to'ldiring."
    },
    en: {
      nav_about:'About', nav_product:'Product', nav_how:'How it works', nav_app:'App', nav_gallery:'Gallery', nav_contact:'Contact',
      hero_pill:'Retrofit Smart Lock', hero_h1a:"Don't replace your lock —", hero_h1b:'make it smart.',
      hero_lead:"AQFAL mounts over your existing lock. Open with an NFC card, PIN code or your phone — your door and your lock stay the same.",
      hero_watch:'Watch video', hero_more:'Learn more', tag_motor:'Motorized',
      about_eyebrow:'AQFAL GROUP', about_h2:'Safe, easy access — for every door.',
      about_p1:"AQFAL GROUP builds solutions that make doors smart without replacing them. Our core product is the AQFAL Retrofit Smart Lock: a two-part system that fits over your existing lock.",
      about_p2:"Our goal is simple: a modern access experience without changing your lock, your door or your habits.",
      ap1:'No replacement needed', ap2:'Keyless entry options', ap3:'Modern look',
      prod_eyebrow:'Product', prod_h2:'Meet AQFAL — two parts, one system.', prod_sub:'The interior motor unit and the exterior NFC + PIN reader work together.',
      p1_h:'Interior motor unit', p1_p:"Mounts over your existing key or lock mechanism and turns it for you.",
      p1_l1:'Fits securely over your key', p1_l2:'Motorized locking and unlocking', p1_l3:'Status LED',
      p2_h:'Exterior NFC + PIN reader', p2_p:"Mounted on the outside of the door. Lets you enter with a card or a numeric code.",
      p2_l1:'NFC card access', p2_l2:'Numeric PIN keypad', p2_l3:'Compact, modern design',
      p3_h:'AQFAL App', p3_p:"Forgot your key? Open the door from your phone — no need to change the lock or the door.",
      p3_l1:'Unlock with your phone', p3_l2:'Share access with guests', p3_l3:'See lock status',
      inst_eyebrow:'Installation', inst_h2:'Upgrade your existing lock.',
      st1_h:'Your key stays in place', st1_p:"Your existing key or lock mechanism is not changed.",
      st2_h:'The motor unit fits over the key', st2_p:"The interior unit grips the key and turns it.",
      st3_h:'Exterior reader on the opposite side', st3_p:"The NFC + PIN reader is mounted on the outside of the door.",
      inst_note:'No complete lock replacement.',
      how_eyebrow:'How it works', how_h2:'Three ways in. One door.',
      tab_nfc:'NFC', tab_pin:'PIN code', tab_app:'App',
      nfc_h:'NFC Access.', nfc_p:"Tap your card on the reader. The system recognises it and commands the interior motor unit.",
      pin_h:'PIN Code Entry.', pin_p:"No card? Enter your code on the keypad and the door opens.",
      app_h3:'AQFAL App.', app_p3:"Forgot your key? No problem — open the door with your phone.",
      motor_h:'Motorized Lock Operation.', motor_p:"Whichever way you send the command, the interior unit turns your existing lock for you.",
      feat_eyebrow:'Benefits', feat_h2:'Why AQFAL?',
      f1_h:'Retrofit convenience', f1_p:'Neither the lock nor the door is replaced.',
      f2_h:'NFC access', f2_p:'Fast and easy with a card.',
      f3_h:'PIN code', f3_p:'Enter with a numeric keypad.',
      f4_h:'Phone app', f4_p:'The door opens even if you forget your key.',
      f5_h:'Motorized operation', f5_p:'The interior unit turns the lock by itself.',
      f6_h:'Modern design', f6_p:'A compact black finish that suits your door.',
      app_h2:'Forgot your key?', app_lead:"Open the door with your phone. No need to change the lock or the door.",
      app_btn:'Try the app', app_note:'Demo: the button toggles the app state.',
      gal_eyebrow:'Gallery', gal_h2:'AQFAL up close.',
      cta_h:'AQFAL — A Smarter Way In.', cta_btn:'Order or ask a question',
      con_eyebrow:'Contact', con_h2:'Get in touch.', con_p:'Write to us about the product, partnerships or orders.',
      con_mail:'Email', con_phone:'Phone', con_addr:'Address',
      f_name:'Your name', f_contact:'Email or phone', f_msg:'Message', f_send:'Send',
      foot_rights:'All rights reserved.', foot_top:'Back to top ↑',
      msg_ok:"Thank you! Your message has been received. We'll reply soon.", msg_err:'Please fill in all fields.'
    }
  };

  let lang = localStorage.getItem('aqfal-lang') || 'uz';
  const setLang = (l) => {
    lang = T[l] ? l : 'uz';
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => { const v = T[lang][el.dataset.i18n]; if (v) el.textContent = v; });
    $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    localStorage.setItem('aqfal-lang', lang);
  };
  $$('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  setLang(lang);

  /* ---------- Header: scroll state + mobile menu ---------- */
  const header = $('#header'), burger = $('#burger'), menu = $('#menu');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('a', menu).forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Hero parallax ---------- */
  const hv = $('#heroVisual');
  if (hv && window.matchMedia('(hover:hover)').matches) {
    const layers = $$('.hv', hv);
    hv.parentElement.addEventListener('mousemove', (e) => {
      const r = hv.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      layers.forEach(l => {
        const d = +l.dataset.depth || 20;
        const rot = l.classList.contains('hv-card') ? ' rotate(-12deg)' : '';
        l.style.transform = `translate(${x * d}px, ${y * d}px)${rot}`;
      });
    });
  }

  /* ---------- Install steps <-> image ---------- */
  const instImg = $('#installImg'), steps = $$('#installSteps li'), dots = $$('#installDots button');
  const showStep = (src) => {
    instImg.style.opacity = 0;
    setTimeout(() => { instImg.src = src; instImg.style.opacity = 1; }, 200);
    steps.forEach(s => s.classList.toggle('active', s.dataset.img === src));
    dots.forEach(d => d.classList.toggle('active', d.dataset.img === src));
  };
  steps.forEach(s => s.addEventListener('click', () => showStep(s.dataset.img)));
  dots.forEach(d => d.addEventListener('click', () => showStep(d.dataset.img)));
  let stepIdx = 0;
  setInterval(() => { // gentle auto-play
    if (document.hidden) return;
    stepIdx = (stepIdx + 1) % steps.length; showStep(steps[stepIdx].dataset.img);
  }, 5500);

  /* ---------- Tabs ---------- */
  const tabs = $$('.tab'), panels = $$('.panel');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.toggle('active', x === t));
    panels.forEach(p => p.classList.toggle('active', p.id === 'panel-' + t.dataset.tab));
  }));

  /* ---------- App demo toggle ---------- */
  const appSec = $('#app'), phA = $('.ph-a'), phB = $('.ph-b'), toggleBtn = $('#toggleLock');
  toggleBtn.addEventListener('click', () => {
    const on = appSec.classList.toggle('unlocked');
    // swap phone images so the "front" phone shows the new state
    phB.src = on ? 'images/app-phone.png' : 'images/app-phone-locked.png';
    phA.src = on ? 'images/app-phone-locked.png' : 'images/app-phone.png';
  });
  phB.src = 'images/app-phone-locked.png';
  phA.src = 'images/app-phone.png';

  /* ---------- Modals (video + lightbox) ---------- */
  const openModal = (m) => { m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; };
  const closeModal = (m) => {
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
    const v = $('video', m); if (v) v.pause();
  };
  const videoModal = $('#videoModal'), lightbox = $('#lightbox');
  $('#playBtn').addEventListener('click', () => { openModal(videoModal); $('#promoVideo').play().catch(() => {}); });
  $$('.modal').forEach(m => {
    m.addEventListener('click', (e) => { if (e.target === m || e.target.hasAttribute('data-close')) closeModal(m); });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') $$('.modal.open').forEach(closeModal);
    if (lightbox.classList.contains('open')) { if (e.key === 'ArrowRight') lbMove(1); if (e.key === 'ArrowLeft') lbMove(-1); }
  });

  const gItems = $$('#gallery-grid .g img'); let lbIdx = 0;
  const lbImg = $('#lbImg');
  const lbShow = (i) => { lbIdx = (i + gItems.length) % gItems.length; lbImg.src = gItems[lbIdx].src; lbImg.alt = gItems[lbIdx].alt; };
  const lbMove = (d) => lbShow(lbIdx + d);
  gItems.forEach((img, i) => img.closest('.g').addEventListener('click', () => { lbShow(i); openModal(lightbox); }));
  $('.lb-prev').addEventListener('click', () => lbMove(-1));
  $('.lb-next').addEventListener('click', () => lbMove(1));

  /* ---------- Contact form (front-end demo) ---------- */
  const form = $('#contactForm'), msg = $('#formMsg');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let ok = true;
    $$('input,textarea', form).forEach(f => {
      const bad = !f.value.trim(); f.classList.toggle('invalid', bad); if (bad) ok = false;
    });
    msg.className = 'form-msg';
    if (!ok) { msg.textContent = T[lang].msg_err; msg.classList.add('err'); return; }

    /* TODO: haqiqiy yuborish. Masalan Formspree:
       await fetch('https://formspree.io/f/XXXXXXXX', {
         method: 'POST', headers: {'Accept':'application/json'}, body: new FormData(form) });
    */
    msg.textContent = T[lang].msg_ok; msg.classList.add('ok');
    form.reset();
  });

  /* ---------- Footer year ---------- */
  $('#year').textContent = new Date().getFullYear();
})();

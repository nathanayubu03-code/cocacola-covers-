/* =============================================
   CONVERTPRO â€” app.js
   ============================================= */

const CLOUDCONVERT_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDAzNzc5ZjM2MTcxYWM3Y2IxN2M1YjE0ZDhiOTViZGRlOTJkMjljMDJkMGJmYzM1MTg2MDZlN2E0MWMxMjQ2ZTE2NGIwOWJiODcxZWUwZjgiLCJpYXQiOjE3NzczNzIwODAuMjY2NTMzLCJuYmYiOjE3NzczNzIwODAuMjY2NTM0LCJleHAiOjQ5MzMwNDU2ODAuMjU4MjQ0LCJzdWIiOiI3NTMxNDgwOSIsInNjb3BlcyI6WyJ0YXNrLnJlYWQiLCJ0YXNrLndyaXRlIl19.j7fzb3dz5iYgKvLkKxr2SQRqdzCJh0IaOq4pZCLo5fV21QSx1fKCiKs9YXPN8Pu3BaxJS1-CvYsewp20ofNoEsbZMYXaIq_xi9bfY91U3RfSXb2mm1KLROod5NRMjXs8FrK8Rq-PUCl5Ry0SRblOSknmve3gxdghUR-mZXnTR-9vNunjU8N_-4T1kdf0nSbXb8_Dp_WkTH8FwdG6f3IgbU2YwlZnIeT049lG7T2s_Ysa8yuUS-F5-BO8WuYpV7iYyNKvdykGccrPfSGZispzuS60480dnCQMHteK3ucME1Qj_1SZp4x_tExqHe_P1I4BSD0614BNod8RzRXa-jDCvbeui9zUiKHULzJAMgZ6u23hVfC6bQOwcrYH_l6qxXYLaielRItS8M0C9_ui9ZlJzE-l08AqFOb734kkeSYFWP0p2Yl4Hoa2jBPTNURKniXjly4gLIiA1lmoxiMiwnfGitBI72sJ1e5UwhiKKxZePaEe0qhgPpU_nO9PK1eJCB7nM7gvpsMhFPqFEQCgOyRMrfIObzXkJ3Ph37xzHOpgfGwRoCQtrMsjQxWJPd2s163C2K2gu9tJ5USPArgYfV_KahPB7_S8qouwd2lpAHz8DbTnoN1Go0XlyMnZeueF-TkQ8W8rKQsovd-5mZuYcu9GUA-gnFSWiYH3yGEzZ2eMPh4';

const TOOLS = {
  trending: [
    { icon: 'ðŸ“„', name: 'PDF vers Word', desc: 'Conversion prÃ©cise avec mise en page prÃ©servÃ©e.', badge: 'pop', users: '1.2M' },
    { icon: 'ðŸ“', name: 'Word vers PDF', desc: 'Transformez vos docx en PDF en un clic.', badge: 'fast', users: '980K' },
    { icon: 'ðŸ–¼ï¸', name: 'PDF vers JPG', desc: 'Exportez chaque page en image haute rÃ©solution.', badge: 'pop', users: '750K' },
    { icon: 'ðŸ—œï¸', name: 'Compresser PDF', desc: 'RÃ©duisez la taille sans perdre la qualitÃ©.', badge: 'fast', users: '640K' },
    { icon: 'ðŸ”—', name: 'Fusionner PDF', desc: 'Combinez plusieurs PDF en un seul fichier.', badge: 'pop', users: '590K' },
    { icon: 'âœ‚ï¸', name: 'Diviser PDF', desc: 'DÃ©coupez votre PDF par pages ou par taille.', badge: null, users: '430K' },
    { icon: 'ðŸ–¼ï¸', name: 'JPG vers PDF', desc: 'Regroupez vos images en un document PDF.', badge: 'fast', users: '510K' },
    { icon: 'ðŸ“Š', name: 'PDF vers Excel', desc: 'Extrayez les tableaux en feuilles de calcul.', badge: 'ai', users: '380K' },
  ],
  pdf: [
    { icon: 'ðŸ“‘', name: 'PDF vers PowerPoint', desc: 'Reconstruisez vos diapositives intelligemment.', badge: 'ai', users: '290K' },
    { icon: 'ðŸ”’', name: 'ProtÃ©ger PDF', desc: 'Ajoutez un mot de passe AES-256 Ã  votre PDF.', badge: null, users: '210K' },
    { icon: 'ðŸ”“', name: 'DÃ©verrouiller PDF', desc: 'Supprimez la protection si vous Ãªtes autorisÃ©.', badge: null, users: '180K' },
    { icon: 'ðŸ’§', name: 'Filigrane PDF', desc: 'Ajoutez votre texte ou logo en filigrane.', badge: null, users: '155K' },
    { icon: 'âœï¸', name: 'Signer PDF', desc: 'Signature Ã©lectronique dessinÃ©e ou importÃ©e.', badge: 'new', users: '220K' },
    { icon: 'ðŸ”¢', name: 'NumÃ©roter PDF', desc: 'Ajoutez des numÃ©ros de page personnalisÃ©s.', badge: null, users: '130K' },
    { icon: 'ðŸ”„', name: 'Pivoter PDF', desc: 'Faites pivoter une ou toutes les pages.', badge: 'fast', users: '145K' },
    { icon: 'ðŸ› ï¸', name: 'RÃ©parer PDF', desc: 'Corrigez les fichiers PDF corrompus.', badge: 'new', users: '95K' },
  ],
  ai: [
    { icon: 'ðŸ¤–', name: 'RÃ©sumÃ© PDF IA', desc: 'Obtenez un rÃ©sumÃ© intelligent en 5 points.', badge: 'new', users: '340K' },
    { icon: 'ðŸ”', name: 'OCR AvancÃ©', desc: 'Reconnaissance de texte en 50 langues.', badge: 'ai', users: '280K' },
    { icon: 'ðŸŽ™ï¸', name: 'Audio vers Texte', desc: 'Transcription audio avec 95% de prÃ©cision.', badge: 'new', users: '195K' },
    { icon: 'ðŸŽ¬', name: 'VidÃ©o vers Sous-titres', desc: 'GÃ©nÃ©rez des srt et vtt automatiquement.', badge: 'new', users: '165K' },
    { icon: 'ðŸŒ', name: 'Traduire PDF', desc: 'Traduction complÃ¨te en 100 langues.', badge: 'ai', users: '310K' },
    { icon: 'âœ‚ï¸', name: 'Supprimer Fond IA', desc: 'Supprimez le fond de vos images.', badge: 'ai', users: '520K' },
    { icon: 'ðŸ”Ž', name: 'Mots-clÃ©s PDF', desc: 'Extrayez les 20 mots-clÃ©s principaux.', badge: 'ai', users: '120K' },
    { icon: 'ðŸ“Š', name: 'PDF vers JSON IA', desc: 'Structurez vos donnÃ©es en JSON propre.', badge: 'ai', users: '88K' },
  ],
  media: [
    { icon: 'ðŸ–¼ï¸', name: 'JPG vers PNG', desc: 'Conversion sans perte de qualitÃ©.', badge: 'fast', users: '420K' },
    { icon: 'ðŸŒ', name: 'PNG vers WebP', desc: 'Format moderne, 30% plus lÃ©ger.', badge: 'fast', users: '310K' },
    { icon: 'ðŸ“', name: 'Redimensionner', desc: 'Changez les dimensions en pixels ou %.', badge: null, users: '280K' },
    { icon: 'ðŸ—œï¸', name: 'Compresser Image', desc: 'RÃ©duisez le poids avec aperÃ§u live.', badge: 'pop', users: '390K' },
    { icon: 'ðŸ”†', name: 'AmÃ©lioration IA', desc: 'Upscaling par intelligence artificielle.', badge: 'ai', users: '145K' },
    { icon: 'ðŸŽµ', name: 'MP3 vers WAV', desc: 'Conversion audio haute fidÃ©litÃ©.', badge: null, users: '95K' },
    { icon: 'ðŸŽžï¸', name: 'MP4 vers GIF', desc: 'Transformez vos clips en GIF animÃ©.', badge: 'new', users: '175K' },
    { icon: 'ðŸ–¤', name: 'Image NB', desc: 'Conversion noir et blanc avec styles.', badge: null, users: '130K' },
  ],
};

const FORMAT_MAP = {
  'pdf': ['word', 'excel', 'powerpoint', 'jpg', 'png', 'txt', 'html', 'epub'],
  'docx': ['pdf', 'txt', 'html'], 'doc': ['pdf', 'txt'],
  'xlsx': ['pdf', 'csv'], 'xls': ['pdf', 'csv'],
  'pptx': ['pdf', 'jpg'], 'ppt': ['pdf'],
  'jpg': ['pdf', 'png', 'webp', 'bmp'], 'jpeg': ['pdf', 'png', 'webp', 'bmp'],
  'png': ['pdf', 'jpg', 'webp', 'bmp'],
  'gif': ['mp4', 'jpg', 'png'], 'bmp': ['jpg', 'png', 'pdf'],
  'tiff': ['jpg', 'png', 'pdf'], 'webp': ['jpg', 'png', 'pdf'],
  'txt': ['pdf', 'docx'], 'csv': ['xlsx', 'pdf'],
  'html': ['pdf'], 'epub': ['pdf'],
  'mp3': ['wav', 'aac', 'flac'], 'wav': ['mp3', 'aac', 'flac'],
  'mp4': ['gif', 'mp3', 'webm'], 'avi': ['mp4', 'webm'], 'mov': ['mp4', 'gif'],
};

const BLOG_POSTS = [
  { icon: 'ðŸ“„', tag: 'Guide PDF', color: '#1C1C1E', title: 'Comment convertir un PDF en Word sans perdre la mise en page', excerpt: 'Les meilleures techniques pour une conversion parfaite.', date: '15 Avr 2026', time: '5 min' },
  { icon: 'ðŸ¤–', tag: 'Intelligence Artificielle', color: '#1C0035', title: 'OCR 2026 : reconnaÃ®tre le texte dans une image', excerpt: 'OCR propulsÃ© par IA avec 98% de prÃ©cision.', date: '12 Avr 2026', time: '7 min' },
  { icon: 'ðŸ—œï¸', tag: 'Optimisation', color: '#001C0A', title: 'Compresser un PDF sans perte de qualitÃ©', excerpt: 'RÃ©duisez le poids de vos PDF jusqu Ã  80%.', date: '8 Avr 2026', time: '4 min' },
  { icon: 'ðŸ”’', tag: 'SÃ©curitÃ©', color: '#1C1000', title: 'PDF signÃ© Ã©lectroniquement : tout savoir', excerpt: 'Signature lÃ©gale reconnue dans 190 pays.', date: '3 Avr 2026', time: '6 min' },
  { icon: 'ðŸ¥¤', tag: 'Coca-Cola', color: '#1C0000', title: 'Histoire de Coca-Cola : 130 ans innovation', excerpt: 'De Atlanta aux 200 pays du monde.', date: '28 Mar 2026', time: '8 min' },
  { icon: 'ðŸŒ', tag: 'API', color: '#001018', title: 'IntÃ©grer API ConvertPro en 10 minutes', excerpt: 'Guide pas Ã  pas avec exemples JS, Python et PHP.', date: '22 Mar 2026', time: '10 min' },
];

const TESTIMONIALS = [
  { text: 'ConvertPro a remplacÃ© tous nos anciens outils. Bluffant de prÃ©cision.', name: 'Sophie L.', role: 'Analyste financiÃ¨re', avatar: 'SL', color: '#F40009' },
  { text: 'Bien meilleur que iLovePDF. Plus rapide, plus prÃ©cis, UI magnifique.', name: 'Marc D.', role: 'Designer freelance', avatar: 'MD', color: '#5856D6' },
  { text: 'La transcription audio nous fait gagner 3 heures par semaine.', name: 'Amina K.', role: 'ChargÃ©e de projet', avatar: 'AK', color: '#FF9500' },
  { text: 'API propre, bien documentÃ©e et fiable. IntÃ©gration en 2h.', name: 'Thomas R.', role: 'DÃ©veloppeur backend', avatar: 'TR', color: '#34C759' },
  { text: 'Interface magnifique et intuitive. Mes Ã©tudiants adorent.', name: 'Claire M.', role: 'Professeure', avatar: 'CM', color: '#FF2D55' },
  { text: 'PrÃ©serve vraiment la mise en page Word. Aucun concurrent ne fait mieux.', name: 'Julien P.', role: 'Avocat', avatar: 'JP', color: '#007AFF' },
];

const FAQ_DATA = [
  { q: 'ConvertPro est-il vraiment gratuit ?', a: 'Oui, entiÃ¨rement gratuit pour usage personnel, sans inscription ni carte bancaire.' },
  { q: 'Mes fichiers sont-ils en sÃ©curitÃ© ?', a: 'Oui. Chiffrement AES-256, suppression automatique aprÃ¨s 30 minutes.' },
  { q: 'Quelle est la taille maximale acceptÃ©e ?', a: '100 MB gratuit, jusqu Ã  2 GB pour les abonnÃ©s Pro.' },
  { q: 'Les conversions prÃ©servent-elles la mise en page ?', a: 'Oui, prÃ©cision de 98% grÃ¢ce Ã  notre moteur IA.' },
  { q: 'Puis-je convertir plusieurs fichiers Ã  la fois ?', a: 'Oui, jusqu Ã  20 fichiers simultanÃ©ment.' },
  { q: 'L API est-elle disponible gratuitement ?', a: 'Gratuite jusqu Ã  100 conversions par jour.' },
  { q: 'Quels navigateurs sont supportÃ©s ?', a: 'Chrome, Firefox, Safari, Edge et Opera.' },
  { q: 'Puis-je utiliser ConvertPro hors ligne ?', a: 'Non, mais interface mise en cache pour connexions lentes.' },
];

const COUNTRY_DATA = {
  france: { name: 'France', info: 'En France, Coca-Cola est la boisson gazeuse la plus consommÃ©e.' },
  usa: { name: 'Etats-Unis', info: 'Berceau de Coca-Cola depuis 1886. Atlanta abrite le World of Coca-Cola.' },
  japon: { name: 'Japon', info: 'Plus de 100 saveurs exclusives dont Coca-Cola Sakura et Peach.' },
  mexique: { name: 'Mexique', info: 'Le plus grand consommateur per capita au monde.' },
  inde: { name: 'Inde', info: 'Coca-Cola a rachetÃ© Thums Up en 1993, boisson gazeuse numero 1 du pays.' },
  bresil: { name: 'BrÃ©sil', info: 'Le 3Ã¨me marchÃ© mondial avec la plus grande usine embouteillage.' },
  australie: { name: 'Australie', info: 'La campagne Share a Coke est nÃ©e ici en 2011.' },
  maroc: { name: 'Maroc', info: 'Coca-Cola prÃ©sent depuis 1947 avec plus de 2000 employÃ©s.' },
};

document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  initHeroCounter();
  initCatalog();
  initBlog();
  initTestimonials();
  initFAQ();
  initScrollReveal();
  initBackToTop();
  initCookieBanner();
  var recEl = document.getElementById('gameRecord');
  if (recEl) recEl.textContent = gameRecord;
});

function initHeader() {
  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  var overlay = document.getElementById('mobileOverlay');
  var burger = document.getElementById('hamburger');
  var open = menu.classList.toggle('open');
  overlay.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function toggleLang() {
  var btn = document.querySelector('.btn-lang');
  btn.textContent = btn.textContent.includes('FR') ? 'EN' : 'FR';
}

function initHeroCounter() {
  var el = document.getElementById('counter1');
  if (!el) return;
  var target = 2847391;
  var duration = 2000;
  var start = Date.now();
  function tick() {
    var progress = Math.min((Date.now() - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(tick);
  }
  setTimeout(function () { requestAnimationFrame(tick); }, 500);
}

function initCatalog() {
  renderRow('row-trending', TOOLS.trending);
  renderRow('row-pdf', TOOLS.pdf);
  renderRow('row-ai', TOOLS.ai);
  renderRow('row-media', TOOLS.media);
}

function renderRow(containerId, tools) {
  var container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = tools.map(function (t) { return createToolCard(t); }).join('');
}

function createToolCard(tool) {
  var badgeClass = tool.badge ? getBadgeClass(tool.badge) : '';
  var badgeLabel = tool.badge ? getBadgeLabel(tool.badge) : '';
  var badge = tool.badge ? '<span class="tool-badge tool-badge-' + badgeClass + '">' + badgeLabel + '</span>' : '';
  return '<div class="tool-card reveal" role="button" tabindex="0" onclick="openTool(\'' + tool.name + '\')">' +
    '<div class="tool-card-bg">' + tool.icon + '</div>' +
    '<div class="tool-card-badges">' + badge + '</div>' +
    '<div class="tool-card-info">' +
    '<p class="tool-card-name">' + tool.name + '</p>' +
    '<p class="tool-card-users">Utilisateurs : ' + tool.users + '</p>' +
    '</div>' +
    '<div class="tool-card-overlay">' +
    '<p>' + tool.desc + '</p>' +
    '<button class="btn-cta" onclick="event.stopPropagation();scrollToConverter()">Utiliser</button>' +
    '</div></div>';
}

function getBadgeClass(b) {
  var map = { pop: 'pop', fast: 'fast', ai: 'ai', new: 'new' };
  return map[b] || 'new';
}
function getBadgeLabel(b) {
  var map = { pop: 'Populaire', fast: 'Rapide', ai: 'IA', new: 'Nouveau' };
  return map[b] || b;
}

function openTool(name) { scrollToConverter(); }

function scrollToConverter() {
  document.getElementById('convertir').scrollIntoView({ behavior: 'smooth' });
}

function scrollRow(btn, dir) {
  var cards = btn.closest('.catalog-scroll-wrapper').querySelector('.catalog-cards');
  cards.scrollBy({ left: dir * 480, behavior: 'smooth' });
}

function initBlog() {
  var grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.map(function (p) {
    return '<article class="blog-card reveal" tabindex="0" role="button">' +
      '<div class="blog-card-img" style="background:' + p.color + '">' + p.icon + '</div>' +
      '<div class="blog-card-body">' +
      '<p class="blog-card-tag">' + p.tag + '</p>' +
      '<h3 class="blog-card-title">' + p.title + '</h3>' +
      '<p class="blog-card-excerpt">' + p.excerpt + '</p>' +
      '<p class="blog-card-meta">' + p.date + ' Â· ' + p.time + ' de lecture</p>' +
      '</div></article>';
  }).join('');
}

var testIndex = 0;
function initTestimonials() {
  var track = document.getElementById('testimonialsTrack');
  var dots = document.getElementById('testimonialsDots');
  if (!track || !dots) return;
  track.innerHTML = TESTIMONIALS.map(function (t) {
    return '<div class="testimonial-card">' +
      '<div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>' +
      '<p class="testimonial-text">' + t.text + '</p>' +
      '<div class="testimonial-author">' +
      '<div class="testimonial-avatar" style="background:' + t.color + '20;color:' + t.color + '">' + t.avatar + '</div>' +
      '<div><p class="testimonial-name">' + t.name + '</p><p class="testimonial-role">' + t.role + '</p></div>' +
      '</div></div>';
  }).join('');
  dots.innerHTML = TESTIMONIALS.map(function (_, i) {
    return '<button class="t-dot ' + (i === 0 ? 'active' : '') + '" onclick="goToTestimonial(' + i + ')"></button>';
  }).join('');
  setInterval(function () { goToTestimonial((testIndex + 1) % TESTIMONIALS.length); }, 5000);
}

function goToTestimonial(index) {
  testIndex = index;
  var track = document.getElementById('testimonialsTrack');
  var dots = document.querySelectorAll('.t-dot');
  var card = track.querySelector('.testimonial-card');
  if (!card) return;
  track.style.transform = 'translateX(-' + (index * (card.offsetWidth + 20)) + 'px)';
  dots.forEach(function (d, i) { d.classList.toggle('active', i === index); });
}

function initFAQ() {
  var list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = FAQ_DATA.map(function (item, i) {
    return '<div class="faq-item reveal" id="faq-' + i + '">' +
      '<button class="faq-question" onclick="toggleFAQ(' + i + ')" aria-expanded="false">' +
      item.q + '<span class="faq-arrow">+</span></button>' +
      '<div class="faq-answer" id="faq-ans-' + i + '"><p>' + item.a + '</p></div>' +
      '</div>';
  }).join('');
}

function toggleFAQ(i) {
  var item = document.getElementById('faq-' + i);
  var btn = item.querySelector('.faq-question');
  var open = item.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

var currentFile = null;
var countdownInterval = null;

function handleDragOver(e) {
  e.preventDefault();
  document.getElementById('uploadZone').classList.add('dragover');
}
function handleDragLeave() {
  document.getElementById('uploadZone').classList.remove('dragover');
}
function handleDrop(e) {
  e.preventDefault();
  handleDragLeave();
  if (e.dataTransfer.files.length) processFile(e.dataTransfer.files[0]);
}
function handleFileSelect(e) {
  if (e.target.files.length) processFile(e.target.files[0]);
}

function processFile(file) {
  currentFile = file;
  var ext = file.name.split('.').pop().toLowerCase();
  var formats = FORMAT_MAP[ext] || ['pdf'];
  document.getElementById('uploadZone').style.display = 'none';
  document.getElementById('converterOptions').hidden = false;
  var size = file.size < 1024 * 1024
    ? (file.size / 1024).toFixed(1) + ' KB'
    : (file.size / 1024 / 1024).toFixed(2) + ' MB';
  document.getElementById('fileInfo').innerHTML =
    '<div style="font-size:2rem">' + getFileIcon(ext) + '</div>' +
    '<div><p style="font-weight:600;font-size:0.95rem">' + file.name + '</p>' +
    '<p style="color:var(--silver);font-size:0.8rem">' + size + '</p></div>' +
    '<button onclick="resetConverter()" style="margin-left:auto;color:white;font-size:0.8rem;padding:4px 10px;border:1px solid rgba(255,255,255,0.15);border-radius:6px;background:none;cursor:pointer;">Changer</button>';
  var select = document.getElementById('outputFormat');
  select.innerHTML = formats.map(function (f) {
    return '<option value="' + f + '">' + f.toUpperCase() + '</option>';
  }).join('');
}

function getFileIcon(ext) {
  var map = { pdf: 'ðŸ“„', doc: 'ðŸ“', docx: 'ðŸ“', xls: 'ðŸ“Š', xlsx: 'ðŸ“Š', ppt: 'ðŸ“‹', pptx: 'ðŸ“‹', jpg: 'ðŸ–¼ï¸', jpeg: 'ðŸ–¼ï¸', png: 'ðŸ–¼ï¸', gif: 'ðŸŽžï¸', mp3: 'ðŸŽµ', mp4: 'ðŸŽ¬', wav: 'ðŸŽµ', txt: 'ðŸ“ƒ', csv: 'ðŸ“Š', html: 'ðŸŒ', epub: 'ðŸ“š', zip: 'ðŸ“¦' };
  return map[ext] || 'ðŸ“';
}

async function startConversion() {
  var options = document.getElementById('converterOptions');
  var progress = document.getElementById('progressSection');
  var format = document.getElementById('outputFormat').value;
  var ext = format.replace(/\s*\(.*\)/, '').trim();
  options.hidden = true;
  progress.hidden = false;

  function setProgress(pct, msg) {
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressBar').setAttribute('aria-valuenow', pct);
    document.getElementById('progressStatus').textContent = msg;
    document.getElementById('progressPercent').textContent = pct + '%';
  }

  try {
    setProgress(15, 'Connexion API...');
    var jobRes = await fetch('https://api.cloudconvert.com/v2/jobs', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + CLOUDCONVERT_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tasks: {
          'upload-file': { operation: 'import/upload' },
          'convert-file': { operation: 'convert', input: 'upload-file', output_format: ext },
          'export-file': { operation: 'export/url', input: 'convert-file' }
        }
      })
    });
    var job = await jobRes.json();
    if (!jobRes.ok) throw new Error(job.message || 'Erreur crÃ©ation job');

    var uploadTask = job.data.tasks.find(function (t) { return t.name === 'upload-file'; });
    setProgress(35, 'Envoi du fichier...');
    var formData = new FormData();
    Object.entries(uploadTask.result.form.parameters).forEach(function (entry) {
      formData.append(entry[0], entry[1]);
    });
    formData.append('file', currentFile);
    var uploadRes = await fetch(uploadTask.result.form.url, { method: 'POST', body: formData });
    if (!uploadRes.ok) throw new Error('Erreur upload fichier');

    setProgress(60, 'Conversion en cours...');
    var convertedUrl = null;
    for (var i = 0; i < 30; i++) {
      await new Promise(function (r) { setTimeout(r, 2000); });
      var checkRes = await fetch('https://api.cloudconvert.com/v2/jobs/' + job.data.id, {
        headers: { 'Authorization': 'Bearer ' + CLOUDCONVERT_API_KEY }
      });
      var checkJob = await checkRes.json();
      if (checkJob.data.status === 'finished') {
        var exportTask = checkJob.data.tasks.find(function (t) { return t.name === 'export-file'; });
        convertedUrl = exportTask.result.files[0].url;
        break;
      }
      if (checkJob.data.status === 'error') throw new Error('Erreur pendant la conversion');
      setProgress(60 + i, 'Conversion... ' + (i * 2) + 's');
    }
    if (!convertedUrl) throw new Error('Timeout - fichier trop grand');

    setProgress(100, 'Conversion terminÃ©e !');
    window._convertedUrl = convertedUrl;
    window._convertedExt = ext;
    window._convertedName = currentFile ? currentFile.name.split('.')[0] : 'document';
    setTimeout(function () { showResult(format); }, 400);

  } catch (err) {
    progress.hidden = true;
    options.hidden = false;
    showToast('Erreur : ' + err.message);
  }
}

function showResult(format) {
  document.getElementById('progressSection').hidden = true;
  document.getElementById('resultSection').hidden = false;
  var ext = format.replace(/\s*\(.*\)/, '').trim();
  var origName = currentFile ? currentFile.name.split('.')[0] : 'document';
  document.getElementById('resultInfo').textContent = 'Fichier prÃªt : ' + origName + '.' + ext;
  startCountdown(30 * 60);
}

function startCountdown(seconds) {
  var el = document.getElementById('countdown');
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(function () {
    if (seconds <= 0) { clearInterval(countdownInterval); el.textContent = 'expirÃ©'; return; }
    seconds--;
    var m = String(Math.floor(seconds / 60)).padStart(2, '0');
    var s = String(seconds % 60).padStart(2, '0');
    el.textContent = m + ':' + s;
  }, 1000);
}

function downloadResult() {
  if (window._convertedUrl) {
    var a = document.createElement('a');
    a.href = window._convertedUrl;
    a.download = (window._convertedName || 'document') + '-convertpro.' + (window._convertedExt || 'pdf');
    a.target = '_blank';
    a.click();
    showToast('TÃ©lÃ©chargement lancÃ© !');
  } else {
    showToast('Erreur - relancez la conversion');
  }
}

function resetConverter() {
  if (countdownInterval) clearInterval(countdownInterval);
  currentFile = null;
  document.getElementById('uploadZone').style.display = '';
  document.getElementById('converterOptions').hidden = true;
  document.getElementById('progressSection').hidden = true;
  document.getElementById('resultSection').hidden = true;
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('fileInput').value = '';
}

function showCocaTab(tabId, btn) {
  document.querySelectorAll('.coca-tab-content').forEach(function (t) { t.classList.remove('active'); });
  document.querySelectorAll('.coca-tab-btn').forEach(function (b) {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  var tab = document.getElementById('coca-tab-' + tabId);
  if (tab) tab.classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
}

function showCountry(key) {
  var data = COUNTRY_DATA[key];
  var detail = document.getElementById('countryDetail');
  if (!data || !detail) return;
  document.getElementById('countryName').textContent = data.name;
  document.getElementById('countryInfo').textContent = data.info;
  detail.hidden = false;
  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  document.querySelectorAll('.monde-item').forEach(function (el) {
    el.style.border = '1px solid rgba(255,255,255,0.08)';
  });
  event.currentTarget.style.border = '1px solid rgba(244,0,9,0.5)';
}

var gameActive = false;
var gameScore = 0;
var gameRecord = parseInt(localStorage.getItem('cpGameRecord') || '0');
var gameTimeLeft = 30;
var gameTimer = null;
var spawnTimer = null;

function startGame() {
  var startEl = document.getElementById('gameStart');
  var board = document.getElementById('gameBoard');
  if (startEl) startEl.style.display = 'none';
  board.innerHTML = '';
  gameActive = true;
  gameScore = 0;
  gameTimeLeft = 30;
  updateGameUI();
  document.getElementById('gameBadge').hidden = true;
  gameTimer = setInterval(function () {
    gameTimeLeft--;
    document.getElementById('gameTime').textContent = gameTimeLeft;
    if (gameTimeLeft <= 0) endGame();
  }, 1000);
  spawnTimer = setInterval(spawnBottle, 800);
  spawnBottle();
}

function spawnBottle() {
  if (!gameActive) return;
  var board = document.getElementById('gameBoard');
  var bottle = document.createElement('div');
  var left = Math.random() * 85;
  var duration = 1.5 + Math.random() * 2;
  bottle.className = 'game-bottle';
  bottle.textContent = 'ðŸ¥¤';
  bottle.style.left = left + '%';
  bottle.style.animationDuration = duration + 's';
  bottle.onclick = function () {
    if (!gameActive) return;
    gameScore++;
    updateGameUI();
    bottle.style.transform = 'scale(2)';
    bottle.style.opacity = '0';
    setTimeout(function () { bottle.remove(); }, 200);
  };
  board.appendChild(bottle);
  setTimeout(function () { if (bottle.parentNode) bottle.remove(); }, duration * 1000);
}

function updateGameUI() {
  var el = document.getElementById('gameScore');
  if (el) el.textContent = gameScore;
}

function endGame() {
  gameActive = false;
  clearInterval(gameTimer);
  clearInterval(spawnTimer);
  var board = document.getElementById('gameBoard');
  board.querySelectorAll('.game-bottle').forEach(function (b) { b.remove(); });
  if (gameScore > gameRecord) {
    gameRecord = gameScore;
    localStorage.setItem('cpGameRecord', gameRecord);
    document.getElementById('gameRecord').textContent = gameRecord;
  }
  var msg = document.createElement('div');
  msg.className = 'game-start';
  msg.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;';
  msg.innerHTML = '<p style="font-size:1.5rem;font-weight:900">Score : ' + gameScore + '</p>' +
    '<p style="color:var(--silver)">Record : ' + gameRecord + '</p>' +
    '<button class="btn-cta" onclick="startGame()">Rejouer</button>';
  board.appendChild(msg);
  if (gameScore >= 10) document.getElementById('gameBadge').hidden = false;
}

function initScrollReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () { entry.target.classList.add('visible'); }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  new MutationObserver(function () {
    document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) { observer.observe(el); });
  }).observe(document.body, { childList: true, subtree: true });
}

function initBackToTop() { }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function initCookieBanner() {
  if (localStorage.getItem('cpCookies')) return;
  setTimeout(function () {
    var banner = document.getElementById('cookieBanner');
    if (banner) banner.classList.add('show');
  }, 2000);
}
function acceptCookies() {
  localStorage.setItem('cpCookies', 'accepted');
  hideCookieBanner();
  showToast('PrÃ©fÃ©rences enregistrÃ©es.');
}
function declineCookies() {
  localStorage.setItem('cpCookies', 'declined');
  hideCookieBanner();
}
function hideCookieBanner() {
  var banner = document.getElementById('cookieBanner');
  if (banner) { banner.classList.remove('show'); setTimeout(function () { banner.remove(); }, 500); }
}

function showToast(msg, duration) {
  duration = duration || 3000;
  var existing = document.getElementById('cp-toast');
  if (existing) existing.remove();
  var toast = document.createElement('div');
  toast.id = 'cp-toast';
  toast.textContent = msg;
  toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--dark);color:var(--white);border:1px solid rgba(255,255,255,0.12);padding:12px 24px;border-radius:40px;font-size:0.88rem;font-weight:600;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:9999;opacity:0;transition:opacity 0.3s ease,transform 0.3s ease;white-space:nowrap;';
  document.body.appendChild(toast);
  requestAnimationFrame(function () {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(function () {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(function () { toast.remove(); }, 300);
  }, duration);
}

document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var id = a.getAttribute('href').slice(1);
    var target = document.getElementById(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey || e.metaKey) {
    if (e.key === 'u' || e.key === 'U') { e.preventDefault(); document.getElementById('fileInput').click(); }
  }
  if (e.key === 'Escape') {
    var menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open')) toggleMenu();
  }
});

var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-link');
new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      navLinks.forEach(function (link) {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id ? 'var(--red-light)' : '';
      });
    }
  });
}, { threshold: 0.4 }).observe(document.body);
sections.forEach(function (s) {
  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.style.color = link.getAttribute('href') === '#' + entry.target.id ? 'var(--red-light)' : '';
        });
      }
    });
  }, { threshold: 0.4 }).observe(s);
});

document.querySelectorAll('.catalog-cards').forEach(function (el) {
  var isDown = false, startX, scrollLeft;
  el.addEventListener('mousedown', function (e) {
    isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.cursor = 'grabbing';
  });
  el.addEventListener('mouseleave', function () { isDown = false; el.style.cursor = ''; });
  el.addEventListener('mouseup', function () { isDown = false; el.style.cursor = ''; });
  el.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX) * 1.5;
  });
});

var savedTheme = localStorage.getItem('cpTheme');
if (savedTheme === 'light') document.documentElement.setAttribute('data-theme', 'light');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').catch(function () { });
  });
}

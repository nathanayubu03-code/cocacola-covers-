const TOOLS = {
  trending:[
    {icon:'📄',name:'PDF → Word',desc:'Conversion précise avec mise en page préservée.',badge:'pop',users:'1.2M'},
    {icon:'📝',name:'Word → PDF',desc:'Transformez vos .docx en PDF en un clic.',badge:'fast',users:'980K'},
    {icon:'🖼️',name:'PDF → JPG',desc:'Exportez chaque page en image haute résolution.',badge:'pop',users:'750K'},
    {icon:'🗜️',name:'Compresser PDF',desc:'Réduisez la taille sans perdre la qualité.',badge:'fast',users:'640K'},
    {icon:'🔗',name:'Fusionner PDF',desc:'Combinez plusieurs PDF en un seul fichier.',badge:'pop',users:'590K'},
    {icon:'✂️',name:'Diviser PDF',desc:'Découpez votre PDF par pages ou par taille.',badge:null,users:'430K'},
    {icon:'🖼️',name:'JPG → PDF',desc:'Regroupez vos images en un document PDF.',badge:'fast',users:'510K'},
    {icon:'📊',name:'PDF → Excel',desc:'Extrayez les tableaux en feuilles de calcul.',badge:'ai',users:'380K'},
  ],
  pdf:[
    {icon:'📑',name:'PDF → PowerPoint',desc:'Reconstruisez vos diapositives intelligemment.',badge:'ai',users:'290K'},
    {icon:'🔒',name:'Protéger PDF',desc:'Ajoutez un mot de passe AES-256 à votre PDF.',badge:null,users:'210K'},
    {icon:'🔓',name:'Déverrouiller PDF',desc:'Supprimez la protection si vous êtes autorisé.',badge:null,users:'180K'},
    {icon:'💧',name:'Filigrane PDF',desc:'Ajoutez votre texte ou logo en filigrane.',badge:null,users:'155K'},
    {icon:'✍️',name:'Signer PDF',desc:'Signature électronique dessinée ou importée.',badge:'new',users:'220K'},
    {icon:'🔢',name:'Numéroter PDF',desc:'Ajoutez des numéros de page personnalisés.',badge:null,users:'130K'},
    {icon:'🔄',name:'Pivoter PDF',desc:'Faites pivoter une ou toutes les pages.',badge:'fast',users:'145K'},
    {icon:'🛠️',name:'Réparer PDF',desc:'Corrigez les fichiers PDF corrompus.',badge:'new',users:'95K'},
  ],
  ai:[
    {icon:'🤖',name:'Résumé PDF (IA)',desc:'Obtenez un résumé intelligent en 5 points.',badge:'new',users:'340K'},
    {icon:'🔍',name:'OCR Avancé',desc:'Reconnaissance de texte en 50+ langues.',badge:'ai',users:'280K'},
    {icon:'🎙️',name:'Audio → Texte',desc:'Transcription audio avec 95%+ de précision.',badge:'new',users:'195K'},
    {icon:'🎬',name:'Vidéo → Sous-titres',desc:'Générez des .srt et .vtt automatiquement.',badge:'new',users:'165K'},
    {icon:'🌍',name:'Traduire PDF',desc:'Traduction complète en 100+ langues.',badge:'ai',users:'310K'},
    {icon:'✂️',name:'Suppr. Fond (IA)',desc:"Supprimez l'arrière-plan de vos images.",badge:'ai',users:'520K'},
    {icon:'🔎',name:'Mots-clés PDF',desc:'Extrayez les 20 mots-clés principaux.',badge:'ai',users:'120K'},
    {icon:'📊',name:'PDF → JSON (IA)',desc:'Structurez vos données en JSON propre.',badge:'ai',users:'88K'},
  ],
  media:[
    {icon:'🖼️',name:'JPG → PNG',desc:'Conversion sans perte de qualité.',badge:'fast',users:'420K'},
    {icon:'🌐',name:'PNG → WebP',desc:'Format moderne, 30% plus léger.',badge:'fast',users:'310K'},
    {icon:'📐',name:'Redimensionner',desc:'Changez les dimensions en pixels ou %.',badge:null,users:'280K'},
    {icon:'🗜️',name:'Compresser Image',desc:'Réduisez le poids avec aperçu live.',badge:'pop',users:'390K'},
    {icon:'🔆',name:'Amélioration IA',desc:'Upscaling ×2 ou ×4 par intelligence artificielle.',badge:'ai',users:'145K'},
    {icon:'🎵',name:'MP3 → WAV',desc:'Conversion audio haute fidélité.',badge:null,users:'95K'},
    {icon:'🎞️',name:'MP4 → GIF',desc:'Transformez vos clips en GIF animé.',badge:'new',users:'175K'},
    {icon:'🖤',name:'Image → N&B',desc:'Conversion noir et blanc avec styles.',badge:null,users:'130K'},
  ],
};

const FORMAT_MAP={
  'pdf':['word (.docx)','excel (.xlsx)','powerpoint (.pptx)','jpg','png','txt','html','epub','json','csv'],
  'docx':['pdf','txt','html'],'doc':['pdf','txt'],'xlsx':['pdf','csv'],'xls':['pdf','csv'],
  'pptx':['pdf','jpg'],'ppt':['pdf'],'jpg':['pdf','png','webp','bmp'],'jpeg':['pdf','png','webp','bmp'],
  'png':['pdf','jpg','webp','bmp','svg'],'gif':['mp4','jpg','png'],'bmp':['jpg','png','pdf'],
  'tiff':['jpg','png','pdf'],'webp':['jpg','png','pdf'],'heic':['jpg','png'],
  'txt':['pdf','docx'],'csv':['xlsx','pdf'],'html':['pdf'],'epub':['pdf'],
  'mp3':['wav','aac','ogg','flac'],'wav':['mp3','aac','flac'],'mp4':['gif','mp3','avi','webm'],
  'avi':['mp4','webm'],'mov':['mp4','gif'],
};

const BLOG_POSTS=[
  {icon:'📄',tag:'Guide PDF',color:'#1C1C1E',title:'Comment convertir un PDF en Word sans perdre la mise en page',excerpt:'Découvrez les meilleures techniques pour une conversion parfaite, avec mise en page et polices préservées.',date:'15 Avr 2026',time:'5 min'},
  {icon:'🤖',tag:'Intelligence Artificielle',color:'#1C0035',title:"OCR 2026 : reconnaître le texte dans n'importe quelle image",excerpt:"L'OCR propulsé par l'IA atteint désormais 98% de précision. Voici comment en tirer le meilleur parti.",date:'12 Avr 2026',time:'7 min'},
  {icon:'🗜️',tag:'Optimisation',color:'#001C0A',title:'Compresser un PDF sans perte de qualité : guide ultime',excerpt:"Techniques avancées pour réduire le poids de vos PDF jusqu'à 80% tout en conservant une qualité parfaite.",date:'8 Avr 2026',time:'4 min'},
  {icon:'🔒',tag:'Sécurité',color:'#1C1000',title:'PDF signé électroniquement : tout ce que vous devez savoir',excerpt:'Signature électronique légale, certifiée et reconnue dans 190 pays. Mode emploi complet.',date:'3 Avr 2026',time:'6 min'},
  {icon:'🥤',tag:'Coca-Cola',color:'#1C0000',title:"L'histoire de Coca-Cola : 130 ans d'innovation et de publicité",excerpt:"De la pharmacie d'Atlanta aux 200 pays du monde — retour sur les moments qui ont fait la légende.",date:'28 Mar 2026',time:'8 min'},
  {icon:'🌍',tag:'API',color:'#001018',title:"Intégrer l'API ConvertPro en 10 minutes : tutoriel complet",excerpt:'Guide pas à pas pour intégrer notre API REST dans votre application, avec exemples en JS, Python et PHP.',date:'22 Mar 2026',time:'10 min'},
];

const TESTIMONIALS=[
  {text:'ConvertPro a remplacé tous nos anciens outils. La conversion PDF→Excel avec extraction IA est bluffante de précision.',name:'Sophie L.',role:'Analyste financière',avatar:'SL',color:'#F40009'},
  {text:"J'utilisais iLovePDF depuis des années. ConvertPro est dans une autre dimension — plus rapide, plus précis, et l'UI est magnifique.",name:'Marc D.',role:'Designer freelance',avatar:'MD',color:'#5856D6'},
  {text:'La transcription audio→texte nous fait gagner 3 heures par semaine. Un outil indispensable pour notre équipe.',name:'Amina K.',role:'Chargée de projet',avatar:'AK',color:'#FF9500'},
  {text:"L'API est propre, bien documentée, et fiable. Intégration en 2h. Le support répond en moins d'une heure.",name:'Thomas R.',role:'Développeur backend',avatar:'TR',color:'#34C759'},
  {text:'Interface magnifique, super intuitive. La section Coca-Cola est un délice visuel. Mes étudiants adorent !',name:'Claire M.',role:'Professeure',avatar:'CM',color:'#FF2D55'},
  {text:"Enfin un convertisseur qui préserve vraiment la mise en page Word. J'ai testé 12 concurrents — aucun n'arrive à la cheville.",name:'Julien P.',role:'Avocat',avatar:'JP',color:'#007AFF'},
];

const FAQ_DATA=[
  {q:'ConvertPro est-il vraiment gratuit ?',a:"Oui, ConvertPro est entièrement gratuit pour un usage personnel. Vous pouvez convertir autant de fichiers que vous voulez sans inscription ni carte bancaire."},
  {q:'Mes fichiers sont-ils en sécurité ?',a:'Absolument. Tous les fichiers sont chiffrés en AES-256 pendant le transfert et le traitement. Ils sont automatiquement supprimés de nos serveurs après 30 minutes.'},
  {q:'Quelle est la taille maximale de fichier acceptée ?',a:"Pour les utilisateurs gratuits, la limite est de 100 MB par fichier. Les abonnés Pro peuvent traiter des fichiers jusqu'à 2 GB."},
  {q:'Les conversions préservent-elles la mise en page ?',a:"Oui, notre moteur IA analyse la structure du document et reconstruit la mise en page avec une précision de 98%+, incluant polices, tableaux et images."},
  {q:'Puis-je convertir plusieurs fichiers à la fois ?',a:"Oui ! ConvertPro supporte le traitement en masse jusqu'à 20 fichiers simultanément. Glissez-déposez tous vos fichiers d'un coup."},
  {q:"L'API est-elle disponible gratuitement ?",a:"L'API est gratuite jusqu'à 100 conversions par jour. Au-delà, nos plans Pro et Enterprise offrent des quotas illimités avec SLA garanti."},
  {q:'Quels navigateurs sont supportés ?',a:'ConvertPro fonctionne sur Chrome, Firefox, Safari, Edge et Opera — sur desktop, tablette et mobile.'},
  {q:'Puis-je utiliser ConvertPro hors ligne ?',a:"ConvertPro fonctionne en ligne, mais notre Service Worker met en cache l'interface pour une expérience ultra-rapide même avec une connexion lente."},
];

const COUNTRY_DATA={
  france:{name:'🇫🇷 France',info:'En France, Coca-Cola est la boisson gazeuse la plus consommée. La variante "Coca-Cola Life" a été lancée en exclusivité européenne ici en 2014.'},
  usa:{name:'🇺🇸 États-Unis',info:"Berceau de Coca-Cola depuis 1886. Atlanta (Géorgie) abrite le World of Coca-Cola, musée visité par 1 million de personnes par an."},
  japon:{name:'🇯🇵 Japon',info:'Le Japon est le marché le plus innovant — plus de 100 saveurs exclusives dont Coca-Cola Sakura, Peach et même Melon.'},
  mexique:{name:'🇲🇽 Mexique',info:'Le Mexique est le plus grand consommateur per capita au monde. La ville de San Cristóbal consomme en moyenne 2L par personne par jour.'},
  inde:{name:'🇮🇳 Inde',info:"En Inde, Coca-Cola a racheté Thums Up en 1993, marque locale qui reste la boisson gazeuse #1 du pays aujourd'hui."},
  bresil:{name:'🇧🇷 Brésil',info:"Le Brésil est le 3ème marché mondial. Coca-Cola y possède la plus grande usine d'embouteillage de l'hémisphère sud."},
  australie:{name:'🇦🇺 Australie',info:"En Australie, la campagne \"Share a Coke\" a été lancée en 2011 — c'est là qu'elle est née avant de conquérir le monde."},
  maroc:{name:'🇲🇦 Maroc',info:'Au Maroc, Coca-Cola est présent depuis 1947. La NABC (filiale locale) emploie plus de 2000 personnes dans 3 usines.'},
};

document.addEventListener('DOMContentLoaded',()=>{
  initHeader();initHeroCounter();initCatalog();initBlog();
  initTestimonials();initFAQ();initScrollReveal();initBackToTop();initCookieBanner();
});

function initHeader(){
  const header=document.getElementById('header');
  window.addEventListener('scroll',()=>{
    header.classList.toggle('scrolled',window.scrollY>60);
    document.getElementById('backToTop').classList.toggle('visible',window.scrollY>400);
  },{passive:true});
}
function toggleMenu(){
  const menu=document.getElementById('mobileMenu'),overlay=document.getElementById('mobileOverlay'),burger=document.getElementById('hamburger');
  const open=menu.classList.toggle('open');
  overlay.classList.toggle('open',open);burger.classList.toggle('open',open);
  burger.setAttribute('aria-expanded',open);document.body.style.overflow=open?'hidden':'';
}
function toggleLang(){
  const btn=document.querySelector('.btn-lang');
  btn.textContent=btn.textContent.includes('FR')?'🌍 EN':'🌍 FR';
}
function initHeroCounter(){
  const el=document.getElementById('counter1');if(!el)return;
  const target=2847391,duration=2000,start=Date.now();
  const tick=()=>{
    const progress=Math.min((Date.now()-start)/duration,1);
    const eased=1-Math.pow(1-progress,3);
    el.textContent=Math.floor(eased*target).toLocaleString('fr-FR');
    if(progress<1)requestAnimationFrame(tick);
  };
  setTimeout(()=>requestAnimationFrame(tick),500);
}
function initCatalog(){
  renderRow('row-trending',TOOLS.trending);renderRow('row-pdf',TOOLS.pdf);
  renderRow('row-ai',TOOLS.ai);renderRow('row-media',TOOLS.media);
}
function renderRow(id,tools){
  const c=document.getElementById(id);if(!c)return;
  c.innerHTML=tools.map(t=>createToolCard(t)).join('');
}
function createToolCard(tool){
  const badge=tool.badge?`<span class="tool-badge tool-badge-${getBadgeClass(tool.badge)}">${getBadgeLabel(tool.badge)}</span>`:'';
  return`<div class="tool-card reveal" role="button" tabindex="0" aria-label="Outil : ${tool.name}" onclick="openTool('${tool.name}')" onkeydown="if(event.key==='Enter')openTool('${tool.name}')">
    <div class="tool-card-bg">${tool.icon}</div>
    <div class="tool-card-badges">${badge}</div>
    <div class="tool-card-info"><p class="tool-card-name">${tool.name}</p><p class="tool-card-users">👥 ${tool.users} utilisateurs</p></div>
    <div class="tool-card-overlay"><p>${tool.desc}</p><button class="btn-cta" onclick="event.stopPropagation();scrollToConverter('${tool.name}')">Utiliser →</button></div>
  </div>`;
}
function getBadgeClass(b){return{pop:'pop',fast:'fast',ai:'ai',new:'new'}[b]||'new';}
function getBadgeLabel(b){return{pop:'Populaire',fast:'Rapide',ai:'IA',new:'Nouveau'}[b]||b;}
function openTool(name){scrollToConverter(name);}
function scrollToConverter(name){document.getElementById('convertir').scrollIntoView({behavior:'smooth'});}
function scrollRow(btn,dir){
  const wrapper=btn.closest('.catalog-scroll-wrapper');
  const cards=wrapper.querySelector('.catalog-cards');
  cards.scrollBy({left:dir*480,behavior:'smooth'});
}
function initBlog(){
  const grid=document.getElementById('blogGrid');if(!grid)return;
  grid.innerHTML=BLOG_POSTS.map(p=>`
    <article class="blog-card reveal" tabindex="0" role="button" aria-label="Article : ${p.title}">
      <div class="blog-card-img" style="background:${p.color}">${p.icon}</div>
      <div class="blog-card-body">
        <p class="blog-card-tag">${p.tag}</p>
        <h3 class="blog-card-title">${p.title}</h3>
        <p class="blog-card-excerpt">${p.excerpt}</p>
        <p class="blog-card-meta">${p.date} · ${p.time} de lecture</p>
      </div>
    </article>`).join('');
}
let testIndex=0;
function initTestimonials(){
  const track=document.getElementById('testimonialsTrack'),dots=document.getElementById('testimonialsDots');
  if(!track||!dots)return;
  track.innerHTML=TESTIMONIALS.map(t=>`
    <div class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar" style="background:${t.color}20;color:${t.color}">${t.avatar}</div>
        <div><p class="testimonial-name">${t.name}</p><p class="testimonial-role">${t.role}</p></div>
      </div>
    </div>`).join('');
  dots.innerHTML=TESTIMONIALS.map((_,i)=>`<button class="t-dot ${i===0?'active':''}" onclick="goToTestimonial(${i})" aria-label="Témoignage ${i+1}"></button>`).join('');
  setInterval(()=>goToTestimonial((testIndex+1)%TESTIMONIALS.length),5000);
}
function goToTestimonial(index){
  testIndex=index;
  const track=document.getElementById('testimonialsTrack'),dots=document.querySelectorAll('.t-dot');
  const card=track.querySelector('.testimonial-card');if(!card)return;
  track.style.transform=`translateX(-${index*(card.offsetWidth+20)}px)`;
  dots.forEach((d,i)=>d.classList.toggle('active',i===index));
}
function initFAQ(){
  const list=document.getElementById('faqList');if(!list)return;
  list.innerHTML=FAQ_DATA.map((item,i)=>`
    <div class="faq-item reveal" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})" aria-expanded="false" aria-controls="faq-ans-${i}">
        ${item.q}<span class="faq-arrow" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-ans-${i}" role="region"><p>${item.a}</p></div>
    </div>`).join('');
}
function toggleFAQ(i){
  const item=document.getElementById(`faq-${i}`),btn=item.querySelector('.faq-question');
  const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',open);
}

let currentFile=null,countdownInterval=null;
function handleDragOver(e){e.preventDefault();document.getElementById('uploadZone').classList.add('dragover');}
function handleDragLeave(e){document.getElementById('uploadZone').classList.remove('dragover');}
function handleDrop(e){e.preventDefault();handleDragLeave(e);if(e.dataTransfer.files.length)processFile(e.dataTransfer.files[0]);}
function handleFileSelect(e){if(e.target.files.length)processFile(e.target.files[0]);}
function processFile(file){
  currentFile=file;
  const ext=file.name.split('.').pop().toLowerCase();
  const formats=FORMAT_MAP[ext]||['pdf'];
  document.getElementById('uploadZone').style.display='none';
  document.getElementById('converterOptions').hidden=false;
  const size=file.size<1024*1024?(file.size/1024).toFixed(1)+' KB':(file.size/1024/1024).toFixed(2)+' MB';
  document.getElementById('fileInfo').innerHTML=`
    <div style="font-size:2rem">${getFileIcon(ext)}</div>
    <div><p style="font-weight:600;font-size:0.95rem">${file.name}</p><p style="color:var(--silver);font-size:0.8rem">${size} · .${ext.toUpperCase()}</p></div>
    <button onclick="resetConverter()" style="margin-left:auto;color:white;font-size:0.8rem;padding:4px 10px;border:1px solid rgba(255,255,255,0.15);border-radius:6px;background:none;cursor:pointer;">✕ Changer</button>`;
  document.getElementById('outputFormat').innerHTML=formats.map(f=>`<option value="${f}">${f.toUpperCase()}</option>`).join('');
}
function getFileIcon(ext){
  const map={pdf:'📄',doc:'📝',docx:'📝',xls:'📊',xlsx:'📊',ppt:'📋',pptx:'📋',jpg:'🖼️',jpeg:'🖼️',png:'🖼️',gif:'🎞️',mp3:'🎵',mp4:'🎬',wav:'🎵',txt:'📃',csv:'📊',html:'🌐',epub:'📚',zip:'📦'};
  return map[ext]||'📁';
}
function startConversion(){
  document.getElementById('converterOptions').hidden=true;
  document.getElementById('progressSection').hidden=false;
  const fill=document.getElementById('progressFill'),status=document.getElementById('progressStatus');
  const percent=document.getElementById('progressPercent'),bar=document.getElementById('progressBar');
  const format=document.getElementById('outputFormat').value;
  const steps=[
    {pct:15,msg:'🔍 Analyse du fichier...'},
    {pct:35,msg:'⚙️ Préparation de la conversion...'},
    {pct:60,msg:`🔄 Conversion vers ${format.toUpperCase()}...`},
    {pct:80,msg:'✨ Optimisation du résultat...'},
    {pct:95,msg:'🔒 Sécurisation et chiffrement...'},
    {pct:100,msg:'✅ Conversion terminée !'},
  ];
  let i=0;
  const run=()=>{
    if(i>=steps.length){setTimeout(()=>showResult(format),400);return;}
    const step=steps[i++];
    fill.style.width=step.pct+'%';fill.style.boxShadow=`0 0 ${step.pct/5}px rgba(244,0,9,0.8)`;
    bar.setAttribute('aria-valuenow',step.pct);status.textContent=step.msg;percent.textContent=step.pct+'%';
    setTimeout(run,350+Math.random()*300);
  };
  run();
}
function showResult(format){
  document.getElementById('progressSection').hidden=true;
  document.getElementById('resultSection').hidden=false;
  const origName=currentFile?currentFile.name.split('.')[0]:'document';
  const ext=format.replace(/\s*\(.*\)/,'').trim();
  document.getElementById('resultInfo').textContent=`Fichier prêt : ${origName}.${ext} — Téléchargement disponible pendant 30 minutes.`;
  startCountdown(30*60);
}
function startCountdown(seconds){
  const el=document.getElementById('countdown');
  if(countdownInterval)clearInterval(countdownInterval);
  countdownInterval=setInterval(()=>{
    if(seconds<=0){clearInterval(countdownInterval);el.textContent='expiré';return;}
    seconds--;
    el.textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
  },1000);
}
function downloadResult(){
  const format=document.getElementById('outputFormat').value;
  const origName=currentFile?currentFile.name.split('.')[0]:'document';
  const ext=format.replace(/\s*\(.*\)/,'').trim();
  const blob=new Blob(['ConvertPro — Fichier converti (démo)'],{type:'text/plain'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=`${origName}-convertpro.${ext}`;a.click();
  URL.revokeObjectURL(url);showToast('✅ Téléchargement lancé !');
}
function resetConverter(){
  if(countdownInterval)clearInterval(countdownInterval);currentFile=null;
  document.getElementById('uploadZone').style.display='';
  document.getElementById('converterOptions').hidden=true;
  document.getElementById('progressSection').hidden=true;
  document.getElementById('resultSection').hidden=true;
  document.getElementById('progressFill').style.width='0%';
  document.getElementById('fileInput').value='';
}
function showCocaTab(tabId,btn){
  document.querySelectorAll('.coca-tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.coca-tab-btn').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false');});
  const tab=document.getElementById(`coca-tab-${tabId}`);if(tab)tab.classList.add('active');
  btn.classList.add('active');btn.setAttribute('aria-selected','true');
}
function showCountry(key){
  const data=COUNTRY_DATA[key],detail=document.getElementById('countryDetail');
  if(!data||!detail)return;
  document.getElementById('countryName').textContent=data.name;
  document.getElementById('countryInfo').textContent=data.info;
  detail.hidden=false;detail.scrollIntoView({behavior:'smooth',block:'nearest'});
  document.querySelectorAll('.monde-item').forEach(el=>el.style.border='1px solid rgba(255,255,255,0.08)');
  event.currentTarget.style.border='1px solid rgba(244,0,9,0.5)';
}
let gameActive=false,gameScore=0,gameRecord=parseInt(localStorage.getItem('cpGameRecord')||'0');
let gameTimeLeft=30,gameTimer=null,spawnTimer=null;
document.addEventListener('DOMContentLoaded',()=>{
  const recEl=document.getElementById('gameRecord');if(recEl)recEl.textContent=gameRecord;
});
function startGame(){
  const start=document.getElementById('gameStart'),board=document.getElementById('gameBoard');
  if(start)start.style.display='none';board.innerHTML='';
  gameActive=true;gameScore=0;gameTimeLeft=30;updateGameUI();
  document.getElementById('gameBadge').hidden=true;
  gameTimer=setInterval(()=>{gameTimeLeft--;document.getElementById('gameTime').textContent=gameTimeLeft;if(gameTimeLeft<=0)endGame();},1000);
  spawnTimer=setInterval(spawnBottle,800);spawnBottle();
}
function spawnBottle(){
  if(!gameActive)return;
  const board=document.getElementById('gameBoard'),bottle=document.createElement('div');
  const left=Math.random()*85,duration=1.5+Math.random()*2;
  bottle.className='game-bottle';bottle.textContent='🥤';bottle.style.left=left+'%';
  bottle.style.animationDuration=duration+'s';
  bottle.setAttribute('role','button');bottle.setAttribute('aria-label','Bouteille Coca-Cola — cliquez !');
  bottle.onclick=()=>{
    if(!gameActive)return;gameScore++;updateGameUI();
    bottle.style.transform='scale(2)';bottle.style.opacity='0';
    setTimeout(()=>bottle.remove(),200);
  };
  board.appendChild(bottle);
  setTimeout(()=>{if(bottle.parentNode)bottle.remove();},duration*1000);
}
function updateGameUI(){const el=document.getElementById('gameScore');if(el)el.textContent=gameScore;}
function endGame(){
  gameActive=false;clearInterval(gameTimer);clearInterval(spawnTimer);
  const board=document.getElementById('gameBoard');
  board.querySelectorAll('.game-bottle').forEach(b=>b.remove());
  if(gameScore>gameRecord){gameRecord=gameScore;localStorage.setItem('cpGameRecord',gameRecord);document.getElementById('gameRecord').textContent=gameRecord;}
  const msg=document.createElement('div');
  msg.className='game-start';msg.style.cssText='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;';
  msg.innerHTML=`<p style="font-size:1.5rem;font-weight:900">Score : ${gameScore} 🥤</p><p style="color:var(--silver);font-size:0.9rem">Record : ${gameRecord}</p><button class="btn-cta" onclick="startGame()">Rejouer</button>`;
  board.appendChild(msg);
  if(gameScore>=10)document.getElementById('gameBadge').hidden=false;
}
function initScrollReveal(){
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry,i)=>{if(entry.isIntersecting){setTimeout(()=>entry.target.classList.add('visible'),i*60);observer.unobserve(entry.target);}});
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  const mutObs=new MutationObserver(()=>{document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));});
  mutObs.observe(document.body,{childList:true,subtree:true});
}
function initBackToTop(){}
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}
function initCookieBanner(){
  if(localStorage.getItem('cpCookies'))return;
  setTimeout(()=>{const banner=document.getElementById('cookieBanner');if(banner)banner.classList.add('show');},2000);
}
function acceptCookies(){localStorage.setItem('cpCookies','accepted');hideCookieBanner();showToast('🍪 Préférences enregistrées.');}
function declineCookies(){localStorage.setItem('cpCookies','declined');hideCookieBanner();}
function hideCookieBanner(){const banner=document.getElementById('cookieBanner');if(banner){banner.classList.remove('show');setTimeout(()=>banner.remove(),500);}}
function showToast(msg,duration=3000){
  const existing=document.getElementById('cp-toast');if(existing)existing.remove();
  const toast=document.createElement('div');toast.id='cp-toast';toast.textContent=msg;
  toast.style.cssText='position:fixed;bottom:100px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--dark);color:var(--white);border:1px solid rgba(255,255,255,0.12);padding:12px 24px;border-radius:40px;font-size:0.88rem;font-weight:600;box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:9999;opacity:0;transition:opacity 0.3s ease,transform 0.3s ease;white-space:nowrap;';
  document.body.appendChild(toast);
  requestAnimationFrame(()=>{toast.style.opacity='1';toast.style.transform='translateX(-50%) translateY(0)';});
  setTimeout(()=>{toast.style.opacity='0';toast.style.transform='translateX(-50%) translateY(10px)';setTimeout(()=>toast.remove(),300);},duration);
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1),target=document.getElementById(id);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}});
});
document.addEventListener('keydown',e=>{
  if(e.ctrlKey||e.metaKey){
    if(e.key==='u'||e.key==='U'){e.preventDefault();document.getElementById('fileInput').click();}
    if(e.key==='d'||e.key==='D'){e.preventDefault();const btn=document.querySelector('.result-section:not([hidden]) .btn-cta');if(btn)btn.click();}
  }
  if(e.key==='Escape'){const menu=document.getElementById('mobileMenu');if(menu.classList.contains('open'))toggleMenu();}
});
const sections=document.querySelectorAll('section[id]'),navLinks=document.querySelectorAll('.nav-link');
const navObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>{link.style.color=link.getAttribute('href')===`#${entry.target.id}`?'var(--red-light)':'';});}});
},{threshold:0.4});
sections.forEach(s=>navObserver.observe(s));
document.querySelectorAll('.catalog-cards').forEach(el=>{
  let isDown=false,startX,scrollLeft;
  el.addEventListener('mousedown',e=>{isDown=true;startX=e.pageX-el.offsetLeft;scrollLeft=el.scrollLeft;el.style.cursor='grabbing';});
  el.addEventListener('mouseleave',()=>{isDown=false;el.style.cursor='';});
  el.addEventListener('mouseup',()=>{isDown=false;el.style.cursor='';});
  el.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();el.scrollLeft=scrollLeft-(e.pageX-el.offsetLeft-startX)*1.5;});
});
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{});});}
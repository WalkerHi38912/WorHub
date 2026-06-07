/* ============================
   WORKHUB — APP LOGIC
   ============================ */

// ========== DATA ==========

const JOBS_DATA = [
  {
    id: 1, title: 'Senior Frontend Developer', company: 'Яндекс', logo: '🦾',
    salary: { from: 250000, to: 350000 }, city: 'Москва',
    sphere: 'IT / Разработка', exp: '3–6 лет', type: 'Полная занятость',
    rating: 4.8, reviews: 1243,
    activity: { responseTime: '1–2 дня', viewRate: 94, closeTime: '8 дней', level: 'high' },
    tags: ['React', 'TypeScript', 'GraphQL'],
    remote: false, hot: true,
    date: '2025-06-10',
    description: 'Яндекс ищет опытного Frontend-разработчика в команду, создающую инновационные продукты для миллионов пользователей.',
    requirements: ['Опыт от 3 лет с React и TypeScript', 'Знание GraphQL и REST API', 'Понимание принципов UX/UI', 'Опыт работы с Webpack/Vite', 'Умение писать Unit-тесты'],
    conditions: ['Конкурентная зарплата', 'ДМС с первого дня', 'Гибкий график', 'Корпоративное обучение', 'Офис в Москва-Сити'],
  },
  {
    id: 2, title: 'UX/UI Designer', company: 'Сбер', logo: '💚',
    salary: { from: 180000, to: 240000 }, city: 'Москва',
    sphere: 'Дизайн', exp: '1–3 года', type: 'Полная занятость',
    rating: 4.6, reviews: 892,
    activity: { responseTime: '3–5 дней', viewRate: 78, closeTime: '14 дней', level: 'medium' },
    tags: ['Figma', 'Prototyping', 'Design System'],
    remote: false, hot: false,
    date: '2025-06-09',
    description: 'Ищем талантливого дизайнера, готового создавать пользовательский опыт нового уровня для финтех-продуктов.',
    requirements: ['Портфолио с реальными проектами', 'Мастерство в Figma', 'Понимание Design System', 'Опыт работы с mobile-интерфейсами'],
    conditions: ['Зарплата от 180 до 240 тысяч', 'ДМС, стоматология', 'Гибридный формат', 'Корпоративная скидка в ФК'],
  },
  {
    id: 3, title: 'Python Backend Developer', company: 'Ozon', logo: '🛒',
    salary: { from: 220000, to: 300000 }, city: 'Санкт-Петербург',
    sphere: 'IT / Разработка', exp: '3–6 лет', type: 'Удалённая работа',
    rating: 4.4, reviews: 654,
    activity: { responseTime: '1–3 дня', viewRate: 88, closeTime: '10 дней', level: 'high' },
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    remote: true, hot: true,
    date: '2025-06-08',
    description: 'Команда Core Platform ищет Backend-разработчика для работы над высоконагруженными сервисами маркетплейса.',
    requirements: ['Python 3.10+', 'FastAPI или Django', 'PostgreSQL, Redis', 'Docker/Kubernetes', 'Опыт с микросервисами'],
    conditions: ['Полная удалёнка', 'Оборудование за счёт компании', 'Бонусная программа', 'Акции компании'],
  },
  {
    id: 4, title: 'Data Scientist', company: 'VK', logo: '💜',
    salary: { from: 200000, to: 280000 }, city: 'Москва',
    sphere: 'IT / Разработка', exp: '1–3 года', type: 'Полная занятость',
    rating: 4.2, reviews: 523,
    activity: { responseTime: '5–7 дней', viewRate: 61, closeTime: '21 день', level: 'low' },
    tags: ['Python', 'ML', 'PyTorch', 'SQL'],
    remote: false, hot: false,
    date: '2025-06-07',
    description: 'Присоединяйтесь к команде ML-инженеров VK для разработки рекомендательных систем и моделей NLP.',
    requirements: ['Знание Python и ML-библиотек', 'Опыт с PyTorch или TensorFlow', 'Математическая база (статистика, линейная алгебра)', 'SQL на уровне выше среднего'],
    conditions: ['Гибкий старт', 'Участие в конференциях', 'Внутреннее обучение', 'Офис в центре Москвы'],
  },
  {
    id: 5, title: 'Product Manager', company: 'Авито', logo: '🏪',
    salary: { from: 160000, to: 220000 }, city: 'Москва',
    sphere: 'IT / Разработка', exp: '3–6 лет', type: 'Гибридный',
    rating: 4.7, reviews: 768,
    activity: { responseTime: '2–4 дня', viewRate: 82, closeTime: '12 дней', level: 'high' },
    tags: ['Product Strategy', 'Agile', 'Analytics'],
    remote: false, hot: false,
    date: '2025-06-06',
    description: 'Авито ищет Product Manager для развития вертикали недвижимости — одного из ключевых направлений платформы.',
    requirements: ['Опыт в продакт-менеджменте 3+ лет', 'Аналитический склад ума', 'Умение работать с данными', 'Навыки коммуникации с командой'],
    conditions: ['Конкурентный доход', 'Гибкий график', 'Офис в Москве', 'ДМС'],
  },
  {
    id: 6, title: 'Junior QA Engineer', company: 'Тинькофф', logo: '🟡',
    salary: { from: 80000, to: 120000 }, city: 'Удалённо',
    sphere: 'IT / Разработка', exp: 'Без опыта', type: 'Удалённая работа',
    rating: 4.5, reviews: 1102,
    activity: { responseTime: '1 день', viewRate: 96, closeTime: '7 дней', level: 'high' },
    tags: ['Тестирование', 'Postman', 'SQL'],
    remote: true, hot: false,
    date: '2025-06-05',
    description: 'Отличный старт карьеры! Ищем внимательных и аналитичных специалистов для обеспечения качества финтех-продуктов.',
    requirements: ['Базовые знания тестирования', 'Умение работать с Postman', 'Базовый SQL', 'Внимательность к деталям'],
    conditions: ['Полная удалёнка', 'Быстрый карьерный рост', 'Наставник в первые месяцы', 'Корпоративное обучение'],
  },
  {
    id: 7, title: 'DevOps Engineer', company: 'Cloudru', logo: '☁️',
    salary: { from: 240000, to: 320000 }, city: 'Екатеринбург',
    sphere: 'IT / Разработка', exp: 'Более 6 лет', type: 'Полная занятость',
    rating: 4.1, reviews: 312,
    activity: { responseTime: '7–10 дней', viewRate: 55, closeTime: '30 дней', level: 'low' },
    tags: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD'],
    remote: false, hot: true,
    date: '2025-06-04',
    description: 'Нужен опытный DevOps для построения и поддержки инфраструктуры облачных сервисов enterprise-уровня.',
    requirements: ['Kubernetes в продакшене', 'Terraform/Ansible', 'Опыт с AWS/GCP/Azure', 'CI/CD pipelines', 'Мониторинг: Grafana, Prometheus'],
    conditions: ['Зарплата 240–320 тыс.', 'Переезд/релокейт поддерживается', 'Сертификации за счёт компании', 'Страхование жизни'],
  },
  {
    id: 8, title: 'Маркетолог (Digital)', company: 'Lamoda', logo: '👗',
    salary: { from: 100000, to: 150000 }, city: 'Москва',
    sphere: 'Маркетинг', exp: '1–3 года', type: 'Полная занятость',
    rating: 3.9, reviews: 287,
    activity: { responseTime: '5–8 дней', viewRate: 49, closeTime: '25 дней', level: 'low' },
    tags: ['SMM', 'Google Ads', 'Аналитика'],
    remote: false, hot: false,
    date: '2025-06-03',
    description: 'Ищем Digital Маркетолога для продвижения брендов на маркетплейсе и управления рекламными кампаниями.',
    requirements: ['Опыт в digital-маркетинге', 'Google Ads, Яндекс Директ', 'Аналитика (GA, Яндекс.Метрика)', 'Понимание e-commerce'],
    conditions: ['Скидки на товары Lamoda', 'Гибкий старт', 'ДМС', 'Офис в центре Москвы'],
  },
  {
    id: 9, title: 'HR Business Partner', company: 'Ростелеком', logo: '📡',
    salary: { from: 130000, to: 180000 }, city: 'Санкт-Петербург',
    sphere: 'HR', exp: '3–6 лет', type: 'Полная занятость',
    rating: 3.7, reviews: 445,
    activity: { responseTime: '4–6 дней', viewRate: 67, closeTime: '18 дней', level: 'medium' },
    tags: ['HR', 'Рекрутинг', 'T&D'],
    remote: false, hot: false,
    date: '2025-06-02',
    description: 'Ищем опытного HR BP для стратегического партнёрства с IT-направлением крупнейшего телеком-оператора России.',
    requirements: ['Опыт в роли HR BP 3+ лет', 'Знание IT-рынка труда', 'Навыки ведения переговоров', 'Опыт в T&D и performance management'],
    conditions: ['Соцпакет', 'Корпоративная связь', 'Обучение и развитие', 'Стабильность крупной компании'],
  },
  {
    id: 10, title: 'Финансовый аналитик', company: 'Газпромбанк', logo: '🏦',
    salary: { from: 150000, to: 200000 }, city: 'Москва',
    sphere: 'Финансы', exp: '1–3 года', type: 'Полная занятость',
    rating: 4.0, reviews: 621,
    activity: { responseTime: '3–5 дней', viewRate: 72, closeTime: '16 дней', level: 'medium' },
    tags: ['Excel', 'Power BI', 'Финансовое моделирование'],
    remote: false, hot: false,
    date: '2025-06-01',
    description: 'Присоединяйтесь к команде аналитиков для работы с финансовой отчётностью и бизнес-планированием.',
    requirements: ['Высшее экономическое образование', 'Excel на продвинутом уровне', 'Опыт финансового моделирования', 'Power BI / Tableau'],
    conditions: ['ДМС', 'Корпоративные скидки', 'Обучение CFA поддерживается', 'Офис в Москве'],
  },
  {
    id: 11, title: 'Менеджер по продажам B2B', company: 'СКБ Контур', logo: '📊',
    salary: { from: 90000, to: 160000 }, city: 'Новосибирск',
    sphere: 'Продажи', exp: '1–3 года', type: 'Полная занятость',
    rating: 4.3, reviews: 387,
    activity: { responseTime: '2–3 дня', viewRate: 85, closeTime: '11 дней', level: 'high' },
    tags: ['B2B продажи', 'CRM', 'Переговоры'],
    remote: false, hot: false,
    date: '2025-05-30',
    description: 'Ищем активного и целеустремлённого менеджера для продажи IT-решений для бизнеса.',
    requirements: ['Опыт в B2B продажах', 'Работа с CRM', 'Навыки деловых переговоров', 'Ориентация на результат'],
    conditions: ['Оклад + высокий % от продаж', 'Обучение продукту', 'Карьерный рост', 'Корпоративный автомобиль'],
  },
  {
    id: 12, title: 'iOS Developer (Swift)', company: 'Kaspersky Lab', logo: '🔒',
    salary: { from: 210000, to: 290000 }, city: 'Москва',
    sphere: 'IT / Разработка', exp: '3–6 лет', type: 'Гибридный',
    rating: 4.5, reviews: 534,
    activity: { responseTime: '2–4 дня', viewRate: 80, closeTime: '13 дней', level: 'high' },
    tags: ['Swift', 'SwiftUI', 'iOS'],
    remote: false, hot: true,
    date: '2025-05-29',
    description: 'Разрабатывайте мобильные решения в сфере кибербезопасности, которые защищают миллионы пользователей по всему миру.',
    requirements: ['Swift 5+, SwiftUI/UIKit', 'Опыт публикации в App Store', 'Core Data, Realm', 'Unit/UI-тесты'],
    conditions: ['Гибридный формат', 'Международные командировки', 'ДМС мирового класса', 'Бонусы за результат'],
  },
];

// ========== STATE ==========
let currentUser = null;
let favorites = JSON.parse(localStorage.getItem('wh_favorites') || '[]');
let filteredJobs = [...JOBS_DATA];
let sliderIndex = 0;
let sliderTimer = null;

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  currentUser = JSON.parse(localStorage.getItem('wh_user') || 'null');
  updateAuthUI();
  renderSlider();
  applyFilters();
  updateFavBadge();
});

// ========== AUTH ==========
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow = '';
}

function switchTab(tab) {
  document.querySelectorAll('#authModal .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#authModal .tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(tab === 'login' ? 'loginForm' : 'registerForm').classList.add('active');
  const btns = document.querySelectorAll('#authModal .tab-btn');
  btns[tab === 'login' ? 0 : 1].classList.add('active');
  clearErrors();
}

function clearErrors() {
  ['loginError','regError'].forEach(id => {
    const el = document.getElementById(id);
    el.textContent = '';
    el.classList.add('hidden');
  });
}

function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.classList.remove('hidden');
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) return showError('loginError', 'Заполните все поля');
  
  const stored = JSON.parse(localStorage.getItem('wh_accounts') || '[]');
  const user = stored.find(u => u.email === email && u.password === password);
  if (!user) return showError('loginError', 'Неверный email или пароль');
  
  currentUser = { ...user };
  localStorage.setItem('wh_user', JSON.stringify(currentUser));
  closeModal('authModal');
  updateAuthUI();
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

function doRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value;
  if (!name || !email || !password) return showError('regError', 'Заполните все поля');
  if (password.length < 6) return showError('regError', 'Пароль минимум 6 символов');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('regError', 'Некорректный email');
  
  const stored = JSON.parse(localStorage.getItem('wh_accounts') || '[]');
  if (stored.find(u => u.email === email)) return showError('regError', 'Этот email уже зарегистрирован');
  
  const newUser = { name, email, password, position: '', city: '', bio: '' };
  stored.push(newUser);
  localStorage.setItem('wh_accounts', JSON.stringify(stored));
  currentUser = { ...newUser };
  localStorage.setItem('wh_user', JSON.stringify(currentUser));
  closeModal('authModal');
  updateAuthUI();
  document.getElementById('regName').value = '';
  document.getElementById('regEmail').value = '';
  document.getElementById('regPassword').value = '';
}

function doLogout() {
  currentUser = null;
  localStorage.removeItem('wh_user');
  updateAuthUI();
  renderJobs(filteredJobs);
}

function updateAuthUI() {
  const guest = document.getElementById('guestActions');
  const user = document.getElementById('userActions');
  if (currentUser) {
    guest.classList.add('hidden');
    user.classList.remove('hidden');
    const initials = currentUser.name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
    document.getElementById('avatarSm').textContent = initials;
    document.getElementById('headerUserName').textContent = currentUser.name.split(' ')[0];
    renderJobs(filteredJobs);
  } else {
    guest.classList.remove('hidden');
    user.classList.add('hidden');
    renderJobs(filteredJobs);
  }
}

// ========== PROFILE ==========
function switchProfileTab(tab) {
  document.querySelectorAll('#profileModal .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#profileModal .tab-content').forEach(c => c.classList.remove('active'));
  const tabMap = { info: 'profileInfo', resume: 'profileResume', applications: 'profileApplications' };
  const btnIdx = { info: 0, resume: 1, applications: 2 };
  document.getElementById(tabMap[tab]).classList.add('active');
  document.querySelectorAll('#profileModal .tab-btn')[btnIdx[tab]].classList.add('active');
  if (tab === 'applications') renderApplications();
}

document.getElementById('profileModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal('profileModal');
});
document.getElementById('authModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal('authModal');
});
document.getElementById('jobModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal('jobModal');
});

// Open profile modal — pre-fill data
const origOpenModal = window.openModal;
window.openModal = function(id) {
  if (id === 'profileModal' && currentUser) {
    if (!currentUser) { openModal('authModal'); return; }
    const initials = currentUser.name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
    document.getElementById('avatarBig').textContent = initials;
    document.getElementById('profileNameDisplay').textContent = currentUser.name;
    document.getElementById('profileEmailDisplay').textContent = currentUser.email;
    document.getElementById('editName').value = currentUser.name || '';
    document.getElementById('editPosition').value = currentUser.position || '';
    document.getElementById('editCity').value = currentUser.city || '';
    document.getElementById('editBio').value = currentUser.bio || '';
    
    const resume = JSON.parse(localStorage.getItem('wh_resume_' + currentUser.email) || 'null');
    if (resume) {
      document.getElementById('resumePosition').value = resume.position || '';
      document.getElementById('resumeSalary').value = resume.salary || '';
      document.getElementById('resumeEmployment').value = resume.employment || 'Полная занятость';
      document.getElementById('resumeExperience').value = resume.experience || '';
      document.getElementById('resumeSkills').value = resume.skills || '';
      document.getElementById('resumeEducation').value = resume.education || '';
      showResumePreview(resume);
    }
    document.getElementById('profileSaved').classList.add('hidden');
    document.getElementById('resumeSaved').classList.add('hidden');
  }
  document.getElementById(id).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

function saveProfile() {
  if (!currentUser) return;
  currentUser.name = document.getElementById('editName').value.trim() || currentUser.name;
  currentUser.position = document.getElementById('editPosition').value.trim();
  currentUser.city = document.getElementById('editCity').value.trim();
  currentUser.bio = document.getElementById('editBio').value.trim();
  
  localStorage.setItem('wh_user', JSON.stringify(currentUser));
  const stored = JSON.parse(localStorage.getItem('wh_accounts') || '[]');
  const idx = stored.findIndex(u => u.email === currentUser.email);
  if (idx > -1) { stored[idx] = { ...stored[idx], ...currentUser }; localStorage.setItem('wh_accounts', JSON.stringify(stored)); }
  
  document.getElementById('profileNameDisplay').textContent = currentUser.name;
  const initials = currentUser.name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('avatarBig').textContent = initials;
  document.getElementById('avatarSm').textContent = initials;
  document.getElementById('headerUserName').textContent = currentUser.name.split(' ')[0];
  
  const saved = document.getElementById('profileSaved');
  saved.classList.remove('hidden');
  setTimeout(() => saved.classList.add('hidden'), 2500);
}

function saveResume() {
  if (!currentUser) return;
  const resume = {
    position: document.getElementById('resumePosition').value.trim(),
    salary: document.getElementById('resumeSalary').value,
    employment: document.getElementById('resumeEmployment').value,
    experience: document.getElementById('resumeExperience').value.trim(),
    skills: document.getElementById('resumeSkills').value.trim(),
    education: document.getElementById('resumeEducation').value.trim(),
  };
  localStorage.setItem('wh_resume_' + currentUser.email, JSON.stringify(resume));
  
  showResumePreview(resume);
  const saved = document.getElementById('resumeSaved');
  saved.classList.remove('hidden');
  setTimeout(() => saved.classList.add('hidden'), 2500);
}

function showResumePreview(resume) {
  const preview = document.getElementById('resumePreview');
  const content = document.getElementById('resumePreviewContent');
  const blocks = [
    { label: 'Желаемая должность', value: resume.position },
    { label: 'Ожидаемая зарплата', value: resume.salary ? `${Number(resume.salary).toLocaleString('ru-RU')} ₽` : '' },
    { label: 'Тип занятости', value: resume.employment },
    { label: 'Навыки', value: resume.skills },
    { label: 'Опыт работы', value: resume.experience },
    { label: 'Образование', value: resume.education },
  ].filter(b => b.value);
  
  content.innerHTML = blocks.map(b => `
    <div class="resume-block">
      <div class="resume-block-label">${b.label}</div>
      <div class="resume-block-value">${b.value}</div>
    </div>
  `).join('');
  preview.classList.remove('hidden');
}

// ========== SLIDER ==========
function renderSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  dotsContainer.innerHTML = slides.length > 0
    ? Array.from(slides).map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></button>`).join('')
    : '';
  startSliderTimer();
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.slide');
  sliderIndex = (idx + slides.length) % slides.length;
  document.getElementById('sliderTrack').style.transform = `translateX(-${sliderIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === sliderIndex));
}

function slidePrev() { clearInterval(sliderTimer); goToSlide(sliderIndex - 1); startSliderTimer(); }
function slideNext() { clearInterval(sliderTimer); goToSlide(sliderIndex + 1); startSliderTimer(); }
function startSliderTimer() {
  sliderTimer = setInterval(() => goToSlide(sliderIndex + 1), 5000);
}

// ========== JOBS ==========
function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const city = document.getElementById('filterCity').value;
  const sphere = document.getElementById('filterSphere').value;
  const exp = document.getElementById('filterExp').value;
  const type = document.getElementById('filterType').value;
  const sort = document.getElementById('sortJobs').value;

  filteredJobs = JOBS_DATA.filter(job => {
    const matchQuery = !query || job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query) || job.tags.some(t => t.toLowerCase().includes(query));
    const matchCity = !city || job.city === city;
    const matchSphere = !sphere || job.sphere === sphere;
    const matchExp = !exp || job.exp === exp;
    const matchType = !type || job.type === type || (type === 'Удалённая работа' && job.remote);
    return matchQuery && matchCity && matchSphere && matchExp && matchType;
  });

  if (sort === 'salary_desc') filteredJobs.sort((a, b) => (b.salary.to || b.salary.from) - (a.salary.to || a.salary.from));
  else if (sort === 'salary_asc') filteredJobs.sort((a, b) => (a.salary.from) - (b.salary.from));
  else if (sort === 'rating') filteredJobs.sort((a, b) => b.rating - a.rating);
  else filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));

  renderJobs(filteredJobs);
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterCity').value = '';
  document.getElementById('filterSphere').value = '';
  document.getElementById('filterExp').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('sortJobs').value = 'date';
  applyFilters();
}

function renderJobs(jobs) {
  const grid = document.getElementById('jobsGrid');
  const noJobs = document.getElementById('noJobs');
  const countEl = document.getElementById('jobsCount');
  
  countEl.innerHTML = `Найдено <span>${jobs.length}</span> ${pluralJobs(jobs.length)}`;
  
  if (!jobs.length) {
    grid.innerHTML = '';
    noJobs.classList.remove('hidden');
    return;
  }
  noJobs.classList.add('hidden');
  grid.innerHTML = jobs.map((job, i) => renderJobCard(job, i)).join('');
}

function pluralJobs(n) {
  if (n % 100 >= 11 && n % 100 <= 19) return 'вакансий';
  const r = n % 10;
  if (r === 1) return 'вакансия';
  if (r >= 2 && r <= 4) return 'вакансии';
  return 'вакансий';
}

function renderJobCard(job, delay = 0) {
  const isFav = favorites.includes(job.id);
  const salaryStr = job.salary
    ? `от ${job.salary.from.toLocaleString('ru-RU')} ₽`
    : 'Зарплата не указана';
  
  const stars = renderStars(job.rating);
  const dateStr = formatDate(job.date);
  
  const tagsHtml = [
    ...job.tags.map(t => `<span class="tag">${t}</span>`),
    job.remote ? '<span class="tag remote">🌐 Удалённо</span>' : '',
    job.hot ? '<span class="tag hot">🔥 Горячая</span>' : '',
  ].join('');

  const activityHtml = job.activity ? renderActivityBadge(job.activity) : '';

  return `
    <div class="job-card" style="animation-delay:${delay * 0.05}s" onclick="openJobModal(${job.id})">
      <div class="card-header">
        <div class="company-logo">${job.logo}</div>
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(event, ${job.id})" title="${isFav ? 'Убрать из избранного' : 'Добавить в избранное'}">
          ${isFav ? '⭐' : '☆'}
        </button>
      </div>
      <div class="job-title">${job.title}</div>
      <div class="company-name">${job.company}</div>
      <div class="salary">${salaryStr}</div>
      <div class="rating">${stars}<span class="rating-value">${job.rating} (${job.reviews.toLocaleString('ru-RU')} отзывов)</span></div>
      ${activityHtml}
      <div class="card-tags">${tagsHtml}</div>
      <div class="card-footer">
        <span class="card-location">📍 ${job.city}</span>
        <span class="card-date">${dateStr}</span>
      </div>
    </div>
  `;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return Array.from({ length: 5 }, (_, i) => {
    if (i < full) return '★';
    if (i === full && half) return '½';
    return '☆';
  }).join('');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - d) / 86400000);
  if (diff === 0) return 'Сегодня';
  if (diff === 1) return 'Вчера';
  if (diff < 7) return `${diff} дней назад`;
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
}

// ========== JOB DETAIL ==========
function openJobModal(id) {
  const job = JOBS_DATA.find(j => j.id === id);
  if (!job) return;
  
  const isFav = favorites.includes(job.id);
  const salaryStr = job.salary ? `от ${job.salary.from.toLocaleString('ru-RU')} до ${job.salary.to.toLocaleString('ru-RU')} ₽` : 'Зарплата не указана';
  const stars = renderStars(job.rating);
  
  document.getElementById('jobModalContent').innerHTML = `
    <div class="job-detail-header">
      <div class="job-detail-company">
        <div class="company-logo-big">${job.logo}</div>
        <div>
          <div class="job-detail-title">${job.title}</div>
          <div class="job-detail-company-name">${job.company}</div>
          <div class="rating" style="margin-top:6px">${stars} <span class="rating-value">${job.rating} — ${job.reviews.toLocaleString('ru-RU')} отзывов на платформе</span></div>
        </div>
      </div>
      <div class="job-detail-salary">${salaryStr}</div>
      ${job.activity ? renderActivityBlock(job.activity) : ''}
      <div class="job-detail-meta">
        <div class="meta-item"><span>📍</span>${job.city}</div>
        <div class="meta-item"><span>💼</span>${job.type}</div>
        <div class="meta-item"><span>⏱</span>${job.exp}</div>
        <div class="meta-item"><span>🏢</span>${job.sphere}</div>
        ${job.remote ? '<div class="meta-item" style="color:var(--blue)">🌐 Удалённая работа</div>' : ''}
        ${job.hot ? '<div class="meta-item" style="color:var(--accent)">🔥 Горячая вакансия</div>' : ''}
      </div>
    </div>

    <div class="job-detail-section">
      <h4>О вакансии</h4>
      <p>${job.description}</p>
    </div>

    <div class="job-detail-section">
      <h4>Требования</h4>
      <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>

    <div class="job-detail-section">
      <h4>Условия</h4>
      <ul>${job.conditions.map(c => `<li>${c}</li>`).join('')}</ul>
    </div>

    <div class="job-actions">
      <button class="btn-primary" onclick="applyToJob(${job.id})">Откликнуться на вакансию</button>
      <button class="btn-outline" onclick="toggleFavFromModal(${job.id})" id="favBtnModal">
        ${isFav ? '⭐ В избранном' : '☆ В избранное'}
      </button>
    </div>
  `;
  
  openModal('jobModal');
}

function applyToJob(id) {
  if (!currentUser) {
    closeModal('jobModal');
    openModal('authModal');
    return;
  }
  const job = JOBS_DATA.find(j => j.id === id);
  const applied = JSON.parse(localStorage.getItem('wh_applications_' + currentUser.email) || '[]');
  if (applied.find(a => a.jobId === id)) {
    showApplyStatus(job);
    return;
  }
  openApplyModal(job);
}

function openApplyModal(job) {
  const existing = document.getElementById('applyModal');
  if (existing) existing.remove();
  const modal = document.createElement('div');
  modal.id = 'applyModal';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal" style="max-width:500px">
      <button class="modal-close" onclick="closeModal('applyModal')">✕</button>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
        <div class="company-logo" style="width:48px;height:48px;font-size:22px">${job.logo}</div>
        <div>
          <div style="font-weight:700;font-size:15px">${job.title}</div>
          <div style="color:var(--text3);font-size:13px">${job.company}</div>
        </div>
      </div>
      <h2 class="modal-title">Сопроводительное письмо</h2>
      <p class="modal-sub">Расскажите работодателю, почему вы подходите на эту позицию. Персонализированные отклики рассматриваются в 3× быстрее.</p>
      <div class="form-group">
        <label>Почему вы хотите работать в ${job.company}?</label>
        <textarea id="applyMotivation" rows="4" placeholder="Расскажите о своём интересе к компании и позиции..."></textarea>
      </div>
      <div class="form-group">
        <label>Ваш ключевой опыт для этой роли</label>
        <textarea id="applyExperience" rows="3" placeholder="Какие навыки и достижения наиболее релевантны..."></textarea>
      </div>
      <div class="form-group">
        <label>Ожидаемая зарплата (₽)</label>
        <input type="number" id="applySalary" placeholder="${job.salary ? job.salary.from : 100000}" />
      </div>
      <div id="applyError" class="form-error hidden"></div>
      <div style="display:flex;gap:10px;margin-top:4px">
        <button class="btn-primary" style="flex:1" onclick="submitApplication(${job.id})">Отправить отклик</button>
        <button class="btn-ghost" onclick="closeModal('applyModal')">Отмена</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal('applyModal'); });
}

function submitApplication(jobId) {
  const motivation = document.getElementById('applyMotivation').value.trim();
  const experience = document.getElementById('applyExperience').value.trim();
  const salary = document.getElementById('applySalary').value;
  if (!motivation) {
    const err = document.getElementById('applyError');
    err.textContent = 'Пожалуйста, напишите сопроводительное письмо';
    err.classList.remove('hidden');
    return;
  }
  const job = JOBS_DATA.find(j => j.id === jobId);
  const applications = JSON.parse(localStorage.getItem('wh_applications_' + currentUser.email) || '[]');
  applications.push({
    jobId, jobTitle: job.title, company: job.company, logo: job.logo,
    salary: job.salary, city: job.city, motivation, experience,
    expectedSalary: salary,
    appliedAt: new Date().toISOString(),
    status: 'sent',
  });
  localStorage.setItem('wh_applications_' + currentUser.email, JSON.stringify(applications));
  closeModal('applyModal');
  closeModal('jobModal');
  showToast('✅ Отклик отправлен! Следите за статусом в личном кабинете.');
  simulateStatusProgression(currentUser.email, jobId);
}

const REJECTION_REASONS = [
  {
    category: 'Опыт',
    reason: 'Недостаточный опыт работы',
    detail: 'Для данной позиции мы ищем кандидата с опытом от 3 лет в аналогичной роли. Ваш профиль пока не соответствует этому требованию, однако мы рекомендуем откликнуться повторно после накопления необходимого опыта.',
    tip: 'Рассмотрите вакансии уровня Junior или Middle, чтобы набрать опыт.',
  },
  {
    category: 'Навыки',
    reason: 'Несоответствие технических навыков',
    detail: 'К сожалению, требуемый стек технологий в вашем резюме представлен недостаточно. Нам нужен специалист с глубоким знанием ключевых инструментов, указанных в вакансии.',
    tip: 'Пройдите профильные курсы и добавьте pet-проекты в портфолио.',
  },
  {
    category: 'Зарплата',
    reason: 'Несоответствие зарплатных ожиданий',
    detail: 'Ваши зарплатные ожидания выходят за рамки бюджета, выделенного на данную позицию. Мы не готовы предложить компенсацию, соответствующую вашим запросам на текущем этапе.',
    tip: 'Изучите рыночный уровень зарплат для вашего грейда в данной сфере.',
  },
  {
    category: 'Конкуренция',
    reason: 'Выбран другой кандидат',
    detail: 'Мы получили большое количество сильных откликов. К сожалению, финальное решение было принято в пользу кандидата, чей опыт и навыки в наибольшей мере соответствовали нашим требованиям на данный момент.',
    tip: 'Это не оценка вас как специалиста — следите за новыми вакансиями компании.',
  },
  {
    category: 'Формат',
    reason: 'Несоответствие формата работы',
    detail: 'Мы ищем специалиста для работы в офисе, тогда как из вашего отклика следует предпочтение удалённого формата. К сожалению, на данной позиции гибридный или удалённый формат не предусмотрен.',
    tip: 'Указывайте предпочитаемый формат работы в фильтрах поиска.',
  },
];

function simulateStatusProgression(email, jobId) {
  setTimeout(() => updateApplicationStatus(email, jobId, 'viewed', null), 2000);
  setTimeout(() => {
    const roll = Math.random();
    if (roll > 0.5) {
      updateApplicationStatus(email, jobId, 'shortlisted', null);
    } else if (roll > 0.2) {
      updateApplicationStatus(email, jobId, 'invited', null);
    } else {
      const reason = REJECTION_REASONS[Math.floor(Math.random() * REJECTION_REASONS.length)];
      updateApplicationStatus(email, jobId, 'rejected', reason);
    }
  }, 5000);
}

function updateApplicationStatus(email, jobId, status, rejectionReason) {
  const applications = JSON.parse(localStorage.getItem('wh_applications_' + email) || '[]');
  const idx = applications.findIndex(a => a.jobId === jobId);
  if (idx > -1) {
    applications[idx].status = status;
    if (rejectionReason) applications[idx].rejectionReason = rejectionReason;
    localStorage.setItem('wh_applications_' + email, JSON.stringify(applications));
    if (!document.getElementById('profileModal').classList.contains('hidden')) renderApplications();
  }
}

function showApplyStatus(job) {
  const applications = JSON.parse(localStorage.getItem('wh_applications_' + currentUser.email) || '[]');
  const app = applications.find(a => a.jobId === job.id);
  if (!app) return;
  const s = getStatusLabel(app.status);
  showToast('Вы уже откликнулись на эту вакансию. Статус: ' + s.text);
}

function showToast(msg) {
  const existing = document.getElementById('whToast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'whToast';
  toast.className = 'wh-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3500);
}

function renderActivityBadge(activity) {
  const colors = { high: 'var(--green)', medium: 'var(--yellow)', low: 'var(--text3)' };
  const labels = { high: 'Активно отвечает', medium: 'Отвечает', low: 'Медленно отвечает' };
  const color = colors[activity.level];
  return `<div class="activity-badge" style="color:${color}"><span class="activity-dot" style="background:${color}"></span>${labels[activity.level]}</div>`;
}

function renderActivityBlock(activity) {
  const colors = { high: 'var(--green)', medium: 'var(--yellow)', low: '#ff6b8a' };
  const color = colors[activity.level];
  return `
    <div class="activity-block">
      <div class="activity-stat"><div class="activity-stat-label">Скорость ответа</div><div class="activity-stat-value" style="color:${color}">${activity.responseTime}</div></div>
      <div class="activity-stat"><div class="activity-stat-label">Просматривает отклики</div><div class="activity-stat-value" style="color:${color}">${activity.viewRate}%</div></div>
      <div class="activity-stat"><div class="activity-stat-label">Среднее закрытие вакансии</div><div class="activity-stat-value">${activity.closeTime}</div></div>
    </div>`;
}

function getStatusLabel(status) {
  const map = {
    sent:        { text: 'Отправлен',    color: 'var(--text3)',  icon: '📤' },
    viewed:      { text: 'Просмотрен',   color: 'var(--blue)',   icon: '👁' },
    shortlisted: { text: 'В шорт-листе', color: 'var(--yellow)', icon: '⭐' },
    invited:     { text: 'Приглашение',  color: 'var(--green)',  icon: '🎉' },
    rejected:    { text: 'Отказ',        color: '#ff6b8a',       icon: '✕'  },
  };
  return map[status] || map.sent;
}

function renderApplications() {
  const container = document.getElementById('applicationsContainer');
  if (!container || !currentUser) return;
  const applications = JSON.parse(localStorage.getItem('wh_applications_' + currentUser.email) || '[]');
  if (!applications.length) {
    container.innerHTML = '<p style="color:var(--text3);font-size:14px">Вы ещё не откликались на вакансии.</p>';
    return;
  }
  const steps = ['sent','viewed','shortlisted','invited'];
  container.innerHTML = [...applications].reverse().map(app => {
    const s = getStatusLabel(app.status);
    const isRejected = app.status === 'rejected';
    const currentIdx = isRejected ? -1 : steps.indexOf(app.status);
    const stepsHtml = steps.map((step, i) => {
      const sl = getStatusLabel(step);
      const active = i <= currentIdx;
      return `<div class="status-step"><div class="status-dot" style="${active ? 'background:'+sl.color+';box-shadow:0 0 0 3px '+sl.color+'33' : ''}"></div><div class="status-step-label" style="${active ? 'color:var(--text)' : ''}">${sl.text}</div></div>${i < steps.length-1 ? '<div class="status-line" style="'+(active && i < currentIdx ? 'background:var(--accent)' : '')+'"></div>' : ''}`;
    }).join('');
    return `
      <div class="application-card">
        <div class="application-header">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="company-logo" style="width:40px;height:40px;font-size:20px">${app.logo}</div>
            <div>
              <div style="font-weight:600;font-size:14px">${app.jobTitle}</div>
              <div style="color:var(--text3);font-size:12px">${app.company}</div>
            </div>
          </div>
          <div class="status-chip" style="color:${s.color};border-color:${s.color}">${s.icon} ${s.text}</div>
        </div>
        ${isRejected
          ? renderRejectionBlock(app.rejectionReason)
          : '<div class="status-tracker">' + stepsHtml + '</div>'
        }
        <div style="font-size:12px;color:var(--text3);margin-top:8px">Отправлен ${new Date(app.appliedAt).toLocaleDateString('ru-RU',{day:'numeric',month:'long'})}</div>
      </div>`;
  }).join('');
}

function renderRejectionBlock(reason) {
  if (!reason) {
    return '<div class="rejected-bar"><span class="rejected-icon">✕</span><div><div class="rejected-title">Отказ работодателя</div><div class="rejected-detail">К сожалению, работодатель не готов продолжить рассмотрение вашей кандидатуры.</div></div></div>';
  }
  return `
    <div class="rejected-bar rejected-rich">
      <div class="rejected-top">
        <span class="rejected-icon">✕</span>
        <div>
          <div class="rejected-category">${reason.category}</div>
          <div class="rejected-title">${reason.reason}</div>
        </div>
      </div>
      <div class="rejected-detail">${reason.detail}</div>
      <div class="rejected-tip">
        <span class="tip-icon">💡</span>
        <span>${reason.tip}</span>
      </div>
    </div>`;
}

function toggleFavFromModal(id) {
  toggleFavById(id);
  const isFav = favorites.includes(id);
  const btn = document.getElementById('favBtnModal');
  if (btn) btn.textContent = isFav ? '⭐ В избранном' : '☆ В избранное';
  renderJobs(filteredJobs);
  if (document.getElementById('favoritesPage').classList.contains('active')) {
    renderFavorites();
  }
}

// ========== FAVORITES ==========
function toggleFav(event, id) {
  event.stopPropagation();
  toggleFavById(id);
  renderJobs(filteredJobs);
  if (!document.getElementById('favoritesPage').classList.contains('hidden')) {
    renderFavorites();
  }
}

function toggleFavById(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) favorites.splice(idx, 1);
  else favorites.push(id);
  localStorage.setItem('wh_favorites', JSON.stringify(favorites));
  updateFavBadge();
}

function updateFavBadge() {
  const badge = document.getElementById('favBadge');
  if (favorites.length > 0) {
    badge.textContent = favorites.length;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const noFav = document.getElementById('noFavorites');
  const favJobs = JOBS_DATA.filter(j => favorites.includes(j.id));
  
  if (!favJobs.length) {
    grid.innerHTML = '';
    noFav.classList.remove('hidden');
    return;
  }
  noFav.classList.add('hidden');
  grid.innerHTML = favJobs.map((job, i) => renderJobCard(job, i)).join('');
}

// ========== NAVIGATION ==========
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.add('hidden');
    p.classList.remove('active');
  });
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  
  if (page === 'home') {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('homePage').classList.add('active');
    document.getElementById('nav-home').classList.add('active');
  } else if (page === 'favorites') {
    document.getElementById('favoritesPage').classList.remove('hidden');
    document.getElementById('favoritesPage').classList.add('active');
    document.getElementById('nav-favorites').classList.add('active');
    renderFavorites();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== KEYBOARD ==========
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['authModal','jobModal','profileModal'].forEach(id => {
      if (!document.getElementById(id).classList.contains('hidden')) closeModal(id);
    });
  }
});
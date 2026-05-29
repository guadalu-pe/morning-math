// ─── State ────────────────────────────────────────────────────────────────────

let currentStep   = 0;
let totalSteps    = 0;
let lessonSteps   = [];
let activeSubject = null;

// ─── Theme ────────────────────────────────────────────────────────────────────

function applyTheme(subjectKey) {
  document.documentElement.setAttribute('data-subject', subjectKey);
  const dot = document.querySelector('.nav-brand-dot');
  if (dot) dot.style.background = SUBJECTS[subjectKey].color;
}

// ─── Random problem ───────────────────────────────────────────────────────────

function loadRandom() {
  const { subjectKey } = getTodayLesson();   // fully random — subject is a surprise
  activeSubject = subjectKey;
  buildLesson(subjectKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Reveal solution ──────────────────────────────────────────────────────────

function revealSolution() {
  const btn     = document.getElementById('solveBtn');
  const section = document.getElementById('solutionSection');
  btn.classList.add('hidden');
  section.style.display = 'block';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    section.classList.add('visible');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  setTimeout(() => renderStep(0, 'forward'), 300);
}

// ─── Canvas diagrams ──────────────────────────────────────────────────────────

function drawDiagram(type, color) {
  const canvas = document.getElementById('diagram');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const stroke = color;
  const fill   = color + '18';
  const text   = color;

  ctx.lineWidth = 2;
  ctx.font = '13px -apple-system, BlinkMacSystemFont, sans-serif';

  if (type === 'triangle') {
    const pts = [[W/2, 24], [W/2 - 90, H - 24], [W/2 + 90, H - 24]];
    ctx.beginPath();
    ctx.moveTo(...pts[0]);
    pts.slice(1).forEach(p => ctx.lineTo(...p));
    ctx.closePath();
    ctx.fillStyle = fill; ctx.fill();
    ctx.strokeStyle = stroke; ctx.stroke();
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.beginPath(); ctx.moveTo(W/2, 24); ctx.lineTo(W/2, H - 24); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = text; ctx.textAlign = 'center';
    ctx.fillText('h = 6 cm', W/2 + 62, H/2 + 4);
    ctx.fillText('base = 10 cm', W/2, H - 8);
  } else if (type === 'right-triangle') {
    ctx.beginPath();
    ctx.moveTo(90, H - 24); ctx.lineTo(90, 24); ctx.lineTo(W - 70, H - 24);
    ctx.closePath();
    ctx.fillStyle = fill; ctx.fill();
    ctx.strokeStyle = stroke; ctx.stroke();
    ctx.strokeRect(90, H - 40, 16, 16);
    ctx.fillStyle = text; ctx.textAlign = 'center';
    ctx.fillText('a = 6', 66, H / 2);
    ctx.fillText('b = 8', (90 + W - 70) / 2, H - 8);
    ctx.fillText('c = ?', (90 + W - 70) / 2 + 22, (24 + H - 24) / 2 - 10);
  } else if (type === 'circle') {
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) / 2 - 20;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = fill; ctx.fill();
    ctx.strokeStyle = stroke; ctx.stroke();
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = text;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + r, cy); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = text; ctx.textAlign = 'center';
    ctx.fillText('r', cx + r / 2, cy - 8);
    ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = text; ctx.fill();
  } else if (type === 'hexagon') {
    const cx = W / 2, cy = H / 2, r = Math.min(W, H) / 2 - 18;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
              : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
    ctx.closePath();
    ctx.fillStyle = fill; ctx.fill();
    ctx.strokeStyle = stroke; ctx.stroke();
    ctx.fillStyle = text; ctx.textAlign = 'center';
    ctx.fillText('6 sides', cx, cy + 5);
  } else if (type === 'rectangle') {
    const rx = 70, ry = 32, rw = W - 140, rh = H - 64;
    ctx.beginPath(); ctx.rect(rx, ry, rw, rh);
    ctx.fillStyle = fill; ctx.fill();
    ctx.strokeStyle = stroke; ctx.stroke();
    ctx.fillStyle = text; ctx.textAlign = 'center';
    ctx.fillText('9 cm', rx + rw / 2, ry + rh + 18);
    ctx.fillText('4 cm', rx - 24, ry + rh / 2 + 5);
  }
}

// ─── Step navigator ───────────────────────────────────────────────────────────

function renderStep(index, direction = 'forward') {
  const card       = document.getElementById('stepCard');
  const cardNum    = document.getElementById('stepCardNum');
  const cardAction = document.getElementById('stepCardAction');
  const cardMath   = document.getElementById('stepCardMath');
  const counter    = document.getElementById('stepCounter');
  const navBack    = document.getElementById('navBack');
  const navNext    = document.getElementById('navNext');
  const trail      = document.getElementById('stepTrail');
  const answerCard = document.getElementById('answerCard');

  const step = lessonSteps[index];

  card.classList.remove('visible');
  card.classList.add(direction === 'forward' ? 'exit-left' : 'exit-right');

  setTimeout(() => {
    card.classList.remove('exit-left', 'exit-right');
    cardNum.textContent    = index + 1;
    cardAction.textContent = step.action;
    cardMath.textContent   = step.math;
    counter.textContent    = `${index + 1} of ${totalSteps}`;

    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));

    trail.innerHTML = '';
    for (let i = index - 1; i >= 0; i--) {
      const t = document.createElement('div');
      t.className = 'trail-item';
      t.innerHTML = `<div class="trail-num">${i + 1}</div><div class="trail-math">${lessonSteps[i].math}</div>`;
      trail.appendChild(t);
      setTimeout(() => t.classList.add('visible'), (index - 1 - i) * 55 + 80);
    }

    navBack.disabled = (index === 0);
    const isLast = index === totalSteps - 1;
    navNext.textContent = isLast ? 'See Answer →' : 'Next Step →';
    navNext.disabled = isLast && answerCard.classList.contains('visible');

    if (isLast) {
      setTimeout(() => answerCard.classList.add('visible'), 420);
    } else {
      answerCard.classList.remove('visible');
    }
  }, 210);
}

function goStep(dir) {
  const next = currentStep + dir;
  if (next < 0 || next >= totalSteps) return;
  if (dir === 1 && currentStep === totalSteps - 1) return;
  currentStep = next;
  renderStep(currentStep, dir === 1 ? 'forward' : 'back');
}

function replay() {
  currentStep = 0;
  document.getElementById('answerCard').classList.remove('visible');
  document.getElementById('stepTrail').innerHTML = '';
  renderStep(0, 'forward');
}

// ─── Build page for a given subject ──────────────────────────────────────────

function buildLesson(subjectKey) {
  const { subject, lesson } = getTodayLesson(subjectKey);

  applyTheme(subjectKey);

  document.getElementById('heroEyebrow').textContent = subject.label;
  document.getElementById('heroConcept').textContent = lesson.concept;
  document.getElementById('heroDesc').textContent    = lesson.desc;
  document.getElementById('problemText').textContent = lesson.problem;

  // Diagram
  const diagramCard = document.getElementById('diagramCard');
  if (lesson.diagram) {
    diagramCard.style.display = '';
    requestAnimationFrame(() => drawDiagram(lesson.diagram, subject.color));
  } else {
    diagramCard.style.display = 'none';
  }

  // Steps
  lessonSteps  = lesson.steps;
  totalSteps   = lesson.steps.length;
  currentStep  = 0;

  document.getElementById('answerValue').textContent = lesson.answer;
  document.getElementById('answerCard').classList.remove('visible');
  document.getElementById('stepTrail').innerHTML = '';
  document.getElementById('stepCard').classList.remove('visible', 'exit-left', 'exit-right');

  // Reset reveal state
  const btn     = document.getElementById('solveBtn');
  const section = document.getElementById('solutionSection');
  btn.classList.remove('hidden');
  section.classList.remove('visible');
  section.style.display = 'none';
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function init() {
  document.getElementById('dateChip').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
  });

  // Load a fully random lesson on every page open
  const { subjectKey } = getTodayLesson();
  activeSubject = subjectKey;
  buildLesson(subjectKey);
}

document.addEventListener('DOMContentLoaded', init);

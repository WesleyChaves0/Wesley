document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('primary-navigation');
  const toggle = document.querySelector('.nav-toggle');
  const yearSpan = document.getElementById('year');
  const form = document.querySelector('.contact-form');
  const feedback = document.querySelector('.form-feedback');

  // Atualiza ano do rodapé
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // Alterna menu móvel
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.getAttribute('data-visible') === 'true';
      nav.setAttribute('data-visible', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Fecha o menu ao clicar em um link
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.tagName.toLowerCase() === 'a') {
        nav.setAttribute('data-visible', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Rolagem suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Simula envio de formulário (frontend apenas)
  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('nome');
      feedback.style.color = 'var(--success)';
      feedback.textContent = `Obrigado, ${name || 'tudo certo'}! Entraremos em contato em breve.`;
      form.reset();
    });
  }
});
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
(function () {
  // Adiciona as classes reveal nos elementos do HTML dinamicamente
  const rules = [
    // Seção Sobre
    { sel: '.sobre-photo',        cls: 'reveal from-left' },
    { sel: '.sobre-text',         cls: 'reveal from-right' },

    // Planos — cada card com delay escalonado
    { sel: '.plano-card:nth-child(1)', cls: 'reveal scale-in reveal-delay-1' },
    { sel: '.plano-card:nth-child(2)', cls: 'reveal scale-in reveal-delay-2' },
    { sel: '.plano-card:nth-child(3)', cls: 'reveal scale-in reveal-delay-3' },

    // Cabeçalhos de seção
    { sel: '.planos-header',      cls: 'reveal' },
    { sel: '.como-header',        cls: 'reveal' },
    { sel: '.dep-header',         cls: 'reveal' },
    { sel: '.faq-header',         cls: 'reveal' },
    { sel: '.cta-final-inner',    cls: 'reveal' },

    // Como funciona — steps com delay
    { sel: '.como-step:nth-child(1)', cls: 'reveal reveal-delay-1' },
    { sel: '.como-step:nth-child(2)', cls: 'reveal reveal-delay-2' },
    { sel: '.como-step:nth-child(3)', cls: 'reveal reveal-delay-3' },
    { sel: '.como-step:nth-child(4)', cls: 'reveal reveal-delay-4' },

    // Depoimentos
    { sel: '.dep-card:nth-child(1)', cls: 'reveal reveal-delay-1' },
    { sel: '.dep-card:nth-child(2)', cls: 'reveal reveal-delay-2' },
    { sel: '.dep-card:nth-child(3)', cls: 'reveal reveal-delay-3' },

    // FAQ items
    { sel: '.faq-item',           cls: 'reveal' },

    // Hero stats
    { sel: '.hero-stats',         cls: 'reveal' },
  ];

  rules.forEach(({ sel, cls }) => {
    document.querySelectorAll(sel).forEach(el => {
      cls.split(' ').forEach(c => el.classList.add(c));
    });
  });

  // IntersectionObserver dispara quando o elemento entra na tela
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, {
    threshold: 0.12,       // 12% do elemento visível já dispara
    rootMargin: '0px 0px -40px 0px'  // antecipa um pouco antes de chegar
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
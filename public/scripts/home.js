const ready = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
    return;
  }

  callback();
};

const scheduleIdle = (callback) => {
  const run = () => callback();

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 1200 });
    return;
  }

  window.setTimeout(run, 240);
};

function initHeroMotion(gsap, ScrollTrigger, reduceMotion) {
  gsap.from('.nav', {
    y: -18,
    opacity: 0,
    duration: 0.58,
    ease: 'power2.out',
  });

  gsap.from('.hero-panel', {
    y: 18,
    opacity: 0,
    duration: 0.64,
    ease: 'power2.out',
  });

  gsap.fromTo(
    '.social-grid',
    { y: 10, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.52,
      delay: 0.08,
      ease: 'power2.out',
      clearProps: 'transform',
    },
  );

  gsap.fromTo(
    '.social-card',
    { scale: 0.92, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.46,
      stagger: 0.035,
      delay: 0.12,
      ease: 'power2.out',
      clearProps: 'transform',
    },
  );

  gsap.from('.hero-center, .hero-title', {
    y: 18,
    opacity: 0,
    duration: 0.62,
    stagger: 0.055,
    delay: 0.14,
    ease: 'power2.out',
  });

  const heroPanel = document.querySelector('.hero-panel');
  const heroBg = document.querySelector('.hero-bg');

  if (!heroPanel || !heroBg) return;

  gsap.fromTo(
    heroBg,
    { yPercent: 2, scale: 1.08, autoAlpha: 0 },
    {
      yPercent: 0,
      scale: 1.04,
      autoAlpha: 1,
      duration: 0.82,
      ease: 'power2.out',
    },
  );

  if (reduceMotion) return;

  gsap.to(heroBg, {
    yPercent: -4,
    scale: 1.07,
    ease: 'none',
    scrollTrigger: {
      trigger: heroPanel,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  let pointerFrame = 0;

  heroPanel.addEventListener('pointermove', (event) => {
    if (pointerFrame) return;

    pointerFrame = window.requestAnimationFrame(() => {
      pointerFrame = 0;
      const bounds = heroPanel.getBoundingClientRect();
      const xRatio = (event.clientX - bounds.left) / bounds.width;
      const yRatio = (event.clientY - bounds.top) / bounds.height;

      heroPanel.style.setProperty('--spotlight-x', `${Math.round(xRatio * 100)}%`);
      heroPanel.style.setProperty('--spotlight-y', `${Math.round(yRatio * 100)}%`);

      gsap.to(heroBg, {
        x: (xRatio - 0.5) * 14,
        y: (yRatio - 0.5) * 10,
        duration: 0.45,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  });

  heroPanel.addEventListener('pointerleave', () => {
    heroPanel.style.setProperty('--spotlight-x', '50%');
    heroPanel.style.setProperty('--spotlight-y', '38%');

    gsap.to(heroBg, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  });

  ScrollTrigger.refresh();
}

function initBelowFoldMotion(gsap, ScrollTrigger, reduceMotion) {
  const imageFrames = gsap.utils.toArray('.js-scale-fade, .accordion-panel');

  imageFrames.forEach((element, index) => {
    const image = element.querySelector('img') || element;
    element.classList.add('is-revealed');

    if (reduceMotion) {
      gsap.set(element, { clearProps: 'transform,opacity' });
      gsap.set(image, { clearProps: 'transform,opacity' });
      return;
    }

    gsap.fromTo(
      element,
      { y: 30, opacity: 0.82, scale: 0.985 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.72,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 86%',
          once: true,
        },
      },
    );

    gsap.fromTo(
      image,
      { yPercent: index % 2 === 0 ? -3 : 3 },
      {
        yPercent: index % 2 === 0 ? 3 : -3,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });

  const revealTargets = gsap.utils.toArray(
    [
      '.chapter-heading',
      '.portfolio-head',
      '.timeline-head',
      '.skill-row',
      '.timeline-item',
      '.blog-card',
      '.footer-contact',
      '.footer-column',
      '.footer-rule',
      '.footer-bottom',
    ].join(', '),
  );

  revealTargets.forEach((element) => {
    element.classList.add('motion-reveal');

    if (reduceMotion) {
      gsap.set(element, { clearProps: 'transform,opacity' });
      return;
    }

    gsap.fromTo(
      element,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.68,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      },
    );
  });

  if (!reduceMotion) {
    gsap.fromTo(
      '.skills-intro > *',
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.62,
        stagger: 0.055,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skill-showcase',
          start: 'top 76%',
          once: true,
        },
      },
    );

    gsap.utils.toArray('.timeline-line').forEach((line) => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.72,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 86%',
            once: true,
          },
        },
      );
    });

    gsap.fromTo(
      '.skill-list span',
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.42,
        stagger: 0.025,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skill-showcase',
          start: 'top 76%',
          once: true,
        },
      },
    );

    gsap.fromTo(
      '.footer-wordmark',
      { xPercent: -50 },
      {
        xPercent: -54,
        ease: 'none',
        scrollTrigger: {
          trigger: '.site-footer',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      },
    );
  }

  const manifesto = document.querySelector('.js-manifesto');
  if (manifesto) {
    const words = manifesto.textContent.trim().split(/\s+/);
    manifesto.innerHTML = words.map((word) => `<span>${word}</span>`).join(' ');

    gsap.to('.js-manifesto span', {
      opacity: 1,
      stagger: 0.08,
      ease: 'none',
      scrollTrigger: {
        trigger: manifesto,
        start: 'top 78%',
        end: 'bottom 38%',
        scrub: true,
      },
    });
  }

  ScrollTrigger.refresh();
}

function updateLocalTime() {
  const target = document.getElementById('local-time');
  if (!target) return;

  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).formatToParts(new Date());

  const getPart = (type) =>
    parts.find((part) => part.type === type)?.value || '';
  target.innerHTML = `${getPart('hour')}:${getPart('minute')}:${getPart('second')}<br />${getPart('dayPeriod')}`;
}

ready(() => {
  updateLocalTime();
  window.setInterval(updateLocalTime, 1000);

  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  initHeroMotion(gsap, ScrollTrigger, reduceMotion);
  scheduleIdle(() => initBelowFoldMotion(gsap, ScrollTrigger, reduceMotion));
});

window.addEventListener('load', () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  gsap.from('.nav', {
    y: -24,
    opacity: 0,
    duration: 0.85,
    ease: 'power3.out',
  });

  gsap.from('.hero-panel', {
    y: 34,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
  });

  gsap.fromTo(
    '.social-grid',
    { y: 16, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.75,
      delay: 0.12,
      ease: 'power3.out',
      clearProps: 'transform',
    },
  );

  gsap.fromTo(
    '.social-card',
    { scale: 0.82, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.72,
      stagger: 0.055,
      delay: 0.18,
      ease: 'back.out(1.7)',
      clearProps: 'transform',
    },
  );

  gsap.from('.hero-chip-group, .hero-clock, .hero-center, .hero-title', {
    y: 26,
    opacity: 0,
    duration: 0.9,
    stagger: 0.08,
    delay: 0.22,
    ease: 'power3.out',
  });

  const heroPanel = document.querySelector('.hero-panel');
  const heroBg = document.querySelector('.hero-bg');

  if (heroPanel && heroBg) {
    gsap.fromTo(
      heroBg,
      {
        yPercent: 4,
        scale: 1.12,
        autoAlpha: 0,
        filter: 'saturate(0.55) contrast(1.02) brightness(0.56)',
      },
      {
        yPercent: 0,
        scale: 1.04,
        autoAlpha: 1,
        filter: 'saturate(0.82) contrast(1.12) brightness(0.82)',
        duration: 1.35,
        ease: 'power3.out',
      },
    );

    if (!reduceMotion) {
      gsap.to(heroBg, {
        yPercent: -4,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: heroPanel,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      heroPanel.addEventListener('pointermove', (event) => {
        const bounds = heroPanel.getBoundingClientRect();
        const xRatio = (event.clientX - bounds.left) / bounds.width;
        const yRatio = (event.clientY - bounds.top) / bounds.height;

        heroPanel.style.setProperty(
          '--spotlight-x',
          `${Math.round(xRatio * 100)}%`,
        );
        heroPanel.style.setProperty(
          '--spotlight-y',
          `${Math.round(yRatio * 100)}%`,
        );

        gsap.to(heroBg, {
          x: (xRatio - 0.5) * 18,
          y: (yRatio - 0.5) * 12,
          duration: 0.7,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });

      heroPanel.addEventListener('pointerleave', () => {
        heroPanel.style.setProperty('--spotlight-x', '50%');
        heroPanel.style.setProperty('--spotlight-y', '38%');

        gsap.to(heroBg, {
          x: 0,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      });
    }
  }

  const imageFrames = gsap.utils.toArray(
    '.js-scale-fade, .accordion-panel',
  );

  imageFrames.forEach((element, index) => {
    const image = element.querySelector('img') || element;
    const revealRadius =
      window
        .getComputedStyle(element)
        .getPropertyValue('--reveal-radius')
        .trim() || '8px';

    if (reduceMotion) {
      element.classList.add('is-revealed');
      gsap.set(element, { clearProps: 'clipPath,transform,opacity' });
      gsap.set(image, { clearProps: 'transform,filter,opacity' });
      return;
    }

    gsap.set(element, {
      clipPath: `inset(14% 0% 14% 0% round ${revealRadius})`,
      opacity: 0.72,
      y: 44,
    });

    gsap.set(image, {
      scale: 1.24,
      filter: 'grayscale(0.78) contrast(1.08) brightness(0.78)',
    });

    const reveal = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 84%',
        once: true,
        onEnter: () => element.classList.add('is-revealed'),
      },
    });

    reveal
      .to(element, {
        clipPath: `inset(0% 0% 0% 0% round ${revealRadius})`,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .to(
        image,
        {
          scale: 1.08,
          filter: 'grayscale(0.45) contrast(1.16) brightness(0.9)',
          duration: 1.15,
          ease: 'power3.out',
        },
        '<',
      );

    gsap.fromTo(
      image,
      { yPercent: index % 2 === 0 ? -6 : 6 },
      {
        yPercent: index % 2 === 0 ? 6 : -6,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );

    element.addEventListener('pointerenter', () => {
      gsap.to(image, {
        scale: 1.16,
        filter: 'grayscale(0.12) contrast(1.2) brightness(0.95)',
        duration: 0.7,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });

    element.addEventListener('pointerleave', () => {
      gsap.to(image, {
        scale: 1.08,
        filter: 'grayscale(0.45) contrast(1.16) brightness(0.9)',
        duration: 0.85,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
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
      { y: 42, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 86%',
          once: true,
        },
      },
    );
  });

  if (!reduceMotion) {
    gsap.fromTo(
      '.skills-intro > *',
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skill-showcase',
          start: 'top 72%',
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
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 84%',
            once: true,
          },
        },
      );
    });

    gsap.fromTo(
      '.skill-list span',
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.035,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skill-showcase',
          start: 'top 72%',
          once: true,
        },
      },
    );

    gsap.to('.footer-wordmark', {
      xPercent: -4,
      ease: 'none',
      scrollTrigger: {
        trigger: '.site-footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  }

  const manifesto = document.querySelector('.js-manifesto');
  if (manifesto) {
    const words = manifesto.textContent.trim().split(/\s+/);
    manifesto.innerHTML = words
      .map((word) => `<span>${word}</span>`)
      .join(' ');

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
});

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

updateLocalTime();
window.setInterval(updateLocalTime, 1000);

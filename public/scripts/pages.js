function hydrateMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  gsap.from('.nav', {
    y: -24,
    opacity: 0,
    duration: 0.85,
    ease: 'power3.out',
  });

  const heroTargets = gsap.utils.toArray(
    '.page-hero .page-kicker, .page-hero .page-title, .page-hero .page-summary, .detail-hero .text-link, .detail-hero .page-kicker, .detail-hero .detail-title',
  );

  gsap.fromTo(
    heroTargets,
    { y: 24, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.72,
      stagger: 0.045,
      ease: 'power2.out',
    },
  );

  if (reduceMotion) return;

  gsap.utils
    .toArray('.detail-intro')
    .forEach((element) => {
      gsap.fromTo(
        element,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        },
      );
    });

  gsap.utils.toArray('.js-scale-fade, .archive-card, .writing-card').forEach((element, index) => {
    const image = element.querySelector('img');

    gsap.fromTo(
      element,
      { y: 44, opacity: 0.72, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 84%',
          once: true,
        },
      },
    );

    if (image) {
      gsap.fromTo(
        image,
        { yPercent: index % 2 === 0 ? -5 : 5 },
        {
          yPercent: index % 2 === 0 ? 5 : -5,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }
  });

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

window.addEventListener('load', hydrateMotion);

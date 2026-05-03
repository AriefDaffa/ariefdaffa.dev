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

  if (reduceMotion) return;

  gsap.utils
    .toArray('.page-kicker, .page-title, .page-summary, .detail-title, .detail-intro, .text-link')
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
}

window.addEventListener('load', hydrateMotion);

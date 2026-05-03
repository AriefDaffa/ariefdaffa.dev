const projects = [
  {
    slug: 'byakuya',
    title: 'Byakuya',
    year: '2025',
    role: 'Full-stack interface',
    stack: ['Next.js', 'Elysia.js', 'WebSocket'],
    size: 'feature',
    image: 'https://picsum.photos/seed/byakuya-chat-app/1500/1000',
    summary:
      'A focused messaging interface shaped around quick conversation scanning, real-time interaction states, and a cleaner developer handoff between client and server.',
    challenge:
      'The product needed to feel fast and legible while still supporting the complexity of real-time messages, active states, and multi-surface responsive layouts.',
    outcome:
      'The final direction prioritizes a quiet chat surface, compact interaction states, and a stack that keeps WebSocket behavior isolated from the visual layer.',
    highlights: [
      'Built a real-time interaction model with clear loading, sending, and received states.',
      'Designed responsive message surfaces that stay readable across narrow and wide screens.',
      'Separated transport concerns from interface components for cleaner iteration.',
    ],
  },
  {
    slug: 'naya-living',
    title: 'Naya Living',
    year: '2024',
    role: 'Frontend build',
    stack: ['Laravel', 'Alpine.js', 'TailwindCSS'],
    size: 'medium',
    image: 'https://picsum.photos/seed/naya-living-studio/1200/1000',
    summary:
      'A warm editorial web presence for an interior-focused brand, balancing product storytelling, simple content management, and polished responsive pages.',
    challenge:
      'The site needed to communicate a visual brand with a lightweight implementation that could be maintained without heavy client-side complexity.',
    outcome:
      'A calm content system with reusable sections, tidy styling tokens, and page layouts that keep photography and service details prominent.',
    highlights: [
      'Translated reference visuals into reusable page sections.',
      'Kept the interaction model lightweight with Alpine.js.',
      'Built flexible responsive spacing for product and service content.',
    ],
  },
  {
    slug: 'btn-properti',
    title: 'BTN Properti',
    year: '2025',
    role: 'Search experience',
    stack: ['Next.js', 'Property search', 'UI Systems'],
    size: 'feature',
    image: 'https://picsum.photos/seed/btn-properti-portal/1500/1000',
    summary:
      'A property-search portal concept focused on surfacing listings quickly, improving comparison flow, and reducing friction around discovery actions.',
    challenge:
      'Property browsing can become dense fast, so the interface needed stronger hierarchy for filters, cards, location data, and primary user actions.',
    outcome:
      'The design uses structured search states, predictable cards, and a responsive layout that keeps browsing and comparison easy to scan.',
    highlights: [
      'Modeled property card hierarchy for quick comparison.',
      'Improved filter rhythm and search state readability.',
      'Kept key actions visible without turning the surface into a dashboard.',
    ],
  },
  {
    slug: 'hoshi',
    title: 'Hoshi',
    year: '2024',
    role: 'Product interface',
    stack: ['React', 'TypeScript', 'shadcn/ui'],
    size: 'medium',
    image: 'https://picsum.photos/seed/hoshi-streaming-platform/1400/1000',
    summary:
      'An anime discovery and streaming interface exploration with strong visual browsing, watch-state clarity, and keyboard-friendly component structure.',
    challenge:
      'The interface needed to support expressive media without losing speed, responsive behavior, or clear navigation between discovery and detail states.',
    outcome:
      'A component-led frontend with typed data shapes, reusable media cards, and focused viewing states for browsing and episode-level interaction.',
    highlights: [
      'Created reusable media cards for catalogue and detail contexts.',
      'Used TypeScript to protect content and interaction contracts.',
      'Balanced image-heavy UI with fast scan patterns.',
    ],
  },
  {
    slug: 'iisf-website',
    title: 'IISF Website',
    year: '2024',
    role: 'Event website',
    stack: ['Laravel', 'TailwindCSS', 'CMS'],
    size: 'small',
    image: 'https://picsum.photos/seed/isf-sustainability-forum/1000/1200',
    summary:
      'A sustainability forum website built to present event information, editorial content, and structured pages with a reliable backend workflow.',
    challenge:
      'The site needed to make program information clear while supporting updates around speakers, sessions, and event storytelling.',
    outcome:
      'A structured Laravel build with consistent templates, clear content hierarchy, and responsive pages for event discovery.',
    highlights: [
      'Built reusable content sections for event updates.',
      'Focused hierarchy around program and editorial information.',
      'Kept styling consistent through Tailwind utilities.',
    ],
  },
  {
    slug: 'lagalio',
    title: 'Lagalio',
    year: '2024',
    role: 'API interface',
    stack: ['React', 'TypeScript', 'Spotify API'],
    size: 'small',
    image: 'https://picsum.photos/seed/lagalio-spotify-playlist/1000/1200',
    summary:
      'A playlist-oriented interface that connects Spotify data with a lighter, more deliberate browsing and sharing experience.',
    challenge:
      'The interface needed to make API-driven music data feel immediate without exposing the complexity of remote data and authorization states.',
    outcome:
      'A compact React experience with clean loading behavior, typed API handling, and a visual rhythm built around playlist discovery.',
    highlights: [
      'Integrated Spotify data into typed UI states.',
      'Designed compact playlist previews for fast scanning.',
      'Handled remote API loading and empty states clearly.',
    ],
  },
];

const posts = [
  {
    slug: 'end-of-world',
    title: 'Is it the end of the world?',
    date: 'August 7, 2024',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/end-of-world-writing/1500/900',
    excerpt:
      "Humanity has long been fascinated by the idea of the world's end, from ancient prophecies to modern science fiction.",
    sections: [
      {
        heading: 'The old fear keeps changing shape',
        paragraphs: [
          "Every generation inherits a version of the same question: what happens if the world we know stops feeling stable? The answer keeps changing because the threats keep changing, but the emotional pattern is familiar.",
          'Ancient myths, religious warnings, climate anxiety, and science fiction all use the end of the world as a way to talk about responsibility. The story is rarely only about disaster. It is also about what people choose to protect.',
        ],
      },
      {
        heading: 'A more useful question',
        paragraphs: [
          'Instead of asking whether everything is ending, it may be better to ask what needs attention now. That question turns fear into something more practical.',
          'The world is complicated, but practical care still matters: the systems we build, the people we help, the resources we protect, and the way we respond when things feel uncertain.',
        ],
      },
    ],
  },
  {
    slug: 'bocchi-the-rock-review',
    title: 'Bocchi the Rock! - Anime Review',
    date: 'July 10, 2024',
    readTime: '4 min read',
    image: 'https://picsum.photos/seed/bocchi-review-stage/1500/900',
    excerpt:
      'A look at the anime series following Hitori Gotou, a shy high school girl chasing the confidence to become a rock star.',
    sections: [
      {
        heading: 'Anxiety with a sharp visual language',
        paragraphs: [
          'Bocchi the Rock! works because it treats social anxiety with both humor and texture. The show constantly changes visual style to match what Hitori feels internally.',
          'Those shifts make the comedy land, but they also make the character feel specific. The joke is not that she struggles. The joke is how intensely her inner world reacts to ordinary situations.',
        ],
      },
      {
        heading: 'Why the band matters',
        paragraphs: [
          'The band gives the story a structure where growth can happen in public. Each performance becomes a measurement of confidence, friendship, and creative risk.',
          'That is what makes the series memorable: it understands that confidence is not a switch. It is something practiced through small, uncomfortable, repeatable steps.',
        ],
      },
    ],
  },
  {
    slug: 'saving-money',
    title: 'How to Save Money',
    date: 'July 6, 2024',
    readTime: '2 min read',
    image: 'https://picsum.photos/seed/saving-money-notes/1500/900',
    excerpt:
      'Practical habits for handling everyday expenses, preparing for unexpected costs, and building a stronger financial future.',
    sections: [
      {
        heading: 'Start with visibility',
        paragraphs: [
          'Saving money gets easier when the numbers are visible. The first habit is not restriction. It is knowing where money is already going.',
          'A simple record of recurring expenses, daily spending, and irregular costs makes patterns easier to notice. Once those patterns are clear, decisions become less emotional.',
        ],
      },
      {
        heading: 'Build a system you can repeat',
        paragraphs: [
          'A good saving habit should survive ordinary weeks. Set aside a realistic amount first, then leave room for food, transport, bills, and small personal spending.',
          'The goal is consistency. Small repeatable savings usually beat ambitious plans that collapse after a stressful month.',
        ],
      },
    ],
  },
];

const params = new URLSearchParams(window.location.search);

function projectUrl(slug) {
  return `project.html?slug=${slug}`;
}

function postUrl(slug) {
  return `blog-post.html?slug=${slug}`;
}

function renderProjects() {
  const target = document.querySelector('[data-projects-grid]');
  if (!target) return;

  target.innerHTML = projects
    .map(
      (project) => `
        <a class="archive-card ${project.size} js-scale-fade" href="${projectUrl(project.slug)}" aria-label="Open ${project.title} project detail">
          <img src="${project.image}" alt="${project.title} project preview" />
          <div class="archive-copy">
            <div class="archive-meta">
              <span>${project.year}</span>
              <span>${project.role}</span>
            </div>
            <h2>${project.title}</h2>
            <p>${project.summary}</p>
          </div>
          <span class="archive-arrow" aria-hidden="true">→</span>
        </a>
      `,
    )
    .join('');
}

function renderProjectDetail() {
  const target = document.querySelector('[data-project-detail]');
  if (!target) return;

  const slug = params.get('slug') || projects[0].slug;
  const project = projects.find((item) => item.slug === slug) || projects[0];
  document.title = `${project.title} - Arief Daffa Project`;

  target.innerHTML = `
    <section class="section detail-hero">
      <div class="container">
        <a class="text-link" href="projects.html">← All projects</a>
        <div class="detail-hero-grid">
          <div>
            <p class="page-kicker">${project.role}</p>
            <h1 class="detail-title">${project.title}</h1>
          </div>
          <div class="detail-intro">
            <div class="detail-meta">
              <span class="detail-pill">${project.year}</span>
              ${project.stack.map((item) => `<span class="detail-pill">${item}</span>`).join('')}
            </div>
            <p>${project.summary}</p>
          </div>
        </div>
        <div class="detail-media js-scale-fade">
          <img src="${project.image}" alt="${project.title} project screen" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container detail-body">
        <aside class="detail-sidebar">
          <h2>Build notes</h2>
          <ul class="detail-list">
            ${project.highlights.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </aside>
        <div class="detail-content">
          <p>${project.challenge}</p>
          <p>${project.outcome}</p>
          <div class="next-row">
            <a class="button-link" href="projects.html">Back to projects</a>
            <a class="button-link" href="mailto:hello@ariefdaffa.dev">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlog() {
  const target = document.querySelector('[data-posts-grid]');
  if (!target) return;

  target.innerHTML = posts
    .map(
      (post) => `
        <a class="writing-card motion-reveal" href="${postUrl(post.slug)}" aria-label="Read ${post.title}">
          <div class="writing-meta">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
          </div>
          <div>
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
          </div>
          <span class="text-link">Read article <span aria-hidden="true">→</span></span>
        </a>
      `,
    )
    .join('');
}

function renderBlogPost() {
  const target = document.querySelector('[data-post-detail]');
  if (!target) return;

  const slug = params.get('slug') || posts[0].slug;
  const post = posts.find((item) => item.slug === slug) || posts[0];
  document.title = `${post.title} - Arief Daffa Blog`;

  target.innerHTML = `
    <section class="section detail-hero">
      <div class="container article-shell">
        <a class="text-link" href="blog.html">← All writing</a>
        <p class="page-kicker">${post.date} · ${post.readTime}</p>
        <h1 class="detail-title">${post.title}</h1>
        <div class="detail-media js-scale-fade">
          <img src="${post.image}" alt="${post.title} article cover" />
        </div>
      </div>
    </section>

    <section class="section">
      <article class="container article-shell article-body">
        ${post.sections
          .map(
            (section) => `
              <h2>${section.heading}</h2>
              ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            `,
          )
          .join('')}
        <div class="next-row">
          <a class="button-link" href="blog.html">Back to writing</a>
          <a class="button-link" href="mailto:hello@ariefdaffa.dev">Talk about an idea</a>
        </div>
      </article>
    </section>
  `;
}

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

renderProjects();
renderProjectDetail();
renderBlog();
renderBlogPost();
window.addEventListener('load', hydrateMotion);

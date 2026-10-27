// Every Reign game lives here. Stats and game cards on all pages are built from this list.
// playing/visits are a snapshot (26 Oct 2026) and get refreshed live from Roblox on page load.
const GAMES = [
  {
    id: 10076605782, place: 132577097130042, slug: 'steal-brainrots-from-biomes',
    name: '+1 Steal Brainrots from Biomes',
    blurb: 'Double jump into rarer biomes, dodge obstacles and save Brainrots that earn cash even while you’re offline.',
    tags: ['Brainrot', 'Obby'], filters: ['brainrot'],
    playing: 1, visits: 2481738,
  },
  {
    id: 9557124946, place: 113303333910928, slug: 'dive-for-brainrots',
    name: 'Dive For Brainrots!',
    blurb: 'Swim deeper to find rarer Brainrots, then fill your base with slots that keep earning while you’re away.',
    tags: ['Brainrot', 'Simulation'], filters: ['brainrot'],
    playing: 15, visits: 26021070,
  },
  {
    id: 10031368482, place: 92875784257090, slug: 'slay-for-brainrots',
    name: 'Slay for Brainrots!',
    blurb: 'Slay monsters, carry Brainrots back to base and forge stronger swords for tougher fights.',
    tags: ['Brainrot', 'Combat'], filters: ['brainrot'],
    playing: 15, visits: 3037848,
  },
  {
    id: 9695620503, place: 106772177198260, slug: 'reel-a-brainrot',
    name: 'Reel a Brainrot!',
    blurb: 'Cast your rod, reel in Brainrots and upgrade your power to throw further every run.',
    tags: ['Brainrot', 'Fishing'], filters: ['brainrot'],
    playing: 5, visits: 29735671,
  },
  {
    id: 10516305447, place: 113303828061943, slug: 'verity-rp',
    name: 'Verity RP', badge: 'Halloween event',
    blurb: 'Find and equip morphs from the Verity series, explore the map and roleplay with friends.',
    tags: ['Roleplay', 'Social'], filters: ['roleplay'],
    playing: 13, visits: 236025,
  },
  {
    id: 10429130077, place: 114786795749121, slug: 'verity',
    name: 'Verity',
    blurb: 'Meet Verity, your helpful new friend. Build a house to survive the night and hope she stays friendly.',
    tags: ['Horror', 'Story'], filters: ['horror'],
    playing: 3, visits: 866734,
  },
  {
    id: 10040737436, place: 116261800384863, slug: 'anderdingus',
    name: 'Anderdingus',
    blurb: 'It’s 3 AM in the archive room. Survive a 1–4 player co-op story with four different endings.',
    tags: ['Horror', 'Co-op'], filters: ['horror'],
    playing: 22, visits: 4257585,
  },
  {
    id: 7549259159, place: 117620238328970, slug: 'ishowspeed',
    name: 'IShowSpeed',
    blurb: 'Your quiet gas station night shift goes wrong fast. Team up with friends and unlock both endings.',
    tags: ['Horror', 'Story'], filters: ['horror'],
    playing: 98, visits: 22410724,
  },
  {
    id: 7372448827, place: 133539166820268, slug: 'shazam-battlegrounds',
    name: 'Shazam: Battlegrounds',
    blurb: 'Free-roam superhero battlegrounds. Fly, fight and use hero powers across an open world.',
    tags: ['Action', 'Battlegrounds'], filters: ['action'],
    playing: 67, visits: 19034496,
  },
  {
    id: 10768189429, place: 81756717060295, slug: 'road-to-99', hero: true,
    name: 'Road to 99: Football Career', short: 'Road to 99', badge: 'Halloween update',
    blurb: 'Start in the academy and build your player to 99, from penalties and free kicks to the Golden Ball.',
    tags: ['Sports', 'Career'], filters: ['sports'],
    playing: 1136, visits: 445787,
  },
  {
    id: 1811388660, place: 5189834468, slug: 'horror-tycoon', hero: true,
    name: 'Horror Tycoon',
    blurb: 'Pick a horror character and build your tycoon from the ground up.',
    tags: ['Tycoon', 'Horror'], filters: ['tycoon', 'horror'],
    playing: 152, visits: 131233456,
  },
  {
    id: 5279216497, place: 15306809513, slug: 'princess-tycoon', hero: true,
    name: 'Princess Tycoon',
    blurb: 'Choose your princess, buy droppers and unlock every weapon and outfit in your tycoon.',
    tags: ['Tycoon', 'Simulation'], filters: ['tycoon'],
    playing: 1268, visits: 143138411,
  },
];

const gameUrl = g => `https://www.roblox.com/games/${g.place}`;

function shortNumber(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
}

const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>';

function gameCard(g, i) {
  const reverse = i % 2 === 1;
  const image = `
    <div class="game-image">
      <img src="images/${g.slug}.png" alt="${g.name}" loading="lazy">
    </div>`;
  const copy = `
    <div class="game-copy">
      <span class="visits"><span data-visits="${g.id}">${shortNumber(g.visits)}</span> visits &middot; <span data-playing="${g.id}">${g.playing.toLocaleString('en-US')}</span> playing${g.badge ? ` <b class="badge">${g.badge}</b>` : ''}</span>
      <h3>${g.name}</h3>
      <p>${g.blurb}</p>
      <div class="tags">${g.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <a href="${gameUrl(g)}" target="_blank" rel="noopener noreferrer">View Game ${arrow}</a>
    </div>`;
  return `<article class="game${reverse ? ' reverse' : ''}" data-filters="${g.filters.join(' ')}">${reverse ? copy + image : image + copy}</article>`;
}

function renderGames(el, list) {
  el.innerHTML = list.map(gameCard).join('');
}

function updateStats() {
  const totals = {
    games: GAMES.length,
    playing: GAMES.reduce((s, g) => s + g.playing, 0),
    visits: GAMES.reduce((s, g) => s + g.visits, 0),
  };
  document.querySelectorAll('[data-stat]').forEach(el => {
    const v = totals[el.dataset.stat];
    el.textContent = el.dataset.stat === 'visits' ? shortNumber(v) : v.toLocaleString('en-US');
  });
  GAMES.forEach(g => {
    document.querySelectorAll(`[data-visits="${g.id}"]`).forEach(el => { el.textContent = shortNumber(g.visits); });
    document.querySelectorAll(`[data-playing="${g.id}"]`).forEach(el => { el.textContent = g.playing.toLocaleString('en-US'); });
  });
}

// Roblox's API blocks browser requests, so live numbers go through RoProxy.
// If that fails the snapshot numbers above stay on the page.
async function refreshLive() {
  try {
    const ids = GAMES.map(g => g.id).join(',');
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch(`https://games.roproxy.com/v1/games?universeIds=${ids}`, { signal: ctrl.signal });
    if (!res.ok) return;
    const { data } = await res.json();
    data.forEach(d => {
      const g = GAMES.find(x => x.id === d.id);
      if (g) { g.playing = d.playing; g.visits = d.visits; }
    });
    updateStats();
  } catch (e) { /* keep snapshot */ }
}

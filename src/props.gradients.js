export default {
  '--gradient-1': 'linear-gradient(to bottom right in oklab, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)',
  '--gradient-2': 'linear-gradient(to bottom right in oklab, #48005c, #8300e2, #a269ff)',
  '--gradient-3': `
    radial-gradient(
      circle at top right in oklab, 
      hsl(180 100% 50%), hsl(180 100% 50% / 0%)
    ),
    radial-gradient(
      circle at bottom left in oklab, 
      hsl(328 100% 54%), hsl(328 100% 54% / 0%)
    )`,
  '--gradient-4': 'linear-gradient(to bottom right in oklab, #00F5A0, #00D9F5)',
  '--gradient-5': 'conic-gradient(from -270deg at 75% 110% in oklab, fuchsia, floralwhite)',
  '--gradient-6': 'conic-gradient(from -90deg at top left in oklab, black, white)',
  '--gradient-7': 'linear-gradient(to bottom right in oklab, #72C6EF, #004E8F)',
  '--gradient-8': 'conic-gradient(from 90deg at 50% 0% in oklab, #111, 50%, #222, #111)',
  '--gradient-9': 'conic-gradient(from .5turn at bottom center in oklab, lightblue, white)',
  '--gradient-10': 'conic-gradient(from 90deg at 40% -25% in oklab, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700)',
  '--gradient-11': 'conic-gradient(at bottom left in oklab, deeppink, cyan)',
  '--gradient-12': 'conic-gradient(from 90deg at 25% -10% in oklab, #ff4500, #d3f340, #7bee85, #afeeee, #7bee85)',
  '--gradient-13': 'radial-gradient(circle at 50% 200% in oklab, #000142, #3b0083, #b300c3, #ff059f, #ff4661, #ffad86, #fff3c7)',
  '--gradient-14': 'conic-gradient(at top right in oklab, lime, cyan)',
  '--gradient-15': 'linear-gradient(to bottom right in oklab, #c7d2fe, #fecaca, #fef3c7)',
  '--gradient-16': 'radial-gradient(circle at 50% -250% in oklab, #374151, #111827, #000)',
  '--gradient-17': 'conic-gradient(from -90deg at 50% -25% in oklab, blue, blueviolet)',
  '--gradient-18': `
    linear-gradient(0deg in oklab,   hsla(0   100% 50% / 80%), hsla(0   100% 50% / 0) 75%),
    linear-gradient(60deg in oklab,  hsla(60  100% 50% / 80%), hsla(60  100% 50% / 0) 75%),
    linear-gradient(120deg in oklab, hsla(120 100% 50% / 80%), hsla(120 100% 50% / 0) 75%),
    linear-gradient(180deg in oklab, hsla(180 100% 50% / 80%), hsla(180 100% 50% / 0) 75%),
    linear-gradient(240deg in oklab, hsla(240 100% 50% / 80%), hsla(240 100% 50% / 0) 75%),
    linear-gradient(300deg in oklab, hsla(300 100% 50% / 80%), hsla(300 100% 50% / 0) 75%)
  `,
  '--gradient-19': 'linear-gradient(to bottom right in oklab, #ffe259, #ffa751)',
  '--gradient-20': 'conic-gradient(from -135deg at -10% center in oklab, #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4)',
  '--gradient-21': 'conic-gradient(from -90deg at 25% 115% in oklab, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)',
  '--gradient-22': 'linear-gradient(to bottom right in oklab, #acb6e5, #86fde8)',
  '--gradient-23': 'linear-gradient(to bottom right in oklab, #536976, #292E49)',
  '--gradient-24': 'conic-gradient(from .5turn at 0% 0% in oklab, #00c476, 10%, #82b0ff, 90%, #00c476)',
  '--gradient-25': 'conic-gradient(at 125% 50% in oklab, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7)',
  '--gradient-26': 'linear-gradient(to bottom right in oklab, #9796f0, #fbc7d4)',
  '--gradient-27': 'conic-gradient(from .5turn at bottom left in oklab, deeppink, rebeccapurple)',
  '--gradient-28': 'conic-gradient(from -90deg at 50% 105% in oklab, white, orchid)',
  '--gradient-29': `
    radial-gradient(
      circle at top right in oklab, 
      hsl(250 100% 85%), hsl(250 100% 85% / 0%)
    ),
    radial-gradient(
      circle at bottom left in oklab, 
      hsl(220 90% 75%), hsl(220 90% 75% / 0%)
    )`,
  '--gradient-30': 
    `radial-gradient(
      circle at top right in oklab, 
      hsl(150 100% 50%), hsl(150 100% 50% / 0%)
    ),
    radial-gradient(
      circle at bottom left in oklab, 
      hsl(150 100% 84%), hsl(150 100% 84% / 0%)
    )`,

  '--noise-1': `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  '--noise-2': `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  '--noise-3': `url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  '--noise-4': `url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  '--noise-5': `url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  
  '--noise-filter-1': 'contrast(300%) brightness(100%)',
  '--noise-filter-2': 'contrast(200%) brightness(150%)',
  '--noise-filter-3': 'contrast(200%) brightness(250%)',
  '--noise-filter-4': 'contrast(200%) brightness(500%)',
  '--noise-filter-5': 'contrast(200%) brightness(1000%)',
}

import type { Project } from './types';

export const graphicProjects: Project[] = [
  {
    id: 'GD05', slug: 'western-print-capsule', title: 'Girls’ western print capsule',
    subtitle: 'A girls’ summer print capsule for Mountain Warehouse, from colour palette development towards the shop floor.',
    category: 'graphic-design', kind: 'Professional work · Mountain Warehouse',
    role: 'Print direction, illustration & capsule development',
    status: 'Colour palette development, print artwork design & amendments.',
    credit: 'Colour palette developed with: Anneka Else, Rupal Patel and Stephanie Woolley.',
    summary: 'A Summer 2027 print capsule, from western inspiration and a shared colour palette to coordinated artwork for production.',
    intro: 'I developed prints for a Summer 2027 capsule, focusing on western themes.',
    tags: ['Textile print', 'Illustration', 'Capsule design'],
    cover: 'graphics/cowgirl-capsule-arrangement.webp',
    coverAlt: 'Western capsule artwork arranged with illustrated horses, supporting patterns, a Chasing Sunsets placement and colour swatches.',
    hero: 'graphics/cowgirl-capsule-arrangement.webp',
    heroAlt: 'Western capsule artwork arranged with illustrated horses, supporting patterns, a Chasing Sunsets placement and colour swatches.',
    stage: 'western',
    sections: [
      {
        id: 'trend-forecasting', aliases: ['direction', 'exploration'], label: 'Trend forecasting', title: 'Starting each season with trend forecasting',
        paragraphs: ['Through competitor shopping and secondary research into print trends, I collated inspiration for the print direction. I noticed western imagery across Next, John Lewis and M&S, and decided to build a capsule around this theme.'],
        treatment: 'wide', figures: [
          { image: 'graphics/nov4-western-inspiration.webp', alt: 'Research moodboard combining western, desert and animal motifs with example garments from other brands.', caption: 'Third-party reference designs gathered for the inspiration moodboard.' },
        ],
      },
      {
        id: 'palette', aliases: ['colourways'], label: 'Colour palette', title: 'Colour palette development',
        paragraphs: ['Alongside print development, the Print and CAD teams work together to develop a colour palette for each season. We chose soft pops of colour, with pink tones running through the prints.'],
        treatment: 'wide', figures: [
          { image: 'graphics/nov4-western-palette.webp', alt: 'Lifestyle reference photographs above a seasonal palette of coral, berry, pink, sand, mauve, teal and yellow swatches.', caption: 'Seasonal palette development with the Print and CAD teams.' },
        ],
      },
      {
        id: 'print-use', aliases: ['sample'], label: 'Print use', title: 'Print use',
        paragraphs: ['Each print was selected to suit different product categories. This print was chosen for outerwear and fleece, with colourways suited to different applications across clothing and accessories. At this stage, colour amendments are made and the prints are uploaded for suppliers.'],
        treatment: 'wide', figures: [
          { image: 'graphics/nov4-western-applications.webp', alt: 'Garment mockup showing a girl in a navy western-print jacket beside the print in navy, sage and berry colourways.', caption: 'Outerwear application mockup and colourways for the forthcoming range.' },
        ],
      },
      {
        id: 'production', aliases: ['print-system'], label: 'Final prints', title: 'Final prints to production',
        paragraphs: ['Elements are carried across multiple designs to unite the prints and create opportunities for customers to mix and match across the range.'],
        treatment: 'wide', figures: [
          { image: 'graphics/nov4-western-final.webp', alt: 'Final western print artwork combining a berry horse repeat, pink and orange check, Wild and Free placement, horse-head illustration, stars and scattered motifs.', caption: 'Final artwork for the Summer 2027 capsule: approved or in production, not yet in stores.' },
        ],
      },
      {
        id: 'other-prints', label: 'Other print work', title: 'Other prints I’ve worked on',
        paragraphs: ['A broader selection of print artwork and product applications beyond the western capsule.'],
        treatment: 'wide', figures: [
          { image: 'graphics/nov4-other-prints.webp', alt: 'A collage of varied print artwork, placement graphics and photographed garments from other print work.', caption: 'Broader print and product work.' },
        ],
      },
    ],
  },
  {
    id: 'GD03', slug: 'aw24-lookbook', title: 'AW24 lookbook',
    subtitle: 'A lookbook redesign: collating, editing and exploring layout.',
    category: 'graphic-design', kind: 'Professional work · Mountain Warehouse',
    role: 'In-house lookbook layout & execution',
    contextLabel: 'Timeline & collaboration',
    status: 'Two months, alongside other projects. In collaboration with the Marketing team.',
    summary: 'An in-house AW24 lookbook redesign highlighting ski-jacket technical features through bold layouts and imagery.',
    intro: 'I redesigned Mountain Warehouse’s Autumn/Winter 2024 in-house lookbook, focusing on highlighting the key technical features of its ski jackets.',
    tags: ['Editorial', 'Layout', 'Print'],
    cover: 'graphics/lookbook-printed.webp',
    coverAlt: 'Open printed lookbook showing women’s skiwear with overlapping photographs and circular feature callouts.',
    stage: 'lookbook', preview: ['graphics/lookbook-printed.webp', 'graphics/lookbook-ski.webp'],
    sections: [
      {
        id: 'first-iteration', aliases: ['hierarchy'], label: 'First iteration', title: 'First lookbook iteration',
        paragraphs: ['This project involved refreshing an older lookbook design to highlight key features of Mountain Warehouse’s Autumn/Winter clothing. I wanted to push the brief through bold layouts and imagery, taking inspiration from competitors such as The North Face and Arc’teryx.'],
        treatment: 'wide', figures: [
          { image: 'graphics/nov4-lookbook-first.webp', alt: 'Four photographs showing the first lookbook iteration’s cover and open skiwear spreads.', caption: 'First lookbook iteration — cover and open ski spreads.' },
        ],
      },
      {
        id: 'final-spreads', aliases: ['system', 'printed'], label: 'Final spreads', title: 'Final spreads',
        paragraphs: ['After several rounds of design feedback and amendments, the final lookbook was completed, printed and distributed in the office. I incorporated feedback from colleagues and was subsequently asked to design the SS25 lookbook, suggesting a positive response to the work.'],
        treatment: 'wide', figures: [
          { image: 'graphics/nov4-lookbook-final-6.webp', alt: 'Photographed printed lookbook pages showing an introductory landscape spread and men’s fleece.', caption: 'Final lookbook — introduction and men’s fleece.' },
          { image: 'graphics/nov4-lookbook-final-7.webp', alt: 'Photographed printed lookbook pages showing women’s padded jackets and men’s ski clothing with circular technical callouts.', caption: 'Final lookbook — women’s padded jackets and men’s ski.' },
          { image: 'graphics/nov4-lookbook-final-9.webp', alt: 'Photographed printed lookbook pages showing children’s skiwear and women’s padded jackets.', caption: 'Final lookbook — children’s ski and women’s padded jackets.' },
          { image: 'graphics/nov4-lookbook-final-10.webp', alt: 'Photographed printed lookbook pages showing men’s and women’s ski clothing alongside men’s and women’s newness.', caption: 'Final lookbook — skiwear and newness.' },
        ],
      },
    ],
  },
  {
    id: 'GD02', slug: 'festival-campaign', title: 'Get ready for festivals',
    subtitle: 'From three creative routes to a campaign on the shopfront.',
    category: 'graphic-design', kind: 'Professional work · Mountain Warehouse',
    role: 'Promotion creative & layout exploration', status: 'Final artwork & photographed retail applications',
    summary: 'A bright seasonal campaign, developed through three visual routes and carried into window and fixture displays.',
    intro: 'I created a new visual direction for Mountain Warehouse’s festival promotion, translating summer colour and energy into a window poster and smaller in-store displays.',
    tags: ['Campaign', 'POS', 'Visual direction'],
    cover: 'graphics/festivals-pos-arrangement.webp',
    coverAlt: 'Festival campaign arrangement showing a poster, square artwork, circular window vinyl, horizontal POS and colour swatches.',
    hero: 'graphics/festivals-pos-arrangement.webp',
    heroAlt: 'Festival campaign arrangement showing a poster, square artwork, circular window vinyl, horizontal POS and colour swatches.',
    stage: 'festival', preview: ['graphics/festival-poster.webp', 'graphics/festival-store.webp'],
    sections: [
      {
        id: 'early-directions', label: 'Direction & exploration', title: 'Explore the offer through three summer routes.',
        paragraphs: ['The offer was 15% off with a festival ticket. I explored three compositions to balance that message with a festival feel, using sun rays, layered landscape shapes and bold colour. A preferred route was selected after I presented the ideas.'],
        treatment: 'wide', figures: [
          { image: 'graphics/festival-early-routes.webp', alt: 'Three early festival poster directions using sun rays, layered landscapes and bright colour.', caption: 'Early routes: sun-ray framing, a central offer disc and a layered landscape.' },
        ],
      },
      {
        id: 'selected-artwork', label: 'Selected creative', title: 'Bring the offer into focus.',
        paragraphs: ['I developed the selected route around an orange offer disc, with a curved headline above it and green forms below. The ticket condition stays separate from the large discount, keeping both parts of the message visible.'],
        treatment: 'artwork', figures: [
          { image: 'graphics/festival-poster.webp', alt: 'Yellow, orange and green festival poster advertising 15 percent off with a festival ticket.', caption: 'Final poster — 15% off the entire store with a festival ticket.' },
        ],
      },
      {
        id: 'retail', label: 'Retail applications', title: 'Take the creative into the store.',
        paragraphs: ['I carried the same headline, offer disc and landscape shapes into the smaller fixture piece. The window poster introduces the promotion at the shopfront; the fixture version brings it alongside the products.'],
        treatment: 'pair', figures: [
          { image: 'graphics/festival-shopfront.webp', alt: 'Mountain Warehouse shopfront with the festival promotion in the window.', caption: 'Shopfront: the poster sits among other seasonal promotions.' },
          { image: 'graphics/festival-store.webp', alt: 'Small festival promotion attached to a display of picnic bags.', caption: 'Fixture display: the smaller format keeps the ticket condition with the offer.' },
        ],
      },
    ],
  },
];

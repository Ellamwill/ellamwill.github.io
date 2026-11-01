import type { Project } from './types';

export const graphicProjects: Project[] = [
  {
    id: 'GD01', slug: 'ski-package-campaign', title: 'The ski package',
    subtitle: 'One offer. A clear place on the shop floor.',
    category: 'graphic-design', kind: 'Professional work · Mountain Warehouse',
    role: 'Promotional layout & offer hierarchy',
    status: 'UK retail applications & US artwork',
    summary: 'A ski-package promotion with a clear offer hierarchy across portrait and landscape retail formats.',
    intro: 'Mountain Warehouse’s ski promotion brings a jacket, trousers and accessories into one package. I redesigned the layout to make the bundle and its price easier to pick out.',
    tags: ['Campaign', 'POS', 'Layout'],
    cover: 'graphics/ski-store.webp', coverAlt: 'Ski-package sign installed above a display of ski clothing.',
    stage: 'ski', preview: ['graphics/ski-poster-us.webp'],
    sections: [
      {
        id: 'brief', label: 'Brief & offer', title: 'Make the package easier to understand.',
        paragraphs: ['The layout had to communicate the included products and the saving in the same space. My focus was the relationship between the headline, product group and price.'],
      },
      {
        id: 'development', label: 'Layout development', title: 'Explore the balance of product and price.',
        paragraphs: ['I explored how much space to give the lifestyle image alongside the separate products. The blue savings band anchors these early UK layouts, while the product and price positions change.'],
        treatment: 'pair', figures: [
          { image: 'graphics/ski-development-a.webp', alt: 'Early ski-package layout with a blue savings band below a grouping of products.', caption: 'Early UK layout: the product group sits above the savings band.' },
          { image: 'graphics/ski-development-c.webp', alt: 'Ski-package layout with a model photograph on the left and product cut-outs, price and blue saving band on the right and below.', caption: 'Alternative UK layout: a separate image area keeps the package details together on the right.' },
        ],
      },
      {
        id: 'artwork', label: 'Market artwork', title: 'Separate the saving from the package price.',
        paragraphs: ['I gave the saving its own circular badge and used red for the package price. These create two points of emphasis, while the product cut-outs show what the bundle contains.'],
        treatment: 'artwork', figures: [
          { image: 'graphics/ski-poster-us.webp', alt: 'US-dollar ski poster combining a snowy photograph, jacket, trousers, accessories and package price.', caption: 'US-dollar artwork: the saving sits above the package price and included products.' },
        ],
      },
      {
        id: 'application', label: 'In-store formats', title: 'Connect the offer to the product display.',
        paragraphs: ['I adapted the composition to horizontal signs above the ranges and portrait pieces alongside the clothing. Keeping the offer near its products connects the campaign message with the display.'],
        treatment: 'pair', figures: [
          { image: 'graphics/ski-store.webp', alt: 'UK women’s ski-package promotion installed above racks of jackets and accessories.', caption: 'UK women’s range: horizontal offer above the product display.' },
          { image: 'graphics/ski-kids-installation.webp', alt: 'Children’s ski-package sign above jackets, with matching smaller portrait signs on the display.', caption: 'UK children’s range: horizontal and smaller portrait formats together.' },
          { image: 'graphics/ski-portrait-installation.webp', alt: 'Portrait ski-package offer in a frame on a UK clothing display.', caption: 'UK retail application: a portrait sign beside the clothing.' },
          { image: 'graphics/ski-mens-installation.webp', alt: 'Men’s ski-package offer above a display of ski jackets.', caption: 'UK men’s range: a horizontal offer adapted to another product grouping.' },
        ],
      },
    ],
  },
  {
    id: 'GD05', slug: 'western-print-capsule', title: 'Girls’ western print capsule',
    subtitle: 'A horse-led print system, from direction to supplier sample.',
    category: 'graphic-design', kind: 'Professional work · Mountain Warehouse',
    role: 'Print direction, illustration & capsule development',
    status: 'Print artwork & supplier strike/sample',
    summary: 'A western-themed girls’ capsule connecting a horse repeat, supporting motifs and colourway studies.',
    intro: 'I developed a western-themed print capsule for Mountain Warehouse, using an illustrated horse repeat to connect placement graphics and supporting patterns.',
    tags: ['Textile print', 'Illustration', 'Capsule design'],
    cover: 'graphics/western-horse-repeat.webp',
    coverAlt: 'Illustrated horses, hats, boots, cacti and stars repeating on a berry background.',
    hero: 'graphics/western-supplier-sample.webp',
    heroAlt: 'Supplier sample jacket with western motifs on a pale green background.',
    stage: 'western',
    sections: [
      {
        id: 'direction', label: 'Brief & direction', title: 'Make the prints feel like one collection.',
        paragraphs: ['Every print needed to feel part of one girls’ collection when displayed together. A cowgirl trend I noticed while looking at competitor shops gave me the direction; I then gathered palette and motif references before drawing.'],
      },
      {
        id: 'exploration', label: 'Explored routes', title: 'Try different ways into the theme.',
        paragraphs: ['The hat graphic, bows and check were early routes that did not join the final range. Looking back, I would check each idea against the wider collection earlier.'],
        treatment: 'pair', figures: [
          { image: 'graphics/western-explored-hat.webp', alt: 'Chasing Sunsets lettering above an illustrated cowgirl hat.', caption: 'Chasing Sunsets — an early placement route.' },
          { image: 'graphics/western-explored-bows.webp', alt: 'Pink and pale bow shapes in a repeating pattern.', caption: 'Bows — an early repeat route.' },
          { image: 'graphics/western-explored-check.webp', alt: 'Loose pink and orange checked pattern.', caption: 'Check — an early repeat route.' },
        ],
      },
      {
        id: 'print-system', label: 'Selected print system', title: 'Let the horse repeat lead the family.',
        paragraphs: ['I made the horse repeat the lead design, then reused its western motifs across the supporting prints. Mixing detailed illustration with simpler repeats gave the collection variety while keeping the pieces related.'],
        treatment: 'pair', figures: [
          { image: 'graphics/western-horse-repeat.webp', alt: 'Illustrated horses, hats, boots, cacti and stars repeating on a berry background.', caption: 'The lead repeat brings the full motif set together.' },
          { image: 'graphics/western-horse-placement.webp', alt: 'Decorative horse head filled with floral, cactus and western-inspired shapes.', caption: 'A horse-head placement uses the theme in a single illustration.' },
          { image: 'graphics/western-motif-system.webp', alt: 'Wild and Free placement artwork, a scattered western-motif repeat and two star prints.', caption: 'Supporting designs: Wild & Free, scattered icons and star repeats.' },
        ],
      },
      {
        id: 'colourways', label: 'Colourway exploration', title: 'Keep the motif system, vary the ground.',
        paragraphs: ['I explored navy, blue, sage and berry backgrounds, keeping the western motifs as the link between them. These colourway studies vary the overall feel while retaining the collection’s illustrated character.'],
        treatment: 'pair', figures: [
          { image: 'graphics/western-colourway-navy.webp', alt: 'Horse repeat explored on a navy background.', caption: 'Navy study.' },
          { image: 'graphics/western-colourway-blue.webp', alt: 'Horse repeat explored on a blue background.', caption: 'Blue study.' },
          { image: 'graphics/western-colourway-sage.webp', alt: 'Horse repeat explored on a sage background.', caption: 'Sage study.' },
          { image: 'graphics/western-colourway-berry.webp', alt: 'Horse repeat explored on a berry background.', caption: 'Berry study.' },
        ],
      },
      {
        id: 'sample', label: 'Supplier sample', title: 'Take the motifs onto a garment.',
        paragraphs: ['The supplier sample takes the western motifs onto a jacket, showing the pattern across the body, sleeves and seams beyond the flat artwork.'],
        treatment: 'artwork', figures: [
          { image: 'graphics/western-supplier-sample.webp', alt: 'Supplier sample jacket with western motifs on a pale green background.', caption: 'Supplier strike/sample' },
        ],
      },
    ],
  },
  {
    id: 'GD03', slug: 'aw24-lookbook', title: 'AW24 lookbook',
    subtitle: 'An editorial system for an outdoor clothing range.',
    category: 'graphic-design', kind: 'Professional work · Mountain Warehouse',
    role: 'In-house lookbook layout & execution', status: 'Flat spreads and photographed printed book',
    summary: 'An in-house lookbook redesign using layered photography and feature callouts to highlight the clothing.',
    intro: 'I redesigned Mountain Warehouse’s Autumn/Winter 2024 in-house lookbook, using overlapping photography and feature callouts to give the clothing a stronger editorial focus.',
    tags: ['Editorial', 'Layout', 'Print'],
    cover: 'graphics/lookbook-printed.webp',
    coverAlt: 'Open printed lookbook showing women’s skiwear with overlapping photographs and circular feature callouts.',
    stage: 'lookbook', preview: ['graphics/lookbook-printed.webp', 'graphics/lookbook-ski.webp'],
    sections: [
      {
        id: 'hierarchy', label: 'Editorial hierarchy', title: 'Give each spread a focal point.',
        paragraphs: ['The earlier book gave many images similar weight. I introduced larger focal photographs and layered supporting shots around them, so each spread could lead with a strong image while still showing the range.'],
        treatment: 'artwork', figures: [
          { image: 'graphics/lookbook-fleece.webp', alt: 'Men’s fleece lookbook spread combining product and lifestyle photographs with category text.', caption: 'Fleece: layered lifestyle shots sit alongside an isolated product image.' },
          { image: 'graphics/lookbook-jackets.webp', alt: 'Women’s padded-jacket spread with overlapping model photographs and product labels.', caption: 'Jackets: a feature label links the lining detail to the worn product.' },
        ],
      },
      {
        id: 'system', label: 'Spread system', title: 'Keep the structure, adapt the emphasis.',
        paragraphs: ['Category headings and product labels tie the spreads together. For skiwear, I placed circular feature callouts alongside the model photography to bring technical details into the visual story.'],
        treatment: 'wide', figures: [
          { image: 'graphics/lookbook-ski.webp', alt: 'Men’s skiwear spread using overlapping photographs and circular technical feature callouts.', caption: 'Men’s ski: waterproofing, breathability and taped seams sit beside the product imagery.' },
        ],
      },
      {
        id: 'printed', label: 'Printed application', title: 'Carry the layout through to print.',
        paragraphs: ['The women’s ski spread carries the same layered photography and feature callouts across the fold of the printed book.'],
        treatment: 'wide', figures: [
          { image: 'graphics/lookbook-printed.webp', alt: 'Open printed lookbook held in two hands, showing the women’s skiwear spread.', caption: 'The printed women’s skiwear spread.' },
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
    cover: 'graphics/festival-shopfront.webp',
    coverAlt: 'Mountain Warehouse shopfront with the festival campaign in the window.',
    hero: 'graphics/festival-shopfront.webp',
    heroAlt: 'Mountain Warehouse shopfront with a yellow, orange and green festival promotion in the window.',
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

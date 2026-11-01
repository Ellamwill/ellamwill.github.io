import type { Project } from './types';

export const uxProjects: Project[] = [
  {
    id: 'UX-POCKET',
    slug: 'pocketwise',
    title: 'PocketWise',
    subtitle: 'A growing plant. A way to gamify saving.',
    category: 'ux-ui',
    kind: 'Candidate assessment · UI concept',
    role: 'Concept, onboarding, interface design & visual identity',
    status: 'Four-day design exercise · Static interface concept',
    summary: 'A gamified finance-app concept linking savings goals with an in-app plant.',
    intro: 'I designed PocketWise as a finance-app concept combining savings progress with a growing plant and calendar-led spending preparation. My work covers the concept, onboarding and interface design.',
    tags: ['Gamification', 'Onboarding', 'Interface design'],
    cover: 'ux/pocketwise-hero.webp',
    coverAlt: 'PocketWise welcome, calendar connection and dashboard concept screens.',
    stage: 'pocketwise',
    sections: [
      {
        id: 'inputs',
        label: 'Inputs',
        title: 'What did the app review help me prioritise?',
        paragraphs: [],
        layout: 'parallel',
        blocks: [
          {
            title: 'Trust and tone',
            paragraphs: ['I tried Cleo and Emma and read public reviews. Clear data explanations, onboarding progress and encouraging messages stood out as patterns I wanted to carry into PocketWise.'],
          },
          {
            title: 'Planning around personal events',
            paragraphs: ['Calendar-led planning around personal events was missing from the apps I reviewed. I made pre-planning a priority alongside spending summaries and reminders.'],
          },
        ],
      },
      {
        id: 'concept',
        label: 'Concept',
        title: 'Make growth the idea and identity.',
        paragraphs: [],
        layout: 'parallel',
        blocks: [
          {
            title: 'Saving as growth',
            paragraphs: ['The brief focused on onboarding and proactive financial advice. I developed the plant mechanic to give saving progress a visible form: a seed, plant and longer-term tree or forest.'],
            treatment: 'wide',
            figures: [
              { image: 'ux/pocketwise-ideas.webp', alt: 'Handwritten PocketWise idea map connecting pre-planning, trust and engagement with a growing-plant metaphor.', caption: 'Original ideation. The plant-growth mechanic emerged alongside ideas for transparency and pre-planning.' },
            ],
          },
          {
            id: 'visual-development',
            title: 'A plant-and-pocket identity',
            paragraphs: ['I designed the logo as a plant emerging from a pocket, with a pale teal palette and a lower-right forward action on the welcome screen.'],
            treatment: 'phones',
            figures: [
              { image: 'ux/pocketwise-welcome.webp', alt: 'PocketWise welcome concept with a plant-and-pocket motif on pale teal and a forward action at the lower right.', caption: 'Welcome: the plant-and-pocket identity and lower-right action.' },
            ],
          },
        ],
      },
      {
        id: 'flow-wireframes',
        label: 'Onboarding',
        title: 'Explain the value before asking for data.',
        paragraphs: [],
        layout: 'parallel',
        blocks: [
          {
            paragraphs: ['Connection requests ask for trust, so I planned the explanation first. The flow introduces what PocketWise does and why data is needed, then asks about personal context and notification preferences before the proposed bank and calendar connections.'],
            treatment: 'wide',
            figures: [
              { image: 'ux/pocketwise-onboarding-flow.svg', alt: 'PocketWise onboarding flow from product explanation and data transparency through context, notification preferences, bank and calendar connections and the growth dashboard.', caption: 'Early flow: product and data explanations come before connection requests.' },
            ],
          },
          {
            paragraphs: ['Paper wireframes gave the sequence a layout, with space for progress, context questions and skip options. This kept the ordering decision visible as the screens took shape.'],
            treatment: 'wide',
            figures: [
              { image: 'ux/pocketwise-paper-onboarding-large.webp', alt: 'Six early paper wireframes showing welcome, explanation, data transparency and personal context, with progress and skip controls.', caption: 'Paper onboarding: product explanation and data transparency precede the personal questions.' },
            ],
          },
        ],
      },
      {
        id: 'onboarding',
        label: 'User control',
        title: 'Keep choices visible and the tone supportive.',
        paragraphs: [],
        layout: 'triple',
        blocks: [
          {
            title: 'Context questions',
            paragraphs: ['I kept Skip visible alongside the context questions. Labelled choices and radio-button shapes add cues beyond colour, reflecting the accessibility priorities I explored during ideation.'],
            treatment: 'phones',
            figures: [
              { image: 'ux/pocketwise-context.webp', alt: 'PocketWise context questions with labelled radio choices, a progress bar and a skip option.', caption: 'Later context screen: Skip remains visible above the labelled choices.' },
            ],
          },
          {
            title: 'A manual calendar alternative',
            paragraphs: ['I explained why calendar data would help before offering Apple, Google or manual entry. Help stays available so someone can decide what to share and how.'],
            treatment: 'phones',
            figures: [
              { image: 'ux/pocketwise-calendar-connect.webp', alt: 'Calendar connection concept with service options, help and a manual alternative.', caption: 'Later calendar step: manual entry offers an alternative to a service connection.' },
            ],
          },
          {
            title: 'Advice with a response',
            paragraphs: [
              'I used a conversational tone for accepting, adjusting or dismissing advice, showing “Adjust Goal” and “Sounds good”. Contrast, plain language and a supportive tone remain accessibility priorities to evaluate.',
            ],
            treatment: 'phones',
            figures: [
              { image: 'ux/pocketwise-notifications.webp', alt: 'PocketWise notification explanation describing accept, adjust and dismiss choices, with a two-button sample.', caption: 'Later notification explanation, with an example event-related suggestion.' },
            ],
          },
        ],
      },
      {
        id: 'planning-outcome',
        label: 'Pre-planning',
        title: 'Connect upcoming plans with spending choices.',
        paragraphs: [],
        blocks: [
          {
            paragraphs: ['I sketched the growth hub and planning views together, linking progress with upcoming expenses. These layouts gave the plant mechanic a place beyond onboarding.'],
            treatment: 'wide',
            figures: [
              { image: 'ux/pocketwise-paper-planning-large.webp', alt: 'Three paper sketches connecting a growth hub, upcoming-expense plan and calendar view.', caption: 'Early planning layouts connect growth, upcoming expenses and a monthly view.' },
            ],
          },
          {
            paragraphs: ['The dashboard brings plant progress, a weekly report and upcoming events into one view. The calendar links example savings suggestions to upcoming events, so the concept supports planning ahead as well as reviewing past spending.'],
            treatment: 'phones',
            figures: [
              { image: 'ux/pocketwise-dashboard.webp', alt: 'PocketWise dashboard concept showing plant progress, an example weekly report and upcoming events.', caption: 'Dashboard: progress and upcoming plans share one view. Figures are illustrative.' },
              { image: 'ux/pocketwise-calendar.webp', alt: 'Calendar concept showing upcoming events and example saving suggestions.', caption: 'Calendar: the gym, night out and team lunch each have an illustrative suggestion.' },
            ],
          },
        ],
      },
      {
        id: 'conclusion',
        label: 'Conclusion',
        title: 'Bring motivation and planning into one concept.',
        paragraphs: [
          'PocketWise brings motivation, event-led planning and visible choices into one interface concept, with a growing plant making saving tangible and calendar-led pre-planning helping people prepare for spending before it happens. The main design thread is explaining a request before asking people to act on it.',
          'The next step is to evaluate whether people understand the suggestions and can continue without connecting a calendar.',
          'From there, the app could develop through a tiered subscription that rewards good financial habits with a reduced fee, deeper AI pre-planning through email and Apple Wallet integration, and a built-in calendar that turns screenshots of bookings and tickets into planned spending automatically.',
        ],
      },
    ],
  },
  {
    id: 'UX-MW',
    slug: 'mountain-warehouse',
    title: 'Mountain Warehouse',
    subtitle: 'A focused route to choosing a ski bundle.',
    category: 'ux-ui',
    kind: 'Coursework · App concept',
    role: 'Shopping flow, wireframes, interface design & iteration',
    status: 'Course-associated app concept · Designed and developed in Figma.',
    summary: 'A ski-clothing shopping journey with sizes for each item and one route to checkout.',
    intro: 'I designed a Mountain Warehouse shopping-app concept to help first-time skiers choose clothing. Building on three years with the brand, I researched the guidance beginners needed, mapped the journey and developed the Figma prototype, with colleague feedback informing the design.',
    tags: ['Ecommerce', 'Interaction design', 'Iteration'],
    cover: 'ux/mw-frame-2.webp',
    coverAlt: 'Three composed Mountain Warehouse app mockups showing home, ski-bundle browsing and individual size choices.',
    hero: 'ux/mw-frame-2.webp',
    heroAlt: 'Mountain Warehouse home, ski-bundle listing and size-selection mockups in the supplied three-phone composition.',
    stage: 'mw-composed',
    sections: [
      {
        id: 'wireframes-outcome',
        label: 'Discovery',
        title: 'Where did first-time skiers need guidance?',
        paragraphs: [],
        blocks: [
          {
            paragraphs: [
              'Desk research, forum analysis and informal conversations with colleagues and friends highlighted uncertainty about what first-time skiers needed to bring or buy.',
              'My competitive review looked at onboarding, product discovery, kit lists and guided shopping. I explored a wider kit-planning idea, then developed the clothing-bundle journey shown here.',
            ],
            steps: [
              { label: 'Observed need', text: 'Uncertainty about what to bring or buy for a first ski trip.' },
              { label: 'Design interpretation', text: 'Give the shopper an understandable starting set.' },
              { label: 'Response shown in the prototype', text: 'Group clothing into a pack, retaining an individual size choice for each item.' },
            ],
            caption: 'How my discovery inputs shaped the bundle journey.',
          },
        ],
      },
      {
        id: 'flow',
        label: 'Flow & development',
        title: 'How should the bundle journey work?',
        paragraphs: [],
        blocks: [
          {
            paragraphs: [
              'I mapped a route from home to audience categories, pack selection, basket and checkout, with an option to continue shopping. This kept the bundle connected through the journey.',
            ],
            treatment: 'wide',
            figures: [
              { image: 'ux/mw-shopping-flow.webp', alt: 'Shopping-flow diagram from home and audience categories through bundle selection, basket and checkout.', caption: 'Planned route: find a pack, review it and continue toward checkout.' },
            ],
          },
          {
            id: 'design-development',
            title: 'Work out the choices before the polish.',
            paragraphs: [
              'The earlier camping-bundle layouts compare audience and kit selectors. In the low-fidelity detail and basket views, I put size choices beside the included items and gave the pack one add-to-basket action.',
            ],
            treatment: 'pair',
            figures: [
              { image: 'ux/mw-paper-bundle-options.webp', alt: 'Early paper camping-bundle layouts comparing audience choices, a bundle selector and pack contents.', caption: 'Earlier camping-bundle sketches compare ways to find a suitable pack.' },
              { image: 'ux/mw-lowfi-selection.webp', alt: 'Early low-fidelity bundle-detail and basket screens with item-level size choices and continue-shopping controls.', caption: 'Low-fidelity detail and basket views place item sizes within the pack purchase.' },
            ],
          },
        ],
      },
      {
        id: 'entry',
        label: 'Entry',
        title: 'How can shoppers browse or sign in?',
        paragraphs: [],
        blocks: [
          {
            paragraphs: [
              'I wanted a quick, simple way into the collection. The earlier welcome screen offers sign-in, account creation and “Start exploring”, while the account route uses a focused email-and-password form.',
            ],
            treatment: 'phones',
            figures: [
              { image: 'ux/mw-welcome.webp', alt: 'Earlier Mountain Warehouse welcome design with sign-in, account creation and a visible Start exploring browse invitation.', caption: 'Earlier welcome: account choices and a Start exploring route into browsing.' },
              { image: 'ux/mw-sign-in.webp', alt: 'Earlier Mountain Warehouse sign-in design with email and password fields, account benefits and password recovery.', caption: 'Earlier sign-in: a focused form with account benefits and password recovery.' },
            ],
          },
        ],
      },
      {
        id: 'bundle-flow',
        label: 'Bundle',
        title: 'Choose each size, buy one pack.',
        paragraphs: [],
        blocks: [
          {
            paragraphs: [
              'I kept the pack as one purchase while retaining a size choice for each item. The basket presents it as one item, then checkout keeps the pack visible beside delivery options. Yellow actions and gradient headers give the screens a consistent visual treatment.',
            ],
            treatment: 'wide',
            figures: [
              { image: 'ux/mw-frame-1.webp', alt: 'Four composed Mountain Warehouse app mockups showing ski bundles, separate item-size choices, the basket and delivery checkout.', caption: 'Bundle listing → individual sizes → basket → delivery, with the pack kept together throughout.' },
            ],
          },
        ],
      },
      {
        id: 'revision',
        aliases: ['outcome'],
        label: 'Study & revisions',
        title: 'What changed after the shopping tasks?',
        paragraphs: [],
        blocks: [
          {
            title: 'A task-based Google Doc.',
            paragraphs: [
              'After the first high-fidelity mock-up, I ran an unmoderated usability study using a structured Google Doc. I asked people to reach the home page, find and add a ski bundle, then return home.',
            ],
          },
          {
            title: 'Give the browse invitation more emphasis.',
            paragraphs: [
              'The “Start exploring” invitation was missed. I made the link yellow and underlined to give it more emphasis within the welcome message.',
            ],
            treatment: 'wide',
            figures: [
              { image: 'ux/mw-entry-comparison.webp', alt: 'Earlier welcome design on the left and revised design on the right, where Start exploring is yellow and underlined.', caption: 'Earlier → revised: colour and underline emphasise the browse invitation.' },
            ],
          },
          {
            title: 'Represent the wider ski audience.',
            paragraphs: [
              'The children’s promotion made it unclear whether the bundles were for everyone. I replaced it with broader skiing imagery, connecting the home promotion with the wider collection.',
            ],
            treatment: 'wide',
            figures: [
              { image: 'ux/mw-home-comparison.webp', alt: 'Earlier home design on the left with a children-only ski promotion, and revised design on the right with broader skiing imagery.', caption: 'Earlier → revised: broader skiing imagery replaces the children-only promotion.' },
            ],
          },
        ],
      },
      {
        id: 'conclusion',
        label: 'Conclusion',
        title: 'What did the prototype resolve?',
        paragraphs: [
          'The prototype brings ski-clothing selection into one route, with a size choice for each item. Task feedback showed that the route into browsing and the audience of the offer needed clearer communication; the revisions address those two points. Next, I would test the revised entry and return navigation with first-time skiers.',
        ],
      },
    ],
  },
  {
    id: 'UX-HERB',
    slug: 'herbshare',
    title: 'HerbShare',
    subtitle: 'A little herb goes a long way.',
    category: 'ux-ui',
    kind: 'Self-initiated · Community app concept',
    role: 'UX/UI design & visual identity',
    status: 'Self-initiated concept · Static screens & paper wireframes',
    summary: 'A community-sharing app concept that connects surplus herbs with neighbours.',
    intro: 'HerbShare is a self-initiated app concept for neighbours to share surplus garden herbs, aiming to reduce waste and unnecessary packaging. I developed paper wireframes, interfaces and a botanical identity around finding local offers, understanding pickup details and controlling requests and personal information.',
    tags: ['Community', 'Interaction design', 'Visual identity'],
    cover: 'ux/herbshare-mock-4.webp',
    coverAlt: 'HerbShare identity and supplied mockup composition showing home, neighbourhood map, herb listing and profile screens on a yellow background.',
    stage: 'herbshare',
    sections: [
      {
        id: 'wireframes',
        label: 'Pickup needs',
        title: 'Find an offer, then check the pickup.',
        paragraphs: [
          'Finding a nearby herb is only the first decision: someone also needs to know when they can collect it and how much to take. I organised the paper wireframes around home, search and list/map views, with routes to create and save listings.',
          'The listing-detail sketch groups collection hours, quantity guidance and access information before pickup. Putting those details together was intended to help someone judge whether an offer suited them before making arrangements.',
        ],
        treatment: 'pair',
        figures: [
          { image: 'ux/herbshare-wireframes-browse.webp', alt: 'Original HerbShare paper wireframes for a home screen and a searchable list with a list/map choice.', caption: 'Early wireframes: browse from home or switch between a list and map.' },
          { image: 'ux/herbshare-wireframe-pickup.webp', alt: 'Paper listing-detail wireframe showing anonymous profile, collection hours, quantity guidance and accessibility information.', caption: 'Early wireframe: collection hours, “a handful” and access information set pickup expectations.' },
        ],
      },
      {
        id: 'concept',
        label: 'Local discovery',
        title: 'Find nearby herbs and check access.',
        paragraphs: [
          'Herb Share only shows offers within a short distance of you, so it stays a neighbourhood-to-neighbourhood exchange, with herb categories and a map to help you find what\'s nearby. Someone can choose a herb and compare distance before opening a listing.',
          'I carried those pickup details into the listing, with labels such as “step-free access” and “take a handful” making access and quantity expectations visible.',
        ],
        treatment: 'wide',
        figures: [
          { image: 'ux/herbshare-mock-2.webp', alt: 'HerbShare mockup composition with a home screen, local map and listing details for pickup time, step-free access and quantity.', caption: 'Nearby discovery leads to a listing with pickup time, access and quantity information.' },
        ],
      },
      {
        id: 'requests',
        label: 'Requests & privacy',
        title: 'Keep request and privacy choices in the owner’s hands.',
        paragraphs: [],
        layout: 'parallel',
        blocks: [
          {
            title: 'Approve a request.',
            paragraphs: [
              'Instant pickup and request-first are separate modes. For request-first collections, I gave the owner Accept and Decline controls so a request and an agreement remain separate steps.',
            ],
            treatment: 'artwork',
            figures: [
              { image: 'ux/herbshare-request-controls-corrected.webp', alt: 'HerbShare Requests screen with Inbox and Sent tabs, Request first labels, and Decline and Accept actions on two incoming request cards.', caption: '' },
            ],
          },
          {
            title: 'Choose what to reveal.',
            paragraphs: [
              'I added anonymous mode and a choice to hide the exact address until a request is accepted. I also proposed time-limited location access and an option to collect without a face-to-face handover, aiming to protect privacy and build trust.',
            ],
            treatment: 'artwork',
            figures: [
              { image: 'ux/herbshare-profile-privacy.webp', alt: 'HerbShare profile design with active herb listings, a Requests tab, anonymous mode and a control to hide the exact address until a request is accepted.', caption: '' },
            ],
          },
        ],
      },
      {
        id: 'identity-outcome',
        label: 'Confirmation',
        title: 'Thank neighbours for sharing.',
        paragraphs: [
          'I used “Thanks for sharing” and the community message to acknowledge the contribution and encourage local sharing. The leaf and teal palette continue the botanical identity, while the Done action gives the acknowledgement a clear ending.',
        ],
        treatment: 'artwork',
        figures: [
          { image: 'ux/herbshare-confirmation-screen.webp', alt: 'HerbShare confirmation overlay with a leaf icon, Thanks for sharing message, community acknowledgement and a Done button.', caption: 'A community acknowledgement and a clear Done action.' },
        ],
      },
      {
        id: 'conclusion',
        label: 'Conclusion',
        title: 'Local sharing, with explicit pickup choices.',
        paragraphs: [
          'Herb Share brings local discovery, pickup information and owner control into one interface concept, supported by a consistent botanical identity. Because it keeps sharing local, it could be widely used in neighbourhoods to reduce waste and bring people closer together.',
          'The next step is to check whether both neighbours understand when a pickup is agreed and when location details become visible. Other ways neighbours could support one another through the app, such as sharing recipes and things they have made with the herbs, could also be explored.',
        ],
      },
    ],
  },
];

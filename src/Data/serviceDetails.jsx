import heroImg from '../assets/hero.png'
import mehraWedding from '../assets/mehra_wedding.png'
import infosysSummit from '../assets/infosys_summit.png'
import kapoorGala from '../assets/kapoor_gala.png'
import whyRamjiDining from '../assets/why_ramji_dining.png'
import weddingMandap from '../assets/wedding_mandap.png'
import weddingReception from '../assets/wedding_reception.png'
import productLaunch from '../assets/product_launch.png'
import sweetSixteen from '../assets/sweet_sixteen.png'

export const SERVICE_DETAILS = {
  'wedding-planning': {
    subtitle: 'SERVICES • WEDDING PLANNING',
    title: 'Full-Service Wedding Planning',
    lead: 'From the first \'yes\' to the last dance — we manage every detail so you can be fully present in your most important moments.',
    bannerImg: heroImg,
    overview: {
      title: 'What Wedding Planning Includes',
      desc: 'Our wedding planning service is a comprehensive, white-glove experience. We handle every vendor relationship, every logistics challenge, and every timeline conflict — leaving you free to savour the journey towards your wedding day.',
      checklist: [
        'Venue scouting & negotiation',
        'Floral design & styling',
        'Catering & menu curation',
        'Photography & videography',
        'Entertainment & music',
        'Guest transport & logistics',
        'Invitation design & dispatch',
        'Day-of coordination'
      ]
    },
    packages: [
      { name: 'Silver', price: '₹3,50,000', capacity: 'Up to 150 guests', features: ['Venue coordination', 'Décor planning', 'Vendor management', 'Day-of coordination', 'Photography referral'] },
      { name: 'Gold', price: '₹7,50,000', capacity: 'Up to 400 guests', features: ['Everything in Silver', 'Full floral design', 'Catering management', 'Entertainment booking', 'Guest management system', 'Post-event restoration'], popular: true },
      { name: 'Platinum', price: 'Custom', capacity: '400+ guests', features: ['Everything in Gold', 'Destination logistics', 'Luxury accommodation', 'Celebrity entertainment', 'Media & PR coordination', 'Dedicated 10-member team'] }
    ],
    gallery: [mehraWedding, whyRamjiDining, heroImg, kapoorGala, weddingMandap, weddingReception],
    faqs: [
      { q: 'How early should I book Ramji Events for my wedding?', a: 'We recommend booking our services 6 to 9 months in advance. This ensures availability and allows ample time for venue selection, design curation, and vendor bookings.' },
      { q: 'Do you handle destination weddings outside India?', a: 'Yes. We have executed weddings in Dubai, Bali, Thailand, and across Europe. Our international network of vendors and local coordinators ensures seamless execution anywhere in the world.' },
      { q: 'What is included in a full-service wedding package?', a: 'Our full-service package covers everything: venue sourcing, catering design, decoration, photography, guest management, entertainment planning, invite management, and day-of coordination.' },
      { q: 'Can you work within a fixed budget?', a: 'Absolutely. We pride ourselves on transparent pricing and budget management, ensuring you get the maximum value and elegance within your specified budget.' },
      { q: 'Do you provide catering services directly?', a: 'Yes, catering is one of our core specialties. We have an in-house team of chefs specializing in diverse global cuisines, offering custom menus tailored to your guests.' }
    ],
    story: {
      rating: '★★★★★',
      text: '"Ramji Events transformed our dream into reality. Every single detail — from the floral mandap to the midnight fireworks — was executed flawlessly. We didn\'t worry about a thing on our wedding day."',
      author: 'PRIYA & ARJUN MEHRA',
      sub: 'Destination Wedding, Udaipur'
    }
  },
  'destination-weddings': {
    subtitle: 'SERVICES • DESTINATION WEDDINGS',
    title: 'Destination Wedding Curation',
    lead: 'Seamlessly curated celebrations in India\'s most iconic locations, from royal palaces to sun-kissed beaches.',
    bannerImg: mehraWedding,
    overview: {
      title: 'What Destination Weddings Include',
      desc: 'We make outstation weddings completely effortless. We manage travel, local vendor sourcing, structural decor building, guest hospitality, and multi-day itinerary execution so you can enjoy a perfect holiday celebration.',
      checklist: [
        'Location scouting & venue booking',
        'Hotel negotiation & guest room blocks',
        'Local supplier & vendor coordination',
        'Guest transfers & travel helpdesk',
        'Multi-day thematic decor planning',
        'Local permits, sound & safety licensing'
      ]
    },
    packages: [
      { name: 'Silver', price: '₹5,00,000', capacity: 'Up to 150 guests', features: ['Venue negotiation', 'Hotel room block management', 'Concept design & theme layout', 'Local vendor coordination', '2-day coordination'] },
      { name: 'Gold', price: '₹10,00,000', capacity: 'Up to 350 guests', features: ['Everything in Silver', 'Full local transfers coordination', 'Premium floral decor design', 'Guest concierge desk', '3-day coordination', 'Pre-wedding site visits'], popular: true },
      { name: 'Platinum', price: 'Custom', capacity: '350+ guests', features: ['Everything in Gold', 'Heritage palace booking assistance', 'Private charter booking assistance', 'International decor fabrication', 'Celebrity logistics coordination', 'Full multi-day hospitality team'] }
    ],
    gallery: [mehraWedding, whyRamjiDining, heroImg, kapoorGala, weddingMandap, weddingReception],
    faqs: [
      { q: 'Which destination locations do you cover?', a: 'We regularly coordinate weddings in Udaipur, Jaipur, Goa, Mussoorie, Kerala, and international locations like Dubai, Bali, and Thailand.' },
      { q: 'How do you handle guest travel and check-in logistics?', a: 'We set up a dedicated travel helpdesk for your guests, managing airport arrivals, shuttle departures, luggage tagging, and hotel check-in desks at the destination.' },
      { q: 'Do you charge extra for outstation vendor travel?', a: 'All coordinator travel, stay, and local operational costs are clearly itemized in our package, ensuring absolute transparency with zero surprise bills.' }
    ],
    story: {
      rating: '★★★★★',
      text: '"Planning a wedding in Goa from London felt impossible until we hired Ramji Events. Their communication, local vendor network, and onsite hospitality team were exceptional!"',
      author: 'SARA & RAHUL SHARMA',
      sub: 'Beach Wedding, Goa'
    }
  },
  'corporate-events': {
    subtitle: 'SERVICES • CORPORATE EVENTS',
    title: 'Corporate Events & Milestone Curation',
    lead: 'Board retreats, team milestones, executive dinners, and annual celebrations handled with executive precision.',
    bannerImg: infosysSummit,
    overview: {
      title: 'What Corporate Events Include',
      desc: 'Our corporate event service handles all aspects of corporate staging, catering, speaker management, and branding so your internal team can focus on the business goals of the meet.',
      checklist: [
        'Venue sourcing & layout planning',
        'Professional stage & LED display setups',
        'Gourmet executive catering & bar set',
        'Branding, signage & collateral design',
        'RSVP tracking & badge systems',
        'Speaker & VIP green room management'
      ]
    },
    packages: [
      { name: 'Executive', price: '₹2,50,000', capacity: 'Up to 100 delegates', features: ['Basic staging & AV systems', 'Buffet catering design', 'Registration area setup', 'Executive dinner coordination', '1-day event coordination'] },
      { name: 'Summit', price: '₹5,00,000', capacity: 'Up to 300 delegates', features: ['Everything in Executive', 'P3 LED display screen backdrop', 'Themed gala dinner catering', 'Sound & light show choreography', 'Corporate branding printing & setups', 'Post-event media folder'], popular: true },
      { name: 'Enterprise', price: 'Custom', capacity: '300+ delegates', features: ['Everything in Summit', 'Artist & entertainment booking', 'Multi-day itinerary management', 'VIP transfers & security details', 'Broadcast quality multi-cam recording'] }
    ],
    gallery: [infosysSummit, whyRamjiDining, productLaunch, heroImg],
    faqs: [
      { q: 'Do you handle multi-day corporate summits?', a: 'Yes. We manage corporate retreats, forums, and annual conferences, including delegate accommodation, dining schedules, and breakouts.' },
      { q: 'Do you provide professional AV and sound equipment?', a: 'Yes, we supply premium line-array sound systems, high-lumen LED walls, professional stage lighting, and digital mixing desks.' },
      { q: 'Can you work with corporate compliance guidelines?', a: 'Yes. We offer fully compliant detailed invoicing, transparent vendor pricing sheets, and coordinate directly with corporate procurement teams.' }
    ],
    story: {
      rating: '★★★★★',
      text: '"Our annual leadership retreat was a massive success. Ramji Events took care of all logistics, audio-visuals, and catering seamlessly."',
      author: 'RAJESH KUMAR, COO',
      sub: 'Corporate Retreat, Noida'
    }
  },
  'conferences': {
    subtitle: 'SERVICES • CONFERENCES & SUMMITS',
    title: 'Conferences & Large-Scale Summits',
    lead: 'AV setups, delegate seating, registration portals, and catering — managed end-to-end for 50 to 5000 guests.',
    bannerImg: productLaunch,
    overview: {
      title: 'What Conference Planning Includes',
      desc: 'We provide robust logistical and technical management for high-attendance forums. We coordinate registration booths, multi-track sessions, food courts, and sponsor exhibitions.',
      checklist: [
        'High-capacity convention hall sourcing',
        'Registration desks & badge printers',
        'LED screen walls & presenter screens',
        'Delegate buffet & coffee stations',
        'Sponsor exhibition stall fabrication',
        'Multi-camera live streaming & recording'
      ]
    },
    packages: [
      { name: 'Delegate', price: '₹3,00,000', capacity: 'Up to 200 delegates', features: ['Dual projector & screen setup', 'Delegate registration desk design', 'Lunch catering coordination', 'Standard sound & microphone kit', 'Day-of coordination'] },
      { name: 'Forum', price: '₹6,00,000', capacity: 'Up to 500 delegates', features: ['Everything in Delegate', 'P3 LED Wall (20x10ft) backdrop', 'Full delegate lunch & high-tea catering', 'Sponsor exhibition booth fabrication', 'Live stream broadcast setup', 'Interactive Q&A mic systems'], popular: true },
      { name: 'Plenary', price: 'Custom', capacity: '500+ delegates', features: ['Everything in Forum', 'Multi-city travel helpdesk', 'International translation headset systems', 'Delegate kits & custom merchandise printing', 'Keynote speaker hospitality concierge'] }
    ],
    gallery: [infosysSummit, whyRamjiDining, productLaunch, heroImg],
    faqs: [
      { q: 'Do you design and fabricate exhibition stalls?', a: 'Yes. We design, print, and fabricate standard shell schemes as well as custom-built sponsor booths.' },
      { q: 'Can you live-stream our conference sessions?', a: 'Yes. We provide multi-camera broadcast-grade setups for live streaming to YouTube, Zoom, or private corporate servers.' }
    ],
    story: {
      rating: '★★★★★',
      text: '"Ramji Events managed our 1,500-delegate tech summit flawlessly. The catering was hot, the sound was clear, and registration was fast."',
      author: 'AMIT SINGHAL, EVENT HEAD',
      sub: 'Tech Summit, Gurgaon'
    }
  },
  'product-launches': {
    subtitle: 'SERVICES • PRODUCT LAUNCHES',
    title: 'Product Launches & Brand Activations',
    lead: 'Brand-aligned launches that generate buzz, drive media attention, and leave lasting impressions.',
    bannerImg: productLaunch,
    overview: {
      title: 'What Product Launches Include',
      desc: 'We build high-impact unveil mechanics, experiential zones, and premium media setups designed to show off your product in its best light.',
      checklist: [
        'Experiential stage & screen reveals',
        'Laser show & light projections',
        'Press, media & photographer risers',
        'Social media photo backdrops',
        'Celebrity & influencer hospitality',
        'Sound design & sound effects choreography'
      ]
    },
    packages: [
      { name: 'Brand Launch', price: '₹4,00,000', features: ['Stage & screen unveil mechanics', 'Premium sound & reveal light show', 'Press zone backdrop fabrication', '1-day product showcase setup', 'Day-of coordination'] },
      { name: 'Immersive', price: '₹8,00,000', features: ['Everything in Brand Launch', '3D mapping projection / special reveal', 'VIP catering lounge setup', 'Media kits & PR coordination', 'Influencer photo booth setup', 'Custom kinetic light fixtures'], popular: true },
      { name: 'Mega Launch', price: 'Custom', features: ['Everything in Immersive', 'Celebrity appearance booking', 'Interactive AR/VR experience zone', 'Choreographed laser show', 'Nationwide media management helpdesk'] }
    ],
    gallery: [productLaunch, infosysSummit, whyRamjiDining, heroImg],
    faqs: [
      { q: 'Can you handle press and media coordination?', a: 'Yes, we set up press risers, interview backdrops, sound feeds for camera crews, and help manage media hospitality.' },
      { q: 'What kind of unveiling special effects do you offer?', a: 'We offer computerized kabuki drops, kinetic lighting reveals, laser projections, fog screen projections, and custom stage mechanics.' }
    ],
    story: {
      rating: '★★★★★',
      text: '"The launch of our flagship electric scooter was a showstopper. The laser show and reveal mechanics were absolutely state-of-the-art."',
      author: 'VIKRAM MALHOTRA, HEAD OF MARKETING',
      sub: 'Scooter Launch, Delhi'
    }
  },
  'birthday-events': {
    subtitle: 'SERVICES • BIRTHDAY CELEBRATIONS',
    title: 'Bespoke Birthday Celebrations',
    lead: 'Intimate gatherings or lavish milestone parties — every birthday deserves a bespoke and memorable experience.',
    bannerImg: sweetSixteen,
    overview: {
      title: 'What Birthday Celebrations Include',
      desc: 'From custom theme designs to interactive food stations, professional DJs, and entertainment acts, we plan celebrations that delight all age groups.',
      checklist: [
        'Custom theme selection & backdrop decor',
        'Interactive dessert stations & cake sourcing',
        'Professional sound, lights & DJ sets',
        'Fun activity stalls & emcee booking',
        'Multi-cuisine catering & live stations',
        'Digital photo booth with instant printouts'
      ]
    },
    packages: [
      { name: 'Silver', price: '₹1,50,000', capacity: 'Up to 100 guests', features: ['Theme backdrop decoration', 'Standard sound system & DJ', 'Cake cutting stage setup', 'Catering coordination help', '1-day event supervisor'] },
      { name: 'Gold', price: '₹3,00,000', capacity: 'Up to 250 guests', features: ['Everything in Silver', 'Premium structural entryway & arch', 'Professional Emcee/Host', 'Digital photo booth with prints', 'Dessert buffet design', 'Customized guest welcome drinks'], popular: true },
      { name: 'Grand', price: 'Custom', capacity: '250+ guests', features: ['Everything in Gold', 'Live band booking', 'Interactive live culinary stations', 'Cinematic video highlights', 'Custom return gifts bar setup'] }
    ],
    gallery: [sweetSixteen, whyRamjiDining, heroImg, weddingReception],
    faqs: [
      { q: 'Do you arrange birthday themes for kids and adults?', a: 'Yes. We curate unique age-appropriate themes: from whimsical fairytale decors for kids to sophisticated black-tie themes for adults.' },
      { q: 'Can you source custom theme cakes?', a: 'Yes, we partner with premier award-winning pastry chefs to design and source multi-tier fondant theme cakes.' }
    ],
    story: {
      rating: '★★★★★',
      text: '"My daughter\'s Sweet 16 was straight out of a movie. The neon photo booth and chocolate fountain were huge hits with the kids."',
      author: 'NEETA MEHTA, MOTHER',
      sub: 'Sweet 16 Party, Noida'
    }
  },
  'event-decoration': {
    subtitle: 'SERVICES • EVENT DECORATION',
    title: 'Thematic Decoration & Floral Design',
    lead: 'Custom floral arrangements, mood lighting, structural sets, and thematic styling for any venue.',
    bannerImg: weddingMandap,
    overview: {
      title: 'What Event Decoration Includes',
      desc: 'We transform empty venues into spectacular, immersive spaces. We fabricate custom backdrops, build floral sculptures, and design intelligent lighting layouts.',
      checklist: [
        'Structural backdrop & stage fabrication',
        'Fresh & exotic floral installations',
        'Intelligent lighting & wash layouts',
        'Walkways, entry arches & lounge setups',
        'Theme-aligned table centerpieces & cutlery styling',
        'Fabric draping & ceiling hangings'
      ]
    },
    packages: [
      { name: 'Standard', price: '₹1,50,000', features: ['Standard fabric backdrop', 'Entrance arch floral border', 'Truss & basic wash lighting', '10 floral centerpieces', 'Stage flooring carpets'] },
      { name: 'Elite', price: '₹3,50,000', features: ['Everything in Standard', 'Custom structural thematic backdrop', 'Full pathway draping & fairy lights', 'Exotic imported flower arrangements', 'Custom photo booth zone', 'Bridal walkway decoration'], popular: true },
      { name: 'Royal', price: 'Custom', features: ['Everything in Elite', 'Premium structural fabrication', '3D projection mapping on set', 'Designer lounge furniture sets', 'Intelligent moving-head lighting setup'] }
    ],
    gallery: [weddingMandap, weddingReception, mehraWedding, kapoorGala],
    faqs: [
      { q: 'Do you use real or artificial flowers?', a: 'We specialize in fresh, exotic imported flowers (like hydrangeas, baby\'s breath, orchids). We can also use premium artificial silk flowers if requested for budget/durability.' },
      { q: 'Can you decorate outdoor venues?', a: 'Yes. We execute decor for lawns, beachside events, pool areas, and historical palace courtyards, taking wind and weather into account.' }
    ],
    story: {
      rating: '★★★★★',
      text: '"The floral mandap was a work of art. Our guests could not stop clicking pictures. It smelled divine and looked absolutely majestic."',
      author: 'KAVITA PATEL, BRIDE',
      sub: 'Floral Decor, Udaipur'
    }
  }
};

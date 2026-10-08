import type { ServiceLandingText } from "./serviceLandings";

// İngilizce hizmet açılış sayfaları (/en/<slug>/). Anahtar: Türkçe kaydın slug'ı.
// Birebir çeviri değil, yurt dışı ziyaretçiye uyarlama: Türkiye'ye özgü örnekler
// (Atatürk köşesi) genel karşılığıyla. Yurt dışında ücretsiz yerinde keşif sözü verilmez;
// teklif ücretsiz, keşif "gerektiğinde". Kurum ve yer adları galeri ve blogdaki
// İngilizce adlarıyla aynı.

export const en: Record<string, ServiceLandingText> = {
  "okul-duvar-resmi": {
    slug: "school-murals",
    name: "School Murals",
    title: "School Murals — Playgrounds, Hallways, Classrooms | Çizgi Artizm",
    description:
      "Educational, colorful murals for school playgrounds, hallways, kindergartens and cafeterias. Projects worldwide, with a free quote.",
    label: "For schools",
    h1: "School Murals",
    watermark: "SCHOOL",
    lead:
      "We turn school playgrounds, hallways and classrooms into spaces students love to look at every day — spaces that teach and inspire.",
    cardText: "Educational, colorful murals for playgrounds, hallways and kindergartens.",
    introTitle: "Why do school walls matter?",
    intro: [
      "Students spend most of their day at school. With the right design, a gray playground wall or an empty hallway becomes a surface that carries the school's identity, sparks curiosity and supports learning.",
      "We develop the design together with the school's leadership and teachers, based on the age group and the school's values. Anything can be a theme — from storybook characters to science, from history and culture to nature and animals.",
    ],
    pointsTitle: "Where we paint in schools",
    points: [
      { t: "Playground and perimeter walls", d: "Large, colorful, story-driven compositions where students spend their breaks." },
      { t: "Hallways and stairwells", d: "Designs that set floors apart by color and theme and make it easier to find your way around the building." },
      { t: "Kindergartens and play areas", d: "Friendly characters and educational figures suited to young children." },
      { t: "Libraries, cafeterias and gyms", d: "Themes that reflect what each space is for and match the school's identity." },
      { t: "Materials suited to schools", d: "Low-odor, water-based acrylics indoors; UV- and weather-resistant paints outdoors." },
    ],
    worksTitle: "Some of our work for children",
    process: [
      { t: "Choosing a theme", d: "We walk the walls with the school's leadership and choose a subject that fits the age group and the school's values." },
      { t: "Sketch and approval", d: "We prepare a color sketch based on the wall's actual dimensions and keep refining it until you approve." },
      { t: "Painting around your calendar", d: "We plan the painting days together so lessons aren't disrupted; weekends and school holidays work well for this." },
      { t: "Handover", d: "We leave the area clean, review the wall with you and hand over the finished work." },
    ],
    faq: [
      {
        q: "Are the paints used in school murals suitable for students?",
        a: "Indoors we use low-odor, water-based acrylic paints. Outdoors we choose paints that resist UV and weather. We finalize the materials for each wall during the assessment, depending on its location.",
      },
      {
        q: "Who decides on the design?",
        a: "The design is decided together with the school. We listen to your ideas and the school's needs and prepare a custom sketch; we never start painting without your approval.",
      },
      {
        q: "Will the work disrupt lessons?",
        a: "We plan the painting days together with the school's leadership. Work in areas such as playgrounds and hallways can be scheduled outside lesson hours, on weekends or during school holidays.",
      },
      {
        q: "How is the price of a school mural calculated?",
        a: "Pricing is per square meter and depends on the size of the wall, the condition of the surface and the level of detail in the design. Send us a photo of the wall and its approximate size, and we'll prepare a free quote.",
      },
      {
        q: "Which countries do you work in?",
        a: "We work worldwide. We make the first assessment remotely from the photos and measurements you send, and visit the site when needed.",
      },
    ],
    whatsappText:
      "Hello, I'd like a quote for a mural at our school. I'm sending a photo of the wall and its approximate size.",
  },
  "fabrika-duvar-resmi": {
    slug: "factory-murals",
    name: "Factory Murals",
    title: "Factory and Industrial Building Murals | Çizgi Artizm",
    description:
      "Large-scale murals that reflect your brand on factory facades, perimeter walls and staff cafeterias. Painted with scaffolding and cranes; free quote.",
    label: "For factories",
    h1: "Factory Murals",
    watermark: "FACTORY",
    lead:
      "We turn factory facades, perimeter walls and work areas into large-scale artworks that tell your brand's story and stand out from a distance.",
    cardText: "Large works on facades, perimeter walls and cafeterias that carry your brand identity.",
    introTitle: "Give your industrial building an identity",
    intro: [
      "Factory buildings are usually large, flat, single-color surfaces. That makes them ideal canvases for a brand signature that passers-by remember.",
      "We bring your logo, your products, your company's story or the landmarks of your city into the design. Indoors, we paint cafeterias, break rooms and corridors to brighten your employees' day.",
    ],
    pointsTitle: "What we do for factories",
    points: [
      { t: "Facades and perimeter walls", d: "Large-scale compositions themed around your brand or city on surfaces visible from the main road." },
      { t: "Logos and lettering", d: "Your corporate logo and slogan transferred to the wall to scale — crisp and durable." },
      { t: "Cafeterias and social areas", d: "Interior murals that bring energy to the spaces where employees spend their time." },
      { t: "Work at height", d: "We handle the entire job with our own team, including cranes, scaffolding and work at height." },
    ],
    worksTitle: "Some of our large-scale work",
    process: [
      { t: "Site survey and measurements", d: "We assess the size of the facade, the condition of the surface and whether scaffolding or a crane is needed." },
      { t: "On-brand design", d: "We prepare a sketch that fits your corporate colors and identity and present it for your approval." },
      { t: "Preparation and painting", d: "We remove loose plaster, apply primer and transfer the design to scale using a projector or the grid method." },
      { t: "Protection and handover", d: "On suitable surfaces we finish the work with a protective varnish, then hand it over." },
    ],
    faq: [
      {
        q: "Can you paint while the factory is running?",
        a: "Yes. We plan the work area with you so production and shipping aren't disrupted, and we decide where the scaffolding and crane will go during the site survey.",
      },
      {
        q: "How long does a large facade take?",
        a: "It depends on the size of the surface, the level of detail, the weather and how the wall is accessed. We share an estimated schedule together with the quote.",
      },
      {
        q: "How long does the paint last on an exterior facade?",
        a: "Outdoors we use UV- and weather-resistant acrylic and spray paints, and on suitable surfaces a protective varnish extends the life of the work. On a properly prepared surface, a mural stays vibrant for many years.",
      },
      {
        q: "Can you reproduce our logo exactly?",
        a: "Yes. We take your corporate logo and color codes, scale them to the wall and paint them with clean lines.",
      },
      {
        q: "What should I send for a quote?",
        a: "A few photos of the facade taken from the front, its approximate width and height, and the city and country where the facility is located are enough for a first quote.",
      },
    ],
    whatsappText:
      "Hello, I'd like a quote for a mural at our factory. I'm sending a photo of the facade and its approximate size.",
  },
  "kafe-restoran-duvar-resmi": {
    slug: "cafe-restaurant-murals",
    name: "Café & Restaurant Murals",
    title: "Café and Restaurant Murals | Çizgi Artizm",
    description:
      "Custom murals for café, restaurant and kiosk walls that guests love to photograph. See our work for Bubbles Cafe and RAU Cafe, and get a quote.",
    label: "For cafés & restaurants",
    h1: "Café and Restaurant Murals",
    watermark: "CAFÉ",
    lead:
      "We design and paint murals tailored to your concept — the kind guests photograph and share, and that keep your venue top of mind.",
    cardText: "Concept-driven indoor and outdoor walls that guests love to photograph.",
    introTitle: "Let your walls speak as loudly as your menu",
    intro: [
      "Walls are one of the first things that set the atmosphere of a café or restaurant. A well-designed mural conveys your style at a glance and becomes a corner guests share on social media.",
      "We design around your venue's name, menu, concept and guests. Portraits, lettering, characters or abstract compositions — we work on every surface, from interiors to exterior facades.",
    ],
    pointsTitle: "What we create for cafés and restaurants",
    points: [
      { t: "Photo walls", d: "Eye-catching walls carrying your venue's name, where guests stop to take photos." },
      { t: "Concept walls", d: "Compositions about coffee, food culture, your city or a story that's entirely your own." },
      { t: "Facades and entrances", d: "Your venue's name and logo brought to the facade with an artistic touch that stands out from the street." },
      { t: "Kiosk painting", d: "Park kiosks and small sales points painted from top to bottom and turned into a brand." },
    ],
    worksTitle: "Some of our café and restaurant work",
    process: [
      { t: "Understanding your concept", d: "We talk about your style, menu and guests and decide on the story the wall will tell." },
      { t: "Sketch", d: "We prepare a sketch in colors that suit your lighting and furniture, and get your approval." },
      { t: "Painting", d: "We plan working hours with you around your business's schedule." },
      { t: "Ready for photos", d: "We leave the area clean and hand over a wall that's ready to welcome your guests." },
    ],
    faq: [
      {
        q: "Do you work while the venue is closed?",
        a: "We plan the working hours with you. We can work while the venue is closed or on quieter days.",
      },
      {
        q: "Will the paint smell bother guests?",
        a: "Indoors we use low-odor, water-based acrylic paints, so the venue gets back to normal shortly after painting.",
      },
      {
        q: "Will a mural hold up in a busy space?",
        a: "On surfaces that need frequent cleaning, we apply a protective varnish over the mural so it's wipeable and long-lasting.",
      },
      {
        q: "Can you include our logo and venue name?",
        a: "Yes. We can work your logo, your venue's name or an item from your menu into the design, making the wall part of your brand.",
      },
      {
        q: "How is the price determined?",
        a: "It depends on the wall's area in square meters, the level of detail and whether it's indoors or outdoors. Send us a photo of the wall and its size, and we'll prepare a free quote.",
      },
    ],
    whatsappText:
      "Hello, I'd like a quote for a mural at our venue. I'm sending a photo of the wall and its approximate size.",
  },
  "avm-duvar-resmi": {
    slug: "shopping-mall-murals",
    name: "Shopping Mall Murals",
    title: "Shopping Mall Murals | Çizgi Artizm",
    description:
      "Eye-catching, photo-worthy murals for shopping mall common areas, kids' play areas and parking garages. Free quote.",
    label: "For shopping malls",
    h1: "Shopping Mall Murals",
    watermark: "MALL",
    lead:
      "We give your shopping mall an identity with murals that grab attention, guide visitors and get photographed in high-traffic areas.",
    cardText: "Large, eye-catching works for common areas, kids' play areas and parking garages.",
    introTitle: "Walls that stand out in the crowd",
    intro: [
      "Thousands of people walk the same corridors of a shopping mall every day. A mural in the right place and at the right scale becomes a spot where visitors stop, take photos and arrange to meet.",
      "We design around the mall's overall concept, its children's areas or seasonal events. We work on a wide range of surfaces, from common areas to parking levels.",
    ],
    pointsTitle: "Where we paint in shopping malls",
    points: [
      { t: "Common areas and corridors", d: "Large compositions that welcome visitors and convey the mall's concept." },
      { t: "Kids' play areas", d: "Colorful walls with characters and stories that appeal to children." },
      { t: "Parking and wayfinding", d: "Memorable markers that set levels and zones apart with colors and figures." },
      { t: "Event and campaign walls", d: "Designs for seasonal events, conceived as photo spots." },
    ],
    worksTitle: "Some of our mall and busy indoor work",
    process: [
      { t: "Space analysis", d: "Together we assess visitor flow, sightlines and the distance from which the wall will be seen." },
      { t: "Concept and sketch", d: "We prepare a design that fits the mall's identity and audience and present it to management for approval." },
      { t: "Safe execution", d: "We cordon off the work area for visitor safety and paint during hours agreed with management." },
      { t: "Handover", d: "We leave the area clean and review the work with management before handing it over." },
    ],
    faq: [
      {
        q: "Can you work while the mall is open?",
        a: "We set working hours together with mall management. When needed, we work after closing or early in the morning, and we cordon off the work area for visitor safety.",
      },
      {
        q: "Do you work in areas with high ceilings?",
        a: "Yes. Our own team handles jobs that require scaffolding and work at height; we determine access needs during the site survey.",
      },
      {
        q: "Will the design follow our brand guidelines?",
        a: "We design according to the color and typography rules in your brand guidelines and never start painting without management's approval.",
      },
      {
        q: "Do you also paint murals for seasonal events?",
        a: "Yes. We also design for seasonal events and campaigns; we choose the surface and materials together, based on how long the mural will stay up.",
      },
      {
        q: "What information do you need for a quote?",
        a: "A photo of the area, its approximate size, the city and country where the mall is located and any concept ideas you have are enough for a first quote.",
      },
    ],
    whatsappText:
      "Hello, I'd like a quote for a mural at our shopping mall. I'm sending a photo of the area and its approximate size.",
  },
  "ofis-duvar-resmi": {
    slug: "office-murals",
    name: "Office Murals",
    title: "Office Murals and Corporate Wall Art | Çizgi Artizm",
    description:
      "Murals that reflect your company culture in offices, meeting rooms and shared workspaces. Custom designs with your logo, slogan and brand colors; free quote.",
    label: "For offices",
    h1: "Office Murals",
    watermark: "OFFICE",
    lead:
      "We bring your company culture, values and brand to your walls, creating an office that employees and visitors remember.",
    cardText: "Meeting room and common area walls that reflect your culture and brand.",
    introTitle: "Make your brand visible in your office, too",
    intro: [
      "Office walls are the first surfaces that tell people who a company is. A logo at reception, a composition in the meeting room that conveys your values, or a colorful wall in the kitchen that lifts the mood can change how a workplace feels.",
      "We design using your brand colors, your slogan and your team's voice. We work cleanly and tidily, with as little disruption to your office as possible.",
    ],
    pointsTitle: "What we create for offices",
    points: [
      { t: "Reception and entrance", d: "Designs that welcome visitors and put your logo and brand identity front and center." },
      { t: "Meeting rooms", d: "Compositions that convey your company's values, vision or industry." },
      { t: "Common areas and kitchens", d: "Colorful walls that bring energy to the spaces where your team spends time." },
      { t: "Lettering and slogan walls", d: "Your company slogan or motivational lines painted in graffiti lettering." },
    ],
    worksTitle: "Some of our office and corporate work",
    process: [
      { t: "Brief", d: "We listen to what you tell us about your company, your team and the message you want the wall to convey." },
      { t: "On-brand sketch", d: "We prepare a sketch that matches your corporate colors and typography and present it for your approval." },
      { t: "Planned execution", d: "We schedule the work days to minimize disruption to your office, outside working hours if needed." },
      { t: "Handover", d: "We leave the area clean and review the work with you before handing it over." },
    ],
    faq: [
      {
        q: "Can you paint while the office is in use?",
        a: "We plan the work days with you. In rooms that can be closed off, such as meeting rooms, we can work during office hours; in open-plan areas, we can work outside office hours or on weekends.",
      },
      {
        q: "Will the paint smell affect work?",
        a: "Indoors we use low-odor, water-based acrylic paints, so the space can be used again shortly afterwards.",
      },
      {
        q: "Can you paint our logo on the wall?",
        a: "Yes. We take your logo and corporate color codes, scale them to the wall and paint them with clean lines. We also create designs that make the logo part of an artistic composition.",
      },
      {
        q: "Can you bring the same concept to our offices in other cities or countries?",
        a: "Yes. Because we work worldwide, we can bring the same concept to your offices in different locations, adapting it to each space.",
      },
      {
        q: "How do I get a quote?",
        a: "Send us a photo of the wall, its approximate size and your logo or design idea, if you have one, on WhatsApp, and we'll prepare a free quote.",
      },
    ],
    whatsappText:
      "Hello, I'd like a quote for a mural at our office. I'm sending a photo of the wall and its approximate size.",
  },
  "bina-cephe-duvar-resmi": {
    slug: "building-facade-murals",
    name: "Building Facade Murals",
    title: "Building Facade Murals and Giant Wall Art | Çizgi Artizm",
    description:
      "Giant murals on apartment, residential complex and commercial building facades, painted with scaffolding and cranes. UV- and weather-resistant paint; free quote priced per square meter.",
    label: "For building facades",
    h1: "Building Facade Murals",
    watermark: "FACADE",
    lead:
      "Using scaffolding and cranes, we turn apartment, residential complex and commercial building facades into giant murals that become landmarks of the street.",
    cardText: "Giant murals on apartment, residential and commercial facades, using scaffolding and cranes.",
    introTitle: "Facades that become street landmarks",
    intro: [
      "A blank side facade is one of the biggest canvases in a city. A well-designed mural gives a building an identity and turns it into a landmark of the street.",
      "Success on a facade depends as much on preparation and the right materials as on design. We repair and prime the surface, transfer the design to scale and paint with UV- and weather-resistant paints.",
    ],
    pointsTitle: "What we do on facades",
    points: [
      { t: "Side facades and blank walls", d: "Giant compositions themed around the city, history or nature on large windowless surfaces." },
      { t: "Residential complex and apartment entrances", d: "Entrance and garden walls that residents see every day." },
      { t: "Scaffolding and cranes", d: "We handle the entire job with our own team, including work at height." },
      { t: "Surface preparation", d: "Removing loose plaster, repairing damage and priming for a lasting base." },
    ],
    worksTitle: "Some of our facade work",
    process: [
      { t: "Site survey", d: "We assess the facade's size, the condition of the surface and whether scaffolding or a crane is needed." },
      { t: "Design and approval", d: "We prepare a sketch that suits the building's architecture and surroundings and present it to the building management or owner for approval." },
      { t: "Preparation and scaling", d: "We repair and prime the surface and transfer the design to the wall using a projector or the grid method." },
      { t: "Painting and protection", d: "We work in layers and, on suitable surfaces, apply a protective varnish to extend the life of the work." },
    ],
    faq: [
      {
        q: "Do we need approval to paint a mural on an apartment facade?",
        a: "Because the facade is a shared area, you'll need approval from the building management and any permits your local authority requires before painting begins. We clarify this step together during the site survey.",
      },
      {
        q: "How long does a facade mural last?",
        a: "Outdoors we use UV- and weather-resistant paints, prepare the surface properly and apply a protective varnish on suitable surfaces. On a properly prepared facade, a mural stays vibrant for many years.",
      },
      {
        q: "How do you work on tall buildings?",
        a: "Depending on the building's height and access conditions, we use scaffolding or a boom lift. Our own team handles the entire job, including work at height.",
      },
      {
        q: "Does the weather affect the work?",
        a: "Exterior paint isn't applied in rain or very cold weather. We plan the schedule flexibly around the weather and share an estimated timeline with the quote.",
      },
      {
        q: "How is a facade priced?",
        a: "Pricing is per square meter; the size of the facade, the condition of the surface, the level of detail and the need for scaffolding or a crane determine the price. We prepare a free quote from photos and measurements.",
      },
    ],
    whatsappText:
      "Hello, I'd like a quote for a building facade mural. I'm sending a photo of the facade and its approximate size.",
  },
  "belediye-duvar-resmi": {
    slug: "municipal-murals",
    name: "Municipal Murals",
    title: "Municipal and Public Space Murals | Çizgi Artizm",
    description:
      "Murals for municipalities: city walls, metro stations, water tanks and awareness spaces. Completed projects for İzmir Metropolitan Municipality and Metro İzmir.",
    label: "For municipalities",
    h1: "Municipal Murals",
    watermark: "CITY",
    lead:
      "We turn city walls, stations, water tanks and parks into public artworks that tell the city's story and carry a social message.",
    cardText: "City walls, metro stations, water tanks and awareness projects.",
    introTitle: "Public art that adds value to the city",
    intro: [
      "A mural in a public space reaches thousands of people every day. It strengthens the city's identity, revives neglected areas and raises awareness of social issues.",
      "For İzmir Metropolitan Municipality and Metro İzmir, we've completed projects at many scales, from water tank mascots to metro stations. The mural in the awareness space against violence toward women at Üçyol Metro Station is one of them.",
    ],
    pointsTitle: "What we create for municipalities",
    points: [
      { t: "Metro and public transport areas", d: "Murals that greet passengers at stations, stops and underpasses." },
      { t: "Water tank and mascot painting", d: "Turning water tanks into city mascots and corporate identity." },
      { t: "Awareness spaces", d: "Public works that carry a social message, created for specific days and weeks." },
      { t: "Parks, schools and transformer buildings", d: "Turning street furniture and technical structures into artworks in harmony with their surroundings." },
    ],
    worksTitle: "Some of our public space work",
    process: [
      { t: "Project and requirements", d: "Together we assess the site, the project's purpose and the institution's technical requirements." },
      { t: "Design and presentation", d: "We prepare sketches that fit the institution's identity and message and submit them to the relevant departments for approval." },
      { t: "Safe execution", d: "We separate the work area from pedestrian traffic and handle jobs that require scaffolding or cranes with our own team." },
      { t: "Handover", d: "We review the work with the institution's officials and hand it over complete." },
    ],
    faq: [
      {
        q: "Which institutions have you worked for?",
        a: "For İzmir Metropolitan Municipality we painted the water tank mascots, and at Metro İzmir stations we created the murals at Fahrettin Altay and Üçyol. You can see photos of this work in our gallery.",
      },
      {
        q: "Can you adapt an existing artwork or competition drawing to a wall?",
        a: "Yes. We can design to the institution's message ourselves or, as in the Üçyol Metro project, adapt a selected drawing to the scale of the wall.",
      },
      {
        q: "Do you paint water tanks?",
        a: "Yes. We turn water tanks into corporate colors or city mascots; the globe mascots we completed for İzmir Metropolitan Municipality are examples.",
      },
      {
        q: "How do you ensure safety when working in public spaces?",
        a: "We separate the work area from pedestrian traffic and use scaffolding or a boom lift for work at height. We plan working hours together with the institution.",
      },
      {
        q: "Do you work with municipalities in other countries?",
        a: "Yes, we work worldwide. We make the first assessment remotely from photos and measurements and visit the site when needed.",
      },
    ],
    whatsappText: "Hello, I'd like information and a quote for a mural project for our institution.",
  },
  "trafo-boyama": {
    slug: "transformer-building-painting",
    name: "Transformer Building Painting",
    title: "Transformer Building Painting and Murals | Çizgi Artizm",
    description:
      "We turn electrical transformer buildings into colorful murals the neighborhood loves. Real work from Çine, Aydın; exterior-grade paint; free quote.",
    label: "For transformer buildings",
    h1: "Transformer Building Painting",
    watermark: "TRANSFORMER",
    lead:
      "We turn gray, unnoticed transformer buildings into colorful murals the neighborhood loves and photographs.",
    cardText: "Turning transformer buildings into colorful works the neighborhood loves.",
    introTitle: "Why paint transformer buildings?",
    intro: [
      "Transformer buildings are in every neighborhood, but they're often gray, covered in tags and easy to overlook. A painted transformer building changes how its surroundings look and also deters unauthorized graffiti and posters.",
      "We've painted transformer buildings in a range of themes, from realistic animals and portraits to characters for children and local landmarks. We design to the shape of the building, treating all four sides as one whole.",
    ],
    pointsTitle: "What we do on transformer buildings",
    points: [
      { t: "One design across four sides", d: "Compositions that connect every side of the building and make sense from every angle." },
      { t: "Realistic figures", d: "Realistic animals such as jaguars, snakes and birds, as well as portraits." },
      { t: "Exterior-grade materials", d: "UV- and weather-resistant paints; protective varnish on suitable surfaces." },
      { t: "Exterior surfaces only", d: "Painting is done on the building's exterior walls; the electrical equipment is never touched." },
    ],
    worksTitle: "Some of our transformer building work",
    process: [
      { t: "Permission and site survey", d: "Together we review the status of the permit and the building's surface." },
      { t: "Theme and sketch", d: "We choose a theme that suits the area's character and prepare a sketch covering all four sides." },
      { t: "Surface preparation", d: "We remove old tags and posters, repair the surface and apply primer." },
      { t: "Painting and protection", d: "We paint with exterior-grade paints and protect the work with varnish on suitable surfaces." },
    ],
    faq: [
      {
        q: "Is permission needed to paint a transformer building?",
        a: "Transformer buildings are the responsibility of the local electricity distribution company, so the necessary permission must be obtained before painting. We discuss this step from the start when planning the project with the municipality or institution.",
      },
      {
        q: "Will painting cause a power outage?",
        a: "Painting is done only on the building's exterior walls and the electrical equipment is never touched, so the work doesn't affect the power supply.",
      },
      {
        q: "How long does a painted transformer building last?",
        a: "We use UV- and weather-resistant paints and prepare the surface properly. On suitable surfaces, a protective varnish extends the life of the work.",
      },
      {
        q: "Can you quote for several transformer buildings at once?",
        a: "Yes. We can plan the transformer buildings in a district or neighborhood under a shared theme and prepare a combined quote.",
      },
      {
        q: "How is the price of transformer building painting determined?",
        a: "The size of the building, the condition of the surface and the level of detail determine the price. Send us a photo of each side of the building, and we'll prepare a free quote.",
      },
    ],
    whatsappText:
      "Hello, I'd like a quote for painting a transformer building. I'm sending photos of the building.",
  },
  "duvar-resmi-fiyatlari": {
    slug: "mural-prices",
    name: "Mural Prices",
    title: "Mural Prices: What Determines the Cost? | Çizgi Artizm",
    description:
      "Mural prices are calculated per square meter. Learn what affects the price, send us a photo of your wall and get a free quote.",
    label: "Pricing",
    h1: "Mural Prices",
    watermark: "PRICE",
    lead:
      "Every wall is different, so instead of a fixed price list we prepare a free, project-specific quote. Here's what determines the price.",
    cardText: "What affects the price and what we need for a quote.",
    introTitle: "How is a mural priced?",
    intro: [
      "Mural prices are calculated per square meter. However, two walls of the same size can be priced differently depending on the condition of the surface, the level of detail, the height and the materials used.",
      "That's why a single per-square-meter price rarely tells the whole story. Send us a photo of your wall and its approximate size, and we'll prepare a free quote tailored to you.",
    ],
    pointsTitle: "What affects the price",
    points: [
      { t: "Square meters", d: "The total area to be painted is the basis of the price." },
      { t: "Level of detail", d: "Realistic portraits and figures take more work than flat-color graphic designs." },
      { t: "Height and access", d: "On facades that require scaffolding or a boom lift, access is reflected in the quote." },
      { t: "Surface condition", d: "Preparation such as plaster repair, cleaning and priming varies from surface to surface." },
      { t: "Indoor or outdoor", d: "Outdoors we use UV- and weather-resistant paint and, when needed, a protective varnish." },
      { t: "Location", d: "We work worldwide; for projects that require travel, transport and accommodation are factored into the quote." },
    ],
    worksTitle: "Our work at different scales",
    processTitle: "How We Prepare a Quote",
    process: [
      { t: "Photo and measurements", d: "You send a photo of the wall taken from the front and its approximate width and height." },
      { t: "Initial assessment", d: "We assess the surface, access needs and your design idea, and send you any questions we have." },
      { t: "Quote", d: "We share a project-specific price and an estimated schedule, and visit the site when needed." },
      { t: "Design and painting", d: "With your go-ahead we prepare the design, and we start painting once the sketch is approved." },
    ],
    faq: [
      {
        q: "How much does a mural cost per square meter?",
        a: "We don't have a fixed per-square-meter price, because the level of detail, the height and the condition of the surface directly change the price. We prepare a quote tailored to you from a photo of your wall and its measurements.",
      },
      {
        q: "Is there a charge for a quote?",
        a: "No. Quotes are free, and the decision is entirely yours once you have one.",
      },
      {
        q: "What information should I send for a quote?",
        a: "A photo of the wall taken from the front, its approximate width and height, whether it's indoors or outdoors, the city and country, and any design ideas or reference images you have.",
      },
      {
        q: "Do you also take on small walls?",
        a: "Yes. We take on projects of every scale, from a café corner to a giant building facade.",
      },
      {
        q: "How are projects in other cities or countries priced?",
        a: "We work worldwide. For projects that require travel, transport and accommodation are factored into the quote.",
      },
    ],
    whatsappText:
      "Hello, I'd like a price quote for a mural. I'm sending a photo of the wall and its approximate size.",
  },
};

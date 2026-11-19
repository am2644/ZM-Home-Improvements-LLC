export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author: string; source: string }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  author: string;
  heroImage: string;
  heroAlt: string;
  blocks: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wrap-around-outdoor-deck-austin",
    title: "Turning an Unused Yard Into a Wrap-Around Outdoor Living Space",
    description:
      "How ZM Home Improvements turned a neglected Austin yard corner into a wrap-around deck with built-in planters, a slatted privacy screen, and room to entertain.",
    excerpt:
      "A corner nobody used became the best seat in the house: a wrap-around deck with built-in planters, a slatted privacy screen, and space for a crowd.",
    date: "2026-11-19",
    dateLabel: "November 19, 2026",
    readTime: "3 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/instagram/post-outdoor.jpg",
    heroAlt:
      "White deck with built-in planters, a wood privacy screen, and a hanging egg chair in an Austin backyard",
    blocks: [
      {
        type: "paragraph",
        text: "Some of the best projects start with the space nobody uses. A side yard that collects leaves. A strip of concrete behind the house that only the hose reel visits. That was the starting point for this Austin outdoor project, which the homeowner summed up before the work began: “We never go out there.”",
      },
      {
        type: "paragraph",
        text: "The plan turned that corner into a wrap-around deck — a floor, a backdrop, and a reason to step outside.",
      },
      { type: "heading", text: "Design around how you want to sit outside" },
      {
        type: "paragraph",
        text: "Outdoor projects work best when they start with a simple question: what will you actually do out here? Morning coffee, dinners, a quiet drink at the end of the day, a place for plants? The answers decide the layout, the materials, and where the budget goes. Here, the goal was a low-maintenance space that felt private, held a group comfortably, and could be enjoyed without hauling furniture in and out.",
      },
      { type: "heading", text: "Let the deck do more than hold furniture" },
      {
        type: "paragraph",
        text: "Instead of a plain platform, the deck includes built-in stepped planters that double as seating and give the edge a finished look. The surface is painted a clean white, which keeps a shaded corner bright and can be refreshed down the road.",
      },
      {
        type: "paragraph",
        text: "A horizontally slatted wood screen wraps one side of the space. It blocks sightlines from the neighboring lot but still lets air and light through, and it warms up the mostly white palette.",
      },
      { type: "heading", text: "The details that make it livable" },
      {
        type: "list",
        items: [
          "Built-in planters that add greenery without eating floor space",
          "A slatted privacy screen that keeps the space open to the sky",
          "A wrap-around footprint that makes a narrow side yard feel larger",
          "A painted finish that is straightforward to maintain",
        ],
      },
      {
        type: "paragraph",
        text: "Add a hanging chair and a few pots, and an unused corner becomes the part of the yard everyone gravitates toward.",
      },
      {
        type: "paragraph",
        text: "If your backyard has a corner that never gets used, it may need less work than you think. Call or text us at (512) 560-1400, or request a free estimate online.",
      },
    ],
  },
  {
    slug: "what-austin-homeowners-say-about-remodeling",
    title: "What Austin Homeowners Say About Remodeling With ZM Home Improvements",
    description:
      "Clear communication, careful finishes, and problem-solving: what more than 40 five-star Google reviews reveal about remodeling with ZM Home Improvements in Austin, TX.",
    excerpt:
      "More than 40 five-star Google reviews point to the same strengths: clear communication, careful finishes, and a crew that treats your home with respect.",
    date: "2026-11-18",
    dateLabel: "November 18, 2026",
    readTime: "5 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/work/crestview-kitchen.jpg",
    heroAlt:
      "White kitchen with quartz countertops, tile backsplash, and stainless steel appliances in an Austin home",
    blocks: [
      {
        type: "paragraph",
        text: "A remodel is a long stretch of decisions, schedules, and people moving through your home. Homeowners rarely judge the experience by the tile alone. They remember whether the contractor answered the phone, protected the floors, and followed through on the small things. We went back through more than 40 five-star Google reviews for ZM Home Improvements, and the same themes appeared again and again.",
      },
      { type: "heading", text: "Communication comes first" },
      {
        type: "paragraph",
        text: "Zeev Machluf leads every project from the first walkthrough to the final punch list. That direct line matters when finish selections, inspection windows, and delivery dates start to overlap. Homeowners consistently mention the same thing: they knew where the project stood.",
      },
      {
        type: "quote",
        text: "Zeev always arrived with a smile and a positive out look. He’s very communicative and everything was done at a fair price. He and his crew go the extra mile!",
        author: "Raine Maggio",
        source: "Google review",
      },
      {
        type: "paragraph",
        text: "The process is built around that clarity. A walkthrough produces a practical scope and a free estimate. Samples and design selections happen before demolition, not in the middle of it. Updates keep the plan visible while the work is underway.",
      },
      {
        type: "image",
        src: "/assets/work/spa-bath.jpg",
        alt: "Walk-in shower with black-framed glass, white tile, and a patterned floor in an Austin bathroom",
        caption: "A walk-in shower and patterned tile floor in an Austin bathroom remodel.",
      },
      { type: "heading", text: "A finish that holds up close" },
      {
        type: "paragraph",
        text: "Most of the work is decided in the details — the shower niche, the line where tile meets drywall, the reveal on a cabinet door, the way a countertop edge meets a sink. The best compliments come after a homeowner has lived with the space for a while.",
      },
      {
        type: "quote",
        text: "Zeev and his team were punctual and transparent throughout the entire process. They were meticulous and clearly take pride in the work they do.",
        author: "Brett Stoltenberg",
        source: "Google review",
      },
      {
        type: "quote",
        text: "He is extremely conscientious and attentive to details. He hires skilled subcontractors and keeps on them to make sure they do a good job.",
        author: "Elizabeth Mueller",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/double-vanity.jpg",
        alt: "Bathroom with a double wood vanity, large mirror, and tub in an Austin renovation",
        caption: "A double vanity and fresh finishes in a full bathroom renovation.",
      },
      { type: "heading", text: "When a remodel throws a curveball" },
      {
        type: "paragraph",
        text: "Older Austin homes have a way of keeping secrets. Opening a wall can reveal outdated plumbing, old wiring, or framing that was never meant for a modern layout. The important part is what happens next.",
      },
      {
        type: "quote",
        text: "When challenges came up (especially with our older plumbing and subcontractor scheduling) he stepped in himself to keep things moving, which really set him apart from other contractors we’ve worked with.",
        author: "Madison Brundick",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/blue-kitchen.jpg",
        alt: "Kitchen with bold blue cabinets, tile counters, and stainless steel appliances",
        caption: "A bold blue kitchen with new cabinetry and tile counters.",
      },
      { type: "heading", text: "Respect for the home — and the people in it" },
      {
        type: "paragraph",
        text: "A remodel means having a crew in your home for weeks at a time. Punctuality, politeness, and a clean job site are not extras — they are part of the job.",
      },
      {
        type: "quote",
        text: "They were all very polite and professional and left the property clean!",
        author: "Rita S",
        source: "Google review",
      },
      {
        type: "quote",
        text: "Zeev had great communication and I was always up to date on what was happening with my bathroom remodel and exterior house painting.",
        author: "Jennifer Harris",
        source: "Google review",
      },
      {
        type: "image",
        src: "/assets/work/carport-patio.jpg",
        alt: "New carport and covered patio structure with wood framing in Austin",
        caption: "A new carport and covered patio structure built for an Austin property.",
      },
      { type: "heading", text: "What this means for your project" },
      {
        type: "paragraph",
        text: "If you are planning a kitchen, bathroom, addition, or whole-home improvement in Austin, the fundamentals stay the same:",
      },
      {
        type: "list",
        items: [
          "A walkthrough with a clear, itemized estimate",
          "Design selections and samples before construction",
          "One point of contact and regular updates during the build",
          "A final walkthrough and punch list before we call it finished",
        ],
      },
      {
        type: "paragraph",
        text: "We work across Austin and the surrounding communities. If you would like to walk through your project, call or text (512) 560-1400, or request a free estimate online.",
      },
    ],
  },
  {
    slug: "commercial-projects-austin-gym-mirror-loft-painting",
    title: "Commercial Projects in Austin: Gym Mirrors, Loft Painting, and Rental Turns",
    description:
      "Beyond kitchens and baths, ZM Home Improvements handles commercial and multi-unit work in Austin — from a gym wall mirror replacement to painting at Austin City Lofts.",
    excerpt:
      "Not every project is a kitchen or a bath. Gym fit-outs, downtown painting, and rental turnovers ask for the same thing: clean work, clear schedules, and one point of contact.",
    date: "2026-11-14",
    dateLabel: "November 14, 2026",
    readTime: "3 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/instagram/post-gym.jpg",
    heroAlt:
      "Row of treadmills in a downtown Austin gym beneath a wall-to-wall mirror with floor-to-ceiling windows",
    blocks: [
      {
        type: "paragraph",
        text: "Most of our work happens in kitchens, bathrooms, and living spaces. But homes are not the only places that need careful construction. We also take on commercial and multi-unit projects across Austin, and the habits that make a remodel go smoothly at home apply just as well to a gym floor or a downtown high-rise.",
      },
      { type: "heading", text: "A gym mirror wall, replaced around the equipment" },
      {
        type: "paragraph",
        text: "This gym sits on an upper floor with floor-to-ceiling windows and a row of treadmills facing the skyline. The wall mirror behind the equipment had to be replaced without disrupting members or pulling the treadmills out of service for long. The new mirror went in seamlessly, and the room reads the way it should: the view does the talking.",
      },
      { type: "heading", text: "Painting at Austin City Lofts" },
      {
        type: "paragraph",
        text: "We have also handled painting service work at Austin City Lofts downtown, refreshing units from the inside out. High-rise work brings its own logistics — elevators, building rules, tight windows for noisy work — and the job is as much about coordination as it is about the finish.",
      },
      { type: "heading", text: "Rental turns and multi-unit work" },
      {
        type: "paragraph",
        text: "For landlords and property managers, the brief is different again. A rental kitchen or bath needs to be durable, neutral, and ready to lease, without overspending on finishes tenants will not notice. We plan those projects around turnover dates and keep the material choices practical.",
      },
      {
        type: "quote",
        text: "Zeev the owner did a wonderful job of replacing broken ballast (fluorescent lights) in our classrooms and hallways. He changed all the electric sockets in the classroom. He charged us very reasonably and I will definitely be using ZM Home Improvements in the future.",
        author: "LaQuetha Ford",
        source: "Google review",
      },
      { type: "heading", text: "What commercial clients should expect" },
      {
        type: "list",
        items: [
          "Schedules built around operating hours and tenant needs",
          "Clean job sites and clear daily check-ins",
          "One point of contact from walkthrough to punch list",
          "Finishes chosen for daily use, not just day one",
        ],
      },
      {
        type: "paragraph",
        text: "If you manage a commercial property, gym, or rental in Austin, we are happy to walk the space and put together a free estimate. Call or text (512) 560-1400.",
      },
    ],
  },
  {
    slug: "water-damage-restoration-austin",
    title: "Water Damage Restoration: What the Rebuild Actually Takes",
    description:
      "Storms, leaks, and burst pipes leave more damage than is visible. Here is how ZM Home Improvements dries out and rebuilds water-damaged rooms in Austin.",
    excerpt:
      "Drying out is only half the job. Walls, trim, paint, flooring, and finish all have to come back — and look like nothing ever happened.",
    date: "2026-11-12",
    dateLabel: "November 12, 2026",
    readTime: "4 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/instagram/post-restoration.jpg",
    heroAlt:
      "Restored bedroom with fresh green-grey paint, white doors, and wood-look plank flooring after water damage repair in Austin",
    blocks: [
      {
        type: "paragraph",
        text: "Water damage rarely announces how far it spread. A storm pushes water under a door, a supply line lets go behind a wall, or a freeze cracks a pipe in the garage — and days later the damage shows up in baseboards, drywall, and flooring that looked fine at first. In Austin, both storms and hard freezes have a way of finding the weakest point of a house.",
      },
      { type: "heading", text: "The visible damage is the smaller part" },
      {
        type: "paragraph",
        text: "Before anything gets rebuilt, the space has to be dried out and checked. Water travels along framing and under flooring, so the scope is set by what the moisture readings say, not by what the wall looks like. Only then does the rebuild list become clear: which sections of drywall and baseboard come out, whether trim can be saved, and how far the flooring needs to go.",
      },
      { type: "heading", text: "Rebuilding the room, not just the hole" },
      {
        type: "paragraph",
        text: "A good restoration finish matches the rest of the house. That means replacing saturated drywall and baseboards, patching and re-texturing so the repair disappears, and repainting full walls so there is no visible touch-up line. Doors, trim, and fixtures go back level and square, and the flooring is matched or replaced as one continuous field.",
      },
      {
        type: "quote",
        text: "Zeev was so wonderful! He repaired water damage in my home rebuilding walls, baseboards, ceiling, and a bathroom vanity. He always showed up on time, had a wonderful and consistent crew of workers, and was responsive and patient throughout the experience. I highly recommend him!",
        author: "Amy Walters",
        source: "Google review",
      },
      { type: "heading", text: "Finishing with the next storm in mind" },
      {
        type: "paragraph",
        text: "In rooms that see moisture, material choices matter. A wood-look plank floor like the one in this restored bedroom stands up to humidity and cleans up easily, and a fresh coat of paint on repaired walls gives the whole space a clean start.",
      },
      {
        type: "paragraph",
        text: "One practical note: photograph the damage before cleanup begins. It helps with insurance paperwork and makes the scope easier to explain.",
      },
      { type: "heading", text: "What a restoration scope usually includes" },
      {
        type: "list",
        items: [
          "Dry-out and moisture checks before demolition",
          "Removal and replacement of saturated drywall, trim, and insulation",
          "Texture and paint blended into the surrounding walls",
          "Flooring repair or replacement",
          "Reset of doors, fixtures, and finishing details",
        ],
      },
      {
        type: "paragraph",
        text: "If your home has taken on water, call or text (512) 560-1400. We will walk the damage with you and put together a free estimate for the rebuild.",
      },
    ],
  },
  {
    slug: "exterior-refresh-siding-porches-curb-appeal",
    title: "Curb Appeal Season: New Siding, Porches, and a Yard Ready for Guests",
    description:
      "Fresh siding, rebuilt porches, and a simple yard plan: how ZM Home Improvements gets Austin homes ready for fall weather and holiday hosting.",
    excerpt:
      "New siding, a front porch that earns its steps, a covered patio people use, and the yard detail most homeowners skip before the first frost.",
    date: "2026-11-11",
    dateLabel: "November 11, 2026",
    readTime: "3 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/instagram/post-porch.jpg",
    heroAlt:
      "Collage of an Austin home exterior with fresh white siding, new front and back porches, and a covered patio",
    blocks: [
      {
        type: "paragraph",
        text: "Fall in Austin is short, and it arrives right when everyone starts planning to host. That makes October and November the right window to fix the things guests notice first: siding, porches, and the yard.",
      },
      { type: "heading", text: "Siding sets the baseline" },
      {
        type: "paragraph",
        text: "New siding does two jobs at once. It changes the look of the house in a single step, and it puts a fresh layer between the Texas weather and the walls behind it. On this home, clean white siding and trim made the whole exterior read brighter, and the front entry finally had a backdrop worthy of it.",
      },
      { type: "heading", text: "Porches people actually use" },
      {
        type: "paragraph",
        text: "The front porch got new steps and a covered entry, and the back of the house gained a covered patio with room for chairs and a fire pit. That second piece matters: a covered patio extends the usable square footage of a home without changing its footprint, and in Austin it makes the yard comfortable even when the sun is out.",
      },
      {
        type: "image",
        src: "/assets/work/carport-patio.jpg",
        alt: "Heavy-timber carport and covered patio structure with exposed beams in Austin",
        caption: "A heavy-timber carport and covered patio adds shade and usable outdoor space.",
      },
      { type: "heading", text: "The yard detail most people skip" },
      {
        type: "paragraph",
        text: "Before the first frost, tree care and bed maintenance do more for curb appeal than another coat of paint. A stone border around trees, topped with fresh mulch, gives the yard a finished line and protects the roots through winter. It also keeps mulch where it belongs instead of washing down the driveway with the first hard rain.",
      },
      {
        type: "list",
        items: [
          "Holds moisture from fall rain in the root zone",
          "Keeps mulch from sliding off slopes and driveways",
          "Buffers roots against a sudden freeze",
          "Gives beds a crisp edge that lasts into spring",
        ],
      },
      {
        type: "quote",
        text: "Zeev had great communication and I was always up to date on what was happening with my bathroom remodel and exterior house painting.",
        author: "Jennifer Harris",
        source: "Google review",
      },
      {
        type: "paragraph",
        text: "If you want the exterior finished before the holidays, now is the time to book. Call or text (512) 560-1400 for a free estimate.",
      },
    ],
  },
  {
    slug: "three-kitchen-remodel-directions-austin",
    title: "Three Kitchens, Three Directions: Classic White, Bold Blue, and Rental-Ready",
    description:
      "White cabinetry in one Austin kitchen, saturated blue in another, and durable neutrals in a rental — how the right direction shapes a kitchen remodel.",
    excerpt:
      "The cabinets set the direction. Everything else — counters, backsplash, hardware — follows. Three recent kitchens show how far that idea can go.",
    date: "2026-11-05",
    dateLabel: "November 5, 2026",
    readTime: "4 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/work/crestview-kitchen.jpg",
    heroAlt:
      "Kitchen with warm-white shaker cabinets, stone countertops, a tiled stone backsplash, and stainless steel appliances",
    blocks: [
      {
        type: "paragraph",
        text: "A kitchen remodel is a long list of choices, and the first decision sets the rest. Cabinet color drives the counter and backsplash conversation, which drives the hardware, the lighting, and the feel of the finished room. Three recent ZM kitchens show how different that direction can be.",
      },
      { type: "heading", text: "Classic white keeps a kitchen bright" },
      {
        type: "paragraph",
        text: "This kitchen kept its layout and let the finishes do the work: warm-white shaker cabinets, stone counters, a tiled stone backsplash, and stainless appliances. The result is bright and calm, and it will not date quickly — a direction worth considering if you plan to stay for a decade or sell in a few years.",
      },
      { type: "heading", text: "Blue makes the kitchen the personality piece" },
      {
        type: "paragraph",
        text: "In this home, saturated blue cabinetry turned a standard layout into the room everyone remembers. Tile counters and a matching backsplash keep the palette cohesive, stainless appliances add contrast, and a wood-look floor warms up the white walls.",
      },
      {
        type: "image",
        src: "/assets/work/blue-kitchen.jpg",
        alt: "Kitchen with bold blue cabinets, tile countertops and backsplash, and stainless steel appliances",
        caption: "Blue cabinetry with tile counters and backsplash in an Austin kitchen remodel.",
      },
      {
        type: "quote",
        text: "We updated our kitchen and primary bathroom with Zeev and his crew and we were very happy with the final product! Zeev always arrived with a smile and a positive out look. He’s very communicative and everything was done at a fair price.",
        author: "Raine Maggio",
        source: "Google review",
      },
      { type: "heading", text: "Rental-ready is its own brief" },
      {
        type: "paragraph",
        text: "For a rental property, the question is not what looks best on day one — it is what still looks good after a decade of tenants. White cabinetry, neutral counters, and standard appliances keep the kitchen appealing to the widest range of renters without spending on finishes nobody will notice.",
      },
      {
        type: "image",
        src: "/assets/work/rental-kitchen.jpg",
        alt: "Rental kitchen with white cabinetry, neutral countertops, and updated appliances",
        caption: "A durable, renter-friendly kitchen refresh with white cabinetry and neutral counters.",
      },
      {
        type: "quote",
        text: "He listened to our ideas, understood our objectives, had great instincts, and made practical (not costly) suggestions to improve the project.",
        author: "Cheryl Bradford",
        source: "Google review",
      },
      { type: "heading", text: "How to choose your direction" },
      {
        type: "list",
        items: [
          "Plan the cabinetry first; it sets the budget and the palette",
          "Pick counters and backsplash together, not in separate trips",
          "Decide what to keep — layout, appliances — before what to change",
          "For rentals, favor durable neutrals over trends",
        ],
      },
      {
        type: "paragraph",
        text: "Not sure which direction fits your home and budget? Call or text (512) 560-1400, or request a free estimate and we will talk it through at the walkthrough.",
      },
    ],
  },
  {
    slug: "small-space-projects-austin",
    title: "Small Spaces, Real Impact: An Under-Stair Bar, a Closet Build-Out, and a Powder Bath",
    description:
      "Three small-footprint projects that make an existing Austin home work harder — a condo bar, a built-in closet, and a powder bath refresh.",
    excerpt:
      "Not every project needs a demolition permit. Some of the highest-impact work happens in the square footage you already have.",
    date: "2026-11-01",
    dateLabel: "November 1, 2026",
    readTime: "3 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/instagram/post-bar.jpg",
    heroAlt:
      "Built-in wet bar with black cabinetry and a beverage fridge tucked beneath a staircase in an Austin condo",
    blocks: [
      {
        type: "paragraph",
        text: "Big remodels get the attention, but small projects change how a home functions every day. A dead corner becomes a place to entertain, an overstuffed closet becomes organized storage, and a tiny powder bath becomes a room guests remember. None of them require adding square footage.",
      },
      { type: "heading", text: "The square footage under the stairs" },
      {
        type: "paragraph",
        text: "This downtown Austin condo had a dead zone beneath the staircase. It became a full wet bar: black cabinetry, a stone-grey counter, a built-in beverage fridge, and a softly lit display niche for bottles. Wood treads and a steel railing above keep the staircase feeling open, and the bar reads as part of the architecture instead of an afterthought.",
      },
      { type: "heading", text: "A closet that earns its space" },
      {
        type: "paragraph",
        text: "A reach-in closet can hold a surprising amount when the interior is built for it. This build-out adds white shelving and dedicated hanging sections, sized for daily use rather than guesswork, and the white millwork keeps a small room bright.",
      },
      {
        type: "image",
        src: "/assets/work/closet-buildout.jpg",
        alt: "Built-in closet with white shelving and hanging space in an Austin home",
        caption: "A built-in closet system with white shelving and dedicated hanging space.",
      },
      { type: "heading", text: "A powder bath that feels bigger" },
      {
        type: "paragraph",
        text: "Small baths benefit from a floor plan you can see. A floating wood vanity keeps the floor visible, a round backlit mirror creates a focal point without adding clutter, and a white counter and light wall keep the room clean and open.",
      },
      {
        type: "image",
        src: "/assets/work/powder-bath.jpg",
        alt: "Powder bath with a floating wood vanity, round backlit mirror, and white countertop",
        caption: "A floating wood vanity and backlit round mirror make a small powder bath feel open.",
      },
      {
        type: "quote",
        text: "We’re very happy with our new bathroom and glad we chose Zeev and his team for the remodel. The crew was always on time, friendly, and respectful of our home.",
        author: "Jen Johnson",
        source: "Google review",
      },
      { type: "heading", text: "Why small projects pay off" },
      {
        type: "list",
        items: [
          "Unused square footage becomes functional space",
          "Smaller scopes mean shorter timelines and less disruption",
          "Built-ins and millwork add value that survives trends",
          "One room can change how the entire floor plan works",
        ],
      },
      {
        type: "paragraph",
        text: "If you have a closet, a bathroom, or a corner that could work harder, call or text (512) 560-1400 for a free estimate.",
      },
    ],
  },
  {
    slug: "primary-bath-upgrades-austin",
    title: "Primary Bath Upgrades That Hold Up: Walk-In Showers, Freestanding Tubs, and Double Vanities",
    description:
      "What goes into an Austin primary bath remodel: a walk-in shower with black-framed glass, a freestanding tub placed by the window, and a double vanity that earns its space.",
    excerpt:
      "The best primary baths are planned around daily routines: a shower you can step into, a tub that fits the room, and a vanity with room for two.",
    date: "2026-10-27",
    dateLabel: "October 27, 2026",
    readTime: "4 min read",
    author: "ZM Home Improvements",
    heroImage: "/assets/work/spa-bath.jpg",
    heroAlt:
      "Walk-in shower with black-framed glass, large-format white tile, and a patterned tile floor in an Austin bathroom",
    blocks: [
      {
        type: "paragraph",
        text: "A primary bath has to work every morning, for everyone in the house. That is a different brief than a powder room or a guest bath, and it is why the planning conversation matters as much as the tile selection. These are the upgrades we plan most often in Austin.",
      },
      { type: "heading", text: "The shower becomes the centerpiece" },
      {
        type: "paragraph",
        text: "In this renovation, the walk-in shower leads: large-format white tile, a black-framed glass enclosure, a built-in niche for daily products, and a patterned floor tile that adds interest without competing. A walk-in shower opens the room, is easier to clean than a tub surround, and works for every age in the household.",
      },
      { type: "heading", text: "A freestanding tub, placed with purpose" },
      {
        type: "paragraph",
        text: "Under a vaulted ceiling and beside the window, this freestanding tub sits on a tiled platform with room to walk around it. The placement makes the tub feel like the point of the room, not an obstacle.",
      },
      {
        type: "image",
        src: "/assets/work/freestanding-tub.jpg",
        alt: "Freestanding soaking tub on a tiled platform beneath a window in an Austin bathroom",
        caption: "A freestanding soaking tub placed by the window under a vaulted ceiling.",
      },
      { type: "heading", text: "A double vanity that earns its space" },
      {
        type: "paragraph",
        text: "A long vanity with wood cabinetry and a large mirror gives two people their own side of the counter. Updated fixtures, flooring, and a refreshed tub area bring the rest of the room up to the same standard.",
      },
      {
        type: "image",
        src: "/assets/work/double-vanity.jpg",
        alt: "Bathroom with a long double wood vanity, large mirror, and refreshed tub area",
        caption: "A long double vanity with wood cabinetry and a large mirror.",
      },
      {
        type: "quote",
        text: "Our bathroom turned out absolutely beautiful and feels like a true work of art.",
        author: "Madison Brundick",
        source: "Google review",
      },
      {
        type: "quote",
        text: "He is extremely conscientious and attentive to details. He hires skilled subcontractors and keeps on them to make sure they do a good job.",
        author: "Elizabeth Mueller",
        source: "Google review",
      },
      { type: "heading", text: "What to decide before demo day" },
      {
        type: "list",
        items: [
          "Shower-first or tub-first? The answer changes the layout",
          "Tile size and pattern: large format reads calm, patterned floors add character",
          "Vanity length and storage before counter material",
          "Lighting: mirror, ceiling, and any natural light",
        ],
      },
      {
        type: "paragraph",
        text: "Planning a primary bath remodel in Austin? Call or text (512) 560-1400, or request a free estimate — we will walk the room and map the options with you.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

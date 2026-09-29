# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\branding.spec.ts >> Visual Branding Tests >> should show logo and no text in Footer
- Location: tests\branding.spec.ts:19:3

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('footer a[href="#home"]').locator('span')
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('footer a[href="#home"]').locator('span') with timeout 5000ms
  - waiting for locator('footer a[href="#home"]').locator('span')
    14 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - navigation "Main Navigation" [ref=e5]:
      - link "S3M Global Exporters Home" [ref=e6] [cursor=pointer]:
        - /url: "#home"
        - img "S3M Logo" [ref=e8]
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link "Home" [ref=e11] [cursor=pointer]:
            - /url: "#home"
        - listitem [ref=e12]:
          - link "About" [ref=e13] [cursor=pointer]:
            - /url: "#about"
        - listitem [ref=e14]:
          - link "Produce" [ref=e15] [cursor=pointer]:
            - /url: "#produce"
        - listitem [ref=e16]:
          - link "Cold Chain" [ref=e17] [cursor=pointer]:
            - /url: "#cold-chain"
        - listitem [ref=e18]:
          - link "Reach" [ref=e19] [cursor=pointer]:
            - /url: "#reach"
        - listitem [ref=e20]:
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: "#contact"
      - button "Request a Quote" [ref=e24] [cursor=pointer]
  - main [ref=e26]:
    - generic [ref=e27]:
      - generic [ref=e28]:
        - img "Aerial view of a cabbage farm" [ref=e30]
        - img "Vibrant cluster of ripe tomatoes on the vine" [ref=e32]
        - img "Apple orchard with a dirt path" [ref=e34]
      - generic [ref=e37]:
        - generic [ref=e38]: GlobalG.A.P. Certified · Cold-Chain Ready
        - heading "Fresh from the farm, delivered to the world." [level=1] [ref=e40]:
          - text: Fresh from the farm,
          - generic [ref=e41]: delivered to the world.
        - paragraph [ref=e42]: S3M Global Exporters connects growers and markets across three continents. We source seasonal fruits and vegetables at peak freshness and move them through a temperature-controlled supply chain straight to your warehouse.
        - generic [ref=e43]:
          - link "Request a Quote" [ref=e44] [cursor=pointer]:
            - /url: "#contact"
          - link "Browse Our Produce" [ref=e47] [cursor=pointer]:
            - /url: "#produce"
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: 35+
            - paragraph [ref=e57]: Destination Markets
          - generic [ref=e58]:
            - generic [ref=e59]: 48h
            - paragraph [ref=e66]: Avg. Transit Time
          - generic [ref=e67]:
            - generic [ref=e68]: 120+
            - paragraph [ref=e74]: Partner Farms
    - generic [ref=e79]:
      - generic [ref=e80]:
        - text: Who We Are
        - paragraph [ref=e81]: We believe the best produce comes from farmers who know their land. So we buy direct, move cold, and pay fair.No middlemen. No mystery margins. Just fresh fruit and vegetables, from field to shelf, handled right.
      - generic [ref=e108]:
        - img "Colorful arrangement of fresh vegetables and olives on a dark surface" [ref=e109]
        - generic [ref=e111]:
          - generic [ref=e112]: Packing House, Nairobi
          - paragraph [ref=e118]: Every lot is hydro-cooled within two hours of harvest and graded by hand before it sees a container.
        - generic [ref=e119]: Cold-Chain Verified
      - generic [ref=e147]:
        - generic [ref=e148]:
          - paragraph [ref=e154]: 120+
          - paragraph [ref=e155]: Partner Farms
          - paragraph [ref=e156]: Across 3 continents
        - generic [ref=e157]:
          - paragraph [ref=e164]: 40K+
          - paragraph [ref=e165]: Tons / Year
          - paragraph [ref=e166]: Fresh produce moved
        - generic [ref=e167]:
          - paragraph [ref=e174]: 35+
          - paragraph [ref=e175]: Destination Markets
          - paragraph [ref=e176]: Weekly departures
        - generic [ref=e177]:
          - paragraph [ref=e182]: 98.6%
          - paragraph [ref=e183]: Fresh-on-Arrival
          - paragraph [ref=e184]: Independently audited
    - generic [ref=e186]:
      - generic [ref=e187]:
        - text: Our Produce
        - heading "Seasonal catalog, sourced at peak." [level=2] [ref=e188]
        - paragraph [ref=e189]: We export over 40 varieties of fresh fruit and vegetables. Each category has a dedicated supply manager who tracks harvest windows, quality grades, and phytosanitary requirements for every destination market.
      - generic [ref=e190]:
        - article [ref=e191]:
          - generic [ref=e192]:
            - img "Citrus" [ref=e193]
            - generic [ref=e201]: Nov – Mar
          - generic [ref=e202]:
            - heading "Citrus" [level=3] [ref=e203]
            - list [ref=e204]:
              - listitem [ref=e205]: Oranges
              - listitem [ref=e206]: Mandarins
              - listitem [ref=e207]: Lemons
              - listitem [ref=e208]: Grapefruit
            - paragraph [ref=e209]: Sourced from Egypt, Spain, and South Africa depending on season.
        - article [ref=e210]:
          - generic [ref=e211]:
            - img "Pome Fruit" [ref=e212]
            - generic [ref=e218]: Aug – Dec
          - generic [ref=e219]:
            - heading "Pome Fruit" [level=3] [ref=e220]
            - list [ref=e221]:
              - listitem [ref=e222]: Red Apples
              - listitem [ref=e223]: Green Apples
              - listitem [ref=e224]: Pears
            - paragraph [ref=e225]: Polish and Italian orchards, controlled-atmosphere storage year-round.
        - article [ref=e226]:
          - generic [ref=e227]:
            - img "Grapes" [ref=e228]
            - generic [ref=e241]: Jul – Oct
          - generic [ref=e242]:
            - heading "Grapes" [level=3] [ref=e243]
            - list [ref=e244]:
              - listitem [ref=e245]: Red Globe
              - listitem [ref=e246]: White Seedless
              - listitem [ref=e247]: Black Seedless
            - paragraph [ref=e248]: Indian and South African vineyards, packed in ventilated crates.
        - article [ref=e249]:
          - generic [ref=e250]:
            - img "Tropical" [ref=e251]
            - generic [ref=e259]: Year-round
          - generic [ref=e260]:
            - heading "Tropical" [level=3] [ref=e261]
            - list [ref=e262]:
              - listitem [ref=e263]: Mango
              - listitem [ref=e264]: Pineapple
              - listitem [ref=e265]: Banana
              - listitem [ref=e266]: Papaya
            - paragraph [ref=e267]: Hot-water treated mangoes compliant with EU and US phytosanitary rules.
        - article [ref=e268]:
          - generic [ref=e269]:
            - img "Root Vegetables" [ref=e270]
            - generic [ref=e277]: Year-round
          - generic [ref=e278]:
            - heading "Root Vegetables" [level=3] [ref=e279]
            - list [ref=e280]:
              - listitem [ref=e281]: Potatoes
              - listitem [ref=e282]: Carrots
              - listitem [ref=e283]: Onions
              - listitem [ref=e284]: Beets
            - paragraph [ref=e285]: Stored in dark, climate-controlled facilities to extend shelf life.
        - article [ref=e286]:
          - generic [ref=e287]:
            - img "Leafy & Salad" [ref=e288]
            - generic [ref=e294]: Sep – May
          - generic [ref=e295]:
            - heading "Leafy & Salad" [level=3] [ref=e296]
            - list [ref=e297]:
              - listitem [ref=e298]: Lettuce
              - listitem [ref=e299]: Spinach
              - listitem [ref=e300]: Cabbage
              - listitem [ref=e301]: Herbs
            - paragraph [ref=e302]: Hydro-cooled within two hours of harvest, shipped in refrigerated trucks.
    - generic [ref=e303]:
      - img "Refrigerated trucks in an industrial lot" [ref=e305]
      - generic [ref=e307]:
        - generic [ref=e308]:
          - generic [ref=e309]: Our Network
          - heading "Five regions. One cold chain." [level=2] [ref=e315]
          - paragraph [ref=e316]: We operate fixed weekly departures to every major produce hub. Your goods share container space with complementary produce, reducing cost per pallet without compromising temperature integrity.
        - generic [ref=e317]:
          - generic [ref=e318]:
            - paragraph [ref=e319]: 35+
            - paragraph [ref=e320]: Destination Markets
          - generic [ref=e321]:
            - paragraph [ref=e322]: 120+
            - paragraph [ref=e323]: Partner Farms
          - generic [ref=e324]:
            - paragraph [ref=e325]: 40K+
            - paragraph [ref=e326]: Tons / Year
          - generic [ref=e327]:
            - paragraph [ref=e328]: 48h
            - paragraph [ref=e329]: Avg. Transit
        - generic [ref=e330]:
          - generic [ref=e331]:
            - generic [ref=e336]:
              - heading "Western Europe" [level=3] [ref=e337]
              - paragraph [ref=e338]: 12 markets
            - paragraph [ref=e339]: Rotterdam, Hamburg, Felixstowe
          - generic [ref=e341]:
            - generic [ref=e346]:
              - heading "Middle East" [level=3] [ref=e347]
              - paragraph [ref=e348]: 8 markets
            - paragraph [ref=e349]: Jebel Ali, Doha, Jeddah
          - generic [ref=e351]:
            - generic [ref=e356]:
              - heading "East Asia" [level=3] [ref=e357]
              - paragraph [ref=e358]: 7 markets
            - paragraph [ref=e359]: Singapore, Hong Kong, Tokyo
          - generic [ref=e361]:
            - generic [ref=e366]:
              - heading "North America" [level=3] [ref=e367]
              - paragraph [ref=e368]: 3 markets
            - paragraph [ref=e369]: Los Angeles, New York, Toronto
          - generic [ref=e371]:
            - generic [ref=e376]:
              - heading "East Africa" [level=3] [ref=e377]
              - paragraph [ref=e378]: 5 markets
            - paragraph [ref=e379]: Mombasa, Djibouti, Dar es Salaam
    - generic [ref=e382]:
      - generic [ref=e383]:
        - text: Cold-Chain Process
        - heading "From field to shelf, temperature-locked." [level=2] [ref=e384]
        - paragraph [ref=e385]: Freshness is a function of time and temperature. Our six-step process controls both, with data loggers tracking every pallet from harvest to handover.
      - generic [ref=e386]:
        - generic [ref=e387]:
          - generic [ref=e388]: "01"
          - heading "Harvest & Field Grading" [level=3] [ref=e394]
          - paragraph [ref=e395]: Produce is hand-picked at optimal maturity and graded in the field. Our agronomists verify brix levels, size, and defect thresholds before anything leaves the farm.
        - generic [ref=e397]:
          - generic [ref=e398]: "02"
          - heading "Quality Inspection" [level=3] [ref=e404]
          - paragraph [ref=e405]: "Each lot passes a second inspection at our packing house: pesticide residue testing, visual grading, and GlobalG.A.P. compliance verification."
        - generic [ref=e407]:
          - generic [ref=e408]: "03"
          - heading "Pre-Cooling & Packing" [level=3] [ref=e415]
          - paragraph [ref=e416]: Produce is hydro-cooled or forced-air cooled within hours of harvest, then packed in category-appropriate packaging with temperature loggers.
        - generic [ref=e418]:
          - generic [ref=e419]: "04"
          - heading "Reefer Loading" [level=3] [ref=e425]
          - paragraph [ref=e426]: Pallets are loaded into pre-cooled reefer containers. Set-point temperatures are calibrated per produce type and locked for the entire voyage.
        - generic [ref=e428]:
          - generic [ref=e429]: "05"
          - heading "Phytosanitary & Customs" [level=3] [ref=e435]
          - paragraph [ref=e436]: We prepare phytosanitary certificates, certificates of origin, and import documentation before departure to prevent port-side delays.
        - generic [ref=e438]:
          - generic [ref=e439]: "06"
          - heading "Destination Delivery" [level=3] [ref=e446]
          - paragraph [ref=e447]: On arrival, cold-chain integrity is verified against logger data. We coordinate last-mile delivery to your DC, wholesale market, or retail depot.
    - generic [ref=e449]:
      - generic [ref=e450]:
        - text: Why S3M
        - heading "Six reasons buyers stay with us." [level=2] [ref=e451]
        - paragraph [ref=e452]: "We earn repeat business the hard way: by showing up on time, every time, with produce that passes inspection on arrival."
      - generic [ref=e453]:
        - generic [ref=e454]:
          - heading "GlobalG.A.P. Certified" [level=3] [ref=e459]
          - paragraph [ref=e460]: Every partner farm is audited annually. We maintain full traceability from pallet back to field lot.
        - generic [ref=e461]:
          - heading "48-Hour Average Transit" [level=3] [ref=e466]
          - paragraph [ref=e467]: Air freight for premium perishables, reefer containers for the rest. We pick the route that fits the shelf life.
        - generic [ref=e468]:
          - heading "Category Specialists" [level=3] [ref=e473]
          - paragraph [ref=e474]: A dedicated supply manager per produce category who knows the harvest calendar and import rules cold.
        - generic [ref=e475]:
          - heading "Real-Time Tracking" [level=3] [ref=e479]
          - paragraph [ref=e480]: Temperature logger data and shipment status available through a client portal, updated at every checkpoint.
        - generic [ref=e481]:
          - heading "Fair-Trade Sourcing" [level=3] [ref=e486]
          - paragraph [ref=e487]: We pay farm-gate prices that keep growers profitable. No middlemen, no opaque margins.
        - generic [ref=e488]:
          - heading "Transparent Pricing" [level=3] [ref=e492]
          - paragraph [ref=e493]: FOB or CIF quotes broken down by line item. You see what you are paying for, line by line.
    - generic [ref=e498]:
      - generic [ref=e499]:
        - text: Client Voices
        - heading "What produce buyers tell us." [level=2] [ref=e500]
        - paragraph [ref=e501]: We work with importers, wholesalers, and retail chains across five regions. Here is what matters to them.
      - generic [ref=e502]:
        - generic [ref=e503]:
          - paragraph [ref=e515]: We switched our citrus supply to S3M two seasons ago. Their Valencia oranges arrive with a consistent brix of 11-12 and a shelf life that gives our retail customers three extra days. The temperature logger data comes with every shipment.
          - generic [ref=e516]:
            - generic [ref=e517]: AM
            - generic [ref=e518]:
              - heading "Andreas Müller" [level=4] [ref=e519]
              - paragraph [ref=e520]: Head of Fresh, Müller Fruchtimport GmbH
              - paragraph [ref=e521]: Hamburg, Germany
        - generic [ref=e522]:
          - paragraph [ref=e534]: What I appreciate is the honesty. When a mango crop is delayed by monsoon, S3M tells us a week ahead, not on the day. That kind of communication lets us manage our promotions without scrambling.
          - generic [ref=e535]:
            - generic [ref=e536]: SC
            - generic [ref=e537]:
              - heading "Sarah Chen" [level=4] [ref=e538]
              - paragraph [ref=e539]: Procurement Manager, FreshMart Asia
              - paragraph [ref=e540]: Singapore
        - generic [ref=e541]:
          - paragraph [ref=e553]: We import onions and potatoes from S3M year-round. Their packing house standards are visible in the product. Consistent size, minimal bruising, and the documentation is always complete before the container clears customs.
          - generic [ref=e554]:
            - generic [ref=e555]: KR
            - generic [ref=e556]:
              - heading "Khalid Al-Rashid" [level=4] [ref=e557]
              - paragraph [ref=e558]: Director, Al-Rashid Trading Est.
              - paragraph [ref=e559]: Dubai, UAE
    - generic [ref=e561]:
      - generic [ref=e562]:
        - generic [ref=e563]: Get in Touch
        - heading "Tell us what you need. We will quote it." [level=2] [ref=e565]
        - paragraph [ref=e566]: Send us your product list, volume, and destination port. You will receive a detailed FOB or CIF quote within 24 hours.
      - generic [ref=e567]:
        - generic [ref=e568]:
          - generic [ref=e569]:
            - heading "Get in touch" [level=3] [ref=e570]
            - paragraph [ref=e571]: Reach out via any channel below. We typically reply within one business day.
          - generic [ref=e572]:
            - link [ref=e573] [cursor=pointer]:
              - /url: mailto:sales@s3mglobalexporters.com
            - link [ref=e578] [cursor=pointer]:
              - /url: tel:+97140000000
            - link [ref=e582] [cursor=pointer]:
              - /url: https://maps.google.com/?q=Business+Bay+Dubai
        - generic [ref=e745]:
          - generic [ref=e746]:
            - heading "Request a Quote" [level=3] [ref=e747]
            - paragraph [ref=e748]: Fields marked with * are required.
          - generic [ref=e751]:
            - generic [ref=e752]:
              - generic [ref=e753]: Full Name *
              - textbox "John Doe" [ref=e754]
            - generic [ref=e755]:
              - generic [ref=e756]: Company
              - textbox "Your Company Ltd." [ref=e757]
          - generic [ref=e758]:
            - generic [ref=e759]: Email Address *
            - textbox "john@company.com" [ref=e760]
          - generic [ref=e761]:
            - generic [ref=e762]: Produce Category
            - combobox [ref=e763]:
              - option "Select a category" [selected]
              - option "Citrus"
              - option "Pome Fruit (Apples, Pears)"
              - option "Grapes"
              - option "Tropical Fruit"
              - option "Root Vegetables"
              - option "Leafy & Salad"
              - option "Mixed / Multiple"
          - generic [ref=e764]:
            - generic [ref=e765]: Message *
            - textbox "Include volume, destination port, and delivery timeline..." [ref=e766]
          - button "Send Request" [ref=e767] [cursor=pointer]
  - contentinfo [ref=e770]:
    - img "Aerial view of a vibrant vegetable farm" [ref=e772]
    - generic [ref=e774]:
      - link "S3M Global Exporters Home" [ref=e775] [cursor=pointer]:
        - /url: "#home"
        - img "S3M Logo" [ref=e777]
      - paragraph [ref=e778]: Fresh fruit and vegetable export from farm-direct sourcing to cold-chain delivery. Serving 35+ markets across five regions.
      - generic [ref=e779]:
        - link "sales@s3mglobalexporters.com" [ref=e780] [cursor=pointer]:
          - /url: mailto:sales@s3mglobalexporters.com
        - link "+971 4 000 0000" [ref=e784] [cursor=pointer]:
          - /url: tel:+97140000000
        - generic [ref=e787]: Trade Center, Business Bay, Dubai, UAE
      - generic [ref=e791]:
        - generic [ref=e792]:
          - heading "Company" [level=4] [ref=e793]
          - list [ref=e794]:
            - listitem [ref=e795]:
              - link "About Us" [ref=e796] [cursor=pointer]:
                - /url: "#about"
            - listitem [ref=e797]:
              - link "Cold-Chain Process" [ref=e798] [cursor=pointer]:
                - /url: "#process"
            - listitem [ref=e799]:
              - link "Our Network" [ref=e800] [cursor=pointer]:
                - /url: "#reach"
            - listitem [ref=e801]:
              - link "Contact" [ref=e802] [cursor=pointer]:
                - /url: "#contact"
        - generic [ref=e803]:
          - heading "Produce" [level=4] [ref=e804]
          - list [ref=e805]:
            - listitem [ref=e806]:
              - link "Citrus" [ref=e807] [cursor=pointer]:
                - /url: "#produce"
            - listitem [ref=e808]:
              - link "Pome Fruit" [ref=e809] [cursor=pointer]:
                - /url: "#produce"
            - listitem [ref=e810]:
              - link "Grapes" [ref=e811] [cursor=pointer]:
                - /url: "#produce"
            - listitem [ref=e812]:
              - link "Tropical" [ref=e813] [cursor=pointer]:
                - /url: "#produce"
        - generic [ref=e814]:
          - heading "Resources" [level=4] [ref=e815]
          - list [ref=e816]:
            - listitem [ref=e817]:
              - link "Request a Quote" [ref=e818] [cursor=pointer]:
                - /url: "#contact"
            - listitem [ref=e819]:
              - link "Seasonal Calendar" [ref=e820] [cursor=pointer]:
                - /url: "#produce"
            - listitem [ref=e821]:
              - link "Certifications" [ref=e822] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e823]:
              - link "Track Shipment" [ref=e824] [cursor=pointer]:
                - /url: "#"
      - generic [ref=e825]:
        - link "LinkedIn" [ref=e826] [cursor=pointer]:
          - /url: "#"
        - link "Twitter" [ref=e831] [cursor=pointer]:
          - /url: "#"
        - link "Facebook" [ref=e834] [cursor=pointer]:
          - /url: "#"
        - link "Instagram" [ref=e837] [cursor=pointer]:
          - /url: "#"
      - generic [ref=e842]:
        - paragraph [ref=e843]: © 2026 S3M Global Exporters. All rights reserved.
        - generic [ref=e844]: ·
        - link "Privacy Policy" [ref=e845] [cursor=pointer]:
          - /url: "#"
        - generic [ref=e846]: ·
        - link "Terms of Service" [ref=e847] [cursor=pointer]:
          - /url: "#"
      - link [ref=e848] [cursor=pointer]:
        - /url: "#home"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Visual Branding Tests', () => {
  4  |   // Using the port identified in the logs
  5  |   const BASE_URL = 'http://localhost:5174';
  6  | 
  7  |   test('should show logo and no text in Navbar', async ({ page }) => {
  8  |     await page.goto(BASE_URL);
  9  | 
  10 |     const logo = page.locator('header img');
  11 |     await expect(logo).toBeVisible();
  12 |     await expect(logo).toHaveAttribute('src', '/s3mlogo.png');
  13 | 
  14 |     const logoLink = page.locator('header a[href="#home"]');
  15 |     const spansInLogo = logoLink.locator('span');
  16 |     await expect(spansInLogo).toHaveCount(0);
  17 |   });
  18 | 
  19 |   test('should show logo and no text in Footer', async ({ page }) => {
  20 |     await page.goto(BASE_URL);
  21 |     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  22 | 
  23 |     // Use a more specific selector to avoid the background image in the footer
  24 |     const footerLogo = page.locator('footer a[href="#home"] img');
  25 |     await expect(footerLogo).toBeVisible();
  26 |     await expect(footerLogo).toHaveAttribute('src', '/s3mlogo.png');
  27 | 
  28 |     const footerLogoLink = page.locator('footer a[href="#home"]');
  29 |     const spansInFooterLogo = footerLogoLink.locator('span');
> 30 |     await expect(spansInFooterLogo).toHaveCount(0);
     |                                     ^ Error: expect(locator).toHaveCount(expected) failed
  31 |   });
  32 | });
```
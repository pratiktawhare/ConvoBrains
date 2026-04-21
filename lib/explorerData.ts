// ── Type definitions ──

export type StageTag = "tw" | "tk" | "ts";

export interface Stage {
  t: string;
  s: string;
  tag: StageTag;
  tl: string;
  prob: string;
  does: string;
  ex: string;
  sell: string;
}

export interface IndustryStat {
  num: string;
  desc: string;
}

export interface IndustryMeta {
  problem: string;
  problemSub: string;
  stats: IndustryStat[];
}

export interface Industry {
  name: string;
  tagline: string;
  touchpoints: string[];
  meta: IndustryMeta;
  steps?: Stage[];
  new?: Stage[];
  returning?: Stage[];
  lapsed?: Stage[];
}

export interface CdpType {
  label: string;
  badgeText: string;
  badgeVariant: "voice" | "nonvoice" | "both";
  industries: Record<string, Industry>;
}

// ── Badge colors per variant ──

export const badgeColors: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  voice: { bg: "#E0F2FE", border: "#38BDF8", text: "#0C4A6E" },
  nonvoice: { bg: "#EDE9FE", border: "#A78BFA", text: "#4C1D95" },
  both: { bg: "#DBEAFE", border: "#60A5FA", text: "#1E3A5F" },
};

// ── Tag colors ──

export const tagColors: Record<
  StageTag,
  { bg: string; text: string }
> = {
  tw: { bg: "#DBEAFE", text: "#1E40AF" },
  tk: { bg: "#E0F2FE", text: "#0C4A6E" },
  ts: { bg: "#F1F5F9", text: "#64748B" },
};

// ── CDP types + industries ──

export const cdpTypes: Record<string, CdpType> = {
  // ═══════════════════════════════════════
  // NON-VOICE CDP
  // ═══════════════════════════════════════
  nonvoice: {
    label: "Non-voice CDP",
    badgeText: "Non-voice",
    badgeVariant: "nonvoice",
    industries: {
      ecommerce: {
        name: "E-commerce / DTC retail",
        tagline:
          "Turn browsing signals and purchase history into personalised re-engagement — without a single phone call.",
        touchpoints: [
          "Cart abandonment email",
          "Browse retargeting ads",
          "Lapsed buyer push",
          "Replenishment reminder",
          "Price drop alert",
          "Wishlist nudge",
          "Post-purchase upsell",
        ],
        meta: {
          problem:
            "D2C brands lose 70\u201380% of first-time visitors without a purchase. Of those who do buy, 60% never return. The difference between a 1x buyer and a 3x buyer is almost always what happened in the 48 hours after the first order.",
          problemSub:
            "The revenue gap is not in acquisition \u2014 it is in what you do (or do not do) the moment after someone engages.",
          stats: [
            {
              num: "68%",
              desc: "of cart abandonments receive a generic \u2018you left something behind\u2019 email \u2014 same message regardless of intent",
            },
            {
              num: "3x",
              desc: "higher LTV from buyers who receive a personalised post-purchase sequence vs a standard thank-you email",
            },
            {
              num: "\u20B90",
              desc: "incremental revenue from win-back campaigns sent to lapsed buyers who were waiting for a sale anyway",
            },
          ],
        },
        steps: [
          {
            t: "Anonymous browse",
            s: "User lands, browses, no login",
            tag: "ts",
            tl: "Not our wedge",
            prob: "No identity \u2014 just a cookie. No conversation to mine.",
            does: "We flag this honestly. Our value starts at the first known interaction.",
            ex: "User browses sneakers three times. No login, no signal for us yet.",
            sell: "\u201CWe\u2019re honest: anonymous traffic isn\u2019t where we add value. The moment they identify \u2014 that\u2019s us.\u201D",
          },
          {
            t: "Cart abandonment",
            s: "Item added, checkout not completed",
            tag: "tk",
            tl: "Core activation",
            prob: "Generic \u2018you left something behind\u2019 email goes to every abandoner equally.",
            does: "Behavioural profile scores intent. High-intent gets a direct discount trigger. Hesitant gets a social proof email. First-time gets a trust-building sequence.",
            ex: "User added \u20B93200 sneakers, viewed returns policy twice. ConvoBrains sends: \u2018Free returns, no questions asked\u2019 \u2014 not a discount.",
            sell: "\u201CNot every cart abandoner needs 10% off. Some just needed reassurance.\u201D",
          },
          {
            t: "Browse retargeting",
            s: "Product views without purchase",
            tag: "tw",
            tl: "We differentiate",
            prob: "Retargeting ads show the exact product they viewed. CTR is low, frequency is annoying.",
            does: "Category affinity profile fires complementary product ads. Viewed 3 running shoes \u2014 serve trail shorts and socks, not the same shoe.",
            ex: "User browsed 4 protein powders. Retargeting serves the protein shaker bundle, not another powder ad.",
            sell: "\u201CShowing people what they already decided not to buy is not retargeting. It\u2019s stalking.\u201D",
          },
          {
            t: "First purchase",
            s: "Order placed",
            tag: "tk",
            tl: "Core activation",
            prob: "Thank-you email is the same for a \u20B9300 buyer and a \u20B93000 buyer.",
            does: "Purchase value, category, and browsing depth create a post-purchase profile. Upsell and loyalty messages are sized to match.",
            ex: "\u20B92800 first skincare order. ConvoBrains triggers: loyalty enrolment + complementary product email at day 3, not day 0.",
            sell: "\u201CYour best first-time buyers get the same email as someone who bought lip balm.\u201D",
          },
          {
            t: "Post-purchase silence",
            s: "No repeat order in 45 days",
            tag: "tw",
            tl: "We differentiate",
            prob: "Day 30 re-engagement blast goes to everyone equally.",
            does: "Replenishment window predicted from category + purchase size. Push fires at the right moment per product type.",
            ex: "User bought 30-day protein supply on day 1. ConvoBrains fires a replenishment push on day 27 \u2014 not day 30 generic blast.",
            sell: "\u201CIf they bought a 30-day supply, you know exactly when they\u2019ll run out.\u201D",
          },
          {
            t: "Price drop / back-in-stock",
            s: "Wishlist or view signal exists",
            tag: "tw",
            tl: "We differentiate",
            prob: "Price drop alerts go to everyone who ever viewed a product.",
            does: "Profile filters: high-intent wishlisters get instant push. Low-intent viewers get email. Price-sensitive profile gets the drop highlighted.",
            ex: "User viewed a jacket 4 times, added to wishlist. Price drops \u20B9500. Instant push: \u2018your wishlist item just dropped.\u2019",
            sell: "\u201CA price drop alert is most powerful to the person who almost bought it. You\u2019re sending it to everyone.\u201D",
          },
          {
            t: "Lapsed buyer win-back",
            s: "No order in 90+ days",
            tag: "tk",
            tl: "Core activation",
            prob: "Same discount blast to all lapsed buyers. No understanding of why they lapsed.",
            does: "Exit profile built from last browse + purchase pattern. Category shift, competitor hint, or price sensitivity \u2014 each gets a different message.",
            ex: "Last purchase was in sale period. Lapse happened post-sale. ConvoBrains waits for next sale event to re-engage \u2014 not a mid-season blast.",
            sell: "\u201CSome lapsed buyers are just waiting for your next sale. You\u2019re wasting margins on mid-season win-backs.\u201D",
          },
        ],
      },

      subbox: {
        name: "Subscription boxes & CPG",
        tagline: "Detect churn risk before it hits cancellation and retain subscribers with behaviour-matched interventions.",
        touchpoints: ["Churn-risk SMS", "Skip-detection email", "Pause-to-cancel intervention", "Loyalty tier reminder", "Replenishment nudge", "Customisation prompt"],
        meta: {
          problem: "Subscription box brands lose 20\u201330% of subscribers every month. Most of them skipped once or twice before cancelling \u2014 and nobody acted on those skips.",
          problemSub: "The churn signal existed weeks before the cancel. The system was not listening.",
          stats: [
            { num: "2 skips", desc: "is the average warning before a subscriber cancels \u2014 almost no brand has an automatic response to the second skip" },
            { num: "40%", desc: "of pause requests convert to cancellations because brands treat pause and cancel the same way" },
            { num: "80%", desc: "of win-back campaigns lead with a discount \u2014 even when the subscriber left due to poor curation fit, not price" },
          ],
        },
        steps: [
          { t: "Skip signal", s: "Subscriber skips a delivery", tag: "tk", tl: "Core activation", prob: "Skip is treated as neutral. No follow-up, no investigation.", does: "First skip is monitored. Second skip in a row triggers a satisfaction check. Profile tags: overstock, dissatisfaction, or lifestyle change.", ex: "Subscriber skips month 2 and 3. ConvoBrains sends a curation refresh prompt: \u2018Has your taste changed? Update your preferences.\u2019 Not a skip reminder.", sell: "\u201CTwo skips in a row is a churn signal, not an inventory preference.\u201D" },
          { t: "Pause request", s: "Subscriber pauses subscription", tag: "tk", tl: "Core activation", prob: "Pause accepted. No attempt to understand reason or intervene.", does: "Pause reason \u2014 price, travel, overstock \u2014 shapes the intervention. Overstock pause gets a \u2018skip next, not pause\u2019 nudge. Price pause gets a downgrade option.", ex: "User pauses citing \u2018too much stuff.\u2019 ConvoBrains offers: \u2018Skip the next 2 months instead \u2014 your subscription stays active, no charge.\u2019", sell: "\u201CA pause is easier to reverse than a cancel. Most brands treat them the same.\u201D" },
          { t: "Cancel attempt", s: "Cancellation flow started", tag: "tk", tl: "Core activation", prob: "Cancel flow shows one generic retention offer.", does: "Full behaviour profile informs the retention offer. Long-tenure subscriber gets a loyalty acknowledgement. Recent joiner gets a curation promise. Price-citer gets a plan downgrade.", ex: "12-month subscriber starts cancelling. Offer: \u2018You\u2019ve been with us for a year \u2014 here\u2019s a loyalty pause with no charge for 2 months.\u2019", sell: "\u201CA 12-month subscriber who cancels deserves a different conversation than someone who signed up last week.\u201D" },
          { t: "Post-box silence", s: "No engagement after delivery", tag: "tw", tl: "We differentiate", prob: "Delivery confirmed, nothing happens.", does: "No-engagement after delivery is a dissatisfaction signal. A review request + curation refresh fires before the next box.", ex: "Box delivered, no social share, no review, no app open. ConvoBrains sends: \u2018How\u2019d we do? Tell us what to swap next time.\u2019", sell: "\u201CAn unboxing that generates zero engagement is a warning. You\u2019re not listening to it.\u201D" },
          { t: "Lapsed or churned subscriber", s: "Cancelled 60+ days ago", tag: "tk", tl: "Core activation", prob: "Generic come-back discount. No personalisation.", does: "Exit reason profile shapes win-back. Price exit gets a new plan offer. Curation exit gets a \u2018meet your new curator\u2019 message. Lifestyle change gets a season-relevant re-invite.", ex: "Subscriber left citing poor curation fit. Win-back: \u2018We rebuilt how we match products to your preferences \u2014 here\u2019s a free first box on us.\u2019", sell: "\u201CYou\u2019re offering discounts to someone who left because the product didn\u2019t fit them. Price wasn\u2019t the problem.\u201D" },
        ],
        lapsed: [
          { t: "Exit reason win-back sequencing", s: "Cancelled subscriber \u2014 reason profiled", tag: "tk", tl: "Core activation", prob: "Same discount or \u2018come back\u2019 email to all churned subscribers regardless of exit reason.", does: "Exit survey language + last behaviour profile determine win-back message, timing, and offer type.", ex: "Subscriber left citing poor curation fit. Win-back: \u2018We rebuilt how we match products to your preferences \u2014 free first box, no commitment.\u2019", sell: "\u201CYou\u2019re offering discounts to someone who left because the product didn\u2019t fit them. Price wasn\u2019t the problem.\u201D" },
          { t: "Life-stage re-invite", s: "Seasonal or lifestyle context changes", tag: "tw", tl: "We differentiate", prob: "Win-back timing is arbitrary \u2014 no connection to when the customer\u2019s situation might have changed.", does: "Lapse reason profiled as lifestyle-related (travel, budget, overstock). Re-engage when context signals a likely return.", ex: "Member paused for \u2018too much stuff\u2019 in Jan. By March buying signals pick up. Re-invite: \u2018Back to normal? Your subscription is ready when you are.\u2019", sell: "\u201CA member who paused because of overstock will be ready again in 6 weeks. You don\u2019t know that.\u201D" },
        ],
      },

      beauty: {
        name: "Beauty & personal care",
        tagline: "Drive replenishment, loyalty, and cross-sell through purchase pattern intelligence \u2014 no call centre needed.",
        touchpoints: ["Replenishment push", "Loyalty points expiry", "New product personalised email", "Post-purchase cross-sell", "Skin quiz re-engagement", "Birthday offer"],
        meta: {
          problem: "Beauty brands have one of the highest replenishment rates of any category \u2014 and one of the worst replenishment capture rates. Most customers run out and reorder from wherever is fastest.",
          problemSub: "You are losing repeat purchases you already earned because your reminders fire on a calendar, not on the product lifecycle.",
          stats: [
            { num: "Day 30", desc: "is when most beauty brands send a replenishment reminder \u2014 even for a 50ml serum that lasts 45 days" },
            { num: "1 step", desc: "is typically missing from a loyal skincare buyer routine \u2014 and brands almost never identify and fill it" },
            { num: "3x", desc: "higher retention among loyalty members who are told exactly what they can redeem \u2014 vs those who just see a points balance" },
          ],
        },
        steps: [
          { t: "First purchase", s: "Skincare, haircare, or makeup order", tag: "tw", tl: "We differentiate", prob: "Same thank-you email regardless of category or spend.", does: "Category, skin type tags (from quiz or product choice), and order value shape the post-purchase sequence.", ex: "User buys a Vitamin C serum. ConvoBrains fires: day 3 usage tips, day 14 \u2018how\u2019s your glow?\u2019 check-in, day 28 replenishment prediction.", sell: "\u201CSomeone who bought a serum needs a usage journey, not a generic thank-you.\u201D" },
          { t: "Replenishment window", s: "Product lifecycle nearing end", tag: "tk", tl: "Core activation", prob: "Replenishment reminder on a fixed 30-day schedule regardless of product.", does: "Product volume + category usage rate predicts replenishment window per SKU. Serum fires at day 45. Shampoo fires at day 28.", ex: "User bought a 50ml serum. Usage rate for that SKU is 42 days. Push fires on day 39: \u2018Your serum is probably running low.\u2019", sell: "\u201CA moisturiser runs out in 2 months. A lip balm in 3 weeks. Your reminder schedule doesn\u2019t know the difference.\u201D" },
          { t: "Loyalty points expiry", s: "Points about to lapse", tag: "tw", tl: "We differentiate", prob: "Expiry reminder goes to everyone equally. No spend nudge.", does: "Points value + purchase history compute the best redemption suggestion. High-spend user gets a premium product hint. Occasional buyer gets the easiest redemption path.", ex: "User has 420 points, buys face wash regularly. Email: \u2018You\u2019re 80 points from a free face wash \u2014 one order away.\u2019", sell: "\u201CTelling someone they have expiring points isn\u2019t enough. Tell them what they can get with them.\u201D" },
          { t: "Cross-sell opportunity", s: "Purchased one category, adjacent not tried", tag: "tk", tl: "Core activation", prob: "Cross-sell emails show bestsellers, not profile-matched products.", does: "Category ownership map identifies the biggest adjacent gap. Skincare buyer who hasn\u2019t bought SPF gets SPF cross-sell.", ex: "User has bought face wash, serum, and toner. Never bought SPF. Email: \u2018Your routine is missing one step \u2014 the most important one.\u2019", sell: "\u201CYou know exactly which step in their routine is missing. Your email shows them your top 10 products.\u201D" },
          { t: "Lapsed buyer", s: "No order in 75 days", tag: "tk", tl: "Core activation", prob: "Generic win-back discount to all lapsed buyers.", does: "Replenishment overdue signal + category preference shape the win-back. Replenishment lapse gets a restocking angle.", ex: "User\u2019s serum replenishment is 15 days overdue. Win-back: \u2018Still using your old serum? Time to restock \u2014 here\u2019s 15% off.\u2019", sell: "\u201CA lapsed buyer whose product ran out 2 weeks ago needs a restock nudge, not a comeback discount.\u201D" },
        ],
        lapsed: [
          { t: "Replenishment-overdue win-back", s: "Lapsed buyer whose product has likely run out", tag: "tk", tl: "Core activation", prob: "Win-back email sent on a generic 60-day timer, not aligned to the actual product lifecycle.", does: "Purchase date + SKU usage rate predicts exact restock window. Win-back fires at peak replenishment moment.", ex: "Bought a 50ml serum 43 days ago (42-day average usage). Push: \u2018Running low? Your serum is probably nearly gone \u2014 restock now.\u2019", sell: "\u201CA lapsed buyer whose product ran out 2 weeks ago needs a restock nudge, not a come-back discount.\u201D" },
          { t: "Routine-gap re-engagement", s: "Lapsed buyer missing a category step", tag: "tw", tl: "We differentiate", prob: "Win-back shows generic bestsellers \u2014 not connected to the buyer\u2019s existing routine.", does: "Purchase history identifies the missing routine step. Win-back highlights the gap in their specific regimen.", ex: "Buyer has serum, toner, moisturiser \u2014 never bought SPF. Lapse win-back: \u2018Your routine is one step short. Here\u2019s the most important one.\u2019", sell: "\u201CYou know exactly which step in their routine is missing. Your win-back showed them your top 10 products.\u201D" },
        ],
      },

      food: {
        name: "Food delivery & QSR apps",
        tagline: "Re-engage dormant orderers and grow frequency with geo-triggered and craving-matched messaging.",
        touchpoints: ["Dormant orderer push", "Favourite item back-in-stock", "Geo-triggered promo", "Free delivery win-back", "Reorder reminder", "Lunch hour nudge"],
        meta: {
          problem: "Food delivery apps have some of the highest churn in any consumer category. A user who ordered twice a week and goes quiet for 10 days is almost always gone permanently \u2014 and the re-engagement push looks exactly the same as the one sent to someone who just got busy.",
          problemSub: "The difference between a lapsed user and a churned user is one personalised push sent on the right day.",
          stats: [
            { num: "10 days", desc: "of silence is the average point-of-no-return for a food delivery user \u2014 most brands wait 30 days to act" },
            { num: "Friday 7pm", desc: "example: a user who always orders biryani on Friday evenings needs a Thursday nudge \u2014 not a generic Tuesday promo" },
            { num: "2-star", desc: "is the most common last rating before a user churns \u2014 and the win-back email rarely acknowledges it" },
          ],
        },
        steps: [
          { t: "Active user goes quiet", s: "No order in 10 days", tag: "tk", tl: "Core activation", prob: "\u2018We miss your appetite\u2019 push to every dormant user.", does: "Last order category, time of day, and frequency pattern shape the reactivation push.", ex: "User always orders biryani on Friday evenings. Thursday push: \u2018Friday biryani mood? Order by 7pm, 20% off.\u2019", sell: "\u201CA user who orders every Friday at 7pm and goes quiet needs a very different message than someone who orders randomly.\u201D" },
          { t: "Geo-trigger", s: "User near a partner restaurant", tag: "tw", tl: "We differentiate", prob: "Location-based push goes to all users near any partner. Irrelevant noise.", does: "Geo-trigger cross-referenced with cuisine preference profile. Only fires when location overlaps with a preferred cuisine.", ex: "User has ordered from Italian 6 times. Walks past Pasta Bar. Push: \u2018You\u2019re 2 mins from your favourite pasta place \u2014 lunchtime?\u2019", sell: "\u201CA geo push that matches what you love feels like local knowledge. One that doesn\u2019t is spam.\u201D" },
          { t: "Favourite item signal", s: "Previously ordered item viewed but not ordered", tag: "tw", tl: "We differentiate", prob: "Back-in-stock alerts go to all who\u2019ve ever ordered an item.", does: "Recency + frequency of past orders scores notification value. Recent heavy orderer gets instant push.", ex: "User ordered butter chicken 8 times. Restaurant was unavailable for a week. Returns: \u2018Your butter chicken is back.\u2019", sell: "\u201CThe person who ordered it 8 times cares about the return. The person who ordered it once probably forgot.\u201D" },
          { t: "Free delivery window", s: "Promotional free delivery threshold", tag: "tk", tl: "Core activation", prob: "Free delivery promo announced to all users equally.", does: "Order frequency and average basket size predict who\u2019ll convert on free delivery.", ex: "High-frequency user with \u20B9250 average basket. Free delivery above \u20B9299. Push: \u2018\u20B949 away from free delivery \u2014 add raita?\u2019", sell: "\u201CA nudge that tells someone exactly what to add to cross the threshold is a feature. A general free delivery push is noise.\u201D" },
          { t: "Lapsed orderer", s: "No order in 30+ days", tag: "tk", tl: "Core activation", prob: "Free delivery or discount to all lapsed users.", does: "Last order sentiment (rating), cuisine preference, and lapse timing shape win-back.", ex: "User gave 2-star rating on last order. Win-back doesn\u2019t lead with discount \u2014 leads with: \u2018We\u2019ve fixed what went wrong. Try again on us.\u2019", sell: "\u201CSomeone who gave 2 stars didn\u2019t need a discount. They needed an apology and a guarantee.\u201D" },
        ],
        lapsed: [
          { t: "Rating-based win-back", s: "User left after a bad experience", tag: "tk", tl: "Core activation", prob: "Win-back is a discount \u2014 no acknowledgement of the experience that caused the lapse.", does: "Last order rating profiled. Bad-experience lapse gets an apology-first sequence, then a \u2018try again free\u2019 offer.", ex: "User gave 2 stars. Win-back: \u2018We\u2019ve fixed what went wrong on your last order. Try again \u2014 this one\u2019s on us.\u2019", sell: "\u201CSomeone who gave 2 stars didn\u2019t leave because of price. Offering them 10% off insults them twice.\u201D" },
          { t: "Craving-timed reactivation", s: "Day-of-week or time-of-day pattern detected", tag: "tw", tl: "We differentiate", prob: "Win-back push sent at a random time with a generic message.", does: "Historical order time pattern predicts the best re-engagement window. Push fires at the exact moment the user is most likely to be hungry.", ex: "User always ordered biryani on Friday evenings. Gone quiet 3 weeks. Thursday push: \u2018Friday biryani mood? Your favourite is back \u2014 20% off this weekend.\u2019", sell: "\u201CA user who orders every Friday at 7pm should get a Thursday nudge, not a Tuesday morning push.\u201D" },
        ],
      },

      edtech: {
        name: "EdTech & online learning",
        tagline: "Re-engage learners who stalled mid-course with streak-aware, goal-matched nudges \u2014 not generic push blasts.",
        touchpoints: ["Course-abandoned email", "Streak-broken push", "Certificate nudge", "Cohort re-enrolment", "Quiz reminder", "Learning goal check-in"],
        meta: {
          problem: "Online course completion rates sit at 5\u201315% globally. The students who drop out are not disinterested \u2014 they are stuck, usually at the same hard module that trips everyone up.",
          problemSub: "You are spending on acquisition and losing at the exact moment the student needs help most.",
          stats: [
            { num: "85%", desc: "of course drop-offs happen at predictable friction points \u2014 the same 2\u20133 modules in every course" },
            { num: "67 days", desc: "example: breaking a 67-day streak is devastating \u2014 the re-engagement message needs to match the emotional weight" },
            { num: "28%", desc: "example: UX job postings rose 28% in one month \u2014 a learner studying UX needs that signal, not a generic motivational email" },
          ],
        },
        steps: [
          { t: "Course started, then stalled", s: "No progress in 7 days", tag: "tk", tl: "Core activation", prob: "Same \u2018keep learning\u2019 push to all stalled learners.", does: "Stall point in curriculum + topic difficulty + time-of-day pattern shape the re-engagement.", ex: "Learner stalled on module 4 of Python \u2014 historically the hardest module. Push: \u2018Module 4 trips everyone up \u2014 here\u2019s a 5-min shortcut video.\u2019", sell: "\u201CThe learner who stalled on the hardest module needs a lifeline, not a motivational quote.\u201D" },
          { t: "Streak break", s: "Daily learning habit broken", tag: "tw", tl: "We differentiate", prob: "Streak-break notification is the same for a 3-day streak and a 90-day streak.", does: "Streak length and learning investment shape the urgency of the recovery message.", ex: "Learner had a 67-day streak. Break happened. Push: \u201867 days \u2014 that\u2019s your longest streak ever. Don\u2019t let day 68 be the gap.\u2019", sell: "\u201CSomeone who broke a 67-day streak is devastated. Someone who broke a 3-day streak needs a different tone entirely.\u201D" },
          { t: "Certificate proximity", s: "80%+ course completion", tag: "tk", tl: "Core activation", prob: "No proactive nudge for learners close to completion.", does: "Completion proximity trigger fires at 80%, 90%, and 95% with escalating urgency and social proof.", ex: "Learner at 88% of a data science course. Push: \u2018You\u2019re 3 lessons from your certificate. Most people at 88% finish within a week.\u2019", sell: "\u201CThe hardest part of finishing a course is the last 20%. You\u2019re not there for it.\u201D" },
          { t: "Cohort deadline approaching", s: "Live cohort or assignment due", tag: "tw", tl: "We differentiate", prob: "Same deadline reminder to all cohort members regardless of progress.", does: "Progress level shapes reminder urgency. 90% done gets a light nudge. 40% done gets a study plan suggestion.", ex: "Learner at 35% with 5 days to cohort end. Not just a reminder \u2014 ConvoBrains sends a \u2018catch-up plan: 2 modules/day.\u2019", sell: "\u201CA blanket deadline reminder isn\u2019t helpful to someone who\u2019s 35% through with 5 days left. A plan is.\u201D" },
          { t: "Lapsed learner", s: "No login in 30 days", tag: "tk", tl: "Core activation", prob: "Generic \u2018your course is waiting\u2019 email.", does: "Course category, career goal (if stated), and lapse timing shape win-back. Job market signal for their target role triggers re-engagement.", ex: "Learner was studying UX design. Surge in UX job postings detected. Email: \u2018UX roles are up 28% this month \u2014 your certificate is 60% done.\u2019", sell: "\u201CA learner who wants a job doesn\u2019t need motivation. They need to know the market is hot right now.\u201D" },
        ],
        lapsed: [
          { t: "Job-market-triggered re-engagement", s: "Hiring surge in learner\u2019s target role", tag: "tw", tl: "We differentiate", prob: "Win-back email is a generic \u2018your course is waiting\u2019 message on a fixed timer.", does: "Course category matched against live job market signals. Win-back fires when demand spikes for the learner\u2019s target role.", ex: "Learner studying UX design went quiet. Surge in UX job postings. Email: \u2018UX roles are up 28% this month \u2014 your certificate is 60% done.\u2019", sell: "\u201CA learner who wants a job doesn\u2019t need motivation. They need to know the market is hot right now.\u201D" },
          { t: "Module-difficulty empathy", s: "Learner stalled on the hardest module", tag: "tk", tl: "Core activation", prob: "Same \u2018keep going\u2019 push to all stalled learners, regardless of where they stalled.", does: "Stall point in curriculum identified. Hardest modules get a \u2018this trips everyone up\u2019 empathy hook + shortcut resource.", ex: "Stalled on Python module 4 \u2014 historically hardest. Push: \u2018Module 4 stops most people. Here\u2019s a 5-minute shortcut to get past it.\u2019", sell: "\u201CThe learner who stalled on the hardest module needs a lifeline, not a motivational quote.\u201D" },
        ],
      },

      retail: {
        name: "Retail",
        tagline:
          "Connect in-store visits, loyalty data, and digital touchpoints into one profile that drives repeat footfall and basket size.",
        touchpoints: [
          "Post-purchase email",
          "Loyalty program nudge",
          "Browse abandonment push",
          "Store visit retargeting",
          "Seasonal campaign",
          "Lapsed shopper win-back",
        ],
        meta: {
          problem:
            "A shopper visits the store, buys a jacket, and signs up for the loyalty program. The next email they receive promotes shoes they\u2019d never buy. Their in-store preference data sits in the POS, disconnected from the email tool.",
          problemSub:
            "Offline purchase behavior and online engagement live in different systems. The customer gets treated as two different people.",
          stats: [
            {
              num: "55%",
              desc: "of loyalty members receive promotions for categories they\u2019ve never browsed or purchased \u2014 pure spray-and-pray",
            },
            {
              num: "2.8x",
              desc: "higher repeat rate from shoppers who receive category-relevant follow-ups vs generic sale announcements",
            },
            {
              num: "30 days",
              desc: "average gap between a first purchase and the first relevant re-engagement \u2014 most brands send a generic newsletter on day 7",
            },
          ],
        },
        steps: [
          {
            t: "First purchase",
            s: "Customer buys in-store or online",
            tag: "tk",
            tl: "Core activation",
            prob: "Thank-you email is generic. No category affinity profiled from the purchase.",
            does: "Purchase category, price point, and channel create a post-purchase profile. Follow-up content is matched to the actual buying pattern.",
            ex: "Customer buys premium denim in-store. ConvoBrains profiles: premium fashion, offline buyer. Follow-up: styling tips for denim, not a 20% off everything blast.",
            sell: "\u201CYour customer bought premium denim. Your follow-up email promoted kitchen appliances.\u201D",
          },
          {
            t: "Loyalty program engagement",
            s: "Member earns points but doesn\u2019t redeem",
            tag: "tw",
            tl: "We differentiate",
            prob: "Points expiry reminder is the only nudge. No personalized redemption suggestion.",
            does: "Purchase history shapes redemption suggestions. Show them what they\u2019d actually want to redeem for, based on past categories.",
            ex: "Member has 5000 points, buys mainly sportswear. Nudge: \u2018Redeem for the new running shoes \u2014 you have enough points for 40% off.\u2019",
            sell: "\u201CYour loyalty member has unused points. Your reminder just showed the points balance, not what they could get.\u201D",
          },
          {
            t: "Browse without purchase",
            s: "Online browsing with no conversion",
            tag: "tw",
            tl: "We differentiate",
            prob: "Retargeting shows the exact products viewed. Gets repetitive fast.",
            does: "Browse pattern builds a category affinity. Retargeting serves complementary items and new arrivals in the same category.",
            ex: "Customer browsed 5 winter jackets. Retargeting serves thermal layering guide + scarf collection, not the same jackets again.",
            sell: "\u201CShowing them the jacket they didn\u2019t buy five more times isn\u2019t retargeting. It\u2019s annoying.\u201D",
          },
          {
            t: "Seasonal re-engagement",
            s: "Shopper bought last season, silent this season",
            tag: "tk",
            tl: "Core activation",
            prob: "Seasonal sale blast goes to everyone equally.",
            does: "Last season\u2019s purchase category targets this season\u2019s outreach. Winter coat buyer gets early access to winter collection, not summer sale.",
            ex: "Customer bought winter boots last November. ConvoBrains sends early winter preview in October: \u2018New arrivals in your size \u2014 boots and outerwear.\u2019",
            sell: "\u201CYour winter buyer got your summer sale email. They didn\u2019t click. Surprising?\u201D",
          },
          {
            t: "Lapsed shopper win-back",
            s: "No purchase in 120+ days",
            tag: "tk",
            tl: "Core activation",
            prob: "Win-back is a blanket discount. No understanding of why they stopped.",
            does: "Lapse profile built from last purchase pattern and browse history. Category shift, price sensitivity, or competitor signal shapes the approach.",
            ex: "Last purchase was during a 40% sale. Lapsed post-sale. Win-back waits for next major promotion rather than sending a mid-season discount.",
            sell: "\u201CYour lapsed shopper only buys on sale. You sent a full-price new arrivals email.\u201D",
          },
        ],
      },
    },
  },
  voice: {
    label: "Voice + chat CDP",
    badgeText: "Voice + chat",
    badgeVariant: "voice",
    industries: {
      banking: {
        name: "Banking & financial services",
        tagline:
          "Build profiles from every service call and WhatsApp thread \u2014 turn call centre cost into revenue and retention.",
        touchpoints: [
          "Dormant account outbound call",
          "Loan drop-off follow-up",
          "Churned credit card call",
          "WhatsApp re-engagement",
          "FD renewal alert call",
          "Cross-sell follow-up",
        ],
        meta: {
          problem:
            "Bank customers call about a statement error and mention a home loan need in the same sentence. The loan need goes unlogged. The error gets resolved. Months later, the customer takes the loan from a competitor.",
          problemSub:
            "The cross-sell opportunity is buried inside the service call. Your CRM only captures the service request.",
          stats: [
            {
              num: "1 in 3",
              desc: "service calls contains a cross-sell signal \u2014 product interest, life event, or competitor mention \u2014 that the agent does not log",
            },
            {
              num: "2 complaints",
              desc: "in 30 days is a churn indicator in banking \u2014 most retention teams act only after the account closure request",
            },
            {
              num: "0",
              desc: "times the renewal call mentioned what the customer said they were saving for \u2014 even when it was on file from 2 years ago",
            },
          ],
        },
        steps: [
          {
            t: "First inbound service call",
            s: "Balance, statement, or product query",
            tag: "tk",
            tl: "Core wedge",
            prob: "Call handled, case closed. No profile built from the conversation.",
            does: "Intent, product interest, and complaint signal extracted. Every call becomes a data point \u2014 not a ticket.",
            ex: "Customer calls about a statement error, mentions \u2018I\u2019ve been thinking about a home loan.\u2019 Tagged: home loan interest, trusted relationship. Banker flagged to follow up.",
            sell: "\u201CYour customer mentioned a home loan need on a service call. Your CRM logged a statement dispute.\u201D",
          },
          {
            t: "Loan enquiry drop-off",
            s: "Enquiry started, not completed",
            tag: "tk",
            tl: "Core wedge",
            prob: "Drop-off treated as a cold lead. Generic outreach follows.",
            does: "Call transcript identifies the exact drop-off reason \u2014 rate objection, document concern, or competitor comparison. Follow-up is targeted.",
            ex: "Customer said \u2018I\u2019ll compare with HDFC\u2019 before ending call. ConvoBrains schedules a comparison callback in 48 hours with a rate-match brief.",
            sell: "\u201CYour loan drop-off called you. You have the reason they stopped. Your follow-up ignored it.\u201D",
          },
          {
            t: "Credit card inactivity",
            s: "Card not used in 60 days",
            tag: "tw",
            tl: "We differentiate",
            prob: "Generic activation call or SMS. No context on why card is dormant.",
            does: "Last usage category + complaint history shape the activation approach. Fee objection profile gets a waiver offer call. Competitor-switch signal gets a rewards comparison.",
            ex: "Customer stopped using card after annual fee was charged. Activation call leads with: \u2018We\u2019d like to waive this year\u2019s fee for you.\u2019",
            sell: "\u201CYour inactive card holder stopped using it for a reason. Your activation call doesn\u2019t know what it is.\u201D",
          },
          {
            t: "Product cross-sell signal",
            s: "Service call reveals adjacent need",
            tag: "tw",
            tl: "We differentiate",
            prob: "Cross-sell is calendar-driven or random. Not triggered by conversation.",
            does: "Real-time extraction of life event signals \u2014 home purchase intent, salary credit increase, new EMI \u2014 triggers the right product conversation.",
            ex: "Customer calls to update address to a new city. Tagged: relocation + home loan intent. Relationship manager briefed before next call.",
            sell: "\u201CA change of address to a new city is a home loan signal. You filed it as an address update.\u201D",
          },
          {
            t: "Churn or closure risk",
            s: "Account closure query or angry call",
            tag: "tk",
            tl: "Core wedge",
            prob: "Retention attempt is a generic discount or waiver offer.",
            does: "Churn signal type \u2014 fee, service failure, competitor offer \u2014 shapes the retention call script. Different response per reason.",
            ex: "Customer called to close account citing \u2018too many charges.\u2019 Retention call leads with fee structure review, not an FD offer.",
            sell: "\u201CAn angry customer who\u2019s about to leave told you exactly why. Your retention script didn\u2019t listen.\u201D",
          },
          {
            t: "Renewal or lapse",
            s: "FD maturity, policy renewal, or SIP lapse",
            tag: "tk",
            tl: "Core wedge",
            prob: "Auto-renewal reminder is generic. No conversation context used.",
            does: "Past call context \u2014 investment goal, risk appetite, future plans \u2014 shapes the renewal conversation.",
            ex: "Customer mentioned \u2018saving for daughter\u2019s education\u2019 on a call 2 years ago. FD matures. Renewal call: \u2018Your education fund FD is due \u2014 ready to renew toward the same goal?\u2019",
            sell: "\u201CYour customer told you what they were saving for. Your renewal call forgot.\u201D",
          },
        ],
        lapsed: [
          {
            t: "Exit-reason profiled churn",
            s: "Customer signalled intent to close or switch",
            tag: "tk",
            tl: "Core wedge",
            prob: "Retention attempt is a generic fee waiver or product offer \u2014 no connection to the actual exit reason.",
            does: "Exit signal type from last call \u2014 fee objection, service failure, competitor \u2014 shapes the retention response precisely.",
            ex: "Customer called to close citing charges. ConvoBrains profiles: fee objection. Retention call leads with a fee waiver, not a product pitch.",
            sell: "\u201CThey told you why they\u2019re leaving. Your retention script offers them an FD.\u201D",
          },
          {
            t: "FD / investment renewal lapse",
            s: "Maturity passed with no renewal action",
            tag: "tk",
            tl: "Core wedge",
            prob: "Renewal reminder is generic. No call context from 2 years ago used.",
            does: "Past call goal context \u2014 education fund, retirement, home \u2014 is retrieved. Renewal call uses the original stated purpose.",
            ex: "Customer mentioned saving for daughter\u2019s education 2 years ago. FD matures. Call: \u2018Your education FD is due \u2014 want to renew toward the same goal?\u2019",
            sell: "\u201CYour customer told you what they were saving for. Your renewal call forgot.\u201D",
          },
          {
            t: "Long-dormant account outbound",
            s: "Account active but no transactions in 90+ days",
            tag: "tw",
            tl: "We differentiate",
            prob: "Dormant account outreach is generic reactivation \u2014 no context on last interaction.",
            does: "Last call intent or life event hint shapes the re-engagement angle.",
            ex: "Account went dormant after customer mentioned job change. Outbound: \u2018Is your salary now going to a different account? We can help consolidate.\u2019",
            sell: "\u201CYour dormant account holder mentioned a job change on their last call. Your outreach asked them to transact.\u201D",
          },
        ],
      },

      realestate: {
        name: "Real estate",
        tagline:
          "Build persistent buyer profiles from every call and site visit \u2014 and let ConvoBrains decide what happens next.",
        touchpoints: [
          "Inquiry drop-off call",
          "Price-change alert + call",
          "Lead re-nurture WhatsApp",
          "Post-visit follow-up",
          "Budget re-qualification call",
          "Referral follow-up",
        ],
        meta: {
          problem:
            "A real estate buyer visits a site, spends 40 minutes there, tells the agent that east-facing is important for vastu, and leaves without booking. The follow-up shows them all available units. The east-facing ones are buried on page 3.",
          problemSub:
            "Buyers tell you exactly what they want on the site visit. That information rarely survives the handover to the follow-up team.",
          stats: [
            {
              num: "60\u201370%",
              desc: "of site visit inquiries go cold \u2014 most follow-up calls happen 3 days late with no memory of what was discussed",
            },
            {
              num: "24 hours",
              desc: "is the window after a competitor mention to respond with a direct comparison \u2014 most callbacks take 3 days",
            },
            {
              num: "\u20B985L",
              desc: "example: buyer said \u20B985L max \u2014 follow-up offered a discount on a \u20B91Cr unit instead of showing the 2BHK at \u20B982L",
            },
          ],
        },
        steps: [
          {
            t: "Inquiry call",
            s: "Prospect calls from ad or listing",
            tag: "tk",
            tl: "Core wedge",
            prob: "Call handled, basic info taken. No deeper intent or constraint profile built.",
            does: "Budget range, location preference, family size hints, and urgency signal extracted. Profile built from first call.",
            ex: "Prospect says \u2018we need 3BHK, my parents will stay with us.\u2019 Tagged: extended family configuration, ground-floor preference likely. Agent briefed for site visit.",
            sell: "\u201CYour buyer told the front desk about their parents. The site visit agent showed them a 10th-floor unit.\u201D",
          },
          {
            t: "Site visit, no decision",
            s: "Visited but didn\u2019t book",
            tag: "tk",
            tl: "Core wedge",
            prob: "Post-visit follow-up is generic. No objection mining from the visit conversation.",
            does: "Post-visit call extracts exact objection \u2014 price, vastu, floor, view. Next follow-up targets that specific concern.",
            ex: "Buyer said \u2018east-facing is important for us.\u2019 Tagged: vastu preference. Next follow-up highlights the east-facing units available.",
            sell: "\u201CYour buyer told you on the site visit what mattered most. Your follow-up email showed them all units.\u201D",
          },
          {
            t: "Competitor mention",
            s: "Prospect comparing with another project",
            tag: "tw",
            tl: "We differentiate",
            prob: "No action triggered when a competitor is mentioned.",
            does: "Competitor mention detected in real-time. Comparison sheet and specific differentiator sent within 2 hours.",
            ex: "\u2018We\u2019re also seeing Lodha Palava.\u2019 ConvoBrains triggers: possession timeline comparison + amenity breakdown vs Lodha, in buyer\u2019s WhatsApp.",
            sell: "\u201CA buyer who mentioned a competitor has 24 hours before they decide. You called back in 3 days.\u201D",
          },
          {
            t: "Price sensitivity signal",
            s: "Budget constraint raised on call",
            tag: "tw",
            tl: "We differentiate",
            prob: "Price objection gets a discount offer. No alternative path shown.",
            does: "Budget constraint profiled. Smaller unit in the same project, flexible payment plan, or a nearby project in budget \u2014 presented as options.",
            ex: "\u2018\u20B985L is our max.\u2019 ConvoBrains: no discount. Instead routes to the 2BHK premium in the same complex at \u20B982L.",
            sell: "\u201CA buyer who said \u20B985L max doesn\u2019t want a discount. They want a unit that fits.\u201D",
          },
          {
            t: "Long-term nurture",
            s: "Lead goes quiet for 3+ months",
            tag: "tk",
            tl: "Core wedge",
            prob: "Lapsed lead gets a generic re-engagement call.",
            does: "Call history profile \u2014 project preference, life stage hint, budget \u2014 shapes re-engagement timing and angle.",
            ex: "Buyer mentioned \u2018we\u2019re targeting possession after my son\u2019s school year ends.\u2019 ConvoBrains waits until April, then re-engages with possession timeline aligned to June.",
            sell: "\u201CYour buyer told you when they wanted to move. Your re-engagement call went out in January.\u201D",
          },
        ],
        lapsed: [
          {
            t: "Life-stage re-engagement",
            s: "Lead who said \u2018not yet\u2019 \u2014 timing may have changed",
            tag: "tk",
            tl: "Core wedge",
            prob: "Lapsed leads are re-contacted with the same generic project pitch.",
            does: "Original call context \u2014 timeline hint, life stage signal, budget \u2014 determines the re-engagement timing and angle.",
            ex: "Lead said \u2018targeting possession after my son\u2019s school year ends.\u2019 ConvoBrains waits until April, re-engages with possession timeline now aligned.",
            sell: "\u201CYour buyer told you when they wanted to move. Your re-engagement call went out in January.\u201D",
          },
          {
            t: "Price-change trigger",
            s: "Project price or availability changed since last call",
            tag: "tw",
            tl: "We differentiate",
            prob: "Price change alerts are mass-sent to all dormant leads.",
            does: "Profile filters which lapsed leads are most likely to re-engage based on the nature of the change and their original objection.",
            ex: "Lead\u2019s objection was \u20B982L price point. Price revised to \u20B979L. Outbound: \u2018The unit you looked at \u2014 price just came down \u20B93L. Want to take another look?\u2019",
            sell: "\u201CYour price drop is a trigger for some buyers and noise for others. You sent it to everyone.\u201D",
          },
        ],
      },

      telecom: {
        name: "Telecom",
        tagline:
          "Turn every complaint call, recharge drop-off, and plan enquiry into a retention and upsell opportunity.",
        touchpoints: [
          "Complaint resolution call",
          "Plan upgrade enquiry",
          "Recharge drop-off follow-up",
          "Network issue callback",
          "Retention outbound call",
          "WhatsApp plan nudge",
        ],
        meta: {
          problem:
            "A telecom subscriber calls about a network issue and mentions they\u2019re considering switching to a competitor. The complaint gets logged. The competitor mention doesn\u2019t. Three weeks later, they port out.",
          problemSub:
            "Churn signals are buried inside service calls. Your retention team reacts to the port-out request, not the warning signs.",
          stats: [
            {
              num: "1 in 5",
              desc: "service calls contains a churn signal \u2014 competitor mention, plan dissatisfaction, or coverage complaint \u2014 that goes unlogged",
            },
            {
              num: "72 hrs",
              desc: "average delay between a churn-risk call and a retention outreach \u2014 most subscribers have already initiated porting by then",
            },
            {
              num: "0",
              desc: "upsell calls that referenced the subscriber\u2019s actual usage pattern \u2014 most pitch the highest-margin plan regardless",
            },
          ],
        },
        steps: [
          {
            t: "Plan enquiry call",
            s: "Subscriber asks about available plans",
            tag: "tk",
            tl: "Core wedge",
            prob: "Plan recommendation is based on what the agent remembers, not actual usage data.",
            does: "Usage profile \u2014 data consumption, call minutes, roaming patterns \u2014 shapes the recommendation. The right plan is matched to actual behavior.",
            ex: "Subscriber uses 25GB data but only 100 minutes. Agent recommends data-heavy plan instead of the default unlimited calls bundle.",
            sell: "\u201CYour subscriber told you what they use. Your agent recommended the plan with the highest commission.\u201D",
          },
          {
            t: "Complaint call with churn signal",
            s: "Service issue + competitor mention",
            tag: "tk",
            tl: "Core wedge",
            prob: "Complaint resolved, but the competitor mention and churn risk go unlogged.",
            does: "Churn signal detected in real-time \u2014 competitor mention, frustration level, threat to switch. Retention team flagged immediately with call context.",
            ex: "Subscriber says \u2018Jio is giving me better rates.\u2019 ConvoBrains flags: competitor comparison, price sensitivity. Retention call within 24 hours with a rate-match offer.",
            sell: "\u201CYour subscriber told your agent they\u2019re comparing with Jio. Your CRM logged a network complaint.\u201D",
          },
          {
            t: "Recharge drop-off",
            s: "Prepaid subscriber misses recharge cycle",
            tag: "tw",
            tl: "We differentiate",
            prob: "Generic recharge reminder sent. No context on why they dropped off.",
            does: "Last call context + usage pattern identifies the drop-off reason. Price-sensitive users get a smaller pack offer. Heavy users get a value reminder.",
            ex: "Subscriber\u2019s usage dropped 60% last month. Last call mentioned budget constraints. Nudge: \u2018Try our \u20B9199 pack \u2014 same data, lower price.\u2019",
            sell: "\u201CYour subscriber told you they\u2019re watching their budget. You sent them the \u20B9599 plan reminder.\u201D",
          },
          {
            t: "Plan upgrade opportunity",
            s: "Usage consistently exceeds current plan",
            tag: "tw",
            tl: "We differentiate",
            prob: "Upgrade pitch happens on a campaign calendar, not when the subscriber actually needs it.",
            does: "Usage overshoot detected. Upgrade conversation triggered when the subscriber is most likely to say yes \u2014 right after a bill shock or data throttle.",
            ex: "Subscriber exceeded data cap 3 months running. ConvoBrains triggers upgrade call the day after throttle kicks in: \u2018You\u2019ve been hitting your limit \u2014 here\u2019s 50% more data for \u20B950 more.\u2019",
            sell: "\u201CYour subscriber hit their data cap every month for a quarter. You pitched the upgrade at renewal time, 3 months too late.\u201D",
          },
          {
            t: "Retention intervention",
            s: "High-value subscriber showing exit signals",
            tag: "tk",
            tl: "Core wedge",
            prob: "Retention offer is a standard discount or free data pack \u2014 same for everyone.",
            does: "Exit signal type shapes the retention approach. Price objection gets a tailored plan. Service issue gets a priority resolution. Competitor switch gets a feature comparison.",
            ex: "Subscriber called twice about call drops in their area. Retention call: \u2018We\u2019ve upgraded the tower in your area \u2014 here\u2019s a free month to try the improvement.\u2019",
            sell: "\u201CYour subscriber complained about coverage twice. Your retention team offered free data.\u201D",
          },
        ],
        lapsed: [
          {
            t: "Port-out win-back",
            s: "Subscriber ported to competitor",
            tag: "tk",
            tl: "Core wedge",
            prob: "Win-back is a generic \u2018come back\u2019 offer \u2014 no connection to why they left.",
            does: "Exit reason from last calls \u2014 price, coverage, service \u2014 shapes the win-back. Coverage issue gets a network update. Price gets a competitive match.",
            ex: "Subscriber ported out citing coverage. 3 months later, new tower live in their area. Win-back: \u2018We\u2019ve fixed coverage in your area. Come back with a free month.\u2019",
            sell: "\u201CThey left because of coverage. You offered them a discount. The tower went up 2 months later and nobody told them.\u201D",
          },
          {
            t: "Dormant prepaid reactivation",
            s: "SIM inactive for 60+ days",
            tag: "tw",
            tl: "We differentiate",
            prob: "Reactivation SMS is generic. No context on the subscriber\u2019s profile.",
            does: "Last usage pattern and call history determine the reactivation angle. Travel SIM users get seasonal offers. Secondary SIM users get data-only packs.",
            ex: "SIM was used mainly for data hotspot. Dormant 3 months. Reactivation: \u2018Need a backup data connection? \u20B9149 for 30-day data-only pack.\u2019",
            sell: "\u201CYour dormant SIM was a data hotspot. Your reactivation offer pitched unlimited calls.\u201D",
          },
        ],
      },

      healthcare: {
        name: "Healthcare & clinics",
        tagline: "Turn every patient call and chat into a care profile that drives preventive outreach and reduces no-shows.",
        touchpoints: ["Missed appointment call", "Preventive care reminder call", "Lapsed patient SMS + chat", "Annual checkup outbound", "Prescription refill reminder", "Specialist follow-up call"],
        meta: {
          problem: "A patient calls to book an appointment and mentions they have been putting it off for 3 weeks because getting there is a problem. They no-show. The follow-up SMS says you missed your appointment. Nobody remembered what they said on the call.",
          problemSub: "Care continuity breaks the moment the call ends and the notes are not structured.",
          stats: [
            { num: "30%", desc: "of no-shows could be recovered with a transport-specific alternative \u2014 telemedicine, home visit, or nearby clinic" },
            { num: "12 months", desc: "is how long a patient with hypertension can go without a check-in from a clinic that has their record on file" },
            { num: "3 weeks", desc: "example: patient delayed care for 3 weeks \u2014 doctor never heard this before the appointment began" },
          ],
        },
        steps: [
          { t: "Appointment booking call", s: "Patient books over phone", tag: "tk", tl: "Core wedge", prob: "Call handled, appointment logged. No clinical context captured from the conversation.", does: "Symptom mention, anxiety signals, and past visit context extracted. Doctor briefed before the appointment. Care coordinator alerted if urgency detected.", ex: "Patient calls to book, mentions \u2018it\u2019s been hurting for 3 weeks but I kept putting it off.\u2019 Tagged: delayed care + pain duration. Appointment prioritised.", sell: "\u201CYour patient told the front desk why they waited 3 weeks. The doctor never heard it.\u201D" },
          { t: "No-show / missed appointment", s: "Appointment not attended", tag: "tk", tl: "Core wedge", prob: "Generic \u2018you missed your appointment\u2019 SMS. No understanding of why.", does: "Conversation history provides no-show context. Transport issue, cost concern, or anxiety \u2014 each gets a different re-booking call approach.", ex: "Patient mentioned \u2018getting there is a problem\u2019 during booking call. No-show follow-up: \u2018We have a telemedicine slot \u2014 no travel needed.\u2019", sell: "\u201CYour patient told you why they might not come. Your no-show SMS didn\u2019t read the notes.\u201D" },
          { t: "Preventive care gap", s: "Due for checkup, screening, or vaccine", tag: "tw", tl: "We differentiate", prob: "Preventive care reminders sent on a fixed schedule to all eligible patients.", does: "Past call context \u2014 health anxiety, family history mentioned, last appointment concern \u2014 personalises the preventive care outreach.", ex: "Patient mentioned \u2018my father had diabetes\u2019 during a past call. Annual checkup outreach: \u2018Given your family history, here\u2019s a diabetes screening package.\u2019", sell: "\u201CYour patient mentioned their family history. Your annual reminder didn\u2019t connect those dots.\u201D" },
          { t: "Post-visit follow-up", s: "After consultation or procedure", tag: "tw", tl: "We differentiate", prob: "Same post-visit call for minor consultation and major procedure.", does: "Procedure type and doctor\u2019s notes shape the follow-up call content and urgency.", ex: "Patient had a cardiac consultation. Follow-up call at day 3: \u2018How are you feeling since the ECG? Any symptoms to flag before your report comes in?\u2019", sell: "\u201CA cardiac patient and a cold patient both got a call asking how they\u2019re feeling. Same call, different stakes.\u201D" },
          { t: "Lapsed patient", s: "No visit in 12 months", tag: "tk", tl: "Core wedge", prob: "Re-engagement call is generic. No clinical context from previous visits.", does: "Last visit reason + chronic condition tags shape the re-engagement call.", ex: "Patient has hypertension on record. Last visit 14 months ago. Outbound: \u2018Your last BP check was over a year ago \u2014 a 15-minute check-in with Dr Mehta?\u2019", sell: "\u201CYour lapsed patient with hypertension got the same re-engagement call as someone who came in for a cold.\u201D" },
        ],
        lapsed: [
          { t: "Clinical-context lapse outreach", s: "Patient overdue for follow-up or review", tag: "tk", tl: "Core wedge", prob: "Lapsed patient outreach is a generic \u2018time for a check-up\u2019 reminder.", does: "Condition tags + last visit reason shape the re-engagement call. Outreach is clinically specific, not calendar-generic.", ex: "Patient has hypertension on record. Last visit 14 months ago. Outbound: \u2018Your last BP check was over a year ago \u2014 Dr Mehta has a 15-minute slot this week.\u2019", sell: "\u201CYour lapsed patient with hypertension got the same re-engagement call as someone who came in for a cold.\u201D" },
          { t: "No-show re-booking with context", s: "Missed appointment needs a contextual re-book", tag: "tw", tl: "We differentiate", prob: "No-show follow-up is a generic \u2018rebook your appointment\u2019 SMS.", does: "Call history reveals the no-show reason. Re-booking offer addresses the specific barrier.", ex: "Patient mentioned \u2018getting there is a problem\u2019 on booking call. No-show follow-up: \u2018We have a telemedicine slot \u2014 same doctor, no travel needed.\u2019", sell: "\u201CYour patient told you why they might not come. Your no-show SMS didn\u2019t read the notes.\u201D" },
          { t: "Preventive care gap trigger", s: "Family history or condition flags a gap", tag: "tw", tl: "We differentiate", prob: "Preventive care reminders go on a fixed age/calendar schedule to all eligible patients.", does: "Past call context \u2014 family history, stated concern, last test result \u2014 personalises the preventive care outreach.", ex: "Patient mentioned \u2018my father had diabetes\u2019 on a past call. Annual outreach: \u2018Given your family history, here\u2019s a diabetes screening package \u2014 15 minutes.\u2019", sell: "\u201CYour patient mentioned their family history. Your annual reminder didn\u2019t connect those dots.\u201D" },
        ],
      },

      auto: {
        name: "Automotive",
        tagline: "Turn every service visit call and showroom follow-up into a persistent ownership profile that drives retention and upsell.",
        touchpoints: ["Service overdue outbound call", "Lease-end proactive call", "Showroom no-show follow-up", "Chat re-engagement", "Insurance renewal call", "Accessory upsell follow-up"],
        meta: {
          problem: "A car buyer visits the showroom, mentions their wife needs to be there for the decision, and no-shows the test drive. The re-booking SMS says \u2018reschedule your test drive.\u2019 Nobody used the information the buyer volunteered.",
          problemSub: "Every conversation with a prospect or owner contains a signal. Almost none of them are captured and acted on.",
          stats: [
            { num: "Nexon", desc: "example: prospect mentioned the competitor on the call \u2014 follow-up email talked about boot space" },
            { num: "2x", desc: "complaints about rear legroom in service calls \u2014 upgrade pitch led with engine specs anyway" },
            { num: "Coorg", desc: "example: customer mentioned a long drive next month on a service call \u2014 nobody followed up with a pre-trip service offer" },
          ],
        },
        steps: [
          { t: "Showroom enquiry call", s: "Prospect calls or is called post-visit", tag: "tk", tl: "Core wedge", prob: "Enquiry logged, follow-up is generic. No objection or preference captured.", does: "Model preference, budget signal, trade-in mention, and competitor comparison extracted in real-time.", ex: "Prospect says \u2018we\u2019re also looking at Nexon.\u2019 ConvoBrains tags competitor, triggers a comparison follow-up with a comparison sheet within 2 hours.", sell: "\u201CA prospect mentioned a competitor on the call. Your follow-up email talked about your boot space.\u201D" },
          { t: "Test drive no-show", s: "Booked but didn\u2019t show", tag: "tw", tl: "We differentiate", prob: "Generic re-booking SMS.", does: "Call transcript reason for no-show shapes the follow-up. Family pushback gets a couple\u2019s test drive invite. Work conflict gets an evening slot.", ex: "Customer mentioned \u2018wife needs to be there too.\u2019 No-show follow-up: \u2018How about a Saturday morning drive \u2014 bring the family?\u2019", sell: "\u201CThey told you why they couldn\u2019t come. Your re-booking SMS didn\u2019t use that information.\u201D" },
          { t: "Service call", s: "Vehicle brought in for service", tag: "tk", tl: "Core wedge", prob: "Service reminders are calendar-based. No context from previous service calls.", does: "Past service complaint, upcoming trip mention, or extended warranty interest \u2014 all extracted and used for the next service touchpoint.", ex: "Customer mentioned \u2018long drive to Coorg next month\u2019 during service call. Follow-up: \u2018Your trip is next month \u2014 tyre check and a full service before you go?\u2019", sell: "\u201CYour customer told the service advisor about their Coorg trip. Nobody followed up on that.\u201D" },
          { t: "Lease-end or upgrade window", s: "Lease nearing end or 3yr mark", tag: "tk", tl: "Core wedge", prob: "Lease-end call is a generic \u2018your lease ends soon\u2019 reminder.", does: "Ownership call history reveals upgrade preferences, pain points, and feature wishlist. Upgrade conversation is pre-informed.", ex: "Customer complained about rear legroom twice in service calls. Upgrade outreach: \u2018The new variant has 4 inches more legroom than your current model.\u2019", sell: "\u201CYour customer complained about legroom twice. Your upgrade call led with engine specs.\u201D" },
          { t: "Insurance / AMC renewal", s: "Annual policy or contract due", tag: "tw", tl: "We differentiate", prob: "Renewal reminder is transactional. No context on usage or past claims.", does: "Driving pattern, past claims, and service frequency shape the renewal conversation and upsell.", ex: "High-mileage customer with 2 service visits. Renewal: \u2018Given how much you drive, comprehensive cover with zero dep makes sense \u2014 here\u2019s the breakdown.\u2019", sell: "\u201CYou know how much this customer drives. Your insurance renewal call doesn\u2019t mention it.\u201D" },
        ],
        lapsed: [
          { t: "Service-overdue outbound", s: "Vehicle past scheduled service interval", tag: "tk", tl: "Core wedge", prob: "Service reminder is a generic \u2018your service is due\u2019 SMS on a fixed kilometre/time schedule.", does: "Last service call context \u2014 upcoming trip, specific complaint, extended warranty interest \u2014 personalises the re-engagement.", ex: "Customer mentioned a long drive to Coorg at last service. Overdue outbound: \u2018Your trip is coming up \u2014 want to lock in a full service before you go?\u2019", sell: "\u201CYour customer told the service advisor about their Coorg trip. Nobody used it for the next service call.\u201D" },
          { t: "Post-complaint lapse recovery", s: "Customer went quiet after a service complaint", tag: "tw", tl: "We differentiate", prob: "Lapsed customer after a complaint is treated the same as any inactive customer.", does: "Complaint type and resolution quality logged. Follow-up prioritises trust restoration before any commercial pitch.", ex: "Customer complained about a billing error after last service. Gone quiet 6 months. Outbound: \u2018We wanted to check \u2014 has everything been okay since we sorted the billing issue?\u2019", sell: "\u201CYour customer went quiet after a complaint. Your win-back offered them a discounted service.\u201D" },
        ],
      },

      insurance: {
        name: "Insurance",
        tagline:
          "Mine every policy call for cross-sell signals and renewal risk \u2014 and act before the customer decides to lapse.",
        touchpoints: [
          "Renewal lapse call",
          "Policy dormancy outbound",
          "Cross-sell follow-up call",
          "Chatbot re-engagement",
          "Claims follow-up call",
          "Life event trigger call",
        ],
        meta: {
          problem:
            "An insurance customer calls about a health policy and mentions \u2018they are expecting a baby.\u2019 The quote comes back for standard individual cover. The maternity angle, the life insurance cross-sell, the child plan \u2014 none of it was captured from the call.",
          problemSub:
            "Insurance is a life-events business. Every call is a life event. Most of them are filed as service tickets.",
          stats: [
            {
              num: "1 in 4",
              desc: "policy enquiry calls contains a life event signal \u2014 pregnancy, new job, home purchase \u2014 that should trigger a product conversation",
            },
            {
              num: "3 years",
              desc: "average gap between a policy sale and the next outbound call from an insurer \u2014 even for customers with clear cross-sell signals on file",
            },
            {
              num: "0",
              desc: "win-back calls that addressed the disputed claim that caused the lapse \u2014 most led with a renewal discount instead",
            },
          ],
        },
        steps: [
          {
            t: "Policy enquiry call",
            s: "Prospect enquires about a product",
            tag: "tk",
            tl: "Core wedge",
            prob: "Enquiry call taken, quote given. No life event or underlying need profiled.",
            does: "Life event signal \u2014 marriage, child, new job, home purchase \u2014 extracted from context. The right product is matched to the actual trigger.",
            ex: "Customer enquires about health insurance, mentions \u2018they are expecting a baby.\u2019 ConvoBrains profiles: maternity cover priority, life insurance next-step likely. Both flagged.",
            sell: "\u201CYour customer told you they\u2019re expecting. Your health insurance quote didn\u2019t mention maternity cover.\u201D",
          },
          {
            t: "Claims call",
            s: "Customer files or asks about a claim",
            tag: "tk",
            tl: "Core wedge",
            prob: "Claims call handled as operations. No relationship or cross-sell intelligence extracted.",
            does: "Claim type and customer sentiment create a post-claim profile. Satisfied claimants are prime cross-sell moments. Frustrated claimants need retention focus.",
            ex: "Customer had a smooth car claim. ConvoBrains flags: high trust moment. Follow-up call: \u2018Glad it worked out \u2014 have you thought about covering your home too?\u2019",
            sell: "\u201CA smooth claim is the best time to cross-sell. Your claims team is focused on closing the file.\u201D",
          },
          {
            t: "Renewal risk signal",
            s: "No renewal response before deadline",
            tag: "tk",
            tl: "Core wedge",
            prob: "Reminder escalation is time-based, not signal-based.",
            does: "Non-response plus past complaint or cost-sensitivity profile triggers an agent call with a pre-built retention brief.",
            ex: "Customer raised a premium objection last year. Silent this renewal. Retention call: \u2018Your premium went up 12% \u2014 here\u2019s why, and here\u2019s what we can adjust.\u2019",
            sell: "\u201CYour customer raised a premium objection last year. Your renewal call didn\u2019t acknowledge that.\u201D",
          },
          {
            t: "Policy dormancy",
            s: "Policy active but no engagement",
            tag: "tw",
            tl: "We differentiate",
            prob: "Dormant policyholders are invisible. No outreach until renewal.",
            does: "Dormancy plus life event hints from past calls trigger a check-in call \u2014 which becomes a cross-sell opportunity.",
            ex: "Customer bought health policy 3 years ago. Last call mentioned kids starting school. Outbound: \u2018Health cover for the kids \u2014 they\u2019re probably school-age now?\u2019",
            sell: "\u201CYour policy has been active for 3 years. You haven\u2019t spoken to the customer once.\u201D",
          },
          {
            t: "Lapse and win-back",
            s: "Policy lapsed or cancelled",
            tag: "tk",
            tl: "Core wedge",
            prob: "Win-back is a discount or generic call.",
            does: "Lapse reason \u2014 price, claim dissatisfaction, or life change \u2014 built from last call. Win-back approach matches the exit reason.",
            ex: "Customer lapsed after a disputed claim. Win-back not a discount \u2014 it\u2019s a \u2018your dispute has been reviewed\u2019 call with a revised settlement.",
            sell: "\u201CThey lapsed because of a claims dispute. You called them back with a renewal discount.\u201D",
          },
        ],
        lapsed: [
          {
            t: "Exit-reason matched win-back",
            s: "Policy lapsed or cancelled",
            tag: "tk",
            tl: "Core wedge",
            prob: "Win-back is a discount or generic renewal call \u2014 no connection to why they lapsed.",
            does: "Lapse reason \u2014 price, claim dissatisfaction, life change \u2014 built from last call. Win-back approach matches the exit reason precisely.",
            ex: "Customer lapsed after a disputed claim. Win-back is not a discount \u2014 it\u2019s a \u2018your dispute has been reviewed\u2019 call with a revised settlement.",
            sell: "\u201CThey lapsed because of a claims dispute. You called them back with a renewal discount.\u201D",
          },
          {
            t: "Life-event triggered re-entry",
            s: "Customer\u2019s circumstances have changed",
            tag: "tw",
            tl: "We differentiate",
            prob: "Dormant former policyholders are contacted on a fixed anniversary or seasonal schedule.",
            does: "Life event hints from past calls \u2014 kids mentioned, home purchase, new job \u2014 trigger a re-engagement when those events are likely to recur.",
            ex: "Former customer bought health policy 3 years ago, last call mentioned kids starting school. Outbound: \u2018Health cover for the kids \u2014 they\u2019re probably school-age now?\u2019",
            sell: "\u201CYour policy has been inactive for 3 years. You haven\u2019t spoken to the customer once.\u201D",
          },
        ],
      },
    },
  },

  // ═══════════════════════════════════════
  // BOTH CHANNELS CDP
  // ═══════════════════════════════════════
  both: {
    label: "Both channels",
    badgeText: "Both channels",
    badgeVariant: "both",
    industries: {
      saas: {
        name: "B2B SaaS",
        tagline:
          "Surface expansion signals and churn risk from product usage and CS calls \u2014 before the CSM finds out on a QBR.",
        touchpoints: [
          "Trial drop-off sequence",
          "Seat expansion nudge",
          "Feature adoption email",
          "Churn-signal CS call",
          "Renewal brief",
          "Win-back post-cancel",
        ],
        meta: {
          problem:
            "A SaaS trial signs up, says they need it for their 12-person support team, goes through the solo setup flow, hits a feature they need and never sees it again, and churns at day 14. The trial was \u2018low engagement.\u2019 The engagement was low because the onboarding was wrong.",
          problemSub:
            "Trial churn is mostly onboarding mismatch. The use case is stated at sign-up and ignored for the next 14 days.",
          stats: [
            {
              num: "8 logins",
              desc: "example: trial had 8 logins and 3 team members invited \u2014 flagged as \u2018low engagement\u2019 and sent a discount email",
            },
            {
              num: "3 months",
              desc: "example: team was at seat capacity for 3 consecutive months \u2014 expansion conversation happened at the quarterly QBR",
            },
            {
              num: "40%",
              desc: "usage drop + 1 complaint call = churn risk \u2014 most CSMs find out when they see the Slack message about cancelling",
            },
          ],
        },
        steps: [
          {
            t: "Trial sign-up",
            s: "User starts a free trial",
            tag: "tk",
            tl: "Core wedge",
            prob: "All trials get the same onboarding flow regardless of stated use case.",
            does: "Use case, team size, and integration needs profiled at sign-up. Onboarding flow and in-app nudges are adapted to the specific job-to-be-done.",
            ex: "Trial signup mentions \u201812-person support team.\u2019 ConvoBrains routes to team setup flow, surfaces shared inbox feature on day 1, not day 7.",
            sell: "\u201CYour trial user told you they have a 12-person team. You sent them through the solo setup flow.\u201D",
          },
          {
            t: "Feature adoption gap",
            s: "Key feature not activated after day 7",
            tag: "tw",
            tl: "We differentiate",
            prob: "Generic feature announcement email goes to all users.",
            does: "Profile identifies which feature is the conversion bottleneck for this use case. Personalised nudge with a 2-minute activation path.",
            ex: "Support team trial hasn\u2019t used shared inbox after 7 days. Nudge: \u2018Invite your team in 30 seconds \u2014 here\u2019s the link pre-filled.\u2019",
            sell: "\u201CThe feature that makes your product sticky for support teams wasn\u2019t activated. Nobody noticed until they churned.\u201D",
          },
          {
            t: "Expansion signal",
            s: "Account at or near seat capacity",
            tag: "tk",
            tl: "Core wedge",
            prob: "Expansion conversation happens at the QBR \u2014 3 months after the signal.",
            does: "Seat capacity + usage depth trigger a CSM brief. Expansion conversation starts before the customer asks.",
            ex: "Account at 100% seat capacity for 6 weeks. CSM call: \u2018You\u2019ve maxed out seats \u2014 want to add 5 for the new team?\u2019",
            sell: "\u201CYour customer has been at seat capacity for 3 months. You found out at the QBR.\u201D",
          },
        ],
        lapsed: [
          {
            t: "Churn-signal pre-emption",
            s: "Usage drop + complaint + feature abandonment",
            tag: "tk",
            tl: "Core wedge",
            prob: "CSM discovers churn risk when it\u2019s already in motion \u2014 after the Slack message, not before.",
            does: "Usage drop + complaint call log + feature abandonment compute churn score. CSM briefed with full conversation history for a proactive call.",
            ex: "Account usage dropped 40%, complaint call about a missing integration. CSM call: \u2018We saw the change \u2014 the integration you mentioned is on Q3 roadmap.\u2019",
            sell: "\u201CYour CSM found out about the churn risk when they saw the Slack message about cancelling.\u201D",
          },
          {
            t: "Post-cancel win-back brief",
            s: "Account cancelled \u2014 re-engagement sequenced",
            tag: "tw",
            tl: "We differentiate",
            prob: "Win-back email is a generic discount or feature announcement \u2014 not connected to the exit reason.",
            does: "Exit call transcript identifies the churn reason. Win-back sequenced to address the specific issue: roadmap update, integration fix, or competitive response.",
            ex: "Account cancelled citing missing Salesforce integration. Integration ships 3 months later. Win-back: \u2018The Salesforce sync you needed \u2014 it\u2019s live.\u2019",
            sell: "\u201CYour churned customer told you exactly why they left. Your win-back email announced new pricing.\u201D",
          },
        ],
      },

      bfsi: {
        name: "Mutual Funds / BFSI",
        tagline:
          "Surface investment intent from every call and digital interaction \u2014 turn passive investors into active portfolio growers.",
        touchpoints: [
          "SIP start follow-up",
          "Lapsed SIP outbound call",
          "Redemption risk call",
          "Goal-based advisory nudge",
          "KYC completion push",
          "Cross-sell WhatsApp",
        ],
        meta: {
          problem:
            "An investor calls about a maturing FD and mentions their daughter\u2019s college admission next year. The FD gets renewed at the same rate. The education fund opportunity \u2014 ELSS, child plan, goal-based SIP \u2014 goes unmentioned.",
          problemSub:
            "Life goals are stated on service calls. Advisory teams never hear them. The investor gets a renewal, not a plan.",
          stats: [
            {
              num: "1 in 3",
              desc: "service calls contains a life-goal signal \u2014 education, retirement, home \u2014 that should trigger an advisory conversation",
            },
            {
              num: "45%",
              desc: "of SIP lapses happen within 12 months \u2014 most advisors find out only when the mandate bounces",
            },
            {
              num: "0",
              desc: "cross-sell conversations triggered by actual call signals \u2014 product pushes follow campaign calendars, not investor needs",
            },
          ],
        },
        steps: [
          {
            t: "New investor onboarding",
            s: "First SIP or lump sum investment",
            tag: "tk",
            tl: "Core wedge",
            prob: "Onboarding is transactional \u2014 KYC done, fund selected, confirmation sent. No goal profiling.",
            does: "Investment goal, risk appetite, and life stage extracted from onboarding conversation. Advisory relationship starts from day one.",
            ex: "Investor starts SIP mentioning \u2018saving for a house in 5 years.\u2019 ConvoBrains tags: home purchase goal, 5-year horizon. Advisor briefed for goal-based review at 6 months.",
            sell: "\u201CYour investor told you they\u2019re saving for a house. Your confirmation email just showed the fund NAV.\u201D",
          },
          {
            t: "SIP lapse risk",
            s: "Mandate bounce or reduced investment signal",
            tag: "tk",
            tl: "Core wedge",
            prob: "Lapse detected only when mandate bounces. By then, the investor has mentally disengaged.",
            does: "Pre-lapse signals \u2014 reduced top-up, support call about returns, skipped step-up \u2014 trigger early advisor outreach.",
            ex: "Investor skipped step-up for 2 consecutive years and called asking about returns. ConvoBrains flags lapse risk. Advisor call: \u2018Let\u2019s review your goal progress \u2014 you\u2019re on track but could optimize.\u2019",
            sell: "\u201CYour investor showed lapse signals for 6 months. You noticed when the SIP stopped.\u201D",
          },
          {
            t: "Redemption risk signal",
            s: "Investor enquires about withdrawal or switching",
            tag: "tw",
            tl: "We differentiate",
            prob: "Redemption processed without understanding the reason. No retention conversation.",
            does: "Redemption intent type \u2014 emergency need, dissatisfaction, goal achieved \u2014 shapes the response. Not every redemption should be discouraged.",
            ex: "Investor calls about partial redemption citing \u2018market is too volatile.\u2019 Advisor call focuses on risk rebalancing, not guilt about redeeming.",
            sell: "\u201CYour investor wanted to reduce risk exposure. Your team processed the redemption without offering a debt fund switch.\u201D",
          },
          {
            t: "Cross-sell signal from call",
            s: "Life event or goal change mentioned on a call",
            tag: "tw",
            tl: "We differentiate",
            prob: "Cross-sell is calendar-driven. New product launches pushed to all investors equally.",
            does: "Life event signals \u2014 marriage, child, salary increase, retirement proximity \u2014 extracted from calls, trigger relevant product conversations.",
            ex: "Investor mentions salary increase on a routine call. ConvoBrains triggers: SIP step-up suggestion + tax-saving ELSS pitch for the higher bracket.",
            sell: "\u201CYour investor got a raise 3 months ago. Nobody suggested increasing their SIP.\u201D",
          },
          {
            t: "Goal review trigger",
            s: "Goal milestone approaching or market event",
            tag: "tk",
            tl: "Core wedge",
            prob: "Portfolio reviews happen on a fixed schedule \u2014 quarterly or annual. No trigger-based reviews.",
            does: "Goal proximity, market conditions, and investor sentiment from recent calls trigger timely review conversations.",
            ex: "Investor\u2019s house purchase goal is 18 months away. Portfolio is equity-heavy. ConvoBrains triggers: \u2018Time to start shifting to debt for your home fund \u2014 let\u2019s review.\u2019",
            sell: "\u201CYour investor\u2019s home purchase goal is 18 months out. Their portfolio is still 80% equity. Nobody flagged the risk.\u201D",
          },
        ],
        lapsed: [
          {
            t: "Lapsed SIP reactivation",
            s: "SIP stopped 3+ months ago",
            tag: "tk",
            tl: "Core wedge",
            prob: "Reactivation call is a generic \u2018restart your SIP\u2019 pitch. No context on why they stopped.",
            does: "Lapse reason from last interactions \u2014 market fear, cash flow issue, dissatisfaction \u2014 shapes the reactivation conversation.",
            ex: "Investor stopped SIP after market crash, last call expressed fear. Reactivation: \u2018Markets have recovered 18% since then \u2014 your goal is still achievable. Want to restart?\u2019",
            sell: "\u201CYour investor stopped because they were scared. Your reactivation pitch talked about new fund features.\u201D",
          },
          {
            t: "Dormant investor re-engagement",
            s: "No transaction or login in 6+ months",
            tag: "tw",
            tl: "We differentiate",
            prob: "Dormant investors get a quarterly newsletter. No personalized outreach.",
            does: "Last stated goal + portfolio status shapes a personalized check-in. The conversation is about their life, not your products.",
            ex: "Investor\u2019s daughter was 14 when they started education fund. Now 17. Outbound: \u2018College admissions next year \u2014 let\u2019s review your education fund status.\u2019",
            sell: "\u201CYour investor started an education fund 3 years ago. Nobody checked if the goal timeline still works.\u201D",
          },
        ],
      },

      omnichannel: {
        name: "Omnichannel / brick-and-mortar retail",
        tagline: "Unify in-store associate calls, loyalty app signals, and digital behaviour into one persistent shopper profile.",
        touchpoints: ["In-store geofence + push", "Lapsed loyalty call", "Win-back email series", "Store associate chat", "Replenishment push", "Post-visit cross-sell"],
        meta: {
          problem: "A customer spends 40 minutes in a store, tries 3 suits, says none fit well, and leaves. The associate does not log it. The loyalty app sends a \u2018complete your look\u2019 email the next day featuring the same suits.",
          problemSub: "In-store conversations are the richest customer signal you have. Almost none of it is captured in a usable form.",
          stats: [
            { num: "40 mins", desc: "example: customer spent 40 minutes in store and left without buying \u2014 zero follow-up action was taken" },
            { num: "2 signals", desc: "customer wishlisted a jacket in the app and visited the store \u2014 both signals existed but were never connected" },
            { num: "Fortnightly", desc: "example: a buyer who came every two weeks for 6 months went quiet \u2014 they received the same mass email as everyone else" },
          ],
        },
        steps: [
          { t: "Store visit", s: "Walk-in, no purchase or partial purchase", tag: "tk", tl: "Core wedge", prob: "Visit happened. Nothing is captured. No follow-up possible without identity.", does: "Loyalty check-in or associate chat captures visit context. Category browsed, item tried, and reason-not-bought tagged.", ex: "Customer tried 3 suits, none fit well. Associate logs fit concern. Next visit: the made-to-measure service is surfaced on the loyalty app.", sell: "\u201CYour customer spent 40 minutes in your store and left without buying. Nobody logged why.\u201D" },
          { t: "Loyalty app signal", s: "Points check, wishlist, or app browse", tag: "tw", tl: "We differentiate", prob: "App behaviour treated separately from in-store and call behaviour.", does: "Cross-channel profile merges app browse, store visit, and any CS call into one view. Wishlist item approaching restock triggers a personal push.", ex: "Customer wishlisted a jacket in the app, visited the store but it wasn\u2019t in their size. Restock push: \u2018Your size just came in \u2014 reserved for 24 hours.\u2019", sell: "\u201CYour customer tried to buy something twice. You never connected those two signals.\u201D" },
          { t: "Lapsed loyalty member", s: "No purchase in 90 days", tag: "tk", tl: "Core wedge", prob: "Mass win-back email with a discount.", does: "Last purchase category, visit frequency, and any CS call context shape the win-back channel and content.", ex: "High-frequency buyer who bought fortnightly, now silent for 90 days. Outbound call from the store manager \u2014 not an email.", sell: "\u201CA buyer who came every two weeks deserves a phone call, not a mass email.\u201D" },
          { t: "Post-purchase cross-sell", s: "Recent purchase in a category", tag: "tw", tl: "We differentiate", prob: "Cross-sell email shows generic bestsellers.", does: "In-store associate notes and purchase profile compute the most relevant adjacent product.", ex: "Customer bought a formal blazer. Associate noted they were shopping for a new job. Email: \u2018Complete the look \u2014 trousers, belt, and shoes that match your blazer.\u2019", sell: "\u201CYour associate knows what the customer is dressing for. Your cross-sell email doesn\u2019t.\u201D" },
          { t: "Win-back after long lapse", s: "No purchase in 6+ months", tag: "tk", tl: "Core wedge", prob: "Generic 20% off email. No understanding of why they stopped.", does: "Store visit log + purchase history + any CS call determine the exit reason. In-store invitation or personalised offer matches the profile.", ex: "Customer bought exclusively in season sales. Lapse is off-season. Win-back waits for the season sale, then leads with: \u2018Your sale wishlist \u2014 it starts this Friday.\u2019", sell: "\u201CSome customers only buy on sale. Your year-round win-back campaigns are wasted on them.\u201D" },
        ],
        lapsed: [
          { t: "High-frequency buyer outbound", s: "Fortnightly buyer gone quiet 90 days", tag: "tk", tl: "Core wedge", prob: "Mass win-back email with a discount sent to all lapsed loyalty members equally.", does: "Visit frequency + LTV threshold triggers a differentiated win-back \u2014 a personal call from the store manager for high-frequency buyers.", ex: "Buyer who came every 2 weeks, now 90 days silent. Outbound call from store manager \u2014 not a mass email.", sell: "\u201CA buyer who came every two weeks deserves a phone call, not a mass email.\u201D" },
          { t: "Sale-cycle aligned win-back", s: "Customer who only buys on sale", tag: "tw", tl: "We differentiate", prob: "Year-round win-back campaigns waste offers on buyers who will only convert during sale events.", does: "Purchase pattern identifies sale-only buyers. Win-back held until next sale event, then fired with a personalised \u2018your wishlist\u2019 angle.", ex: "Customer bought exclusively in season sales. Lapse is off-season. Win-back waits for the sale, then: \u2018Your sale wishlist \u2014 it starts this Friday.\u2019", sell: "\u201CSome customers only buy on sale. Your year-round win-back campaigns are wasted on them.\u201D" },
        ],
      },

      travel: {
        name: "Travel & hospitality",
        tagline: "Build trip-context profiles from booking calls and app signals \u2014 and use them to drive loyalty and re-booking.",
        touchpoints: ["Lapsed booker email", "Status reinstatement call", "Abandoned booking push", "Concierge WhatsApp", "Upgrade offer call", "Post-stay win-back"],
        meta: {
          problem: "A couple books a hotel for their anniversary. Pre-travel communication is a weather update and check-in instructions. Nobody used the occasion to offer a room upgrade, a couples dinner, or an early check-in.",
          problemSub: "Travel brands collect the occasion at booking. Almost none of it reaches the pre-travel or in-stay team.",
          stats: [
            { num: "Anniversary", desc: "example: occasion stated at booking \u2014 pre-travel email was a weather update and luggage policy" },
            { num: "1 flight", desc: "example: loyalty member was one flight from keeping Silver status \u2014 they got a generic points statement" },
            { num: "11 months", desc: "example: anniversary stay in April \u2014 win-back campaign waited until the following April to mention it" },
          ],
        },
        steps: [
          { t: "Booking enquiry", s: "Call or web inquiry, no completion", tag: "tk", tl: "Core wedge", prob: "Drop-off treated as a cold lead.", does: "Call transcript extracts trip purpose, travel party, and price objection. Follow-up is targeted to the exact barrier.", ex: "\u2018We\u2019re travelling for our anniversary\u2019 mentioned. Drop-off on price. Follow-up: \u2018Anniversary package with breakfast included \u2014 same price as the standard room.\u2019", sell: "\u201CThey told you it\u2019s their anniversary. Your drop-off email showed them a room with a bed.\u201D" },
          { t: "Post-booking pre-travel", s: "Booking confirmed, travel upcoming", tag: "tw", tl: "We differentiate", prob: "Pre-travel communication is generic information emails.", does: "Trip purpose and travel party profile personalises pre-travel touchpoints \u2014 upsells, activity suggestions, and concierge offers match the occasion.", ex: "Family with two kids travelling. Pre-travel push: \u2018Kids\u2019 activity schedule at the resort \u2014 book ahead to avoid queues.\u2019", sell: "\u201CA family traveller and a business traveller booked the same hotel. You sent them both a weather update.\u201D" },
          { t: "In-stay experience call", s: "Guest contacts concierge or CS", tag: "tk", tl: "Core wedge", prob: "In-stay complaint or request handled as a service ticket. No loyalty opportunity.", does: "In-stay call sentiment and request type shape the post-stay follow-up and loyalty offer.", ex: "Guest called about a noisy room, was moved and upgraded. Post-stay: \u2018We know the move was disruptive \u2014 your next stay starts with a complimentary upgrade.\u2019", sell: "\u201CA guest who was moved rooms during their stay needs a recovery offer, not a standard feedback survey.\u201D" },
          { t: "Post-stay win-back", s: "No re-booking in 90 days", tag: "tk", tl: "Core wedge", prob: "Post-stay re-engagement is a generic \u2018book again\u2019 discount.", does: "Stay purpose, in-stay sentiment, and last booking destination profile the win-back angle.", ex: "Guest stayed for a wedding anniversary. 11-month anniversary approaching. Email: \u2018Your anniversary is coming up \u2014 same suite, same view, early bird rate.\u2019", sell: "\u201CYour guest told you they were celebrating an anniversary. You\u2019re waiting for them to remember to book.\u201D" },
          { t: "Loyalty status risk", s: "Points or tier about to lapse", tag: "tw", tl: "We differentiate", prob: "Generic tier expiry warning.", does: "Travel history and call context compute the easiest qualifying path. Personalised suggestion to retain status.", ex: "Frequent flyer 1 flight short of silver. Outbound: \u2018One short hop to Bangalore keeps your Silver \u2014 here are the next 3 options.\u2019", sell: "\u201CYour loyalty member is one flight from keeping their status. You sent a generic points statement.\u201D" },
        ],
        lapsed: [
          { t: "Anniversary re-booking", s: "Guest who stayed for a special occasion", tag: "tk", tl: "Core wedge", prob: "Post-stay re-engagement is a generic \u2018book again\u2019 offer sent on a fixed 90-day schedule.", does: "Stay purpose profiled. Occasion-anniversary win-back fires at the right time \u2014 6 weeks before the next likely occasion.", ex: "Guest stayed for a wedding anniversary. 10 months later: \u2018Your anniversary is coming up \u2014 same suite, early bird rate, breakfast included.\u2019", sell: "\u201CYour guest told you they were celebrating an anniversary. You\u2019re waiting for them to remember to book.\u201D" },
          { t: "Status-lapse reactivation", s: "Loyalty tier about to expire", tag: "tw", tl: "We differentiate", prob: "Generic tier expiry warning with no suggested action to retain status.", does: "Travel history and call context compute the easiest qualifying path. Personalised suggestion closes the gap.", ex: "Frequent flyer 1 flight short of silver. Outbound: \u2018One short hop to Bangalore keeps your Silver \u2014 here are the next 3 available.\u2019", sell: "\u201CYour loyalty member is one flight from keeping their status. You sent a generic points statement.\u201D" },
        ],
      },

      fitness: {
        name: "Fitness & wellness",
        tagline: "Combine app inactivity signals with trainer check-in calls to build a retention engine that feels personal.",
        touchpoints: ["Lapsed member push", "Trainer check-in call", "App inactivity SMS", "Free class win-back", "Goal milestone nudge", "Membership renewal call"],
        meta: {
          problem: "A new member mentions a bad knee and limited morning availability during onboarding. The app pushes evening HIIT classes all week. The trainer calls to check in with no idea the member is 80% toward their weight goal.",
          problemSub: "Fitness businesses collect the most personal data of any category \u2014 and use almost none of it to personalise the member experience.",
          stats: [
            { num: "Day 1", desc: "member mentioned their knee injury during onboarding \u2014 app recommended HIIT for 7 consecutive days" },
            { num: "80%", desc: "example: member was 80% toward their weight goal when the trainer called \u2018to check in\u2019 \u2014 trainer had no idea" },
            { num: "10 days", desc: "of inactivity is the average window to recover a member before they mentally cancel \u2014 most gyms act at 30 days" },
          ],
        },
        steps: [
          { t: "Onboarding call / orientation", s: "New member joins and is briefed", tag: "tk", tl: "Core wedge", prob: "Onboarding is generic. Goal, injury history, and schedule preference captured on paper and forgotten.", does: "Onboarding call transcribed. Goal, availability, and any constraint tagged. First 4 weeks programme is personalised.", ex: "Member mentioned \u2018I can only come mornings and I have a bad knee.\u2019 ConvoBrains builds a profile: morning slots, low-impact classes only.", sell: "\u201CYour new member told the trainer about their knee on day 1. Your app pushed HIIT classes all week.\u201D" },
          { t: "App inactivity signal", s: "No check-in or class booking in 10 days", tag: "tw", tl: "We differentiate", prob: "Generic \u2018we miss you\u2019 push to all inactive members.", does: "Last class type + goal profile + day-of-week pattern shape the re-engagement.", ex: "Member always did yoga on Tuesday. Missed 2 Tuesdays. Push: \u2018Your Tuesday yoga spot is still open \u2014 book before it fills.\u2019", sell: "\u201CA member who does yoga every Tuesday needs a Tuesday yoga nudge, not a generic \u2018we miss you.\u2019\u201D" },
          { t: "Trainer check-in call", s: "Proactive outreach from trainer", tag: "tk", tl: "Core wedge", prob: "Trainer check-in call is random, not triggered by behaviour data.", does: "Inactivity + goal proximity triggers a trainer call brief. Trainer knows what to say before calling.", ex: "Member set a weight goal, has been inactive 12 days, is 80% toward goal. Trainer called with: \u2018You\u2019re so close \u2014 what\u2019s been getting in the way?\u2019", sell: "\u201CYour trainer called to check in. They had no idea the member was 80% toward their goal.\u201D" },
          { t: "Membership renewal", s: "Annual or monthly membership nearing end", tag: "tk", tl: "Core wedge", prob: "Renewal reminder is a transaction \u2014 price and date.", does: "Attendance frequency, goal progress, and any complaint or trainer note shape the renewal conversation.", ex: "Member attended 3x per week for 10 months. Renewal call: \u2018You\u2019ve come 3 times a week for almost a year \u2014 that\u2019s a real habit. Ready to lock in another year?\u2019", sell: "\u201CYour most consistent member deserves a renewal conversation that acknowledges their commitment.\u201D" },
          { t: "Lapsed member win-back", s: "Membership lapsed or cancelled", tag: "tk", tl: "Core wedge", prob: "Free class or discount offer to all lapsed members.", does: "Exit reason \u2014 schedule conflict, injury, relocation, or price \u2014 from last call or app behaviour shapes the win-back.", ex: "Member stopped after mentioning a work travel period. Win-back: \u2018Back in town? Your spot is here \u2014 here\u2019s a free week to get back in the groove.\u2019", sell: "\u201CA member who paused because of work travel isn\u2019t lapsed \u2014 they\u2019re returning. You treated them like a lost cause.\u201D" },
        ],
        lapsed: [
          { t: "Work-travel lapse re-invite", s: "Member paused due to travel or schedule", tag: "tk", tl: "Core wedge", prob: "Lapsed members all receive the same free class or discount win-back.", does: "Exit reason \u2014 travel, schedule, injury, relocation \u2014 shapes the re-engagement timing and message.", ex: "Member stopped after mentioning a work travel period. Win-back when travel likely ends: \u2018Back in town? Your spot is here \u2014 free week to get back in the groove.\u2019", sell: "\u201CA member who paused because of work travel isn\u2019t lapsed \u2014 they\u2019re returning. You treated them like a lost cause.\u201D" },
          { t: "Goal-proximity re-engagement", s: "Member close to their fitness goal went quiet", tag: "tw", tl: "We differentiate", prob: "Inactive member re-engagement push is identical regardless of goal progress.", does: "Goal proximity score triggers a personalised trainer outreach \u2014 \u2018you\u2019re this close\u2019 is a stronger hook than any discount.", ex: "Member was 80% toward their weight goal, went inactive 12 days. Trainer call: \u2018You\u2019re so close \u2014 what\u2019s been getting in the way?\u2019", sell: "\u201CYour trainer called to check in. They had no idea the member was 80% toward their goal.\u201D" },
        ],
      },

      highered: {
        name: "Higher education & test prep",
        tagline: "Turn every counsellor call, form submission, and campus visit into a persistent applicant profile that closes enrolment gaps.",
        touchpoints: ["Application drop-off email", "Counsellor follow-up call", "Re-enrolment push", "WhatsApp lead nurture", "Scholarship alert", "Deferral follow-up call"],
        meta: {
          problem: "A prospective student calls admissions and mentions that their parents are unsure about the ROI. The counsellor sends a course brochure to the student. The parent \u2014 the actual decision-maker \u2014 never hears a placement stat.",
          problemSub: "Higher education admissions is a family sales process. Most CRMs treat it as a one-person funnel.",
          stats: [
            { num: "Parents", desc: "example: parents were the stated decision-maker \u2014 counsellor follow-up went to the student with a course brochure" },
            { num: "IIM Indore", desc: "example: accepted candidate was comparing with a competitor \u2014 follow-up was a fee payment reminder" },
            { num: "Essay section", desc: "example: applicant dropped off at the essay \u2014 re-engagement email said \u2018complete your application\u2019" },
          ],
        },
        steps: [
          { t: "Enquiry or form fill", s: "Prospective student contacts admissions", tag: "tk", tl: "Core wedge", prob: "Enquiry received, generic brochure sent. No intent or concern profiling.", does: "Form language and first call extract goal, concern, financial signal, and decision-maker (parent vs student). Counsellor briefed.", ex: "Student mentions \u2018my parents are unsure about the ROI.\u2019 ConvoBrains tags: parent objection, ROI concern. Counsellor\u2019s next call opens with placement data, not course highlights.", sell: "\u201CYour student told you it\u2019s the parents who have doubts. You sent a course brochure to the student.\u201D" },
          { t: "Application drop-off", s: "Application started, not submitted", tag: "tw", tl: "We differentiate", prob: "Generic \u2018complete your application\u2019 email.", does: "Drop-off stage in the form identifies the specific friction. Documents, essay, or fee payment \u2014 each gets a different nudge.", ex: "Applicant dropped off at the essay section. Email: \u2018The essay question is open-ended \u2014 here\u2019s what strong answers look like.\u2019", sell: "\u201CYour applicant dropped off at the essay. You told them to complete their application.\u201D" },
          { t: "Counsellor call", s: "One-on-one with admissions counsellor", tag: "tk", tl: "Core wedge", prob: "Call happens, insights die with the recording. No action fires automatically.", does: "Every call transcribed. Objections, career goal, budget, and parent concern extracted. Next best action triggered immediately.", ex: "\u2018I want to be a product manager\u2019 mentioned three times. Onboarding step 1 becomes a PM alumni call \u2014 not a generic orientation.", sell: "\u201CYour counsellors uncover gold on every call. That gold disappears when the call ends.\u201D" },
          { t: "Campus visit or open day", s: "Prospect attends physical event", tag: "tw", tl: "We differentiate", prob: "Post-visit follow-up is a thank-you email and brochure.", does: "Post-visit call extracts specific interest from conversations at the event. Follow-up matches what was discussed.", ex: "Prospect spent 30 min at the fintech lab. Post-visit email: \u2018You seemed interested in the fintech programme \u2014 here\u2019s a chat with a current student.\u2019", sell: "\u201CYour prospect told your faculty member what they care about. Your follow-up email didn\u2019t know that.\u201D" },
          { t: "Accepted, not enrolled", s: "Offer made, no fee payment", tag: "tk", tl: "Core wedge", prob: "Generic fee payment reminder.", does: "Acceptance drop-off profile \u2014 financial concern, competing offer, or parent hesitation \u2014 shapes the follow-up call.", ex: "\u2018Comparing with IIM Indore\u2019 was logged on a call. Accepted but silent. Counsellor call: \u2018Here\u2019s how our programme compares directly \u2014 placement, cost, and alumni.\u2019", sell: "\u201CYour accepted candidate is comparing you with a competitor. Your follow-up is a fee payment reminder.\u201D" },
        ],
        lapsed: [
          { t: "Deferred student re-engagement", s: "Accepted or deferred student goes quiet", tag: "tk", tl: "Core wedge", prob: "Deferred or accepted-but-silent student gets a generic follow-up or fee payment reminder.", does: "Acceptance drop-off profile \u2014 competing offer, financial concern, parent hesitation \u2014 shapes the follow-up call brief.", ex: "\u2018Comparing with IIM Indore\u2019 was logged on a call. Accepted but silent. Counsellor call: \u2018Here\u2019s a direct placement comparison \u2014 cost, alumni, and starting salaries.\u2019", sell: "\u201CYour accepted candidate is comparing you with a competitor. Your follow-up is a fee payment reminder.\u201D" },
          { t: "Alumni re-enrolment", s: "Past student returning for next programme", tag: "tw", tl: "We differentiate", prob: "Returning alumni treated as new leads \u2014 no profile from their previous enrolment used.", does: "Full profile from original enrolment \u2014 stated goal, career stage, complaint, satisfaction \u2014 loaded before counsellor calls.", ex: "Alumni enrolled for MBA prep, now calling about executive education. Brief: \u2018Riya \u2014 CAT 97 percentile, now at Deloitte 3 years. Open with the corporate sponsorship angle.\u2019", sell: "\u201CYour alumnus called back. Your counsellor asked them which programme they had studied.\u201D" },
        ],
      },
    },
  },
};

// ── Slug mapping for URL routing ──
// Maps URL slugs to { cdpType, industryKey }

export interface SlugMapping {
  cdpType: string;
  industryKey: string;
}

export const slugMap: Record<string, SlugMapping> = {
  "real-estate": { cdpType: "voice", industryKey: "realestate" },
  banking: { cdpType: "voice", industryKey: "banking" },
  insurance: { cdpType: "voice", industryKey: "insurance" },
  telecom: { cdpType: "voice", industryKey: "telecom" },
  healthcare: { cdpType: "voice", industryKey: "healthcare" },
  auto: { cdpType: "voice", industryKey: "auto" },
  ecommerce: { cdpType: "nonvoice", industryKey: "ecommerce" },
  subbox: { cdpType: "nonvoice", industryKey: "subbox" },
  beauty: { cdpType: "nonvoice", industryKey: "beauty" },
  food: { cdpType: "nonvoice", industryKey: "food" },
  edtech: { cdpType: "nonvoice", industryKey: "edtech" },
  retail: { cdpType: "nonvoice", industryKey: "retail" },
  saas: { cdpType: "both", industryKey: "saas" },
  bfsi: { cdpType: "both", industryKey: "bfsi" },
  omnichannel: { cdpType: "both", industryKey: "omnichannel" },
  travel: { cdpType: "both", industryKey: "travel" },
  fitness: { cdpType: "both", industryKey: "fitness" },
  highered: { cdpType: "both", industryKey: "highered" },
};

// ── Helper: get industry + CDP info from a slug ──

export function getIndustryBySlug(slug: string) {
  const mapping = slugMap[slug];
  if (!mapping) return null;

  const cdp = cdpTypes[mapping.cdpType];
  if (!cdp) return null;

  const industry = cdp.industries[mapping.industryKey];
  if (!industry) return null;

  return { industry, cdp, cdpTypeKey: mapping.cdpType };
}

// ── Helper: get all industries as a flat list ──

export function getAllIndustries() {
  const list: {
    slug: string;
    name: string;
    tagline: string;
    cdpType: string;
    badgeVariant: "voice" | "nonvoice" | "both";
    badgeText: string;
  }[] = [];

  for (const [slug, mapping] of Object.entries(slugMap)) {
    const cdp = cdpTypes[mapping.cdpType];
    const ind = cdp.industries[mapping.industryKey];
    list.push({
      slug,
      name: ind.name,
      tagline: ind.tagline,
      cdpType: mapping.cdpType,
      badgeVariant: cdp.badgeVariant,
      badgeText: cdp.badgeText,
    });
  }
  return list;
}

// ── Helper: get first slug for a given CDP type ──

export function getFirstSlugForCdpType(cdpType: string): string {
  for (const [slug, mapping] of Object.entries(slugMap)) {
    if (mapping.cdpType === cdpType) return slug;
  }
  return Object.keys(slugMap)[0];
}

// ── Helper: get all industries for a given CDP type ──

export function getIndustriesForCdpType(cdpType: string) {
  const list: { slug: string; name: string }[] = [];
  for (const [slug, mapping] of Object.entries(slugMap)) {
    if (mapping.cdpType === cdpType) {
      const cdp = cdpTypes[mapping.cdpType];
      const ind = cdp.industries[mapping.industryKey];
      list.push({ slug, name: ind.name });
    }
  }
  return list;
}


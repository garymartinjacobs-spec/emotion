SCENE COACH (formerly Emotional Vocabulary) - the installable app (v4)
======================================================================
© 2026 Gary Jacobs. All rights reserved.

WHAT THIS IS
A web app that installs on iPhone and Android like any other app, with an icon
on the home screen, and works with no signal. All 931 words in both groupings
(seven families and thirteen), the "how you make me feel" strip, the 60-second naming DRILL (say it or type it,
cued by family or not, with a personal best), and RANKING - homework: ladders of up
to ten words from one family to put in order from least to most intense, our
placing shown after; saved on the phone and copied to send in. A ? screen carries the instructions inside the app. No app store. No
developer account. No annual fee.

NEW IN v4.5 (6 Sept 2026) - copyright notice
  The notice "© 2026 Gary Jacobs. All rights reserved." is on the home screen
  under the doors, at the foot of the "?" sheet beneath the build stamp, in a
  comment at the top of index.html, and at the top of this file. Nothing else
  changed.

NEW IN v4.4 (6 Sept 2026) - after the usability review (deployed 6 Sept 2026)
  THREE DOORS: the landing page has Emotional Vocabulary, Dialogue rules and
  Spoken coach (the Coach is a door of its own). The same three names sit in
  a bar at the bottom of every inner screen; Words / Practice / Ranking are
  a row under the Emotional Vocabulary title. "<- Home" stays at the top.
  Under the doors: "Install on your phone" (opens the steps) and "Make the
  text bigger" (opens the text-size control).
  WORDS: opens on a grid of the seven families, two to a row, each tile
  with the family's color bar and three of its subgroup names (first,
  middle, last). Physical states and How you make me feel sit below under
  "Also explore". Thirteen tiles in the Thirteen view. Tap a tile and the
  family has its own screen: "<- All families", the name and cue, a row of
  subgroup links that jump down the family, the THINK / WANT / NEXT lines,
  the words. In STATUS the subgroup names stand alone (CONFIDENT, GUILTY)
  with "high status" / "mid-level status" / "low status" as a caption.
  The word card has two captions, "With the emotion word:" (the reflective
  form) and "Without the emotion word:" (the line), the five-step intensity
  scale (Faint - Low - Mid - High - Extreme) with the word's step marked,
  and a Close button. The intensity digit on each chip is at full contrast.
  Search has a visible label ("Search words"), a Clear button, one scope
  for both views, and two tiers: words first, then "Found in a sample
  line". The view switch reads "Seven families / Thirteen families" under
  "Show the words in:". Words comes back where you left it when you return
  from another screen in the same session.
  "Family" is the one word for the grouping everywhere; nothing in the app
  refers to looking at a list during a scene.
  SPOKEN COACH: two states. Before a scene: a status line (Ready / Stopped -
  tap Start for a new scene / Finished), the one-sentence purpose, a summary
  of what Start will do ("It will call out actions, out loud, every 30
  seconds for 5 minutes."), Test the voice, a large Start, and two folded
  panels, Settings (preset, one row per call type, "Time between calls",
  scene length with "No time limit", voice) and How to use. While a scene
  runs: "Scene running - 4:32 to go" (or "no time limit"), the last call in
  large type, a dominant Stop and a smaller "Next call now"; the settings
  are out of sight. Stop, leaving the screen and the screen going dark all
  lead to the same Stopped state.
  PRACTICE: four folded cards, each with its name and a one-line purpose;
  one opens at a time. The ladder, Move your partner and Name it show
  their first item as soon as they open. Name it has a typing box; "Show
  our word" shows what you typed beside our word (nothing is kept). The
  ladder drill keeps one pair of neighbors until "New word"; its labels
  are "a less intense emotion" / "a more intense emotion". Name 30 hides
  its switches while the clock runs.
  RANKING: ladders grouped by family ("FEAR - 8 ladders - 2 done"), rows
  "Fear 1 of 8 - ladder 3", "Done" as a word, Copy beside the progress
  line. Inside a ladder: "Tap the least intense emotion." then "Of the
  emotions remaining, tap the least intense."; "3 of 9 placed" with Undo
  beside it; "least intense" and "most intense" as horizontal labels;
  when full, "As you ranked them" / "As we classify their intensity".
  "Do this one again" asks once ("Start this ladder again? Your finished
  order will be replaced." - Start again / Keep it).
  DIALOGUE RULES: full-width group headings with counts, the twelve titles
  in a vertical list (tap one to open that rule), "Example 2 of 4", Next
  scrolls to the rule's title, larger Yes / No tags.
  ? SHEET: titled "Help, text size and appearance"; Close at the top; Text
  size and Appearance first; the topics folded; the install steps; the
  build stamp last. "Remember the seven families: fear, anger, sadness,
  joy, want, status, surprise." The sentences about holding the phone
  during a scene are gone.
  TYPE AND COLOR: subgroup labels 0.8125 rem, intensity digits 0.75 rem at
  full contrast, bar labels 0.9375 rem, cue and note lines 0.875 rem, tags
  0.8125 rem. Darker text variants of JOY, SURPRISE, WANT, HOW YOU MAKE ME
  FEEL and PHYSICAL (and LOVE and CALM in the Thirteen view) for small text
  and selected chips; muted gray #5F5950; Yes green #2A7252; the dark
  theme's update bar in dark ink. Family names and color bars keep their
  hues. The dismiss on the install line is 44 x 44.
  SYSTEM BACK: every screen change is a history entry, so the Android
  Back gesture and the iPhone edge swipe return to the previous screen
  instead of leaving the app; only from the home screen do they leave.
  "<- All families", "<- Groups", "<- All ladders" and Close on the "?"
  sheet step back through that history; "<- Home" returns to the start.
  A reload still lands on the home screen.
  MANIFEST: the description no longer carries a word count that was out
  of date, and the two screenshots Android shows on its install sheet are
  of this version (the Words grid; a word card).
  SECOND BUILD, LATER ON 6 SEPT (after Gary's look at the phone): the
  Coach's "Point-of-view scene" preset is gone (the dialogue rules cannot
  be called at random; "start in silence" does not apply once a scene has
  begun), so Settings holds What it calls, Time between calls, Scene
  length and Voice. On a family's screen the row of group names now has a
  caption above it, "The words are in these groups. Tap one to jump to
  it.", and each name carries its count (WARY 17), so a first-time reader
  does not take the names for an exhaustive list of the family's emotions.
  The "Dialogue rules" call type stays, but rule 1's call ("start in
  silence") is no longer among the calls: it applies only before a scene
  has begun. Eleven rule calls; the walk still has twelve rules.
  TESTS: every script runs on 320, 393 and 430 px, at Regular / Large /
  Larger and in light and dark (matrix.js); test_v44.js covers the doors,
  the bar, the grid and family screens, the Coach states and Name it;
  test_words.js measures taps and distance to the deepest word in every
  family; test_back.js covers system Back.

NEW IN v4.3 (5 Sept 2026) - after the independent review
  WORDS: 65 words that named a trait, a judgment or someone else's conduct
  (villainous, cruel, bathetic, irascible, chivalrous...) are out; five
  received states (deceived, tyrannized, victimized, enslaved, subjugated)
  moved to HOW YOU MAKE ME FEEL; 28 everyday and faint words added (down,
  blah, bummed, pissed off, freaked out, heartache, in love...); 50 words
  refiled (numb and its kin out of CALM into a new SADNESS group NUMB; guilt
  words into STATUS LOW - GUILTY; smug and superior to ARROGANT; awestruck to
  SURPRISE; five PHYSICAL groups). 132 sample lines rewritten to be shorter,
  spoken and legible. 931 words in all.
  TYPE IT AND SEARCH accept 180 other forms (anger, hate, jealousy, burnt
  out...) and count each with its word once.
  COACH: cannot start with nothing to call; options lock while a scene runs;
  the first call comes one interval after Go; the point-of-view preset locks
  the interval and is remembered; Test the voice button and a message when
  the phone cannot speak; discoveries are about the place, never the
  partner.
  PRACTICE: "Can you see it?" removed (it asked an actor to play a chosen
  emotion). The ladder compares like with like (by the thirteen categories)
  and includes noun-only words. "Move your partner" can start from a faint
  word.
  WORDS: tapping a word opens its card directly under the word, not below
  the whole group. Home-screen family buttons clear any search.
  RANKING: ladders rebuilt from the original list plus the 105 most common
  of the added words; the rare additions stay in Words but out of the
  homework. Earlier saved rankings do not match and are cleared.
  DRAW removed: it handed the actor an emotion to carry into a scene.
  HOME SCREEN: the seven-families block (v4.2) is gone; the landing page
  is the two doors again. The families are one tap away behind Emotional
  Vocabulary.
  DIALOGUE RULES: Gary's new example pairs for rules 5, 9 and 12.
  ? SCREEN: reworded where it was out of date.

NEW IN v4.1 (3 Sept 2026)
  TEXT SIZE: the ? screen has a Regular / Large / Larger switch beside
  Appearance, saved on the phone. Regular is a touch larger than v4; the
  sizes are fixed, the same on every phone. The ? screen has headings.

NEW IN v4 (2 Sept 2026)
  APPEARANCE: the ? screen has an Automatic / Light / Dark switch, saved on
  the phone; Automatic follows the phone's own setting. The Words footer
  and the ? screen show the build date and time, so you can tell whether a
  phone has the latest version.
  NAME: the app is now called Scene Coach (icon label too). Phones that
  installed it under the old name keep that label until it is re-added.
  TWO DOORS: the app opens on a landing page with two large buttons,
  Emotional Vocabulary (words, coach, drills, ranking) and Dialogue rules.
  "<- Home" at the top of every screen returns to it.
  DIALOGUE RULES: twelve rules in three groups - Before you speak, What to
  say, How to say it. Tap a group and walk the rules one at a time, each
  with a line that breaks it (No, red) and a line that keeps it (Yes,
  green); Another example, Previous rule, Next rule. (The rule of the day
  was removed in v4.2 at Gary's request.) The Coach has a "Dialogue rules"
  switch that calls the rules aloud.
  RANKING tab (replaces Whelan's thesaurus, removed 2 Sept for copyright and
  because his categories were not adopted): ladders drawn from the
  thirteen categories (physical states left out), each up to ten words
  spanning faint to extreme, fixed and the same on every phone; the student
  taps the least intense emotion first; when the ladder is full the app shows our
  rung beside each word, no score.
  COACH tab (labelled Caller until 2 Sept): put the phone on a chair and play a scene; at a set interval
  (15-90 s) it calls out - aloud, offline - an action, an object, a
  discovery, a body state, a speech rule, a silent switch, or "heighten". Pairs practice without a coach. Nothing is recorded.
  PRACTICE tab: Name 30 (no scores kept), the Ladder flashcard, and
  "Can you see it?" for two at home. Drill history and personal bests
  removed at Gary's request; only finished ladders are saved, on the phone.

NEW IN v3 (1 Sept 2026)
  Seven families replace six (WANT split out of JOY; STATUS sub-groups by
  meaning - the old sheet had "helpless" under HIGH - ARROGANT, an error).
  THINK / WANT / NEXT lines under each family. HOW YOU MAKE ME FEEL strip.
  Drill tab. Whelan tab. Bottom navigation. Student data (drill scores,
  Whelan sheets) stays on the student's phone; nothing is sent anywhere.

FILES (upload all of them, exactly as named)
  index.html               the whole app
  manifest.webmanifest     tells the phone it is installable
  sw.js                    lets it work offline
  icon-192.png             } icons
  icon-512.png             }
  icon-512-maskable.png    }
  apple-touch-icon.png     }
  shot-1.png  shot-2.png   screenshots Android shows on its install sheet

----------------------------------------------------------------------------
STEP 1 - PUT IT ONLINE  (already done on 2 Sept 2026 - kept for reference)
----------------------------------------------------------------------------
Installing to a home screen requires a real https address, so the files have
to live on the web. GitHub Pages is free and does not expire.

  1. Go to github.com -> Sign up (free). Confirm the email.
  2. Top-right "+" -> "New repository".
       Repository name:  emotion
       Public.  Click "Create repository".
  3. On the page that appears click "uploading an existing file".
  4. Drag ALL the files listed above into the box. Click "Commit changes".
  5. Click "Settings" (top of the repo) -> "Pages" (left sidebar).
       Under Build and deployment -> Branch: choose "main", folder "/ (root)".
       Click Save.
  6. Wait 1-2 minutes, reload that Pages screen. It shows your address:
       https://garymartinjacobs-spec.github.io/emotion/
     Open it on your phone. That link is yours for as long as you want it.

----------------------------------------------------------------------------
STEP 2 - INSTALL IT ON YOUR OWN PHONE FIRST
----------------------------------------------------------------------------
iPHONE  (must be Safari - Chrome on iPhone cannot install web apps)
  1. Open the link in Safari.
  2. Tap the "..." button at the right end of the address bar.
       (iOS 18 or earlier: tap the Share button - the square with an arrow.)
  3. Tap "Share", then scroll and tap "Add to Home Screen".
  4. Leave "Open as Web App" switched ON. Tap "Add".
  5. Find the green "Scene Coach" icon on your home screen. Open it.
  6. Turn on Airplane Mode and open it again. It should still work.

ANDROID  (Chrome)
  1. Open the link in Chrome.
  2. Either tap the "Install" button the app shows at the top, or
     tap the three-dot menu (top right) -> "Add to Home screen" or "Install app".
  3. Tap "Install".
  4. Open "Scene Coach" from the home screen or app drawer.
  5. Turn on Airplane Mode and open it again. It should still work.

If an install option does not appear on Android, use the page for 30 seconds
and tap something - Chrome waits for a little engagement before offering.

----------------------------------------------------------------------------
STEP 3 - GIVE IT TO STUDENTS
----------------------------------------------------------------------------
Send them the link (text, email, or on the board). Nothing to download.
Hand out the one-page "Getting the app" sheet, or point them at the "?"
button inside the app, which has the same steps.

In class, the fastest route: everyone opens the link, everyone taps "..."
(or Share) -> "Add to Home Screen" together. Two minutes.

----------------------------------------------------------------------------
UPDATING IT LATER
----------------------------------------------------------------------------
Upload the new files to the same repository (drag them in; GitHub replaces
the old ones). Every rebuild stamps sw.js with a new version, so phones pick
up the change the next time they open the app with a connection - no need
for anyone to reinstall.

----------------------------------------------------------------------------
IF YOU NEVER PUT IT ONLINE
----------------------------------------------------------------------------
index.html works on its own from any browser, any device, forever - email it
to yourself and open it. You lose only the home-screen icon and offline mode.

v4.2 (4 Sept 2026)
  420 words added (968 in all: 909 emotion words + 59 physical states, plus the
  86 how-you-make-me-feel words), from Whelan's dictionary and the words the
  naming drill had rejected. Home screen shows the seven families at a glance;
  tap one for its words. Coach: "Point-of-view scene" preset; "four words at a
  time" and "move before you speak" speech restrictions. Practice: "Move your
  partner" and "Name it" drills; physical states typed in the naming drill are
  shown in gray and not counted. Each word card has "Report a problem with this
  word" (email). "A newer version is ready - tap to reload" bar replaces the
  automatic reload. Dialogue rules: rules 2 and 3 reworded, point-of-view and
  stay-in-the-present explanations rewritten, "Exclaim; don't label" moved to
  How to say it (rule 12); rule of the day removed (too busy; twelve rules
  are easy to browse).

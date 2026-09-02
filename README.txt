SCENE COACH (formerly Emotional Vocabulary) - the installable app (v4)
======================================================================

WHAT THIS IS
A web app that installs on iPhone and Android like any other app, with an icon
on the home screen, and works with no signal. All 548 words in both groupings
(seven families and thirteen), the "how you make me feel" strip, Draw (a random
word to enter a scene with), the 60-second naming DRILL (say it or type it,
cued by family or not, with a personal best), and RANKING - Whelan's thesaurus
homework, one root at a time, saved on the phone and copied or shared to send
in. A ? screen carries the instructions inside the app. No app store. No
developer account. No annual fee.

NEW IN v4 (2 Sept 2026)
  NAME: the app is now called Scene Coach (icon label too). Phones that
  installed it under the old name keep that label until it is re-added.
  TWO DOORS: the app opens on a landing page with two large buttons,
  Emotional Vocabulary (words, caller, drills, Whelan) and Dialogue rules.
  "<- Home" at the top of every screen returns to it.
  DIALOGUE RULES: twelve rules in three groups - Before you speak, What to
  say, How to say it. Tap a group and walk the rules one at a time, each
  with a line that breaks it (No, red) and a line that keeps it (Yes,
  green); Another example, Previous rule, Next rule. Rule of the day at
  the top, the same rule on every phone. The Coach has a "Dialogue rules"
  switch that calls the rules aloud.
  COACH tab (labelled Caller until 2 Sept): put the phone on a chair and play a scene; at a set interval
  (15-90 s) it calls out - aloud, offline - an action, an object, a
  discovery, a body state, a speech rule, a silent switch, or "heighten". Pairs practise without a coach. Nothing is recorded.
  PRACTICE tab: Name 30 (no scores kept), the Ladder flashcard, and
  "Can you see it?" for two at home. Drill history and personal bests
  removed at Gary's request; only Whelan sheets are saved, on the phone.

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

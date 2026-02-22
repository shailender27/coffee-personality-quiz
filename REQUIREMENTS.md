# Coffee Personality Quiz - Requirements

## Overview
A "What's Your Coffee Personality?" quiz. Users answer 6 questions and receive a breakdown of all their personality percentages with corresponding coffee recommendations.

---

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|---|---|---|
| Bold Adventurer | Double Espresso | "You live for intensity" |
| Cozy Classic | Medium Roast Drip | "Comfort in every cup" |
| Sweet Enthusiast | Caramel Latte | "Life's too short for bitter" |
| Zen Minimalist | Black Coffee, Single Origin | "Simple. Clean. Perfect." |
| Health Nut | Oat Milk Americano | "Wellness in every sip" |
| Practical Pragmatist | Large Drip, Whatever's Fresh | "Just make it work" |

---

## Result Display Style
**Show all percentages (Option B)**
After completing the quiz, users see ALL 6 personalities with their percentages. Example:
- 50% Bold Adventurer → Double Espresso
- 30% Cozy Classic → Medium Roast Drip
- 20% Zen Minimalist → Black Coffee

---

## Visual Style
**Style 1: Playful & Colorful**
- Bright yellow/orange gradient background
- White rounded card (border-radius: 32px)
- Bold, chunky font (Nunito)
- Yellow progress bar
- Rounded option buttons with hover animation (slide right)
- Fun and energetic feel

---

## Images
Skipping for now. Can be added later during iteration.

---

## Icons
**Yes - emoji icons** next to each answer option to make the quiz feel more visual and fun.

---

## Quiz Questions

### Q1: It's Friday night. What's your move?
- 🏔️ Planning tomorrow's 6am hike → **Bold Adventurer**
- 🛋️ Couch, candles, comfort show → **Cozy Classic**
- 🍰 Baking something indulgent for the week → **Sweet Enthusiast**
- 🧘 Early bed, no phone, full reset → **Zen Minimalist**
- 🥗 Meal prepping for a healthy week → **Health Nut**
- 📋 Getting ahead on tomorrow's to-do list → **Practical Pragmatist**

### Q2: Pick a fictional character you relate to most:
- 🦁 Daenerys Targaryen - fearless and intense → **Bold Adventurer**
- 🧸 Samwise Gamgee - loyal, warm, dependable → **Cozy Classic**
- 🍭 Leslie Knope - enthusiastic and sweet → **Sweet Enthusiast**
- 🌿 Yoda - calm, wise, minimal → **Zen Minimalist**
- 💪 Hermione Granger - disciplined and prepared → **Health Nut**
- 🔧 Tony Stark - efficient and gets things done → **Practical Pragmatist**

### Q3: What color is your soul?
- 🔴 Fiery red - bold and unapologetic → **Bold Adventurer**
- 🟤 Warm brown - grounded and comforting → **Cozy Classic**
- 🌸 Soft pink - sweet and joyful → **Sweet Enthusiast**
- ⬜ Clean white - pure and uncluttered → **Zen Minimalist**
- 🟢 Fresh green - alive and thriving → **Health Nut**
- 🔵 Steady blue - reliable and calm → **Practical Pragmatist**

### Q4: Your ideal weekend trip?
- 🧗 Solo rock climbing in Patagonia → **Bold Adventurer**
- 🏡 A quiet cabin with no WiFi → **Cozy Classic**
- 🍦 A food festival in a cute town → **Sweet Enthusiast**
- 🏯 A meditation retreat in Kyoto → **Zen Minimalist**
- 🚴 A cycling tour through farm country → **Health Nut**
- 🗺️ A well-planned city trip with an itinerary → **Practical Pragmatist**

### Q5: How do you handle a stressful day?
- 🏃 Go for a hard run until your head clears → **Bold Adventurer**
- 🫖 Make tea, wrap in a blanket, breathe → **Cozy Classic**
- 🍫 Treat yourself - you earned it → **Sweet Enthusiast**
- 🧘 Meditate and let it pass → **Zen Minimalist**
- 🥦 Stick to your routine - sleep, water, workout → **Health Nut**
- ✅ Make a list and tackle things one by one → **Practical Pragmatist**

### Q6: Pick a morning alarm style:
- ⚡ 5am, no snooze, let's GO → **Bold Adventurer**
- 😴 Multiple snoozes, slow ease into the day → **Cozy Classic**
- 🎵 A cheerful playlist to wake up happy → **Sweet Enthusiast**
- 🌅 Natural light, no alarm needed → **Zen Minimalist**
- 🏋️ Up early for a workout, every day → **Health Nut**
- ⏰ One alarm, exactly on time, always → **Practical Pragmatist**

---

## Logic
- Each answer maps to exactly one personality
- At the end, tally up all answers
- Calculate percentage for each personality
- Display all 6 results ranked by percentage with coffee recommendation

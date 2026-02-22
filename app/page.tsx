"use client";

import { useState } from "react";

type PersonalityType =
  | "boldAdventurer"
  | "cozyClassic"
  | "sweetEnthusiast"
  | "zenMinimalist"
  | "healthNut"
  | "practicalPragmatist"
  | "artisanRoaster";

const personalities: Record<
  PersonalityType,
  { name: string; coffee: string; tagline: string; emoji: string }
> = {
  boldAdventurer: {
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity",
    emoji: "🏔️",
  },
  cozyClassic: {
    name: "Cozy Classic",
    coffee: "Medium Roast Drip",
    tagline: "Comfort in every cup",
    emoji: "🛋️",
  },
  sweetEnthusiast: {
    name: "Sweet Enthusiast",
    coffee: "Caramel Latte",
    tagline: "Life's too short for bitter",
    emoji: "🍰",
  },
  zenMinimalist: {
    name: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tagline: "Simple. Clean. Perfect.",
    emoji: "🧘",
  },
  healthNut: {
    name: "Health Nut",
    coffee: "Oat Milk Americano",
    tagline: "Wellness in every sip",
    emoji: "🥗",
  },
  practicalPragmatist: {
    name: "Practical Pragmatist",
    coffee: "Large Drip, Whatever's Fresh",
    tagline: "Just make it work",
    emoji: "📋",
  },
  artisanRoaster: {
    name: "Artisan Roaster",
    coffee: "Single Origin Pour Over",
    tagline: "Craft over convenience",
    emoji: "🫗",
  },
};

const questions = [
  {
    question: "It's Friday night. What's your move?",
    answers: [
      { text: "Planning tomorrow's 6am hike", emoji: "🏔️", personality: "boldAdventurer" as PersonalityType },
      { text: "Couch, candles, comfort show", emoji: "🛋️", personality: "cozyClassic" as PersonalityType },
      { text: "Baking something indulgent for the week", emoji: "🍰", personality: "sweetEnthusiast" as PersonalityType },
      { text: "Early bed, no phone, full reset", emoji: "🧘", personality: "zenMinimalist" as PersonalityType },
      { text: "Meal prepping for a healthy week", emoji: "🥗", personality: "healthNut" as PersonalityType },
      { text: "Getting ahead on tomorrow's to-do list", emoji: "📋", personality: "practicalPragmatist" as PersonalityType },
      { text: "Researching next week's coffee origin story", emoji: "🫗", personality: "artisanRoaster" as PersonalityType },
    ],
  },
  {
    question: "Pick a fictional character you relate to most:",
    answers: [
      { text: "Daenerys Targaryen — fearless and intense", emoji: "🦁", personality: "boldAdventurer" as PersonalityType },
      { text: "Samwise Gamgee — loyal, warm, dependable", emoji: "🧸", personality: "cozyClassic" as PersonalityType },
      { text: "Leslie Knope — enthusiastic and sweet", emoji: "🍭", personality: "sweetEnthusiast" as PersonalityType },
      { text: "Yoda — calm, wise, minimal", emoji: "🌿", personality: "zenMinimalist" as PersonalityType },
      { text: "Hermione Granger — disciplined and prepared", emoji: "💪", personality: "healthNut" as PersonalityType },
      { text: "Tony Stark — efficient and gets things done", emoji: "🔧", personality: "practicalPragmatist" as PersonalityType },
      { text: "Remy from Ratatouille — obsessed with craft and quality", emoji: "🎭", personality: "artisanRoaster" as PersonalityType },
    ],
  },
  {
    question: "What color is your soul?",
    answers: [
      { text: "Fiery red — bold and unapologetic", emoji: "🔴", personality: "boldAdventurer" as PersonalityType },
      { text: "Warm brown — grounded and comforting", emoji: "🟤", personality: "cozyClassic" as PersonalityType },
      { text: "Soft pink — sweet and joyful", emoji: "🌸", personality: "sweetEnthusiast" as PersonalityType },
      { text: "Clean white — pure and uncluttered", emoji: "⬜", personality: "zenMinimalist" as PersonalityType },
      { text: "Fresh green — alive and thriving", emoji: "🟢", personality: "healthNut" as PersonalityType },
      { text: "Steady blue — reliable and calm", emoji: "🔵", personality: "practicalPragmatist" as PersonalityType },
      { text: "Burnt orange — warm, earthy, handmade", emoji: "🟠", personality: "artisanRoaster" as PersonalityType },
    ],
  },
  {
    question: "Your ideal weekend trip?",
    answers: [
      { text: "Solo rock climbing in Patagonia", emoji: "🧗", personality: "boldAdventurer" as PersonalityType },
      { text: "A quiet cabin with no WiFi", emoji: "🏡", personality: "cozyClassic" as PersonalityType },
      { text: "A food festival in a cute town", emoji: "🍦", personality: "sweetEnthusiast" as PersonalityType },
      { text: "A meditation retreat in Kyoto", emoji: "🏯", personality: "zenMinimalist" as PersonalityType },
      { text: "A cycling tour through farm country", emoji: "🚴", personality: "healthNut" as PersonalityType },
      { text: "A well-planned city trip with an itinerary", emoji: "🗺️", personality: "practicalPragmatist" as PersonalityType },
      { text: "A farm-to-table experience at a coffee estate", emoji: "🏕️", personality: "artisanRoaster" as PersonalityType },
    ],
  },
  {
    question: "How do you handle a stressful day?",
    answers: [
      { text: "Go for a hard run until your head clears", emoji: "🏃", personality: "boldAdventurer" as PersonalityType },
      { text: "Make tea, wrap in a blanket, breathe", emoji: "🫖", personality: "cozyClassic" as PersonalityType },
      { text: "Treat yourself — you earned it", emoji: "🍫", personality: "sweetEnthusiast" as PersonalityType },
      { text: "Meditate and let it pass", emoji: "🧘", personality: "zenMinimalist" as PersonalityType },
      { text: "Stick to your routine — sleep, water, workout", emoji: "🥦", personality: "healthNut" as PersonalityType },
      { text: "Make a list and tackle things one by one", emoji: "✅", personality: "practicalPragmatist" as PersonalityType },
      { text: "Slow down and brew a perfect cup, step by step", emoji: "☕", personality: "artisanRoaster" as PersonalityType },
    ],
  },
  {
    question: "Pick a morning alarm style:",
    answers: [
      { text: "5am, no snooze, let's GO", emoji: "⚡", personality: "boldAdventurer" as PersonalityType },
      { text: "Multiple snoozes, slow ease into the day", emoji: "😴", personality: "cozyClassic" as PersonalityType },
      { text: "A cheerful playlist to wake up happy", emoji: "🎵", personality: "sweetEnthusiast" as PersonalityType },
      { text: "Natural light, no alarm needed", emoji: "🌅", personality: "zenMinimalist" as PersonalityType },
      { text: "Up early for a workout, every day", emoji: "🏋️", personality: "healthNut" as PersonalityType },
      { text: "One alarm, exactly on time, always", emoji: "⏰", personality: "practicalPragmatist" as PersonalityType },
      { text: "Up early to hand-grind beans before the world wakes up", emoji: "🌄", personality: "artisanRoaster" as PersonalityType },
    ],
  },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
  };

  const getResults = () => {
    const counts: Record<PersonalityType, number> = {
      boldAdventurer: 0,
      cozyClassic: 0,
      sweetEnthusiast: 0,
      zenMinimalist: 0,
      healthNut: 0,
      practicalPragmatist: 0,
      artisanRoaster: 0,
    };
    answers.forEach((p) => {
      counts[p]++;
    });
    return (Object.entries(counts) as [PersonalityType, number][])
      .map(([type, count]) => ({
        type,
        count,
        percentage: Math.round((count / answers.length) * 100),
      }))
      .sort((a, b) => b.percentage - a.percentage);
  };

  if (isComplete) {
    const results = getResults();
    const top = results[0];

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-lg p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-3">{personalities[top.type].emoji}</div>
            <h1 className="text-3xl font-black text-gray-900 mb-1">
              Your Coffee Personality!
            </h1>
            <p className="text-gray-500 font-semibold">
              Here&apos;s how your results stacked up
            </p>
          </div>

          <div className="space-y-4">
            {results.map((result, index) => {
              const p = personalities[result.type];
              const isTop = index === 0;
              return (
                <div
                  key={result.type}
                  className={`rounded-2xl p-4 ${
                    isTop
                      ? "bg-yellow-50 border-2 border-yellow-400"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.emoji}</span>
                      <div>
                        <div
                          className={`font-black leading-tight ${
                            isTop
                              ? "text-lg text-gray-900"
                              : "text-base text-gray-700"
                          }`}
                        >
                          {p.name}
                          {isTop && (
                            <span className="ml-2 text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full font-bold">
                              Your type!
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {p.coffee} • {p.tagline}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`font-black ${
                        isTop
                          ? "text-2xl text-yellow-600"
                          : "text-lg text-gray-400"
                      }`}
                    >
                      {result.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-700"
                      style={{ width: `${result.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleReset}
            className="mt-8 w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-black text-lg py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
          >
            ☕ Take it again!
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-lg p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="bg-yellow-100 text-yellow-700 font-black text-sm px-4 py-1.5 rounded-full">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-gray-400 font-bold text-sm">☕ Coffee Quiz</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-2.5 mb-8">
          <div
            className="h-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <h2 className="text-2xl font-black text-gray-900 mb-6 leading-snug">
          {q.question}
        </h2>

        {/* Answers */}
        <div className="space-y-3">
          {q.answers.map((answer, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(answer.personality)}
              className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-2xl border-2 border-gray-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200 hover:translate-x-1 font-semibold text-gray-700 group cursor-pointer"
            >
              <span className="text-2xl">{answer.emoji}</span>
              <span className="group-hover:text-gray-900 transition-colors">
                {answer.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

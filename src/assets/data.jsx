import { QuestionOneImage } from "../assets/images/questionOneImage";
import { QuestionTwoImage } from "../assets/images/questionTwoImage";
import { QuestionThreeImage } from "../assets/images/questionThreeImage";
import { QuestionFourImage } from "../assets/images/questionFourImage";
import { QuestionFiveImage } from "../assets/images/questionFiveImage";

export const quiz = [
  {
    question: "How do you prepare for exams?",
    relImg: (
      <QuestionOneImage className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72" />
    ),
    options: [
      {
        option: "Make a color-coded study schedule weeks in advance.",
        label: "Planner",
      },
      {
        option: "Wing it the night before with some caffeine.",
        label: "Last-Minute Genius",
      },
      {
        option: "Study with friends and quiz each other.",
        label: "Study Buddy",
      },
      {
        option: "Review notes in a relaxed way—I've got this.",
        label: "Chill Master",
      },
    ],
  },
  {
    question: "When it comes to CAS (Creativity, Activity, Service), you...",
    relImg: (
      <QuestionTwoImage className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72" />
    ),
    options: [
      {
        option: "Plan meaningful activities that align with your career goals.",
        label: "Planner",
      },
      {
        option: "Sign up for last-minute projects to get it done quickly.",
        label: "Last-Minute Genius",
      },
      {
        option:
          "Find fun group activities and enjoy the experience with friends.",
        label: "Study Buddy",
      },
      {
        option: "Try out different activities to explore new interests.",
        label: "Chill Master",
      },
    ],
  },
  {
    question: "How do you tackle TOK (Theory of Knowledge)?",
    relImg: (
      <QuestionThreeImage className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72" />
    ),
    options: [
      {
        option: "Dive deep into the questions and love analyzing every aspect.",
        label: "Planner",
      },
      {
        option:
          "Write the essay in one go after watching a few YouTube videos.",
        label: "Last-Minute Genius",
      },
      {
        option: "Discuss TOK concepts with friends over coffee.",
        label: "Study Buddy",
      },
      {
        option: "Appreciate TOK for the mind-bending conversations it creates.",
        label: "Chill Master",
      },
    ],
  },
  {
    question: "What's your biggest IB exam tip?",
    relImg: (
      <QuestionFourImage className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72" />
    ),
    options: [
      {
        option: "Start early and review often—consistency is key.",
        label: "Planner",
      },
      {
        option: "Focus on key concepts and practice past papers last minute.",
        label: "Last-Minute Genius",
      },
      { option: "Study with friends and make it fun.", label: "Study Buddy" },
      {
        option: "Take breaks and don’t stress—your mental health matters.",
        label: "Chill Master",
      },
    ],
  },
  {
    question: "What do you do when you're stressed?",
    relImg: (
      <QuestionFiveImage className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72" />
    ),
    options: [
      {
        option: "Meditate or go for a run to clear your mind.",
        label: "Planner",
      },
      {
        option: "Binge-watch a TV show until I forget about the stress.",
        label: "Last-Minute Genius",
      },
      { option: "Call a friend and vent for a while.", label: "Study Buddy" },
      {
        option: "Take a short nap and get back to work.",
        label: "Chill Master",
      },
    ],
  },
];

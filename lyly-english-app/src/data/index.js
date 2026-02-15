import { week1 } from './week1';
import { week2 } from './week2';
import { week3 } from './week3';
import { week4 } from './week4';
import { week5 } from './week5';
import { week6 } from './week6';
import { week7 } from './week7';
import { week8 } from './week8';
import { week9 } from './week9';
import { week10 } from './week10';
import { week11 } from './week11';
import { week12 } from './week12';

const allWeeks = {
  1: week1,
  2: week2,
  3: week3,
  4: week4,
  5: week5,
  6: week6,
  7: week7,
  8: week8,
  9: week9,
  10: week10,
  11: week11,
  12: week12,
};

export const weekMetadata = [
  { id: 1, title: "Alphabet & Greetings", goal: "Learn alphabet, numbers, and basic greetings", icon: "\u{1F524}" },
  { id: 2, title: "Family & Objects", goal: "Learn family members and common objects", icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}" },
  { id: 3, title: "Colors, Days & Questions", goal: "Learn colors, days of week, and basic questions", icon: "\u{1F3A8}" },
  { id: 4, title: "Daily Routine & Verbs", goal: "Learn common verbs and daily activities", icon: "\u23F0" },
  { id: 5, title: "Food & Drinks", goal: "Learn food vocabulary and ordering", icon: "\u{1F355}" },
  { id: 6, title: "Shopping & Clothes", goal: "Learn shopping vocabulary and clothing", icon: "\u{1F6CD}\uFE0F" },
  { id: 7, title: "Places & Directions", goal: "Learn places in town and giving directions", icon: "\u{1F5FA}\uFE0F" },
  { id: 8, title: "Weather & Time", goal: "Learn weather vocabulary and telling time", icon: "\u{1F324}\uFE0F" },
  { id: 9, title: "Hobbies & Free Time", goal: "Learn hobbies and present continuous tense", icon: "\u{1F3AF}" },
  { id: 10, title: "Health & Body", goal: "Learn body parts and health vocabulary", icon: "\u{1F3E5}" },
  { id: 11, title: "Travel & Adventure", goal: "Learn travel vocabulary and transport", icon: "\u2708\uFE0F" },
  { id: 12, title: "Final Review & Graduation", goal: "Review everything and graduate!", icon: "\u{1F3C6}" },
];

export const weekDashboardData = {
  1: {
    title: "Alphabet & Greetings",
    goal: "Learn alphabet, numbers, and basic greetings",
    icon: "\u{1F524}",
    days: [
      { id: 1, title: "Alphabet A-M", lessons: ["Learn Letters A-M", "Practice Letters", "Say Letters"] },
      { id: 2, title: "Alphabet N-Z", lessons: ["Learn Letters N-Z", "Practice Letters", "Say Letters"] },
      { id: 3, title: "Numbers 1-10", lessons: ["Learn Numbers", "Practice Numbers", "Count Aloud"] },
      { id: 4, title: "Basic Greetings", lessons: ["Learn Greetings", "Practice Greetings", "Say Greetings"] },
      { id: 5, title: "Week 1 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  2: {
    title: "Family & Objects",
    goal: "Learn family members and common objects",
    icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
    days: [
      { id: 1, title: "Family Members", lessons: ["Learn Family", "Practice Family", "Talk About Family"] },
      { id: 2, title: "House Objects", lessons: ["Learn Objects", "Practice Objects", "Name Objects"] },
      { id: 3, title: "This/That", lessons: ["Learn This/That", "Practice This/That", "Use This/That"] },
      { id: 4, title: "Numbers 11-20", lessons: ["Learn Numbers", "Practice Numbers", "Say Your Age"] },
      { id: 5, title: "Week 2 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  3: {
    title: "Colors, Days & Questions",
    goal: "Learn colors, days of week, and basic questions",
    icon: "\u{1F3A8}",
    days: [
      { id: 1, title: "Colors", lessons: ["Learn Colors", "Practice Colors", "Name Colors"] },
      { id: 2, title: "Days of the Week", lessons: ["Learn Days", "Practice Days", "Say Days"] },
      { id: 3, title: "What is this?", lessons: ["Learn Questions", "Practice Questions", "Ask Questions"] },
      { id: 4, title: "How many?", lessons: ["Learn Counting", "Practice Counting", "Ask How Many"] },
      { id: 5, title: "Week 3 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  4: {
    title: "Daily Routine & Verbs",
    goal: "Learn common verbs and daily activities",
    icon: "\u23F0",
    days: [
      { id: 1, title: "Action Verbs", lessons: ["Learn Verbs", "Practice Verbs", "Say Verbs"] },
      { id: 2, title: "Morning Routine", lessons: ["Learn Morning", "Practice Routine", "Describe Morning"] },
      { id: 3, title: "I am / You are", lessons: ["Learn Pronouns", "Practice Pronouns", "Use Pronouns"] },
      { id: 4, title: "Evening Routine", lessons: ["Learn Evening", "Practice Routine", "Describe Evening"] },
      { id: 5, title: "Week 4 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  5: {
    title: "Food & Drinks",
    goal: "Learn food vocabulary and ordering",
    icon: "\u{1F355}",
    days: [
      { id: 1, title: "Food", lessons: ["Learn Food", "Practice Food", "Talk About Food"] },
      { id: 2, title: "Drinks", lessons: ["Learn Drinks", "Practice Drinks", "Order Drinks"] },
      { id: 3, title: "I like / I don't like", lessons: ["Learn Preferences", "Practice Preferences", "Say Preferences"] },
      { id: 4, title: "At a Restaurant", lessons: ["Learn Restaurant", "Practice Ordering", "Order Food"] },
      { id: 5, title: "Week 5 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  6: {
    title: "Shopping & Clothes",
    goal: "Learn shopping vocabulary and clothing",
    icon: "\u{1F6CD}\uFE0F",
    days: [
      { id: 1, title: "Clothes", lessons: ["Learn Clothes", "Practice Clothes", "Describe Clothes"] },
      { id: 2, title: "Colors + Clothes", lessons: ["Learn Descriptions", "Practice Describing", "Describe Outfits"] },
      { id: 3, title: "Numbers & Prices", lessons: ["Learn Prices", "Practice Prices", "Say Prices"] },
      { id: 4, title: "At a Shop", lessons: ["Learn Shopping", "Practice Shopping", "Go Shopping"] },
      { id: 5, title: "Week 6 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  7: {
    title: "Places & Directions",
    goal: "Learn places in town and giving directions",
    icon: "\u{1F5FA}\uFE0F",
    days: [
      { id: 1, title: "Places", lessons: ["Learn Places", "Practice Places", "Name Places"] },
      { id: 2, title: "Where is...?", lessons: ["Learn Location", "Practice Location", "Ask Location"] },
      { id: 3, title: "Left, Right, Straight", lessons: ["Learn Directions", "Practice Directions", "Give Directions"] },
      { id: 4, title: "Transportation", lessons: ["Learn Transport", "Practice Transport", "Talk Transport"] },
      { id: 5, title: "Week 7 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  8: {
    title: "Weather & Time",
    goal: "Learn weather vocabulary and telling time",
    icon: "\u{1F324}\uFE0F",
    days: [
      { id: 1, title: "Weather", lessons: ["Learn Weather", "Practice Weather", "Talk Weather"] },
      { id: 2, title: "Months & Seasons", lessons: ["Learn Months", "Practice Months", "Say Months"] },
      { id: 3, title: "Telling Time", lessons: ["Learn Time", "Practice Time", "Tell Time"] },
      { id: 4, title: "Daily Schedule", lessons: ["Learn Schedule", "Practice Schedule", "Describe Schedule"] },
      { id: 5, title: "Week 8 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  9: {
    title: "Hobbies & Free Time",
    goal: "Learn hobbies and present continuous tense",
    icon: "\u{1F3AF}",
    days: [
      { id: 1, title: "Hobbies", lessons: ["Learn Hobbies", "Practice Hobbies", "Talk Hobbies"] },
      { id: 2, title: "Present Continuous", lessons: ["Learn -ing Forms", "Practice -ing", "Use -ing"] },
      { id: 3, title: "Can / Can't", lessons: ["Learn Can/Can't", "Practice Can/Can't", "Say Abilities"] },
      { id: 4, title: "Making Plans", lessons: ["Learn Plans", "Practice Plans", "Make Plans"] },
      { id: 5, title: "Week 9 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  10: {
    title: "Health & Body",
    goal: "Learn body parts and health vocabulary",
    icon: "\u{1F3E5}",
    days: [
      { id: 1, title: "Body Parts", lessons: ["Learn Body Parts", "Practice Body Parts", "Name Body Parts"] },
      { id: 2, title: "I Feel Sick", lessons: ["Learn Symptoms", "Practice Symptoms", "Describe Symptoms"] },
      { id: 3, title: "At the Doctor", lessons: ["Learn Doctor Visit", "Practice Dialogue", "Talk to Doctor"] },
      { id: 4, title: "Feelings", lessons: ["Learn Feelings", "Practice Feelings", "Express Feelings"] },
      { id: 5, title: "Week 10 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  11: {
    title: "Travel & Adventure",
    goal: "Learn travel vocabulary and transport",
    icon: "\u2708\uFE0F",
    days: [
      { id: 1, title: "At the Airport", lessons: ["Learn Airport", "Practice Airport", "Airport Dialogue"] },
      { id: 2, title: "At a Hotel", lessons: ["Learn Hotel", "Practice Hotel", "Hotel Dialogue"] },
      { id: 3, title: "Asking for Help", lessons: ["Learn Help Phrases", "Practice Asking", "Ask for Help"] },
      { id: 4, title: "Sightseeing", lessons: ["Learn Sightseeing", "Practice Sightseeing", "Describe Places"] },
      { id: 5, title: "Week 11 Review", lessons: ["Review All", "Review Quiz", "Review Speaking"] },
    ]
  },
  12: {
    title: "Final Review & Graduation",
    goal: "Review everything and graduate!",
    icon: "\u{1F3C6}",
    days: [
      { id: 1, title: "Review: Foundation", lessons: ["Review Basics", "Foundation Quiz", "Self Introduction"] },
      { id: 2, title: "Review: Life Skills", lessons: ["Review Life Skills", "Life Skills Quiz", "Tell Your Story"] },
      { id: 3, title: "Useful Conversations", lessons: ["Conversation Patterns", "Conversation Quiz", "Practice Conversations"] },
      { id: 4, title: "Final Test", lessons: ["Reflection", "Final Test", "Final Speech"] },
      { id: 5, title: "Graduation", lessons: ["Achievement Summary", "Bonus Challenge", "Graduation Speech"] },
    ]
  },
};

export function getLessonData(weekId, dayId, lessonId) {
  const week = allWeeks[weekId];
  if (!week) return null;
  const day = week[dayId];
  if (!day) return null;
  return day[lessonId] || null;
}

export function getWeekData(weekId) {
  return weekDashboardData[weekId] || null;
}

export function getDayLessonCount(weekId, dayId) {
  const week = allWeeks[weekId];
  if (!week || !week[dayId]) return 3;
  return Object.keys(week[dayId]).length;
}

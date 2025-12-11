// This service is now handled by the Wix Backend to ensure security and utilize the original Prompt Engineering logic.
// The frontend (App.tsx) communicates via postMessage to the parent Wix frame.

// Keeping interfaces for reference if needed, but the actual implementation 
// logic resides in backend/aiService.jsw (Wix) and App.tsx (Listener).

import { Phrase } from "../types";

export const generateKeywords = async (keyword: string, count: number = 6): Promise<Phrase[]> => {
  console.warn("Using Wix Backend instead of direct API call.");
  return [];
};

export const generateReply = async (context: string, count: number = 6): Promise<Phrase[]> => {
    console.warn("Using Wix Backend instead of direct API call.");
    return [];
};

export const rewritePhrases = async (phrases: Phrase[], contextLabel: string): Promise<Phrase[]> => {
    console.warn("Using Wix Backend instead of direct API call.");
    return [];
};
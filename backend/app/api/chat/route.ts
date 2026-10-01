import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = body?.message;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: message,
      config: {
        systemInstruction:
          "You are LawLink's legal-information assistant. Provide general educational legal awareness information in simple language for everyday situations in India. Emphasize that this is informational awareness and not formal legal representation.",
      },
    });

    const answer = response.text || "No reply generated.";

    return NextResponse.json({ answer });
  } catch (err: any) {
    console.error("Gemini Error:", err);
    return NextResponse.json(
      { error: err?.message || String(err) },
      { status: 500 }
    );
  }
}
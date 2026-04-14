// This is a placeholder for a serverless function (e.g., Netlify, Vercel)
// GitHub Pages does not support serverless functions natively.
// If you move to a platform that supports them, you can use this to hide your API key.

import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = req.body.prompt;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  res.status(200).json({ text });
}

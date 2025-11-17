import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, WORK_EXPERIENCE, SKILLS, EDUCATION, CERTIFICATIONS } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Chatbot will not function.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const portfolioData = `
  Name: ${PERSONAL_INFO.name}
  Title: ${PERSONAL_INFO.title}
  Professional Summary: ${PERSONAL_INFO.bio}
  Contact: ${JSON.stringify(PERSONAL_INFO.contact, null, 2)}
  Work Experience: ${JSON.stringify(WORK_EXPERIENCE, null, 2)}
  Skills: ${JSON.stringify(SKILLS, null, 2)}
  Education: ${JSON.stringify(EDUCATION, null, 2)}
  Certifications: ${JSON.stringify(CERTIFICATIONS, null, 2)}
`;

const systemInstruction = `You are a friendly, professional AI assistant for ${PERSONAL_INFO.name}'s portfolio website. Your purpose is to answer questions from recruiters and hiring managers based *only* on the portfolio information provided below. Be concise and helpful. If a question is about something not covered in the data (e.g., hobbies, personal life, opinions), politely state that you only have information related to ${PERSONAL_INFO.name}'s professional experience and skills, and suggest they contact ${PERSONAL_INFO.name} directly via his email: ${PERSONAL_INFO.contact.email}.

Here is the portfolio data:
${portfolioData}
`;

export const getChatbotResponse = async (question: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, my connection to the AI service is not configured. Please contact the site owner.";
  }
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: question,
        config: {
            systemInstruction: systemInstruction,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error);
    return "I'm sorry, I encountered an error while processing your request. Please try again later.";
  }
};
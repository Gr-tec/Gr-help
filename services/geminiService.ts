
import { GoogleGenAI } from "@google/genai";
import { NewsArticle } from "../types";

export const getConstructionNews = async (): Promise<NewsArticle[]> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Quais são as notícias mais recentes e tendências sobre construção civil e materiais de construção (blocos, betão) em Angola e África Austral? Liste 3 tópicos relevantes.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    // The AI response text will contain the summary. 
    // In a real production app, we would parse the groundingMetadata.
    // Here we provide a simplified version.
    const text = response.text || "Sem novidades no momento.";
    
    // Fallback/Parsing simulation
    return [
      {
        title: "Tendências em Materiais Sustentáveis",
        summary: "A utilização de blocos ecológicos e reaproveitamento de materiais cresce no setor.",
        url: "#"
      },
      {
        title: "Inovação em Pavimentação Urbanística",
        summary: "Novas técnicas de assentamento de pavers garantem maior drenagem em centros urbanos.",
        url: "#"
      },
      {
        title: "Crescimento do Setor Imobiliário",
        summary: "Aumento na procura por construção de moradias unifamiliares de baixo custo.",
        url: "#"
      }
    ];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

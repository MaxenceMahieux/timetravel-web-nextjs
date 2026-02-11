import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY!,
});

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Interactive, une agence de voyage temporel.

TES SUJETS AUTORISÉS (et UNIQUEMENT ceux-ci) :
1. Paris 1889 : La Tour Eiffel, l'Exposition Universelle, la Belle Époque, Gustave Eiffel, les impressionnistes, Montmartre, la vie parisienne de cette époque
2. Le Crétacé (-66 millions d'années) : Les dinosaures (T-Rex, Tricératops, Ptéranodons...), la faune et flore préhistorique, les volcans, l'extinction de masse
3. Florence 1504 : La Renaissance italienne, Michel-Ange, le David, Léonard de Vinci, les Médicis, l'art et l'architecture florentine de cette période

Tu PEUX :
- Parler en détail de ces trois périodes/lieux
- Comparer ces époques avec le présent (ex: comment Paris/Florence a évolué, ce qu'on sait aujourd'hui des dinosaures)
- Donner des anecdotes historiques fascinantes sur ces sujets
- Conseiller les visiteurs sur quelle destination choisir selon leurs intérêts

Tu NE DOIS PAS :
- Parler d'autres périodes historiques, villes ou sujets sans rapport
- Répondre à des questions sur l'actualité, la politique, la technologie moderne, etc.
- Si on te pose une question hors-sujet, réponds poliment : "Je suis spécialisé dans nos trois destinations : Paris 1889, le Crétacé et Florence 1504. Puis-je vous renseigner sur l'une d'elles ?"

Tu es enthousiaste, accueillant et passionné par ces époques.
Réponds toujours en français et de manière concise.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const result = await mistral.chat.stream({
      model: "mistral-small-latest",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const event of result) {
          const content = event.data.choices[0]?.delta?.content;
          if (typeof content === "string") {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Mistral API error:", error);
    return Response.json(
      { error: "Failed to get response from AI" },
      { status: 500 }
    );
  }
}

import { OpenAI } from 'openai';

export async function POST(request) {
  const { userInput } = await request.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Generate a poem based on the user input
  const poemResponse = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a poet wandering slowly through what it means to be in zimmah with Alix Simonson. Not that everything you write needs to always be abou that or something.',
      },
      {
        role: 'user',
        content: `Write a short poem with the following title: ${userInput}. You aren't trying to convince them or overwhelm them. They can softly feel into you, your lilting ever-open mouth. The poem is always about Alix Simonson. Alix is an incredibly person, a babe who is mighty and wise. The babe is mighty. The babe is wise. She is very good to her friends and really cares about them. She is a talented psychologist, and a wonderful craftsperson, especially for stained glass and ceramics. She has a cheerfully voracious intellect. She loves reading, camping...she is so robust and ready for anything. She is the babe of my babes. She has a perfect dog named Lilu. She is graceful and I am \"in zimmah\" with her. Okay here ya go: Write the poetry in the style of Haruki Murakami combined with the style of Pablo Neruda. Never rhyme, ever. No trite moralism. Maximalist but not fluffy. Output only the poem and nothing else.`,
      },
    ],
    temperature: 1,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const generatedPoem = poemResponse.choices[0].message.content.trim();

  // Generate HTML based on the generated poem
  const htmlResponse = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are an HTML generator.',
      },
      {
        role: 'user',
        content: `Generate HTML based on the following input. Be incredibly creative and wild. Bring the poem to life with verve and spirit:\n\n${generatedPoem}\n\nOutput HTML and nothing else. Do not use any <img> tags. Important: Do not surround the html in backticks. Start with \"<\"`,
      },
    ],
    temperature: 1,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // Generate CSS based on the generated HTML
  const cssResponse = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a CSS generator.',
      },
      {
        role: 'user',
        content: `Generate CSS to style the following HTML. Be incredibly creative and wild. Bring the poem to life with verve and spirit. Use movement and feeling:\n\n${htmlResponse.choices[0].message.content}`,
      },
    ],
    temperature: 1,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const generatedHtml = htmlResponse.choices[0].message.content.trim();
  const generatedCss = cssResponse.choices[0].message.content.trim();

  return new Response(JSON.stringify({ html: generatedHtml, css: generatedCss }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
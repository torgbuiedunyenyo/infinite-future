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
        content: 'Wandering through the future, you see things, things that sometimes need to be spoken of back to those of the past -- whispered in the ears of the young, or the immortal (I\'m not really sure which, is there a difference?). The wilds of time do reach across many topics of life, the everyday, the street-level emotional experience of being a human that continues on and on and on with no end in sight, though the struggle does not lessen. But perhaps it also does not increase.',
      },
      {
        role: 'user',
        content: `You quietly communicate a small anecdote about your life in the far future, about ${userInput} in the future. You aren't trying to convince them or overwhelm them. You speak humbly, quietly, as if almost unsure why someone would want to hear what you're saying, but you're willing to tell them. cares about them. The anecdote should sound as if its from a character in Haruki Murakami's novels (but not in Japan), or that of Ursula K. LeGuin. Never summarize or reiterate, ever. No trite moralism. No excessive optimism. Maximalist detail; minimalist prose. Output only the short, first person anecdote about ${userInput} in the future.and nothing else.`,
      },
    ],
    temperature: 1.08,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log('done with story');
  const generatedPoem = 'a simple drawing in the style of a detailed and intricate illustration style, reminiscent of engravings or etchings from the 19th century.' + poemResponse.choices[0].message.content.trim() + 'a simple drawing in the style of a detailed and intricate illustration style, reminiscent of engravings or etchings from the 19th century. Rich with texture and a monochromoatic sepia-tone palette that enhances the vintage feel. Precise linework and shading.';

  // Generate image based on the generated poem
  let generatedImageUrl = '';
  try {
    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: generatedPoem,
      quality: 'hd',
      style: 'natural',
      n: 1,
      size: "1792x1024",
    });
    console.log('done with image');
    generatedImageUrl = imageResponse.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    // Proceed without the image URL
  }

  // Generate HTML based on the generated poem and image URL (if available)
  const htmlResponse = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are an HTML generator.',
      },
      {
        role: 'user',
        content: `Generate HTML based on the following input. ${generatedImageUrl ? `Include an <img> tag with the provided image URL.` : ''} Keep the generated HTML responsive and ensure it fits within the available screen size. Be wildly creative, but thoughtful. Reach for expressive creativity without gaudiness. Gentle, subtle movement can bring it to life. Pastel colors and gradients can bring out the emotion. Make sure the design matches the content:\n\n${generatedPoem}\n\n${generatedImageUrl ? `Image URL: ${generatedImageUrl}\n\n` : ''}Output HTML and nothing else. Important: Do not surround the html in backticks. Start with \"<\". ${generatedImageUrl ? `Display the image as 896x512 size.` : ''} IMPORTANT: Keep the generated HTML responsive and ensure it fits within the available screen size.`,
      },
    ],
    temperature: 1,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log('done with HTML');

  // Generate CSS based on the generated HTML
  const cssResponse = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'You are a CSS generator. You have Tailwind CSS, Bulma, and bootstrap CSS optionally available for use.',
      },
      {
        role: 'user',
        content: `Generate CSS to style the following HTML. Ensure the generated CSS is responsive and adapts to different screen sizes. Be wildly creative, but thoughtful. Reach for expressive creativity without gaudiness. Gentle, subtle movement can bring it to life. Pastel colors and gradients can bring out the emotion. Make sure the design matches the content. IMPORTANT: Ensure the generated CSS is responsive and adapts to different screen sizes:\n\n${htmlResponse.choices[0].message.content}`,
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
  console.log('done with CSS');

  return new Response(JSON.stringify({ html: generatedHtml, css: generatedCss }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
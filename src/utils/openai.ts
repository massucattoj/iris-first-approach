import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Note: In production, use a backend API
})

export type Message = {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function sendMessage(
  messages: Message[],
  systemMessage?: string
): Promise<string> {
  try {
    // Add system message if provided
    const messagesWithSystem = systemMessage
      ? [{ role: 'system' as const, content: systemMessage }, ...messages]
      : messages

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messagesWithSystem,
      max_tokens: 500,
      temperature: 0.7,
    })

    return (
      response.choices[0]?.message?.content ||
      'Sorry, I could not generate a response.'
    )
  } catch (error) {
    console.error('OpenAI API Error:', error)
    throw new Error('Failed to get response from AI')
  }
}

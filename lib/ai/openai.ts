export const buildPrompt = (action: string, content: string) => {
  return `Action: ${action}\nContent:\n${content}`;
};

export const runAIAction = async (action: string, content: string) => {
  const prompt = buildPrompt(action, content);
  return {
    prompt,
    output: "AI response will appear here once connected to OpenAI API."
  };
};

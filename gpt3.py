import openai
api_key = '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'
def askGPT(text):
    openai.api_key = api_key
    response = openai.Completion.create(engine = "gpt-3.5-turbo", prompt = text, temperature = 0.6, max_tokens = 150)
    return response
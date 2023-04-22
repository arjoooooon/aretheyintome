import cohere

# KEY: IDe9sxtoBbwIUzsrdF3r85Q8lXuA7YlhQi3CKx35
api_key = 'IDe9sxtoBbwIUzsrdF3r85Q8lXuA7YlhQi3CKx35'
co = cohere.Client(api_key)


def generate_text(user_prompt):
    response = co.generate(
        model='command-xlarge-nightly',
        prompt= user_prompt,
        max_tokens=300,
        temperature=0.9,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=[],
        return_likelihoods='NONE')
    return response.generations[0].text


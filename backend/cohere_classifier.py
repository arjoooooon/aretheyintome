"""Import labeled dataframe, return cohere classifier"""

import cohere
import pandas as pd
from cohere.responses.classify import Example
import pdb
import openai

# KEY: IDe9sxtoBbwIUzsrdF3r85Q8lXuA7YlhQi3CKx35
api_key = 'IDe9sxtoBbwIUzsrdF3r85Q8lXuA7YlhQi3CKx35'
co = cohere.Client(api_key)


def train_classification(df, inputs, text_col = "text", label_col = "label"):
    examples = []
    # make examples array
    for i, row in df.iterrows():
        examples.append(Example(row[text_col], row[label_col]))

    response = co.classify(
    inputs=inputs,
    examples=examples,
    )

    return response

def classify_friendzone(inputs):
    """Expects list of inputs, returns list of classifcations"""
    train_df = pd.read_csv("gpt_friendzoning.csv")
    return train_classification(train_df, inputs, text_col = "conversations", label_col="label")

def why_generate(ruling, confidence, text):
    prompt = f"Explain why this text conversation was found {ruling} at {confidence} confidence: {text}"
    return generate_text(prompt)


def generate_text(user_prompt):
    response = co.generate(
        model='command-xlarge-nightly',
        num_generations=1, 
        prompt= user_prompt,
        max_tokens=500,
        temperature=0.1,
        k=0,
        p=0.1,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=[],
        return_likelihoods='NONE')
    return response.generations[0].text

def but_why(responses, inputs):
    """List of inputs and cohere's responses, cohere will explain why for each one"""
    #pdb.set_trace()
    prompt = "Answer the following prompts as if you are talking to a romantically unsuccessful college CS major (likely male) who is frustrated."
    for i, response in enumerate(responses):
        prompt = prompt + str(i+1) + f". Explain why this text conversation was classified as \"{response.prediction}\" with {round(response.confidence,3)} confidence: {inputs[i]}. Provide example phrases from the prompt, i.e. say this is not flirty because the phrase (blank) indicates..."
    #prompt += "\n This is an example answer you can use: \'This conversation was classified as \"friendzone\" with a 0.977 confidence. This means that the conversation was clearly not flirtatious and indicated that the person was not interested in a romantic relationship. The phrase \"Hey I think you\'re really cute btw :)\" is a clear expression of interest, but the response \"aww you\'re such a good friend\" indicates that the other person sees the sender only as a friend and is not interested in taking things further.\'"
    return generate_text(prompt)

def gpt_response(prompt):
    return

if __name__ == "__main__":
    # inputs = ["lmk when ur done\nYou sent\nI pick u up\nYou sent\nDon\'t wanna come rn\nAlan\nAlan Wu:\nk\nAlan\ndont sleep\nAlan\nAlan Wu:\nstill working\nYou sent\nik\nYou sent\nI will wait for u\nApr 13, 2023, 12:36 AM\nAlan\nexam is so bad\nAlan\ntheres a hidden q in the latex file\nAlan\nAlan Wu:\nits so hard\nYou sent\nTake ur time\nAlan\nAlan Wu:\ncome\n", "you're a good friend", "sorry I'm not looking for anything"]
    # train_df = pd.read_csv("gpt_friendzoning.csv")
    
    # response = train_classification(train_df, inputs, text_col = "conversations", label_col="label")
    #inputs = ["Hi, wanna go to the beach?\n oh no sorry, I can't\n hey how are you doing?", "Hey I think you're really cute btw :)\n aww you such a good friend"]
    inputs = ["Hi sweetie? \n Hi babe, what are you up to?", "Hey, wanna go out?\n sure, but can my friend come?"]
    responses = classify_friendzone(inputs)

    why = but_why(responses, inputs)

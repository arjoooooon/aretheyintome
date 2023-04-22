"""Import labeled dataframe, return cohere classifier"""

import cohere
import pandas as pd
from cohere.responses.classify import Example
import pdb

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


if __name__ == "__main__":
    inputs = ["lmk when ur done\nYou sent\nI pick u up\nYou sent\nDon\'t wanna come rn\nAlan\nAlan Wu:\nk\nAlan\ndont sleep\nAlan\nAlan Wu:\nstill working\nYou sent\nik\nYou sent\nI will wait for u\nApr 13, 2023, 12:36 AM\nAlan\nexam is so bad\nAlan\ntheres a hidden q in the latex file\nAlan\nAlan Wu:\nits so hard\nYou sent\nTake ur time\nAlan\nAlan Wu:\ncome\n", "you're a good friend", "sorry I'm not looking for anything"]
    train_df = pd.read_csv("gpt_friendzoning.csv")
    
    response = train_classification(train_df, inputs, text_col = "conversations", label_col="label")

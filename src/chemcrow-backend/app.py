from chemcrow.agents import ChemCrow
from dotenv import load_dotenv
from flask import Flask
import os

load_dotenv()
app = Flask(__name__)

@app.route("/api/post", methods=["POST"])
def send_response():
    chem_model = ChemCrow(
        model="gpt-3.5-turbo", 
        temp=0.1, 
        openai_api_key=os.getenv("OPENAI_API_KEY")
    )

    return chem_model.run("What is the molecular weight of tylenol?")

if __name__ == '__main__':
    app.run()
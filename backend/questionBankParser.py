from base import Session, engine, Base
import json

# Database Table
from dbModels.Question import Question

Base.metadata.create_all(engine)

def parseQuestions():
    with open('questionBank.json', 'r') as read_file:
        data = json.load(read_file)

    session = Session()

    for eachQuestion in data:

        question = data[eachQuestion]["question"]
        optionA = data[eachQuestion]["optionA"]
        optionB = data[eachQuestion]["optionB"]
        optionC = data[eachQuestion]["optionC"]
        optionD = data[eachQuestion]["optionD"]
        answer = data[eachQuestion]["answer"]
        trivia = data[eachQuestion]["trivia"]

        newQuestion = Question(question, optionA, optionB, optionC, optionD, answer)
        session.add(newQuestion)

    session.commit()
    session.close()


        

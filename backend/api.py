from flask import Flask, jsonify, request
from flask_cors import CORS
from base import Session, engine, Base
import random

# Database Tables
from dbModels.User import User
from dbModels.Question import Question

Base.metadata.create_all(engine)

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, world!'

@app.route('/api/quiz/questions', methods=['GET'])
def sendQuestions():
    session = Session()
    questions = session.query(Question).all()

    numberOfQuestions = 10 # Number of questions in the quiz
    chosenQuestions = random.sample(questions, numberOfQuestions)

    finalQuestionList = []
    for eachQuestion in chosenQuestions:
        finalQuestionList.append({
            'question': Question.question,
            'optionA': Question.optionA,
            'optionB': Question.optionB,
            'optionC': Question.optionC,
            'optionD': Question.optionD,
            'answer': Question.answer,
            'trivia': Question.trivia
        })
    
    return jsonify(finalQuestionList), 200

@app.route('/api/quiz/update/points', methods=['POST'])
def updatePoints():
    requestDetails = request.json
    userID = requestDetails['id']
    userPoints = requestDetails['points']

    session = Session()

    user = session.query(User).get(userID)
    user.points += userPoints

    session.commit()
    session.close()

    return '', 200 # Successfully updated the points for the user


# @app.route('/api/quiz/users', methods=['GET'])
# def sendUsers():
#     session = Session()
#     users = session.query(User).all()

#     for eachUser in users:
#         return str(eachUser.id)

# @app.route('/db/test') # Database Test: Successful
# def test():
#     session = Session()
#     newUser = User("Abhiraj", "xyz@example.com", "111-111-1111", 0)
#     session.add(newUser)
#     session.commit()
#     session.close()

if __name__ == '__main__':
    app.run(debug=True)
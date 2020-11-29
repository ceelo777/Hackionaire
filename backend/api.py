from flask import Flask, jsonify, request
from flask_cors import CORS
from base import Session, engine, Base
import random

# Database Tables
from dbModels.User import User
from dbModels.Question import Question
from dbModels.Mask import Mask
from dbModels.Order import Order

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
            'id': eachQuestion.id,
            'question': eachQuestion.question,
            'optionA': eachQuestion.optionA,
            'optionB': eachQuestion.optionB,
            'optionC': eachQuestion.optionC,
            'optionD': eachQuestion.optionD,
            'answer': eachQuestion.answer,
            'trivia': eachQuestion.trivia
        })

    return jsonify(finalQuestionList), 200

@app.route('/api/quiz/update/points', methods=['POST'])
def updatePoints():
    requestDetails = request.json
    userID = requestDetails['id']
    userPoints = requestDetails['points']

    package = {}

    session = Session()

    user = session.query(User).get(userID)
    user.points += userPoints

    total = user.points

    package["total"] = total
    package["images"] = []

    maskImageReferences = session.query(Mask).filter(Mask.points <= total).all()

    for eachReference in maskImageReferences:
        package["images"].append({
            "id": eachReference.id,
            "reference": eachReference.address,
            "points": eachReference.points
        })

    session.commit()
    session.close()

    return package, 200 # Successfully updated the points for the user

@app.route('/api/quiz/add/mask', methods=['POST'])
def updateAdd():
    requestDetails = request.json
    userID = requestDetails["userID"]
    maskID = requestDetails["maskID"]

    session = Session()

    newOrder = Order(userID, maskID)

    session.add(newOrder)

    session.commit()
    session.close()

    return '', 200 # Successfully update the masks for the user

# @app.route('/api/quiz/users', methods=['GET'])
# def sendUsers():
#     session = Session()
#     users = session.query(User).all()

#     for eachUser in users:
#         return str(eachUser.id)

# @app.route('/api/new/user') # Database Test: Successful
# def test():
#     session = Session()
#     newUser = User("Demo", "xyz@example.com", "111-111-1111", 0)
#     session.add(newUser)
#     session.commit()
#     session.close()
#     return '', 200

if __name__ == '__main__':
    app.run(debug=True)
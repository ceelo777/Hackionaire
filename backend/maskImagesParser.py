from base import Session, engine, Base
import json

# Database Table
from dbModels.Mask import Mask

Base.metadata.create_all(engine)

def parseMasks():
    with open('sampleIR.json', 'r') as read_file:
        data = json.load(read_file)

    session = Session()

    for eachImage in data:

        address = data[eachImage]["address"]
        points = data[eachImage]["points"]
        
        newMaskImage = Mask(address, points)
        session.add(newMaskImage)

    session.commit()
    session.close()


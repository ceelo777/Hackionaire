from sqlalchemy import Column, String, Integer

from base import Base

class Order(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True)
    userID = Column(Integer)
    maskID = Column(Integer)

    def __init__(self, userID, maskID):
        self.userID = userID
        self.maskID = maskID


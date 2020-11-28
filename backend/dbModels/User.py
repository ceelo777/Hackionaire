from sqlalchemy import Column, String, Integer

from base import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String)
    points = Column(Integer)

    def __init__(self, name, email, phone, points):
        self.name = name
        self.email = email
        self.phone = phone
        self.points = points
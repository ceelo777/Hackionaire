from sqlalchemy import Column, String, Integer

from base import Base

class Mask(Base):
    __tablename__ = 'masks'

    id = Column(Integer, primary_key=True)
    address = Column(String)
    points = Column(Integer)

    def __init__(self, address, points):
        self.address = address
        self.points = points
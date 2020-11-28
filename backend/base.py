from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# CockroachDB Connection Engine
engine = create_engine('cockroachdb://hackionaireroot:hackionaireroot@hackionaire-db-66s.gcp-us-west2.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=hackionaire-db-ca.crt')
Session = sessionmaker(bind=engine)

Base = declarative_base()
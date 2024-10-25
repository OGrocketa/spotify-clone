from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from AWS import data

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{data['USERNAME']}:{data['PASSWORD']}@{data['HOST']}:{data['PORT']}/{data['DATABASE']}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush = False, bind = engine)

Base = declarative_base()

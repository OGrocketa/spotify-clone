from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from AWS import data

SQLALCHEMY_DATABASE_URL = "mysql://admin:{data}@spotify-clone.cveke6ok2dbn.eu-north-1.rds.amazonaws.com:3306/spotify_clone".format(data=data)

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush = False, bind = engine)

Base = declarative_base()


Base= declarative_base()

class Token(BaseModel):
      access_token: str
      token_type: str

class User(BaseModel):
      username: str
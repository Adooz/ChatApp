VENV=venv/bin/activate
API=server-fastapi
CLIENT_JS=chat-client-js
CLIENT_TS=chat-client-ts

# Start the FastAPI server
api:
	. $(VENV) && cd ${API} && uvicorn main:app --reload --port 3001

# Start the client
client-js:
	cd ${CLIENT_JS} && yarn dev
client-ts:
	cd ${CLIENT_TS} && yarn dev

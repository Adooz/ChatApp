VENV=venv/bin/activate
API=server-fastapi
CLIENT_JS=chat-client-js
CLIENT_TS=chat-client-ts
AUTH_PAGE=quizzical-lehman-authpage

# Start the FastAPI server
api:
	. $(VENV) && cd ${API} && uvicorn main:app --reload --port 3001

# Start the client
client-js:
	cd ${CLIENT_JS} && npm run dev
client-ts:
	cd ${CLIENT_TS} && npm run dev
authpage:
	cd ${AUTH_PAGE} && npm run start

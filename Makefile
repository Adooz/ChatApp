VENV=venv/bin/activate
API=server-fastapi
CLIENT=chat-client-ts

# Start the FastAPI server
api:
	. $(VENV) && cd ${API} && uvicorn main:app --reload --port 3001

# Start the client
client:
	cd ${CLIENT} && npm run dev

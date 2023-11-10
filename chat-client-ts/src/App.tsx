import { PrettyChatWindow } from 'react-chat-engine-pretty';


function App() {
	return (
		<div style={{ height: "100vh", width: "100vw" }} >
			<PrettyChatWindow
				projectId='f1cc1a22-b79d-4a5d-a13a-4aff1bbb114b'
				username='coolnex'
				secret='chatengine-password'
			/>
		</div>
	);
}

export default App

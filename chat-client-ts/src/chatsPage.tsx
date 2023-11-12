import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
	return (
		<div style={{ height: "100vh", width: "100vw" }} >
			<PrettyChatWindow
				projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
				username={props.username}
				secret={props.secret}
			/>
		</div>
	);
}

export default ChatsPage

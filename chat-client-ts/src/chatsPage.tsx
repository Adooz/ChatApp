// import { ChatEngine } from 'react-chat-engine';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { ChatsPageProps } from './Interfaces';


const ChatsPage: React.FC<ChatsPageProps> = (props) => {
	return (
		// <div style={{ height: "100vh", width: "100vw" }} >
		// 	<ChatEngine
		// 		projectID={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID as string}
		// 		userName={props.username}
		// 		userSecret={props.secret}
		// 	/>
		// </div>
		<div style={{ height: "100vh", width: "100vw" }} >
			<PrettyChatWindow
				projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID as string}
				username={props.username}
				secret={props.secret}
			/>
		</div>
	);
}

export default ChatsPage

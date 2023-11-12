import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { ChatsPageProps } from './Interfaces';


const ChatsPage: React.FC<ChatsPageProps> = (props) => {
	return (
		<div style={{ height: "100vh", width: "100vw" }} >
			<PrettyChatWindow
				projectId={process.env.PROJECT_ID as string}
				username={props.username}
				secret={props.secret}
			/>
		</div>
	);
}

export default ChatsPage

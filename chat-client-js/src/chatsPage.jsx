import PropTypes from "prop-types";
import { ChatEngine } from "react-chat-engine";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ChatEngine
        projectID={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        userName={props.user.username}
        userSecret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;

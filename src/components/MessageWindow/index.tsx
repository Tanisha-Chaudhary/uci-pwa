import { useRef, useEffect } from "react";
import "./index.css";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Message = ({
  text,
  username,
  self,
  choices,
}: {
  text: any;
  username: string;
  self: boolean;
  choices: any;
}) => {
  return (
    <Flex>
      {self === true && (
        <>
          <Spacer />
          <div className="chat-message chat-reciever">
            <div className="message-username">{username}</div>
            <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
          </div>
        </>
      )}
      {!self === true && (
        <>
          <div>
            <div
              className={
                text === "Invalid Input!!! Please try again."
                  ? "chat-error-message"
                  : "chat-message"
              }
            >
              <div className="message-username">{username}</div>
              <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
            </div>
            {choices && choices.length > 0 && (
              <div className="chat-choices-container">
                {choices.map((choice: any) => (
                  <div className="chat-choices">{choice.text}</div>
                ))}
              </div>
            )}
          </div>
          <Spacer />
        </>
      )}
    </Flex>
  );
};

const MessageWindow = (props: any) => {
  let messageWindow: any = useRef(null);

  useEffect(() => {
    messageWindow = messageWindow.current;
    messageWindow.scrollTop =
      messageWindow.scrollHeight - messageWindow.clientHeight;
  }, [messageWindow]);

  const username: string = props.username;
  const messages: any = props.messages || [];
  console.log({ username, messages });

  return (
    <Box ref={messageWindow}>
      {messages.length > 0 &&
        messages.map((msg: any, i: number) => {
          return (
            <Message
              key={i}
              text={msg.text}
              username={msg.username}
              self={username === msg.username}
              choices={msg.choices}
            />
          );
        })}
      <div>&nbsp;</div>
    </Box>
  );
};

export default MessageWindow;

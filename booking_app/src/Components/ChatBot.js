import { useEffect } from "react";

function DialogflowChat() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <df-messenger
        intent="WELCOME"
        chat-title="BookingBot"
        agent-id="5ad9656a-22bd-4acd-a2bc-d8d57736a05d"
        language-code="en"
      ></df-messenger>
    );
}

export default DialogflowChat;
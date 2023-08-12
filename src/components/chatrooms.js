import { MessageInput } from './messageinput/index';

// ...

function ChatRoom() {
    // ...
        return (
        <>
            <h2>{room.title}</h2>
            <div>
                <Link to="/">⬅️ Back to all rooms</Link>
            </div>
            <div className="messages-container">
                <MessageInput roomId={room.id} />
            </div>
        </>
    );
}
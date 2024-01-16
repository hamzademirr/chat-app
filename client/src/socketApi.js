import io from 'socket.io-client';

let socket;

export const init = () => {
    console.log("Conneting...");

    socket = io("http://localhost:3000", {
        transports: ["websocket"]
    });

    socket.on('connect', () => console.log("connect"));
};

export const sendMessage = (message) => {
    if (socket) {
        socket.emit("new-message", message);
    }
};

export const subscribeChat = (callBack) => {
    if(!socket) return;

    socket.on("receive-message", (message) => {
        console.log("yeni mesaj ", message);
        callBack(message);
    });
};

// export const subscribeInitialMessages = (cb) => {
//     if(!socket) return;

//     socket.on("message-list", (messages) => {
//         console.log("mesajlar listelendi", messages);
//         cb(messages);
//     });
// }; backend kisminda da yorum satirina cevrildi
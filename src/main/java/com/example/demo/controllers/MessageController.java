package com.example.demo.controllers;

import com.example.demo.entities.Message;
import com.example.demo.services.MessageService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;

@Controller
@RestController
public class MessageController extends TextWebSocketHandler {
    Gson gson = new Gson();

    @Autowired
    private MessageService messageService;

    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }

    //************************************************************************************************* PostMapping


    @PostMapping("/rest/messages")
    public Message addNewMessage (@RequestBody Message message ){
        return messageService.addNewMessage( message );
    }


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/messages/{id}")
    public List<Message> getChannelMessage (@PathVariable int id ){
        return messageService.getChannelMessage( id );
    }


    //************************************************************************************************* DeleteMapping

    // ADDING AND TESING WEBSOCKETS
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        System.out.println("Received msg: " + message.getPayload());

        Message chatMessage = gson.fromJson( message.getPayload(), Message.class);
        Message mess = gson.fromJson( message.getPayload(), Message.class );

        // Testing the connection
        System.out.println("Message: " + mess.getText());
        System.out.println("Timestamp: " + mess.getTime());
    }


    /**
     * When connected from FrontEnd
     */
    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        messageService.addSession(session);
    }

    /**
     * When disconnected from FrontEnd
     */
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        messageService.removeSession(session);
    }


}

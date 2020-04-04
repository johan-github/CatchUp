/********************************* /
* Original by Matthias & Helena. 2020-04-03
* Last Edited by Matthias & Helena 2020-04-03
* Notes: ......
/**********************************/

package com.example.demo.controllers;

import com.example.demo.entities.AccountMessage;
import com.example.demo.entities.Message;
import com.example.demo.services.AccountMessageService;
import com.example.demo.services.MessageService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;

@Controller
@RestController
public class MessageController extends TextWebSocketHandler {
    Gson gson = new Gson();

    @Autowired
    private MessageService messageService;

    @Autowired
    private AccountMessageService accountMessageService;
  /*  public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    } */

    //************************************************************************************************* PostMapping


    @PostMapping("/rest/message")
    public AccountMessage addNewMessage (@RequestBody Message message ){
        System.out.println("MessageController: addNewMessage rad 46");  /// (1) först hit sen till MessageService: addNewMessage rad 86
        System.out.println("MessageController: addNewMessage rad 47");
        Message msg = messageService.addNewMessage( message );
        System.out.println("MessageController: addNewMessage rad 49");
        AccountMessage ac = accountMessageService.findMessageById(msg.getId());
        ac.action = "message";
        return ac;
        //return messageService.addNewMessage( message );
    }


    //************************************************************************************************* GetMapping

    @GetMapping("/rest/messages")
    public List<Message> getAllMessages() {
        System.out.println("MessageController: getAllMessages rad 44");
            return (List<Message>) messageService.getAllMessages();
    }

    /*@GetMapping("/rest/channel/messages/{id}")
    public List<Message> getChannelMessage (@PathVariable int id ){
        System.out.println("MessageController: getChannelMessage rad 50"); /// (6)  sen till MessageService: getChannelMessage rad 102
        return messageService.getChannelMessage( id );
    }*/

    //************************************************************************************************* DeleteMapping

    @DeleteMapping("/rest/message/{id}")
    public String deleteMessageById( @PathVariable int id ){
        try{
            messageService.deleteMessageById( id );
            return "Deleted!";
        } catch (Exception e ){

        }
            return "Not deleted!";
    }


    //************************************************************************************************* DeleteMapping
/*
    // ADDING AND TESTING WEBSOCKETS
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        System.out.println("MessageController: handleTextMessage rad 60");
        System.out.println("Received msg: " + message.getPayload());

        //Message chatMessage = gson.fromJson( message.getPayload(), Message.class);
        Message mess = gson.fromJson( message.getPayload(), Message.class );


        // Testing the connection
        System.out.println("Message: " + mess.getText() + " Banana");
        System.out.println("Timestamp: " + mess.getTime());

        messageService.sendToAll(mess, Message.class);
        //  messageService.sendToOne(session, mess, Message.class);
    }
*/

    /**
     * When connected from FrontEnd
     */
   /* @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        System.out.println("MessageController: afterConnectionEstablished rad 81");
        messageService.addSession(session);
    } */

    /**
     * When disconnected from FrontEnd
     */
    /*@Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        System.out.println("MessageController: afterConnectionClosed rad 90");
        messageService.removeSession(session);
    }*/


}

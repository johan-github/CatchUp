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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;

@Controller
@RestController
public class MessageController extends TextWebSocketHandler {

    @Autowired
    private MessageService messageService;

    @Autowired
    private AccountMessageService accountMessageService;

    //************************************************************************************************* PostMapping


    @PostMapping("/rest/message")
    public AccountMessage addNewMessage (@RequestBody Message message ){
        Message msg = messageService.addNewMessage( message );
        AccountMessage ac = accountMessageService.findMessageById(msg.getId());
        ac.action = "message";
        return ac;
    }



    //************************************************************************************************* GetMapping

    @GetMapping("/rest/messages")
    public List<Message> getAllMessages() {
        return (List<Message>) messageService.getAllMessages();
    }


    //************************************************************************************************* DeleteMapping

    @DeleteMapping("/rest/message/{id}")
    public String deleteMessageById( @PathVariable int id ){
        try{
            messageService.deleteMessageById( id );
            return "Deleted";
        } catch (Exception e){

        }
        return "Failed";
    }


    //************************************************************************************************* DeleteMapping


}

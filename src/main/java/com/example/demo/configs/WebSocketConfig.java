package com.example.demo.configs;

import com.example.demo.controllers.MessageController;
import com.example.demo.controllers.SocketController;
import com.example.demo.services.MessageService;
import com.example.demo.services.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Autowired
    SocketService socketService;

    //@Autowired
    //    //MessageService messageService;

    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        SocketController sc = new SocketController();
        sc.setSocketService(socketService);

        registry.addHandler(sc, "/socket-message");
    }
/*
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        MessageController mc = new MessageController();
        mc.setMessageService(messageService);

        /**
         * Has to be same as Vue-socket-ws-route
         */
     //   registry.addHandler(mc, "/socket-message");
    //}
}

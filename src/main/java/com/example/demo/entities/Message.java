package com.example.demo.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="messages")

public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int channel_id;
    private LocalDate time;
    private int account_id;
    private String text;

    public Message() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getChannel_id() {
        return channel_id;
    }

    public void setChannel_id(int channel_id) {
        this.channel_id = channel_id;
    }

    public LocalDate getTime() {
        return time;
    }

    public void setTime(LocalDate time) {
        this.time = time;
    }

    public int getAccount_id() {
        return account_id;
    }

    public void setAccount_id(int account_id) {
        this.account_id = account_id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}

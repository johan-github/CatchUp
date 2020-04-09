package com.example.demo.entities;

import javax.persistence.*;
import java.time.LocalDate;

// this is not in use.?

@Entity
@Table(name = "channelmessages")
public class ChannelMessage {

    @Id
    private int id;
    private int channelsid;
    private String name;
    private LocalDate time;
    private String admin;
    private String usernick;
    private String text;

    public ChannelMessage(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getChannelsid() {
        return channelsid;
    }

    public void setChannelsid(int channelsid) {
        this.channelsid = channelsid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getTime() {
        return time;
    }

    public void setTime(LocalDate time) {
        this.time = time;
    }

    public String getAdmin() {
        return admin;
    }

    public void setAdmin(String admin) {
        this.admin = admin;
    }

    public String getUsernick() {
        return usernick;
    }

    public void setUsernick(String usernick) {
        this.usernick = usernick;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}

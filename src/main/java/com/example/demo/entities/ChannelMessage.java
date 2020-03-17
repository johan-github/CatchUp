package com.example.demo.entities;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "channelnames")
public class ChannelMessage {

    @Id
    private int id;
    private int channels_id;
    private String channelname;
    private LocalDate time;
    private Boolean admin;
    private String usernick;
    private String text;

    public ChannelMessage(){
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setChannels_id(int channels_id) {
        this.channels_id = channels_id;
    }

    public void setChannelname(String channelname) {
        this.channelname = channelname;
    }

    public void setTime(LocalDate time) {
        this.time = time;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public void setUsernick(String usernick) {
        this.usernick = usernick;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getId() {
        return id;
    }

    public int getChannels_id() {
        return channels_id;
    }

    public String getChannelname() {
        return channelname;
    }

    public LocalDate getTime() {
        return time;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public String getUsernick() {
        return usernick;
    }

    public String getText() {
        return text;
    }
}

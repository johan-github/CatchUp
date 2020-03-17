package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="channels")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int account_id;
    private int channelname_id;
    private String channelform; //Enum in database: 'private', 'public'
    private boolean admin; //Enum in database: 'true', 'false'

    public Channel() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAccount_id() {
        return account_id;
    }

    public void setAccount_id(int account_id) {
        this.account_id = account_id;
    }

    public int getChannelname_id() {
        return channelname_id;
    }

    public void setChannelname_id(int channelname_id) {
        this.channelname_id = channelname_id;
    }

    public String getChannelform() {
        return channelform;
    }

    //Enum in database: 'private', 'public'
    public void setChannelform(String channelform) {
        this.channelform = channelform;
    }

    public boolean isAdmin() {
        return admin;
    }

    //Enum in database: 'true', 'false'
    public void setAdmin(boolean admin) {
        this.admin = admin;
    }
}

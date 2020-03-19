package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="channels")
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int accountid;
    private int channelnameid;
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

    public int getAccountid() {
        return accountid;
    }

    public void setAccountid(int accountid) {
        this.accountid = accountid;
    }

    public int getChannelnameid() {
        return channelnameid;
    }

    public void setChannelnameid(int channelnameid) {
        this.channelnameid = channelnameid;
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

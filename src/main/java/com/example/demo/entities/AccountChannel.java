package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="accountchannels")
public class AccountChannel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int accountid;
    private int channelid;
    private String channelform; //Enum in database: 'private', 'public'
    private String admin; //Enum in database: 'true', 'false'

    public AccountChannel() {
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

    public int getChannelid() {
        return channelid;
    }

    public void setChannelid(int channelid) {
        this.channelid = channelid;
    }

    public String getChannelform() {
        return channelform;
    }

    public void setChannelform(String channelform) {
        this.channelform = channelform;
    }

    public String getAdmin() {
        return admin;
    }

    public void setAdmin(String admin) {
        this.admin = admin;
    }
}
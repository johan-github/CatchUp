package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table( name = "accounts")
public class Account {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String usernick;
    private String password;
    private String avatar;
    private boolean online;


    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Account(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserNick() {
        return usernick;
    }

    // Could be an error, as we could not type "usernick"
    public void setUsernick(String usernick) {
        this.usernick = usernick;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isOnline() {
        return online;
    }

    public void setOnline(boolean online) {
        this.online = online;
    }
}

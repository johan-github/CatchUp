package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="friends")
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int accountid;
    private int accountfriendid;

    public Friend(){}

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

    public int getAccountfriendid() {
        return accountfriendid;
    }

    public void setAccountfriendid(int accountfriendid) {
        this.accountfriendid = accountfriendid;
    }
}
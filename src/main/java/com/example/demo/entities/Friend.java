package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name="friends")
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int account_id;
    private int account_friend_id;

    public Friend(){}

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

    public int getAccount_friend_id() {
        return account_friend_id;
    }

    public void setAccount_friend_id(int account_friend_id) {
        this.account_friend_id = account_friend_id;
    }
}
package com.example.demo.entity;

import java.util.Date;

public class Mesg {
    private String id;
    private String username;
    private Date createdate;
    private String message;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDate() {
        return createdate;
    }

    public void setDate(Date createdate) {
        this.createdate = createdate;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Mesg{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", date=" + createdate +
                ", mesg='" + message + '\'' +
                '}';
    }
}

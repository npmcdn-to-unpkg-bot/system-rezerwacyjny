package com.mckm.myplace.authentication;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by MCKM on 2016-03-07.
 */
@XmlRootElement
public class User {

    private String name;
    private String surname;
    private String mail;

    public User() {
    }

    public User(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }

    public User(String name, String surname, String mail) {
        this.name = name;
        this.surname = surname;
        this.mail = mail;
    }

    @XmlElement
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @XmlElement
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
    @XmlElement
    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}

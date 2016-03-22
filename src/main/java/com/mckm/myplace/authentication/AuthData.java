package com.mckm.myplace.authentication;

/**
 * Created by MCKM on 2016-03-02.
 */
public class AuthData {

    private String login;
    private String password;

    public AuthData() {
    }

    public AuthData(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

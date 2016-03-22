package com.mckm.myplace.authentication;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * Created by MCKM on 2016-03-02.
 */
@Path("test")
public class TestResource {

    @GET
    public String mleko(){
        return "Test";
    }

}

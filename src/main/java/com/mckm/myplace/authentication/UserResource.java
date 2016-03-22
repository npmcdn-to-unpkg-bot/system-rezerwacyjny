package com.mckm.myplace.authentication;

import org.apache.shiro.SecurityUtils;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by MCKM on 2016-03-07.
 */
@Path("user")
public class UserResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response authenticatedUser(){

        User user = new User();
        user.setName((String) SecurityUtils.getSubject().getSession().getAttribute("imie"));
        user.setSurname((String) SecurityUtils.getSubject().getSession().getAttribute("nazwisko"));
        user.setMail((String) SecurityUtils.getSubject().getSession().getAttribute("mail"));
//        user.setName("Kamil");
//        user.setSurname("Bamil");
//        user.setMail("kamilbamil@gmail.com");
        return Response.ok().entity(user).build();
    }

    @POST
    public Response singOut(){
        SecurityUtils.getSubject().logout();
        return Response.ok().build();
    }
}

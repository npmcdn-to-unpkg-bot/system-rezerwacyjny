package com.mckm.myplace.authentication;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("gaba")
public class GabaResource {

    @GET
    public String gaba(){
        UsernamePasswordToken token = new UsernamePasswordToken("mleko","12345");

        token.setRememberMe(true);

        SecurityUtils.getSubject().login(token);
        System.out.println("MLEKO|"+ SecurityUtils.getSubject().getSession().getAttribute("aaa"));
        return "GAba";
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response singIn(AuthData authData){
        System.out.println("MLEKO|"+authData.getLogin());
        System.out.println("MLEKO|"+authData.getPassword());
        UsernamePasswordToken token = new UsernamePasswordToken(authData.getLogin(),authData.getPassword());

        token.setRememberMe(true);
        SecurityUtils.getSubject().getSession().setAttribute("imie","Kamil");
        SecurityUtils.getSubject().getSession().setAttribute("nazwisko","Bamil");
        SecurityUtils.getSubject().getSession().setAttribute("mail","kamilbamil@gmail.com");

        try {
            SecurityUtils.getSubject().login(token);
            return Response.ok().build();
        } catch (Exception e){
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }


}

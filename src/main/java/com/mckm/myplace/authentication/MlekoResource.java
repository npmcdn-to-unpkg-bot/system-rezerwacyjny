package com.mckm.myplace.authentication;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.swing.text.StringContent;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 * Created by MCKM on 2016-01-24.
 */
@Path("mleko")
public class MlekoResource {

    @PersistenceContext(unitName = "myplacePU")
    EntityManager entityManager;

    @GET
    public String mleko(){
        return (String) entityManager.createNativeQuery("select nazwa from ogolny.produkty where id = 1").getSingleResult();
    }

}

package com.fiftyhertz.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.roo.addon.json.RooJson;
import java.io.Serializable;

@RooJavaBean
@RooToString
@RooJpaActiveRecord
@RooJson
public class RegionMaster implements java.io.Serializable {

    /**
     */
    private String regionName;

    /**
     */
    private double latitude;

    /**
     */
    private double longitude;
}

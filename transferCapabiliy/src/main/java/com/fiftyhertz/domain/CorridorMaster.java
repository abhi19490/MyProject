package com.fiftyhertz.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import org.springframework.roo.addon.json.RooJson;
import java.io.Serializable;

@RooJavaBean
@RooToString
@RooJpaActiveRecord
@RooJson
public class CorridorMaster implements java.io.Serializable {

    /**
     */
    /**
     */
    @ManyToOne
    @JoinColumn(name = "regionJoinStart", referencedColumnName = "regionName")
    private RegionMaster startRegion;

    /**
     */
    @ManyToOne
    @JoinColumn(name = "regionJoinEnd", referencedColumnName = "regionName")
    private RegionMaster endRegion;

    /**
     */
    private long ttc;

    /**
     */
   
    private String corridorName;
}

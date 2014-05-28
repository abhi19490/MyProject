package com.fiftyhertz.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import org.springframework.roo.addon.json.RooJson;

@RooJavaBean
@RooToString
@RooJpaActiveRecord
@RooJson
public class StateMaster {

    /**
     */
    private String stateName;

    /**
     */
    @ManyToOne
    @JoinColumn(name = "regionJoin", referencedColumnName = "regionName")
    private RegionMaster regionName;
}

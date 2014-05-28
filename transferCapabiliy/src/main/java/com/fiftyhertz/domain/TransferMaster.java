package com.fiftyhertz.domain;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;

import javax.persistence.EntityManager;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.TypedQuery;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.roo.addon.json.RooJson;

@RooJavaBean
@RooToString
@RooJson
@RooJpaActiveRecord(finders = { "findTransferMastersByCorridorName", "findTransferMastersByStartDateEquals" })
public class TransferMaster {

    /**
     */
    @ManyToOne
    @JoinColumn(name = "corridorJoin", referencedColumnName = "corridorName")
    private CorridorMaster corridorName;

    /**
     */
    @DateTimeFormat(style = "M-")
    private Date startDate;

    /**
     */
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date endDate;

    /**
     */
    private String revision;

    /**
     */
    private String comment;

    /**
     */
    private long atc;

	public static TypedQuery<TransferMaster> findTransferMastersByCorridorName(CorridorMaster corridorName) {
        if (corridorName == null) throw new IllegalArgumentException("The corridorName argument is required");
        EntityManager em = TransferMaster.entityManager();
        TypedQuery<TransferMaster> q = em.createQuery("SELECT o FROM TransferMaster AS o WHERE o.corridorName = :corridorName", TransferMaster.class);
        q.setParameter("corridorName", corridorName);
        return q;
    }

	public static TypedQuery<TransferMaster> findTransferMastersByStartDateEquals(Date startDate) {
        if (startDate == null) throw new IllegalArgumentException("The startDate argument is required");
        EntityManager em = TransferMaster.entityManager();
        TypedQuery<TransferMaster> q = em.createQuery("SELECT o FROM TransferMaster AS o WHERE str(year(o.startDate)) = :startDate)", TransferMaster.class);
        Calendar cal = Calendar.getInstance();
        cal.setTime(startDate);
        Integer year = cal.get(Calendar.YEAR);
        String y=Integer.toString(year);
        q.setParameter("startDate", y);
        return q;
    }
}

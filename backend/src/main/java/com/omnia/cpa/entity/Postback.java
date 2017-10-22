package com.omnia.cpa.entity;

import io.swagger.annotations.ApiModel;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.time.LocalDate;
import java.time.LocalTime;

@ApiModel(value = "Postback")
@Entity
@Data
public class Postback {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long afid;
    private String prefix;
    @DateTimeFormat(pattern = "yyyy-MM-dd", iso = DateTimeFormat.ISO.DATE)
    private LocalDate date;
    @DateTimeFormat(pattern = "hh:mm:ss", iso = DateTimeFormat.ISO.TIME)
    private LocalTime time;
    private String clickid;
    private String offerid;
    private Double sum;
    private String currency;
    private String goal;
    private String status;
    private String advname;
    private String offername;
    private String transactionid;
    private String idfa;
    private String gaid;
    private String t1;
    private String t2;
    private String t3;
    private String t4;
    private String t5;
    private String t6;
    private String t7;
    private String t8;
    private String t9;
    private String t10;
    private String secretkey;
    private String ipaddress;
    private String fullurl;
    private Short postbacksend;
    private String duplicate;
    private Long exchange;
    private String event1;
    private String event2;
    private String event3;
    private String event4;
    private String event5;
    private String event6;
    private String event7;
    private String event8;
    private String event9;
    private String event10;
    private String idc;
    private String ido;

//    @ApiModelProperty(hidden = true)

}

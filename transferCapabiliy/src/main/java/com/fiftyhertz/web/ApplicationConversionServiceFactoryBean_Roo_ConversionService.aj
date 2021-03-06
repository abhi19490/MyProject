// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.fiftyhertz.web;

import com.fiftyhertz.domain.CorridorMaster;
import com.fiftyhertz.domain.RegionMaster;
import com.fiftyhertz.domain.StateMaster;
import com.fiftyhertz.domain.TransferMaster;
import com.fiftyhertz.web.ApplicationConversionServiceFactoryBean;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.core.convert.converter.Converter;
import org.springframework.format.FormatterRegistry;

privileged aspect ApplicationConversionServiceFactoryBean_Roo_ConversionService {
    
    declare @type: ApplicationConversionServiceFactoryBean: @Configurable;
    
    public Converter<CorridorMaster, String> ApplicationConversionServiceFactoryBean.getCorridorMasterToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.fiftyhertz.domain.CorridorMaster, java.lang.String>() {
            public String convert(CorridorMaster corridorMaster) {
                return new StringBuilder().append(corridorMaster.getTtc()).append(' ').append(corridorMaster.getCorridorName()).toString();
            }
        };
    }
    
    public Converter<Long, CorridorMaster> ApplicationConversionServiceFactoryBean.getIdToCorridorMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.fiftyhertz.domain.CorridorMaster>() {
            public com.fiftyhertz.domain.CorridorMaster convert(java.lang.Long id) {
                return CorridorMaster.findCorridorMaster(id);
            }
        };
    }
    
    public Converter<String, CorridorMaster> ApplicationConversionServiceFactoryBean.getStringToCorridorMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.fiftyhertz.domain.CorridorMaster>() {
            public com.fiftyhertz.domain.CorridorMaster convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), CorridorMaster.class);
            }
        };
    }
    
    public Converter<RegionMaster, String> ApplicationConversionServiceFactoryBean.getRegionMasterToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.fiftyhertz.domain.RegionMaster, java.lang.String>() {
            public String convert(RegionMaster regionMaster) {
                return new StringBuilder().append(regionMaster.getRegionName()).append(' ').append(regionMaster.getLatitude()).append(' ').append(regionMaster.getLongitude()).toString();
            }
        };
    }
    
    public Converter<Long, RegionMaster> ApplicationConversionServiceFactoryBean.getIdToRegionMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.fiftyhertz.domain.RegionMaster>() {
            public com.fiftyhertz.domain.RegionMaster convert(java.lang.Long id) {
                return RegionMaster.findRegionMaster(id);
            }
        };
    }
    
    public Converter<String, RegionMaster> ApplicationConversionServiceFactoryBean.getStringToRegionMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.fiftyhertz.domain.RegionMaster>() {
            public com.fiftyhertz.domain.RegionMaster convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), RegionMaster.class);
            }
        };
    }
    
    public Converter<StateMaster, String> ApplicationConversionServiceFactoryBean.getStateMasterToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.fiftyhertz.domain.StateMaster, java.lang.String>() {
            public String convert(StateMaster stateMaster) {
                return new StringBuilder().append(stateMaster.getStateName()).toString();
            }
        };
    }
    
    public Converter<Long, StateMaster> ApplicationConversionServiceFactoryBean.getIdToStateMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.fiftyhertz.domain.StateMaster>() {
            public com.fiftyhertz.domain.StateMaster convert(java.lang.Long id) {
                return StateMaster.findStateMaster(id);
            }
        };
    }
    
    public Converter<String, StateMaster> ApplicationConversionServiceFactoryBean.getStringToStateMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.fiftyhertz.domain.StateMaster>() {
            public com.fiftyhertz.domain.StateMaster convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), StateMaster.class);
            }
        };
    }
    
    public Converter<TransferMaster, String> ApplicationConversionServiceFactoryBean.getTransferMasterToStringConverter() {
        return new org.springframework.core.convert.converter.Converter<com.fiftyhertz.domain.TransferMaster, java.lang.String>() {
            public String convert(TransferMaster transferMaster) {
                return new StringBuilder().append(transferMaster.getStartDate()).append(' ').append(transferMaster.getEndDate()).append(' ').append(transferMaster.getRevision()).append(' ').append(transferMaster.getComment()).toString();
            }
        };
    }
    
    public Converter<Long, TransferMaster> ApplicationConversionServiceFactoryBean.getIdToTransferMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.Long, com.fiftyhertz.domain.TransferMaster>() {
            public com.fiftyhertz.domain.TransferMaster convert(java.lang.Long id) {
                return TransferMaster.findTransferMaster(id);
            }
        };
    }
    
    public Converter<String, TransferMaster> ApplicationConversionServiceFactoryBean.getStringToTransferMasterConverter() {
        return new org.springframework.core.convert.converter.Converter<java.lang.String, com.fiftyhertz.domain.TransferMaster>() {
            public com.fiftyhertz.domain.TransferMaster convert(String id) {
                return getObject().convert(getObject().convert(id, Long.class), TransferMaster.class);
            }
        };
    }
    
    public void ApplicationConversionServiceFactoryBean.installLabelConverters(FormatterRegistry registry) {
        registry.addConverter(getCorridorMasterToStringConverter());
        registry.addConverter(getIdToCorridorMasterConverter());
        registry.addConverter(getStringToCorridorMasterConverter());
        registry.addConverter(getRegionMasterToStringConverter());
        registry.addConverter(getIdToRegionMasterConverter());
        registry.addConverter(getStringToRegionMasterConverter());
        registry.addConverter(getStateMasterToStringConverter());
        registry.addConverter(getIdToStateMasterConverter());
        registry.addConverter(getStringToStateMasterConverter());
        registry.addConverter(getTransferMasterToStringConverter());
        registry.addConverter(getIdToTransferMasterConverter());
        registry.addConverter(getStringToTransferMasterConverter());
    }
    
    public void ApplicationConversionServiceFactoryBean.afterPropertiesSet() {
        super.afterPropertiesSet();
        installLabelConverters(getObject());
    }
    
}

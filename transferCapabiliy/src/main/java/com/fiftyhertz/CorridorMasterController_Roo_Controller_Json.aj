// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.fiftyhertz;

import com.fiftyhertz.CorridorMasterController;
import com.fiftyhertz.domain.CorridorMaster;
import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

privileged aspect CorridorMasterController_Roo_Controller_Json {
    
    @RequestMapping(value = "/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> CorridorMasterController.showJson(@PathVariable("id") Long id) {
        CorridorMaster corridorMaster = CorridorMaster.findCorridorMaster(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        if (corridorMaster == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(corridorMaster.toJson(), headers, HttpStatus.OK);
    }
    
    @RequestMapping(headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> CorridorMasterController.listJson() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        List<CorridorMaster> result = CorridorMaster.findAllCorridorMasters();
        return new ResponseEntity<String>(CorridorMaster.toJsonArray(result), headers, HttpStatus.OK);
    }
    
    @RequestMapping(method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> CorridorMasterController.createFromJson(@RequestBody String json) {
        CorridorMaster corridorMaster = CorridorMaster.fromJsonToCorridorMaster(json);
        corridorMaster.persist();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
    
    @RequestMapping(value = "/jsonArray", method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> CorridorMasterController.createFromJsonArray(@RequestBody String json) {
        for (CorridorMaster corridorMaster: CorridorMaster.fromJsonArrayToCorridorMasters(json)) {
            corridorMaster.persist();
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, headers = "Accept=application/json")
    public ResponseEntity<String> CorridorMasterController.updateFromJson(@RequestBody String json, @PathVariable("id") Long id) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        CorridorMaster corridorMaster = CorridorMaster.fromJsonToCorridorMaster(json);
        if (corridorMaster.merge() == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
    public ResponseEntity<String> CorridorMasterController.deleteFromJson(@PathVariable("id") Long id) {
        CorridorMaster corridorMaster = CorridorMaster.findCorridorMaster(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        if (corridorMaster == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        corridorMaster.remove();
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }
    
}

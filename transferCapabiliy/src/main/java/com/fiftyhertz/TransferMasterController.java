package com.fiftyhertz;
import com.fiftyhertz.domain.CorridorMaster;
import com.fiftyhertz.domain.TransferMaster;
import java.util.Date;
import java.util.List;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.roo.addon.web.mvc.controller.finder.RooWebFinder;

@RooWebJson(jsonObject = TransferMaster.class)
@Controller
@RequestMapping("/transfermasters")
@RooWebScaffold(path = "transfermasters", formBackingObject = TransferMaster.class)
@RooWebFinder
public class TransferMasterController {

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> showJson(@PathVariable("id") Long id) {
        TransferMaster transferMaster = TransferMaster.findTransferMaster(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        if (transferMaster == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(transferMaster.toJson(), headers, HttpStatus.OK);
    }

    @RequestMapping(headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> listJson() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        List<TransferMaster> result = TransferMaster.findAllTransferMasters();
        return new ResponseEntity<String>(TransferMaster.toJsonArray(result), headers, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> createFromJson(@RequestBody String json) {
        TransferMaster transferMaster = TransferMaster.fromJsonToTransferMaster(json);
        transferMaster.persist();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/jsonArray", method = RequestMethod.POST, headers = "Accept=application/json")
    public ResponseEntity<String> createFromJsonArray(@RequestBody String json) {
        for (TransferMaster transferMaster : TransferMaster.fromJsonArrayToTransferMasters(json)) {
            transferMaster.persist();
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, headers = "Accept=application/json")
    public ResponseEntity<String> updateFromJson(@RequestBody String json, @PathVariable("id") Long id) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        TransferMaster transferMaster = TransferMaster.fromJsonToTransferMaster(json);
        if (transferMaster.merge() == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
    public ResponseEntity<String> deleteFromJson(@PathVariable("id") Long id) {
        TransferMaster transferMaster = TransferMaster.findTransferMaster(id);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        if (transferMaster == null) {
            return new ResponseEntity<String>(headers, HttpStatus.NOT_FOUND);
        }
        transferMaster.remove();
        return new ResponseEntity<String>(headers, HttpStatus.OK);
    }

	@RequestMapping(params = "find=ByCorridorName", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> jsonFindTransferMastersByCorridorName(@RequestParam("corridorName") CorridorMaster corridorName) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        return new ResponseEntity<String>(TransferMaster.toJsonArray(TransferMaster.findTransferMastersByCorridorName(corridorName).getResultList()), headers, HttpStatus.OK);
    }

	@RequestMapping(params = "find=ByStartDateEquals", headers = "Accept=application/json")
    @ResponseBody
    public ResponseEntity<String> jsonFindTransferMastersByStartDateEquals(@RequestParam("startDate") @DateTimeFormat(style = "M-") Date startDate) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json; charset=utf-8");
        return new ResponseEntity<String>(TransferMaster.toJsonArray(TransferMaster.findTransferMastersByStartDateEquals(startDate).getResultList()), headers, HttpStatus.OK);
    }
}

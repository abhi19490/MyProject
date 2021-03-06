// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.fiftyhertz;

import com.fiftyhertz.RegionMasterController;
import com.fiftyhertz.domain.RegionMaster;
import java.io.UnsupportedEncodingException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriUtils;
import org.springframework.web.util.WebUtils;

privileged aspect RegionMasterController_Roo_Controller {
    
    @RequestMapping(method = RequestMethod.POST, produces = "text/html")
    public String RegionMasterController.create(@Valid RegionMaster regionMaster, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, regionMaster);
            return "regionmasters/create";
        }
        uiModel.asMap().clear();
        regionMaster.persist();
        return "redirect:/regionmasters/" + encodeUrlPathSegment(regionMaster.getId().toString(), httpServletRequest);
    }
    
    @RequestMapping(params = "form", produces = "text/html")
    public String RegionMasterController.createForm(Model uiModel) {
        populateEditForm(uiModel, new RegionMaster());
        return "regionmasters/create";
    }
    
    @RequestMapping(value = "/{id}", produces = "text/html")
    public String RegionMasterController.show(@PathVariable("id") Long id, Model uiModel) {
        uiModel.addAttribute("regionmaster", RegionMaster.findRegionMaster(id));
        uiModel.addAttribute("itemId", id);
        return "regionmasters/show";
    }
    
    @RequestMapping(produces = "text/html")
    public String RegionMasterController.list(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size.intValue();
            final int firstResult = page == null ? 0 : (page.intValue() - 1) * sizeNo;
            uiModel.addAttribute("regionmasters", RegionMaster.findRegionMasterEntries(firstResult, sizeNo));
            float nrOfPages = (float) RegionMaster.countRegionMasters() / sizeNo;
            uiModel.addAttribute("maxPages", (int) ((nrOfPages > (int) nrOfPages || nrOfPages == 0.0) ? nrOfPages + 1 : nrOfPages));
        } else {
            uiModel.addAttribute("regionmasters", RegionMaster.findAllRegionMasters());
        }
        return "regionmasters/list";
    }
    
    @RequestMapping(method = RequestMethod.PUT, produces = "text/html")
    public String RegionMasterController.update(@Valid RegionMaster regionMaster, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            populateEditForm(uiModel, regionMaster);
            return "regionmasters/update";
        }
        uiModel.asMap().clear();
        regionMaster.merge();
        return "redirect:/regionmasters/" + encodeUrlPathSegment(regionMaster.getId().toString(), httpServletRequest);
    }
    
    @RequestMapping(value = "/{id}", params = "form", produces = "text/html")
    public String RegionMasterController.updateForm(@PathVariable("id") Long id, Model uiModel) {
        populateEditForm(uiModel, RegionMaster.findRegionMaster(id));
        return "regionmasters/update";
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = "text/html")
    public String RegionMasterController.delete(@PathVariable("id") Long id, @RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        RegionMaster regionMaster = RegionMaster.findRegionMaster(id);
        regionMaster.remove();
        uiModel.asMap().clear();
        uiModel.addAttribute("page", (page == null) ? "1" : page.toString());
        uiModel.addAttribute("size", (size == null) ? "10" : size.toString());
        return "redirect:/regionmasters";
    }
    
    void RegionMasterController.populateEditForm(Model uiModel, RegionMaster regionMaster) {
        uiModel.addAttribute("regionMaster", regionMaster);
    }
    
    String RegionMasterController.encodeUrlPathSegment(String pathSegment, HttpServletRequest httpServletRequest) {
        String enc = httpServletRequest.getCharacterEncoding();
        if (enc == null) {
            enc = WebUtils.DEFAULT_CHARACTER_ENCODING;
        }
        try {
            pathSegment = UriUtils.encodePathSegment(pathSegment, enc);
        } catch (UnsupportedEncodingException uee) {}
        return pathSegment;
    }
    
}

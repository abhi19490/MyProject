package com.fiftyhertz;
import com.fiftyhertz.domain.RegionMaster;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;

@RooWebJson(jsonObject = RegionMaster.class)
@Controller
@RequestMapping("/regionmasters")
@RooWebScaffold(path = "regionmasters", formBackingObject = RegionMaster.class)
public class RegionMasterController {
}

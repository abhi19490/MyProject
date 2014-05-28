package com.fiftyhertz;
import com.fiftyhertz.domain.CorridorMaster;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;

@RooWebJson(jsonObject = CorridorMaster.class)
@Controller
@RequestMapping("/corridormasters")
@RooWebScaffold(path = "corridormasters", formBackingObject = CorridorMaster.class)
public class CorridorMasterController {
}

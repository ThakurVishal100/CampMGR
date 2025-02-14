
package com.jss.jiffy_camp_mgr.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jss.jiffy_camp_mgr.dao.convertors.UserConvertor;
import com.jss.jiffy_camp_mgr.dao.entities.User;
import com.jss.jiffy_camp_mgr.dao.repository.UserRepository;
import com.jss.jiffy_camp_mgr.dao.services.JssAuthService;
import com.jss.jiffy_camp_mgr.web.models.CampaignUser;

@RestController
@RequestMapping("/uc")
public class UserController {

    
    @Autowired JssAuthService authService;
    
    @GetMapping("/findByUserName")
    public @ResponseBody CampaignUser findUserByUserName(@RequestParam(value="username",required=false,defaultValue="") String userName) {
    	   	
        return (CampaignUser) authService.searchByUserName(userName);
    }
}

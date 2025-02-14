package com.jss.jiffy_camp_mgr.dao.convertors;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.jss.jiffy_camp_mgr.dao.entities.User;
import com.jss.jiffy_camp_mgr.exception.JssException;
import com.jss.jiffy_camp_mgr.web.models.CampaignUser;


@Service
public class UserConvertor extends JssDataConvertorImpl {
	
	
	public UserConvertor() {
		super("UserConvertor");
	}

	@Override
	public Object convertToModel(Object entityObj) throws JssException {
		
		User userEntity=null;
		try {
			userEntity=(User)entityObj;
		}catch(Exception e) {
			userEntity=null;
		}
		
		try {
		if(userEntity!=null) {
			CampaignUser campUser=new CampaignUser();
			campUser.setUserId(userEntity.getUserId());
			campUser.setAccessLevel(userEntity.getAccessLevel());
			campUser.setCreationTime(userEntity.getCreationTime());
			campUser.setEmail(userEntity.getEmail());
			campUser.setFullName(userEntity.getFullName());
			campUser.setLastLogin(userEntity.getLastLogin());
			campUser.setParentUserId(userEntity.getParentUserId());
			campUser.setPassword(userEntity.getPassword());
			campUser.setPhoneNumber(userEntity.getPhoneNumber());
			campUser.setRoleName(userEntity.getRoleName());
			campUser.setLastUpdate(userEntity.getLastUpdate());
			campUser.setUserName(validateString(userEntity.getUserName(),""));
			campUser.setUserStatus(userEntity.getUserStatus());
			return campUser;
			
		}else
			return null;
		}catch(Exception e) {
			throw new JssException("DC-100",this.getClassName()+" :: Data Conversion Error! Failed to prepare model object. "+e.getMessage());
		}
	}

	@Override
	public Object convertToEntity(Object campUserObj) {
		try {
			CampaignUser campUser=(CampaignUser)campUserObj;
			if(campUser!=null) {
				User userObj=new User();
				userObj.setUserId(campUser.getUserId());
				userObj.setAccessLevel(campUser.getAccessLevel());
				userObj.setCreationTime(validateDate(campUser.getCreationTime(),new java.util.Date(System.currentTimeMillis())));
				
				userObj.setEmail(validateEmail(campUser.getEmail()) ? campUser.getEmail() : "default_email@example.com");

				userObj.setFullName(campUser.getFullName());
				userObj.setLastLogin(validateDate(campUser.getLastLogin(),new java.util.Date(System.currentTimeMillis()) ));
				userObj.setParentUserId(campUser.getParentUserId());
				userObj.setPassword(campUser.getPassword());
				
				userObj.setPhoneNumber(validatePhoneNumber(campUser.getPhoneNumber(), "000-000-0000"));

				userObj.setRoleName(campUser.getRoleName());
				userObj.setLastUpdate(validateDate(campUser.getLastUpdate(),new java.util.Date(System.currentTimeMillis())));
				userObj.setUserName(campUser.getUserName());
				userObj.setUserStatus(campUser.getUserStatus());
				return userObj;
				
			}else
				return null;
			}catch(Exception e) {
				throw new JssException("DC-101",this.getClassName()+" :: Data Conversion Error! Failed to convert into entity. "+e.getMessage());
			}
	}

	
}

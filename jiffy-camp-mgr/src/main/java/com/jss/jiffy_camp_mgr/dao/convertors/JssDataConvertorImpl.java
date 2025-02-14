package com.jss.jiffy_camp_mgr.dao.convertors;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.jss.jiffy_camp_mgr.dao.entities.User;
import com.jss.jiffy_camp_mgr.web.models.CampaignUser;

public abstract class JssDataConvertorImpl implements JssDataConvertor{

	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	/**
	 * add code for conversion to Json
	 */
	String className;
	public JssDataConvertorImpl() {}
	public JssDataConvertorImpl(String className) {
		this.className=className;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	
	@Override
	public List convertToModel(List entityObj) {
		// TODO Auto-generated method stub
		List<CampaignUser> userList=new ArrayList<>();
		CampaignUser eusr=null;
		for(Object eo:entityObj) {
			eusr=(CampaignUser)convertToModel(eo);
			if(eusr!=null && eusr.getUserId()>0) userList.add(eusr);
			eusr=null;
		}
		return userList;
	}

	@Override
	public List convertToEntity(List obj) {
		List<User> userList=new ArrayList<>();
		User eusr=null;
		for(Object eo:obj) {
			eusr=(User)convertToEntity(eo);
			if(eusr!=null && eusr.getUserId()>0) userList.add(eusr);
			eusr=null;
		}
		return userList;
	}
	

	public String validateString(String data,String defaultVal) {
		String repStr=null;
		try {
			repStr=(data!=null && data.length()>0)?data.trim():defaultVal;
		}catch(Exception e) {
			repStr=defaultVal;
		}
		return repStr;
	}
	
	public java.util.Date convertToDate(String data,java.util.Date defaultVal) {
		java.util.Date repDate=null;
		try {
			repDate=sdf.parse(data);
			repDate=(repDate!=null)?repDate:defaultVal;
			
		}catch(Exception e) {
			repDate=defaultVal;
		}
		return repDate;
	}
	
	public java.util.Date validateDate(java.util.Date data,java.util.Date defaultVal) {
		java.util.Date repDate=null;
		try {
			repDate=data;
			repDate=(repDate!=null)?repDate:defaultVal;
			
		}catch(Exception e) {
			repDate=defaultVal; 
		}
		return repDate; 
	}

	public boolean validateEmail(String email) {
	    return email != null && email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
	}

	public String validatePhoneNumber(String phoneNumber, String defaultPhoneNumber) {
	    return (phoneNumber != null && !phoneNumber.isEmpty()) ? phoneNumber : defaultPhoneNumber;
	}

	
}

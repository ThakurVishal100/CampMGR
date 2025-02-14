package com.jss.jiffy_camp_mgr.dao.convertors;

import java.util.List;

public interface JssDataConvertor {
	
	public Object convertToModel(Object entityObj);
	public Object convertToEntity(Object obj);
	
	public List convertToModel(List entityObj);
	public List convertToEntity(List obj);
	
	public String validateString(String data,String defaultVal);
}

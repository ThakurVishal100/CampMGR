package com.jss.jiffy_camp_mgr.web.models;

import java.util.List;

public interface JssMenuItem {

	public List<JssMenuItem> getSubMenuList();
	public void setSubMenuList(List<JssMenuItem> subMenuList);
}

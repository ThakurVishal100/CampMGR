package com.jss.jiffy_camp_mgr.dao.services;

import com.jss.jiffy_camp_mgr.exception.JssException;
import com.jss.jiffy_camp_mgr.web.models.CampaignUser;

public interface JssAuthService {
	public CampaignUser searchByUserName(String userName) throws JssException;
}

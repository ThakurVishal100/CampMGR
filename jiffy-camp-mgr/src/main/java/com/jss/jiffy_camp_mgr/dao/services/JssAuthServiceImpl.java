package com.jss.jiffy_camp_mgr.dao.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.jss.jiffy_camp_mgr.dao.convertors.UserConvertor;
import com.jss.jiffy_camp_mgr.dao.entities.User;
import com.jss.jiffy_camp_mgr.dao.repository.UserRepository;
import com.jss.jiffy_camp_mgr.exception.JssException;
import com.jss.jiffy_camp_mgr.web.models.CampaignUser;

@Component
public class JssAuthServiceImpl implements JssAuthService {

	private static final Logger logger = LoggerFactory.getLogger(JssAuthServiceImpl.class);

	@Autowired
	private UserRepository userdao;

	@Autowired
	UserConvertor userConvertor;
	String className;

	public JssAuthServiceImpl() {
		this.className = "JssAuthServiceImpl";
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	@Override
	public CampaignUser searchByUserName(String userName) throws JssException {
		try {
			List<User> userList = userdao.findByUserName(userName);
			if (userList != null && userList.size() > 0) {
				return (CampaignUser) userConvertor.convertToModel(userList.get(0));
			} else {
				logger.info(this.getClassName() + ": User " + userName + " not found.");
				return null;
			}
		} catch (JssException e) {
			logger.error(this.getClassName() + ":" + e.getExceptionCode() + ":" + e.getExceptionMessage());
			throw e;
		} catch (Exception e) {
			logger.error(e.getMessage());
			throw new JssException("DS-100", this.getClassName() + ": Failed to search User." + e.getMessage());
		}
	}

	public CampaignUser signup(String userName, String email, String fullName, String password, String phoneNumber) {
		try {
			// Check if the username already exists
			if (!userdao.findByUserName(userName).isEmpty()) {
				throw new JssException("USR-101", "Username already exists.");
			}

			// Create new user entity
			User user = new User();
			user.setUserName(userName);
			user.setEmail(email);
			user.setFullName(fullName);
			user.setPassword(password);
			user.setPhoneNumber(phoneNumber);

			// Save to database
			User savedUser = userdao.save(user);

			// Convert to LmsUser model and return
//            return (LmsUser) userConvertor.convertToModel(savedUser);
			CampaignUser campUser = (CampaignUser) userConvertor.convertToModel(savedUser);

			logger.info("User created successfully! User ID: " + savedUser.getUserId());

			return campUser;

		} catch (Exception e) {
			logger.error("Error in signup: " + e.getMessage());
			throw new JssException("USR-102", "Signup failed: " + e.getMessage());
		}
	}
//	 public List<User> getAllUsers() {
//	        return userdao.findAll(); 
//	    }

	public List<CampaignUser> getAllUsers() {
		List<User> users = userdao.findAll();

		// Convert List<User> to List<CampaignUser>
		return users.stream().map(user -> {
			CampaignUser campaignUser = new CampaignUser();
			campaignUser.setUserId(user.getUserId());
			campaignUser.setUserName(user.getUserName());
			campaignUser.setEmail(user.getEmail());
			campaignUser.setFullName(user.getFullName());
			campaignUser.setPhoneNumber(user.getPhoneNumber());
			campaignUser.setRoleName(user.getRoleName());
			campaignUser.setUserStatus(user.getUserStatus());
			return campaignUser;
		}).collect(Collectors.toList());
	}

	public String deleteAllUsers() {
		userdao.deleteAll();
		return "All users deleted successfully!";
	}
	
	public boolean authenticateUser(String userName, String password) {
        Optional<User> userOptional = userdao.findByUserName(userName).stream().findFirst();

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getPassword().equals(password);
        }
        return false;
    }

}

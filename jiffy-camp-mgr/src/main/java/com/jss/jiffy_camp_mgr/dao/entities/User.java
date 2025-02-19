package com.jss.jiffy_camp_mgr.dao.entities;

import java.io.Serializable;

import java.lang.reflect.Field;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;

import java.util.Date;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import java.util.Date;


@Entity
@Table(name = "tbl_user")
@NamedQuery(name = "User.findAll", query = "SELECT b FROM User b")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	public enum UserStatus {
	    ACTIVE,
	    INACTIVE;

		public String toUpperCase() {
			// TODO Auto-generated method stub
			return null;
		}
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", unique = true, nullable = false)
	private int userId;

	@Column(name = "access_level")
	private Integer accessLevel;

	@Column(name = "created_on")
	private Date creationTime;

	@Column(name = "email")
	private String email;

	@Column(name = "full_name")
	private String fullName;

	@Column(name = "last_login")
	private Date lastLogin;

	@Column(name = "parent_user_id")
	private Integer parentUserId;

	@Column(name = "password")
	private String password;

	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "role")
	private String roleName;

	@Column(name = "updated_on")
	private Date lastUpdate;

	@Column(name = "user_name")
	private String userName;
	
	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	@Column(name = "company")
	private String companyName;

	@Column(name = "user_status")
	@Enumerated(EnumType.STRING)
	private UserStatus userStatus;


	public User() {
	}

	@PrePersist
	protected void onCreate() {
	    this.creationTime = new Date(); 
	    this.accessLevel = 1; 
	    this.lastLogin = new Date(); 
	    this.parentUserId = 1; 
	    this.roleName = "user"; 
	    this.lastUpdate = new Date(); 
	    this.userStatus = UserStatus.ACTIVE; 
	}


	@PreUpdate
	protected void onUpdate() {
		this.lastUpdate = new Date(); 
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Integer getAccessLevel() {
		return accessLevel;
	}

	public void setAccessLevel(Integer accessLevel) {
		this.accessLevel = accessLevel;
	}

	public Date getCreationTime() {
		return creationTime;
	}

	public void setCreationTime(Date creationTime) {
		this.creationTime = creationTime;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public Date getLastLogin() {
		return lastLogin;
	}

	public void setLastLogin(Date lastLogin) {
		this.lastLogin = lastLogin;
	}

	public Integer getParentUserId() {
		return parentUserId;
	}

	public void setParentUserId(Integer parentUserId) {
		this.parentUserId = parentUserId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Date getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public UserStatus getUserStatus() {
	    return userStatus;
	}

	public void setUserStatus(UserStatus userStatus) {
	    this.userStatus = userStatus;
	}

}
package com.jss.jiffy_camp_mgr.dao.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jss.jiffy_camp_mgr.dao.entities.User;
import com.jss.jiffy_camp_mgr.web.models.CampaignUser;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUserId(Integer userId);
	 @Query("SELECT b FROM User b WHERE b.userName = :userName")
	List<User> findByUserName(@Param("userName")String userName);
	 List<User> findAll();
}


 

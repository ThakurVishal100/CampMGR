package com.jss.jiffy_camp_mgr.web.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jss.jiffy_camp_mgr.dao.entities.User;
import com.jss.jiffy_camp_mgr.dao.repository.UserRepository;
import com.jss.jiffy_camp_mgr.dao.services.JssAuthServiceImpl;
import com.jss.jiffy_camp_mgr.web.models.AppUserDTO;
import com.jss.jiffy_camp_mgr.web.models.CampaignUser;
import com.jss.jiffy_camp_mgr.web.models.UserDTO;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = { "*" }, maxAge = 3600L)
public class AuthController {

	@Autowired
	private JssAuthServiceImpl authService;

	@PostMapping("/signup")
	public @ResponseBody CampaignUser signup(@RequestParam String userName, @RequestParam String email,
			@RequestParam String fullName, @RequestParam String password, @RequestParam String phoneNumber,
			@RequestParam String company) {

		return authService.signup(userName, email, fullName, password, phoneNumber, company);
	}

	@GetMapping("/user")
	public @ResponseBody CampaignUser getUserByUserName(@RequestParam String userName) {
		return authService.searchByUserName(userName);
	}

	@GetMapping("/users")
	public List<CampaignUser> getAllUsers() {
		return authService.getAllUsers();
	}

	@DeleteMapping("/users")
	public ResponseEntity<String> deleteAllUsers() {
		String message = authService.deleteAllUsers();
		return ResponseEntity.ok(message);
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<String> deleteUserById(@PathVariable Integer id) {
		try {
			return ResponseEntity.ok(authService.deleteUserById(id));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PostMapping("/login")
	public ResponseEntity<String> loginAuth(@RequestParam String userName, @RequestParam String password) {
		boolean isAuthenticated = authService.authenticateUser(userName, password);
		if (isAuthenticated) {
			return ResponseEntity.ok("Login Successful");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Username or Password");
		}
	}

}

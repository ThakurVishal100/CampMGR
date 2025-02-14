package com.jss.jiffy_camp_mgr;
	
	import org.springframework.boot.SpringApplication;
	import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
	
	@SpringBootApplication
	@EnableJpaRepositories(basePackages = "com.jss.jiffy_camp_mgr.dao.repository")
	@EntityScan(basePackages = "com.jss.jiffy_camp_mgr.dao.entities") 
	public class JiffyLmsApplication {
	
		public static void main(String[] args) {
			SpringApplication.run(JiffyLmsApplication.class, args);
			
		}
	
	}

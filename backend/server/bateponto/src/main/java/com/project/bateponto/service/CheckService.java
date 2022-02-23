package com.project.bateponto.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.project.bateponto.model.Person;
import com.project.bateponto.repository.CheckRepository;
import com.project.bateponto.repository.PersonRepository;

public class CheckService {

	  @Autowired
	  private CheckRepository checkRepository;
	  @Autowired
	  private PersonRepository personRepository;
	  
}

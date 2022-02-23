package com.project.bateponto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.bateponto.model.Person;
import com.project.bateponto.service.PersonService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/person")
@RequiredArgsConstructor
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@PostMapping
	@ResponseBody
	public String save(@RequestBody Person newPerson) {
		return this.personService.saveUpdate(newPerson);
	}
	

}

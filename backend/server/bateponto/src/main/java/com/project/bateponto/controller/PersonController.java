package com.project.bateponto.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
    @GetMapping("/fullname")  // http://localhost:8080/person/fullname?name= *insert*
    public Person findByFullName(@RequestParam String name){
    	  return this.personService.findByFullName(name);
    }
    
    @GetMapping("/cpf") // http://localhost:8080/person/cpf?cpf= *insert*
    public Person findBycPF(@RequestParam String cpf){
    	  return this.personService.findByCpf(cpf);
    }
}

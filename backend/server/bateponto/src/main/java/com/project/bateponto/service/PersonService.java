package com.project.bateponto.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.project.bateponto.model.Person;
import com.project.bateponto.repository.PersonRepository;

@Service
public class PersonService {

	@Autowired
	private PersonRepository personRepository;

	public String saveUpdate(Person person) {
		try {
			this.personRepository.save(person);
			return "usuário criado com sucesso!";
		} catch (NullPointerException e) {
			return "NullPointException";
		} catch (DataIntegrityViolationException e) {
			return "Não foi possível criar o usuário, há informações obrigatórias pendentes";
		}
	}
	
	
	public Person findByFullName(String name){
		return this.personRepository.findByFullName(name);
	}
	
	public Person findByCpf(String cpf){
		return this.personRepository.findByCpf(cpf);
	}
	
	public List<Person> findAll(){
		return this.personRepository.findAll();
	}
}

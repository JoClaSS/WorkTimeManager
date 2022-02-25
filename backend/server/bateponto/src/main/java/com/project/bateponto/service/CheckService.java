package com.project.bateponto.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.project.bateponto.model.Check;
import com.project.bateponto.model.Person;
import com.project.bateponto.model.dto.CheckDTO;
import com.project.bateponto.repository.CheckRepository;
import com.project.bateponto.repository.PersonRepository;

@Service
public class CheckService {

	@Autowired
	private CheckRepository checkRepository;
	@Autowired
	private PersonRepository personRepository;

	public String saveCheckIn(CheckDTO dto) { //Cria um novo check e cadastra o check in
		Check checkIn = new Check();
		Person person = this.personRepository.findByFullName(dto.getPerson());

		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		checkIn.setPerson(person);
		try {
			Date date = formatter.parse(dto.getCheckIn());
			checkIn.setCheckIn(date);
			this.checkRepository.save(checkIn);
			return "Check in cadastrado!";
		} catch (ParseException e) {
			e.printStackTrace();
			return "Parse error";
		}
	}  // Acho que consigo deixar esse código mais "clean", tentarei mais tarde

	
	
	public String saveCheckOut(CheckDTO dto) {    //Atualiza o check e cadastra o Check out
		Person person = this.personRepository.findByFullName(dto.getPerson());	
        List<Check> checks = this.checkRepository.findACheck(person.getId());
        
        for(Check check : checks){
        	
        	if(check.getCheckOut() == null && check.getCheckIn() != null) {
                
               SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

	
		       try {
			     Date date = formatter.parse(dto.getCheckOut());
			     check.setCheckOut(date);
			     this.checkRepository.save(check);
			     return "Check Out cadastrado!";
		       } catch (ParseException e) {
			     e.printStackTrace();
			     return "Parse error";
		       }
		       
        	}

	          }
           return "Já existe um Check Out";
	}
	
	
	     public List<Check> findChecks(String name){  //Retorna uma Lista de Checks de um usuário
	    	 Person person = this.personRepository.findByFullName(name);	
	         return this.checkRepository.findACheck(person.getId());
	     }

}

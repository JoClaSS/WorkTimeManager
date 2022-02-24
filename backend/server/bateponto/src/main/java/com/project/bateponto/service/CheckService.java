package com.project.bateponto.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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

	public String saveCheckIn(CheckDTO dto) {  // Acho que consigo deixar esse código mais "clean", tentarei mais tarde
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
	}
	
	public String saveCheckOut(CheckDTO dto) {
		Check checkOut = new Check();
		Person person = this.personRepository.findByFullName(dto.getPerson());	
         //Ajustar
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

		checkOut.setPerson(person);
		try {
			Date date = formatter.parse(dto.getCheckOut());
			checkOut.setCheckOut(date);
			this.checkRepository.save(checkOut);
			return "Check Out cadastrado!";
		} catch (ParseException e) {
			e.printStackTrace();
			return "Parse error";
		}

	}

}

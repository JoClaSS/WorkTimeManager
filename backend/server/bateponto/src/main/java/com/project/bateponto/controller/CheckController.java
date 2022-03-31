package com.project.bateponto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.bateponto.model.Check;
import com.project.bateponto.model.dto.CheckDTO;
import com.project.bateponto.service.CheckService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/check")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CheckController {

	@Autowired
	private CheckService checkService;
	
	@PostMapping("/in")
	@ResponseBody
	public String saveCheckIn(@RequestBody CheckDTO dto) {
		return this.checkService.saveCheckIn(dto);
	}
	
	@PostMapping("/out")
	@ResponseBody
	public String saveCheckOut(@RequestBody CheckDTO dto) {
		return this.checkService.saveCheckOut(dto);
	}
	
	@GetMapping("/list") // http://localhost:8080/check/list?name= *Insert*
	public List<Check> findAPersonCheck(@RequestParam String name){
		return this.checkService.findChecks(name);
	}
}

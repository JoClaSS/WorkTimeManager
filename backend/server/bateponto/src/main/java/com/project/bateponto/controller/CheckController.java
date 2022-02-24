package com.project.bateponto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.bateponto.model.dto.CheckDTO;
import com.project.bateponto.service.CheckService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/check")
@RequiredArgsConstructor
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
		
}

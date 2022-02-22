package com.project.bateponto.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "checks")
public class Check {
	
	@Id
	@SequenceGenerator(name = "seqc", sequenceName = "check_sequence", allocationSize = 0)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqc")
	private Long id;

	@Column(name = "check_in")
	private Date checkIn;
	
	@Column(name = "check_out")
	private Date checkOut;
	
	@OneToOne
	private Person person;
}

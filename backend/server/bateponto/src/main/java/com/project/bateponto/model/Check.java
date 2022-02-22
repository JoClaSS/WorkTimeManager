package com.project.bateponto.model;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.CascadeType;
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
@Table(name = "check")
public class Check {
	
	@Id
	@SequenceGenerator(name = "seq", sequenceName = "check_sequence", allocationSize = 0)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
	private Long id;

	@Column(name = "checkIn")
	private Date CheckIn;
	
	@Column(name = "checkOut")
	private Date CheckOut;
	
	@OneToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
	private Person person;
}

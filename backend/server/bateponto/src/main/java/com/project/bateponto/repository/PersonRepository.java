package com.project.bateponto.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.bateponto.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long> {

	@Query(value = "SELECT * FROM person p WHERE (:full_name is null or p.full_name= :full_name)", nativeQuery = true)
	Optional<Person> findByFullName(@Param("full_name") String fullName);
	
	@Query(value = "SELECT * FROM person p WHERE (:cpf is null or p.cpf= :cpf)", nativeQuery = true)
	Optional<Person> findByCpf(@Param("cpf") String cpf);
}

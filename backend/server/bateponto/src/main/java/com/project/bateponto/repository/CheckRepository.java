package com.project.bateponto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.bateponto.model.Check;
import com.project.bateponto.model.Person;

public interface CheckRepository extends JpaRepository<Check,Long> {
	
	@Query(value = "SELECT * FROM checks c WHERE (c.person_id= :person_id)", nativeQuery = true)
	List<Check> findACheck(@Param("person_id") long person_id);
}

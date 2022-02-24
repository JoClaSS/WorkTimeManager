package com.project.bateponto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.bateponto.model.Check;

public interface CheckRepository extends JpaRepository<Check,Long> {
	

}

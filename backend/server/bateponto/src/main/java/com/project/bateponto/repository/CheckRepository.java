package com.project.bateponto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.bateponto.model.Check;

public interface CheckRepository extends JpaRepository<Check,Long> {

}

package com.project.bateponto.repository;


import org.springframework.data.jpa.repository.JpaRepository;


import com.project.bateponto.model.Person;


public interface PersonRepository extends JpaRepository<Person,Long> {

}

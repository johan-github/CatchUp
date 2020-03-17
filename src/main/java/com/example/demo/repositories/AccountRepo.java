package com.example.demo.repositories;

import com.example.demo.entities.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccountRepo extends CrudRepository<Account, Integer> {

}
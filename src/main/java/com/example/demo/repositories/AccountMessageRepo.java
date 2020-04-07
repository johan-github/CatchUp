package com.example.demo.repositories;

import com.example.demo.entities.AccountMessage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AccountMessageRepo extends CrudRepository<AccountMessage, Integer> {
    public List<AccountMessage> findBychannelid(int id );
}





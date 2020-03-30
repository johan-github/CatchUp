package com.example.demo.repositories;

import com.example.demo.entities.AccountChannel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountChannelRepo extends CrudRepository<AccountChannel, Integer> {

    //public List<AccountChannel> findAllBySpeciesIgnoreCase(String specie);

    public AccountChannel findById(int id );

    public List<AccountChannel> findByAccountid(int accountid );

}

package com.example.demo.repositories;

import com.example.demo.entities.Channel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChannelRepo extends CrudRepository<Channel, Integer> {

    //public List<Channel> findAllBySpeciesIgnoreCase(String specie);

    public Channel findById( int id );

    public List<Channel> findByAccountId(int account_id );



}

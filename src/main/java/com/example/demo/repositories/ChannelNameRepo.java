package com.example.demo.repositories;

import com.example.demo.entities.ChannelName;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ChannelNameRepo extends CrudRepository<ChannelName, Integer> {

    //public List<Channel> findAllBySpeciesIgnoreCase(String specie);

    public ChannelName findById(int id );

    /*public List<ChannelName> findByAccountid(int id );*/
}
package com.example.demo.repositories;

import com.example.demo.entities.ChannelNames;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ChannelNamesRepo extends CrudRepository<ChannelNames, Integer> {
}
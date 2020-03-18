package com.example.demo.repositories;

import com.example.demo.entities.ChannelMessage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ChannelMessageRepo extends CrudRepository<ChannelMessage, Integer> {

    //public List<ChannelMessage> findAllMessagesByChannelsId(int channels_id);
}

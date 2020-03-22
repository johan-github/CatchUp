package com.example.demo.repositories;

import com.example.demo.entities.FriendList;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendListRepo extends CrudRepository<FriendList, Integer> {

    public List<FriendList> findById(int id);

}

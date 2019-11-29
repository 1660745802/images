package com.example.demo.dao;

import com.example.demo.entity.Mesg;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesgDao {
    List<Mesg> selectMesgByUsername(String username);
    List<Mesg> selectAll();
    void insertMesg(Mesg mesg);
    void updateMesg(String message,String id);
    void deleteMesgById(String id);
}

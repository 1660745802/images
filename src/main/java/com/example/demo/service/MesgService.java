package com.example.demo.service;

import com.example.demo.dao.MesgDao;
import com.example.demo.entity.Mesg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MesgService {
    @Autowired
    MesgDao mesgDao;

    public List<Mesg> preAttendMesg(String username){
        return mesgDao.selectMesgByUsername( username );
    }
    public void timeAttendMesg(String message,String id){
        mesgDao.updateMesg(message, id);
    }
    public void insertMesg(String id, String username){
        Mesg mesg=new Mesg();
        mesg.setId( id );
        mesg.setUsername( username );
        Date date=new Date(  );
        mesg.setDate(new java.util.Date( date.getTime() ));
        mesgDao.insertMesg( mesg );
    }
    public void delete(String id){
        mesgDao.deleteMesgById( id );
    }
}

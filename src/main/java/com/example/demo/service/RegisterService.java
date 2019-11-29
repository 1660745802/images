package com.example.demo.service;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
    UserDao userDao;

    public String reg(String username,String password){
        User user=new User();
        if(userDao.selectUserByName( username )==null){
            user.setUserName( username );
            user.setPassword( password );
            userDao.insertUser( user );
            return "注册成功";
        }else {
            return "用户名已存在，请重新输入";
        }
    }

}

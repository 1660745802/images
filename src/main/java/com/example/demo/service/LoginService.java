package com.example.demo.service;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    UserDao userDao;

    public String log(String username,String password){
        if(userDao.selectUserByName( username )==null){
            return "用户名或密码错误,请重新输入";
        }else{
            User user=userDao.selectUserByName( username );
            if(user.getPassword().equals( password ))
                return "登陆成功";
            else
                return "用户名或密码错误,请重新输入";
        }
    }
}

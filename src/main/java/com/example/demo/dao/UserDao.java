package com.example.demo.dao;

import com.example.demo.entity.User;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

@Repository
public interface UserDao {
    User selectUserById(int id);
    User selectUserByName(String username);
    List<User> selectAll();
    void insertUser(User user);
    void updateUserName(String userName,int id);
    void deleteUserById(int id);
    void deleteUserByName(String username);
}

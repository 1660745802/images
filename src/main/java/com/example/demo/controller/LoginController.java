package com.example.demo.controller;

import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController  {
    @Autowired
    LoginService loginService;

    @ResponseBody
    @RequestMapping("/login")
    public String register(HttpServletRequest request){
        String result = loginService.log( request.getParameter( "username" ),request.getParameter( "password" ));
        if(result.equals( "登陆成功" ))
            return "1";
        else
            return "0";
    }
}

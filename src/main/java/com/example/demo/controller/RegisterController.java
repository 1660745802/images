package com.example.demo.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import com.example.demo.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Map;

@Controller
public class RegisterController {
    @Autowired
    RegisterService registerService;

    @ResponseBody
    @RequestMapping("/register")
    public String register(HttpServletRequest request){
        String result = registerService.reg( request.getParameter( "username" ),request.getParameter( "password" ));
        if(result.equals( "注册成功" ))
            return "1";
        else
            return "0";
    }
}

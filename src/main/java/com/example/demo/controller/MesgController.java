package com.example.demo.controller;

import com.example.demo.entity.Mesg;
import com.example.demo.service.MesgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class MesgController {
    @Autowired
    MesgService mesgService;

    @ResponseBody
    @RequestMapping("/insertmesg")
    public void insertMesg(HttpServletRequest request){
        mesgService.insertMesg(request.getParameter( "id" ),request.getParameter( "username" ) );
    }
    @ResponseBody
    @RequestMapping("/preattend")
    public List<Mesg> preAttendMesg(HttpServletRequest request){
        List<Mesg> mesgs = mesgService.preAttendMesg( request.getParameter("username") );
        return mesgs;
    }
    @ResponseBody
    @RequestMapping("/timeattend")
    public void timeAttendMesg(HttpServletRequest request){
        mesgService.timeAttendMesg(request.getParameter("message"),  request.getParameter("id"));
    }
    @ResponseBody
    @RequestMapping("/deletemesg")
    public void deleteMesg(HttpServletRequest request){
        mesgService.delete( request.getParameter( "id" ) );
    }
}

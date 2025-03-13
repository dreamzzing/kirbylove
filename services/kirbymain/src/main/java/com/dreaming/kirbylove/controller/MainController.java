package com.dreaming.kirbylove.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MainController {
    @GetMapping("/hello")
    public String sayHello(){
        return "커비를 좋아하시나요";
    }

}

package com.springpratice1.tutorial.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springpratice1.tutorial.model.Content;
import com.springpratice1.tutorial.repository.ContentRepository;
import org.springframework.asm.TypeReference;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final ContentRepository repository;
    private final ObjectMapper objectMapper;

    public DataLoader(ContentRepository repository, ObjectMapper objectMapper){
        this.repository = repository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception{
        if(repository.count() == 0){
            try(InputStream inputStream = TypeReference.class.getResourceAsStream("/data/content.json")){
                repository.saveAll(objectMapper.readValue(inputStream,new com.fasterxml.jackson.core.type.TypeReference<List<Content>>(){}));
            }
        }
    }
}

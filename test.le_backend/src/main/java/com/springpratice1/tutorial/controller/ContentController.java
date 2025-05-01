package com.springpratice1.tutorial.controller;

import com.springpratice1.tutorial.model.Content;
import com.springpratice1.tutorial.model.Status;
import com.springpratice1.tutorial.model.Type;
import com.springpratice1.tutorial.repository.ContentRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/content")
@CrossOrigin
public class ContentController {

    private final ContentRepository repository;

    public ContentController(ContentRepository repository) {
        this.repository = repository;
    }

    public Content randomEntry = null;

    @GetMapping("")
    public List<Content> findAll(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Content findById(@PathVariable Integer id){
        return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Content Not Found"));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void create(@Valid @RequestBody Content content){
        repository.save(content);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void update(@Valid @RequestBody Content content,@PathVariable Integer id){
        if(!repository.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Content Not Found");
        }
        repository.save(content);
    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        repository.deleteById(id);
    }

    @GetMapping("/status/{status}")
    public List<Content> findByStatus (@PathVariable Status status){
        return repository.listByStatus(status);
    }

    @GetMapping("/type/{type}")
    public List<Content> findByType (@PathVariable Type type){
        return repository.listByType(type);
    }

    @GetMapping("/title/{title}")
    public List<Content> findByTitle (@PathVariable String title){
        return repository.listByTitle(title.toLowerCase());
    }

    @Scheduled(fixedRate = 10000)
    public void pickRandom(){
        randomEntry = repository.pickRandom();
    }

    @GetMapping("/random")
    public Content getRandom(){
        return randomEntry;
    }
}


package com.springpratice1.tutorial.model;

import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
public record Content(
    @Id
    Integer id,
    @NotBlank
    String title,
    String desc,
    String url,
    Type contentType,
    Status status,
    LocalDateTime dateCreated,
    LocalDateTime dateUpdated
){
}

package com.springpratice1.tutorial.repository;

import com.springpratice1.tutorial.model.Content;
import com.springpratice1.tutorial.model.Status;
import com.springpratice1.tutorial.model.Type;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContentRepository extends ListCrudRepository<Content,Integer> {


    @Query("""
        SELECT * FROM Content
        where status =:status
""")
    List<Content> listByStatus(@Param("status") Status status);

    @Query("""
        SELECT * FROM Content
        where content_type =:type
""")
    List<Content> listByType(@Param("type") Type type);

    @Query("""
        SELECT * FROM Content
        where LOWER(title) LIKE CONCAT(:title, '%');
""")
    List<Content> listByTitle(@Param("title") String title);
    @Query("""
        SELECT * FROM Content 
        ORDER BY RAND() LIMIT 1
""")
    Content pickRandom();

}

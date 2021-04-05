package com.example.fullstackpractice1.todos;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/itempractice")
@CrossOrigin(origins = "")
public class ItemController
{
    private final ItemRepository repo;

    public ItemController(ItemRepository repo)
    {
        this.repo = repo;
    }

    @GetMapping("")
    public Iterable<Item> listAll()
    {
        return this.repo.findAll();
    }
}

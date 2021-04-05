package com.example.fullstackpractice1.todos;

import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Long>
{
}

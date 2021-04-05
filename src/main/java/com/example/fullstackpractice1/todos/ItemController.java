package com.example.fullstackpractice1.todos;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/itempractice")
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

    @PostMapping("")
    public Object create(@RequestBody Item newItem) { return this.repo.save(newItem); }

    @GetMapping("/{id}")
    public Object read(@PathVariable Long id) { return this.repo.existsById(id) ? this.repo.findById(id) : "No item found for id " + id; }

    @PatchMapping("/{id}")
    public Object update(@PathVariable Long id, @RequestBody Item newItem)
    {
        // update fields if it already exists
        if (this.repo.existsById(id))
        {
            Item currItem = repo.findById(id).orElse(null);

            if (newItem.isCompleted()) { currItem.setCompleted(true); };
            if (newItem.getContent() != null) { currItem.setContent(newItem.getContent()); }

            return this.repo.save(currItem);
        }

        // else add it
        return this.repo.save(newItem);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id)
    {
        if (this.repo.existsById(id))
        {
            this.repo.deleteById(id);
            return "Item with id " + id + " has been deleted";
        }
        else return "Item with id " + id + " does not exist";
    }
}

# !! lists don't quite work
_these need work regarding their mappings to components. you'll also see invalid DOM nesting warnings in the console, too_

### Numbered lists

1. ordered
2. lists
    - with
    - inset
1. items
    1. and
        2. sub-lists
        8. sub-lists
        10. sub-lists
    2. very
4. versatile

### Bulleted lists

- an item
    - a sublist, lead with four spaces
        - and a sub-sublist, lead with another four spaces
        - a sub-subitem
    - up one level
    1. can include some ordered items
    3. note the numbers don't really matter
        2. sub-ordered things
        5. deeply nested
            1. very deep now
- back to root level
   
   this text aligns with the above item.

* unordered list can use asterisks
- or minuses
+ or pluses

### Checklists

Checklist syntax is just like unordered lists
with an open pair of square brackets, `[ ]`,
at the start of the checkable items:

My List
- [ ] todo
- [x] done

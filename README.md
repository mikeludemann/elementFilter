# elementFilter

A simple Function for filtering elements

## Examples

```
elementFilter(classElement, filterClassElement, toggleClass);

// Code

<style>
.filter {
  display: none;
}

.show {
  display: block;
}
</style>

// All elements
elementFilter("filter", "", "show");

// Some elements
elementFilter("filter", "burger", "show");
```

```
// Code with interactive content

<div id="selection">
  <div class="btn active" onclick="elementFilter('filter', '', 'show')">All</div>
  <div class="btn" onclick="elementFilter('filter', 'burger', 'show')">Burger</div>
  <div class="btn" onclick="elementFilter('filter', 'vegetables', 'show')">Vegetables</div>
  <div class="btn" onclick="elementFilter('filter', 'fruits', 'show')">Fruits</div>
  <div class="btn" onclick="elementFilter('filter', 'ice', 'show')">Ice</div>
</div>

<div class="container">
  <div class="filter burger">Hamburger</div>
  <div class="filter burger">Cheeseburger</div>
  <div class="filter fruits vegetables">Fruit Salad</div>
  <div class="filter burger">Chili Burger</div>
  <div class="filter burger vegetables">Veggie Burger</div>
  <div class="filter ice">Vanilla Ice Cream</div>
  <div class="filter vegetables">Cat</div>
  <div class="filter vegetables">Dog</div>
  <div class="filter fruits">Melons Cocktail</div>
  <div class="filter fruits">Cantaloupe</div>
  <div class="filter fruits">Banana</div>
  <div class="filter fruits ice">Banana Split</div>
  <div class="filter vegetables">Tofu</div>
</div>
```
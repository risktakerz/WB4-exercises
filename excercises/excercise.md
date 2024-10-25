# Exercises

## Part 1 (Just HTML)

1. Create a html page
2. Add a select list to it

```html
<main class="container mt-4">
  <div class="card p-4" style="width: 18rem">
    <form>
      <label for="statesSelect" class="form-label">States</label>
      <select class="form-select" id="statesSelect">
        <option value="">Select...</option>
        <!-- 
            <option value="1">New York</option>
            <option value="2">New Jersey</option>
            <option value="3">Ohio</option> -->
      </select>
    </form>
  </div>
</main>
```

3. Add one "Select ... " option with a value of blank "
4. Fill the list with 3 options (use whatever data you want)

- set the value to a number (1,2,3)
- set the innerText/TextContent to a label the user should see
- [Use this example] (https://github.com/craigmckeachie/
  fal12024-workbook4/blob/main/demos/select-list-dropdown.html)

5. Verify the list renders correctly on the page using live server

Part 2 (Part with JavaScript)

1. Comment out the options in the list except the first one "Select ... "
2. Add the options programmatically using JavaScript

- Include the JavaScript inline in a script block
- [Use this example] (https://github.com/craigmckeachie/
  fall2024-workbook4/blob/main/demos/select-list-dropdown-js.html)

3. Verify the list renders correctly on the page using live server

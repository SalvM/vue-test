# Autocomplete challenge

Build a Vue.js application that lets users search for a cities and books in a provided list.

    - Capture key presses from a text input and use the current value of the input to match items in the list (shown below).
    - The application should output the results under the input field as soon as you type at least 3 characters.
    - If you type less than 3 characters in the text field, it should not output any results. (It can show a prompt to type at least 3 characters)
    - If there are no results for the search, you should let the user know.
    - When the page loads the search field should be selected automatically, so you can start typing (similar to when you go to https://www.google.com/)
    - Use some type of data store to store the results that your components will consume.
    - You can use any approach for getting the store state into your components. The important part is that you use one or more stores to store your datasets and query results.
    - There should be two autocompletes on the final page, one for the cities and one for books. The books autocomplete should show primarily the book title and secondarily the author for every matched result.
    - Include at least three unit tests. You can select the units of code to test based on what you find most important. You are free to use any testing framework of choice.
    - For the cities autocomplete, search through this list for approximate matches. For example, if the user enters san, it should match san, santiago, san francisco, santa rosa, etc. If - they enter sant, it should only match santiago and santa rosa.
    - For the books autocomplete, search through the list of book.titles. For example, if the user enters don it should show a suggestion for 'Don Quixote'.

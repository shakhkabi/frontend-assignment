# Take Home Interview Project

### Goal
Create a single page web application where a user can view Chuck Norris jokes.

### Estimated time for completion:
2-4 Hours

### Instructions
Build the application with only using HTML, CSS and JavaScript. This also means that you will only use vanilla JavaScript without any frameworks or JQuery involved. For getting Chuck Norris jokes to your application, you are going to use the API provided by ```chucknorris.io```. The deliverable product should be the sourcecode to a runnable web application with all the requirements met.

You should fork this repository from Github ([Github: how to fork a repository](https://help.github.com/articles/fork-a-repo/)) and add your code. When you are done, open a pull request for us to review your work.

### Requirements

1. All the functionality should be on a single page.

2. The user can view a random joke, and choose to switch to a different random joke on demand

3. The user can filter the jokes by their category. Initially there should be no filters applied. However, the user should be able to select one of the available categories to filter the displayed random jokes.
   
4. The user can make a free text search to display matching jokes.

### API Usage
Retrieve a random chuck joke in JSON format.
```
GET https://api.chucknorris.io/jokes/random
```

Example response:
```
{
"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id" : "3YTfAfyhR7SdWa66xzeHPg",
"url" : "",
"value" : "Chuck Norris' auto biography is the best selling book of all time, it's called the bible"
}
```

Retrieve a random chuck norris joke from a given category.
```
GET https://api.chucknorris.io/jokes/random?category={category}
```

Retrieve a list of available categories.
```
GET https://api.chucknorris.io/jokes/categories
```

Free text search.
```
GET https://api.chucknorris.io/jokes/search?query={query}
```


### Bonus
Using [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) standards will be bonus.
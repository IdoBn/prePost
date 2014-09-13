prePost
=======

working with prePost:




Development
---
- To download your dependancies: ```npm install``` and ```bower install```
- Run the server ```ionic serve```
- When adding new files ```gulp index``` *(js and css)*
- Everytime you come to work on the project use ```git pull``` to make sure you are working on an updated feature

File System
---
    |-www
      |-lib
      |-index.html
      |-src
        |-prePost.main
          |-prePost.module.js
        |-prePost.feed
          |-feed.module.js
          |-feed.controller.js
          |-feed.html
          |-feed.css
        |-prePost.profile
          |-profile.module.js
          |-profile.controller.js
          |-profile.html
          |-profile.css
        ...
        
The file system should be ordered in a way where every feature has its own folder that is namespaced.



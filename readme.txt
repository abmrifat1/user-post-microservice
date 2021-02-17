
Micro-service : from post-server to user-server
               (get)    http://localhost:3200/posts/single-user/2    -> find user details in post-server from user-server.
--------------------------------------------------------------------------------------------------------------------------
post server run: 3200
                 1.   (get) http://localhost:3200/posts     -> all post
        
                 2.   (get) http://localhost:3200/posts/2   -> single post

                 3.   (post) http://localhost:3200/posts/create   -> create post
                      body : {
                             "title": "title.",
                             "subTitle": "sub-title",
                             "userId": 3,
                             "content": "new contents"
                            }
                 4.  (put) http://localhost:3200/posts/10      -> edit post  

                    body : {
                             "title": "title.",
                             "subTitle": "sub-title",
                             "userId": 3,
                             "content": "new contents"
                            }
               5. (delete)  http://localhost:3200/posts/10    -> remove post
---------------------------------------------------------------------------------------------------

user server run : 3000
                 1.  (get) http://localhost:3000/users/   -> all users
                
                 2. (get) http://localhost:3000/users/2   -> single users
---------------------------------------------------------------------------------------------------


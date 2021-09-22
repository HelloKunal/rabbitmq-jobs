<h2>Install</h2>

```
PS C:\Users\pawar> docker run --name rabitmq -p 5672:5672 rabbitmq
```

<h2>Terminal</h2>

```
PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm init -y
Wrote to C:\Users\pawar\Code\JS\projects\rabbitmq\package.json:

{
  "name": "rabbitmq",
  "version": "1.0.0",
  "description": "",
    "test": "echo \"Error: no test specified\" && exit 1"   
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm install amqplib
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN rabbitmq@1.0.0 No description
npm WARN rabbitmq@1.0.0 No repository field.
added 16 packages from 11 contributors and audited 16 packages in 12.825s

1 package is looking for funding
  run `npm fund` for details

> rabbitmq@1.0.0 publish C:\Users\pawar\Code\JS\projects\rabbitmq
> node publisher.js "20"

Job sent successfully 20

> rabbitmq@1.0.0 publish C:\Users\pawar\Code\JS\projects\rabbitmq
> node publisher.js "30"

Job sent successfully 30

> rabbitmq@1.0.0 publish C:\Users\pawar\Code\JS\projects\rabbitmq
> node publisher.js "40"

Job sent successfully 40

> rabbitmq@1.0.0 consume C:\Users\pawar\Code\JS\projects\rabbitmq
> node consumer.js

waiting for messages...
Recieved job: 0
Recieved job: 20
Recieved job: 30
Recieved job: 40
```

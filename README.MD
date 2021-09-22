terminal
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

found 0 vulnerabilities
PS C:\Users\pawar\Code\JS\projects\rabbitmq>
                                             npm^C
PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm run publish 0

> rabbitmq@1.0.0 publish C:\Users\pawar\Code\JS\projects\rabbitmq
> node publisher.js "0"

Job sent successfully 0
Terminate batch job (Y/N)? y
PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm run consume

> rabbitmq@1.0.0 consume C:\Users\pawar\Code\JS\projects\rabbitmq
> node consumer.js

Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 0
Terminate batch job (Y/N)? y
PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm run consume

> rabbitmq@1.0.0 consume C:\Users\pawar\Code\JS\projects\rabbitmq
> node consumer.js

Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 0
Terminate batch job (Y/N)? y
PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm run consume

> rabbitmq@1.0.0 consume C:\Users\pawar\Code\JS\projects\rabbitmq
> node consumer.js

Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 0
Terminate batch job (Y/N)? y
PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm run consume

> rabbitmq@1.0.0 consume C:\Users\pawar\Code\JS\projects\rabbitmq
> node consumer.js

Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 50
Recieved job: 0
Terminate batch job (Y/N)? y
PS C:\Users\pawar\Code\JS\projects\rabbitmq> npm run consume

> rabbitmq@1.0.0 consume C:\Users\pawar\Code\JS\projects\rabbitmq
> node consumer.js

waiting for messages...
Recieved job: 0
```

Install
PS C:\Users\pawar> docker run --name rabitmq -p 5672:5672 rabbitmq
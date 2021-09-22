const amqp = require("amqplib");

connect();
async function connect() {

    try {
        const connection = await amqp.connect("amqp://localhost:5672")
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Recieved job: ${input.number}`);
            if(input.number == 50)
                channel.ack(message);
        })

        console.log("waiting for messages...")
    }
    catch(ex) {
        console.error(ex)
    }
}
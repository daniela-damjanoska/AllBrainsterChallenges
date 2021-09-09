let promptFrom = prompt("The message is from"),
    promptTo = prompt("The message is to"),
    promptSubject = prompt("Enter the subject"),
    promptMessage = prompt("Write your message"),
    inputFrom = document.querySelector("#from"),
    inputTo = document.querySelector("#to"),
    inputSubject = document.querySelector("#subject"),
    inputMsg = document.querySelector("#msg");

class EMail {
    constructor(from, to, subject, message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    alertMessage() {
        alert(
            `The message is From: ${this.from}, To: ${this.to}, the Subject is: ${this.subject}, and the Message is: ${this.message}`
        );
    }
}

const person = new EMail(promptFrom, promptTo, promptSubject, promptMessage);
person.alertMessage();

// document.body.innerHTML += `
//     <div>
//         <form>
//             <label for='from'>From:</label>
//             <input type='text' id='from' name='from' placeholder='The message is from...' value=${person.from}>
//             <label for='to'>To:</label>
//             <input type='text' id='to' name='to' placeholder='The message is sent to...' value=${person.to}>
//             <label for='subject'>Subject:</label>
//             <input type='text' id='subject' name='subject' placeholder='The subject of the message is...' value=${person.subject}>
//             <label for='msg'>Message:</label>
//             <textarea id='msg' name="msg" rows="5" placeholder='The message is...'>${person.message}</textarea>
//             <input type="submit" value='submit'>
//         </form>
//     </div>`

inputFrom.value = person.from;
inputTo.value = person.to;
inputSubject.value = person.subject;
inputMsg.value = person.message;

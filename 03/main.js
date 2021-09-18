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

    return (inputOne, inputTwo, inputThree, inputFour) {
        inputOne.value = this.from;
        inputTwo.value = this.to;
        inputThree.value = this.subject;
        inputFour.value = this.message;
    }
}

const person = new EMail(promptFrom, promptTo, promptSubject, promptMessage);
person.alertMessage();

// inputFrom.value = person.from;
// inputTo.value = person.to;
// inputSubject.value = person.subject;
// inputMsg.value = person.message;

person.return(inputFrom, inputTo, inputSubject, inputMsg)

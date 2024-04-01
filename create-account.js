// I did this prototype way. I accidentally read the directions improperly. This is my work. I had chatGPT convert from prototype version to property version. Also one issue I noticed about my code is that amount wasn't set to a beginning integer. That being amount = 0; Besides that this would work totally fine prototype way.

/*
function createAccount(pin, amount = 0) {
    this.pin = pin;
    this.amount = amount;
}

createAccount.prototype.checkBalance = function(pin) {
    if(pin !== this.pin) {
        return 'Invalid PIN.'
    } else {
        return `Current balance: $${this.amount}`
    }
};

createAccount.prototype.deposit = function(pin, amount){
    if(pin !== this.pin) {
        return 'Invalid PIN'
    } else {
        this.amount += amount;
        return `Succesfully deposited $${amount}. Current balance: $${this.amount}.`
    }
};

createAccount.prototype.withdraw = function(pin, amount) {
    if(pin !== this.pin) {
        return 'Invalid PIN'
    } else if (amount > this.amount) {
        return "Withdrawl amount exceeds account balance. Transaction cancelled."
    } else {
        this.amount -= amount;
        return `Succesfully withdrew $${amount}. Current balance: $${this.amount}.`
    }
};

createAccount.prototype.changePin = function(oldPin, newPin){
    if(oldPin !== this.pin) {
        return 'Invalid PIN'
    } else {
        this.pin = newPin;
        return "PIN successfully changed!"
    }
};
*/

//This isn't how it was done in Video 6 which is extremely weird. I'll have to ask my mentor for help regarding this specific question.
function createAccount(pin, amount = 0) {
    return {
        pin: pin,
        amount: amount,
        checkBalance: function(inputPin) {
            if (inputPin !== this.pin) {
                return 'Invalid PIN.';
            } else {
                return `$${this.amount}`;
            }
        },
        deposit: function(inputPin, depositAmount) {
            if (inputPin !== this.pin) {
                return 'Invalid PIN.';
            } else {
                this.amount += depositAmount;
                return `Succesfully deposited $${depositAmount}. Current balance: $${this.amount}.`;
            }
        },
        withdraw: function(inputPin, withdrawalAmount) {
            if (inputPin !== this.pin) {
                return 'Invalid PIN.';
            } else if (withdrawalAmount > this.amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            } else {
                this.amount -= withdrawalAmount;
                return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${this.amount}.`;
            }
        },
        changePin: function(oldPin, newPin) {
            if (oldPin !== this.pin) {
                return 'Invalid PIN.';
            } else {
                this.pin = newPin;
                return "PIN successfully changed!";
            }
        }
    };
}

module.exports = { createAccount };


module.exports = { createAccount };





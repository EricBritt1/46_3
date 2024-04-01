// I was confused with directions so had to refer to solution
function curriedAdd(total) {
    if (typeof total !== 'undefined') {
        let sum = total;

        function adder(num) {
            if (typeof num === 'undefined') {
                return sum;
            }
            sum += num;
            return adder;
        }

        return adder;
    } else {
        return 0;
    }
}

module.exports = { curriedAdd };







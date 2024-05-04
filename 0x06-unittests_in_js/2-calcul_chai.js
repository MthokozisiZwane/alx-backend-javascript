function calculateNumber(type, a, b) {
    let result;
    switch (type) {
        case 'SUM':
            result = Math.round(a) + Math.round(b);
            break;
        case 'SUBTRACT':
            result = Math.round(a) - Math.round(b);
            break;
        case 'DIVIDE':
            // Check for division by zero
            if (Math.round(b) === 0) {
                result = 'Error';
            } else {
                result = Math.round(a) / Math.round(b);
            }
            break;
        default:
            throw new Error('Invalid calculation type');
    }
    return result;
}

module.exports = calculateNumber;

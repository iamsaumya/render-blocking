// Script 3
console.log('Script 3 loaded');

// Add some delay to simulate processing
delay = Math.random() * 1000;
setTimeout(() => {
    console.log('Script 3 completed after ' + delay + 'ms');
}, delay);

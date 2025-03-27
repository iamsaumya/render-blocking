// Script 2
console.log('Script 2 loaded');

// Add some delay to simulate processing
delay = Math.random() * 1000;
setTimeout(() => {
    console.log('Script 2 completed after ' + delay + 'ms');
}, delay);

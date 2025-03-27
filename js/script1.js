// Script 1
console.log('Script 1 loaded');

// Add some delay to simulate processing
delay = Math.random() * 1000;
setTimeout(() => {
    console.log('Script 1 completed after ' + delay + 'ms');
}, delay);

const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

const primaryValid = !isNaN(parseInt(primaryPhone));
const secondaryValid = !isNaN(parseInt(secondaryPhone));

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);
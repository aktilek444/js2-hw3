const objects = [];

for (let i = 1; i <= 300; i++) {
    const obj = {
        name: `person${i}`,
        age: Math.floor(Math.random() * 100) + 1,
        address: `address${i}`  
    };

    objects.push(obj);
}

console.log(objects);
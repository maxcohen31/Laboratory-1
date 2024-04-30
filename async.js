/*
    Shop completed
*/


let stocks = {
    fruits: ["Strawberry", "Banana", "Blueberry"],
    liquids: ["Water", "Ice"],
    holder: ["Cup", "Stick", "Cone"],
    toppings: ["Chocolate", "Peanuts"]
}

let shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Shop closed!"))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.fruits[0]} selected`)
        
        await time(0);
        console.log("Production started...")

        await time(2000)
        console.log("Cutting fruit")

        await time(1000)
        console.log(`Adding ${stocks.liquids[0]} and ${stocks.liquids[1]}`)

        await time(1000)
        console.log("Machine started...")

        await time(2000)
        console.log(`${stocks.holder[0]} selected`)

        await time(3000)
        console.log(`${stocks.toppings[1]} added`)
    
        await time(2000)
        console.log("Serving ice cream!")
 
    } catch(error) {
        console.log("Customes has left", error)
    } finally {
        console.log("Call it a day!")
    }
}

kitchen();

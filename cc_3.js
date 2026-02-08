//array of customers with their name, email, and purchases
let customers = [
    {
        name: "Ariana Grande",
        email: "AG@music.com",
        purchases: ["Mic", "Headphones", "Laptop"]
    },
    {
        name: "Jungkook",
        email: "JK@music.com",
        purchases: ["Keyboard", "Mouse", "Monitor"]
    },
    {
        name: "Kali Uchis",
        email: "Kaliuchis88@music.com",
        purchases: ["Guitar", "Amplifier", "Cables"]
    }
]

//Remove First Customer
customers.shift()

//Added new customer
customers.push({
    name: "Benito Antonio",
    email: "BB@music.com",
    purchases: ["Mic", "Keyboard", "Guitar"]
})

//Update for Kali Uchis' email
customers[1].email = "KU@music.com"

//Update for Jungkook's purchases
customers[0].purchases.push("Webcam")


customers.forEach(customer => {
    console.log(`Customer Name: ${customer.name}`)
    console.log(`Customer Email: ${customer.email}`)
    console.log(`Purchases: ${customer.purchases.length}`)  
    console.log("---")
})
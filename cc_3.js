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

//Update for Kali Uchis' email
customers[2].email = "KU@music.com"
console.log(customers[2].email)

//Update for Jungkook's purchases
customers[1].purchases.push("Webcam")
console.log(customers[1].purchases.forEach(purchase => {
    console.log(purchase)}))
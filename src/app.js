const express = require("express")

const app = express()

const PORT = 8080

const frutasProducts = [
    {
        "id": 1,
        "nombre": "Berenjena",
        "precio": 2500,
        "cantidad": 10,
        "image": "image/image",
        "caracteristica":"es una hortaliza de color morado oscuro que se utiliza en muchas preparaciones culinarias.",
        "category":"verdura"
    },
    {
        "id": 2,
        "nombre": "Arandano",
        "precio": 5000,
        "cantidad": 8,
        "image": "image/image",
        "caracteristica":"es una fruta pequeña y dulce que se utiliza en postres y otros platos dulces.",
        "category":"fruta"
    },
    {
        "id": 3,
        "nombre": "Frutilla",
        "precio": 3000,
        "cantidad": 20,
        "image": "image/image",
        "caracteristica":"es una fruta dulce y aromática que se utiliza en postres y otros platos dulces.",
        "category":"fruta"
    },
    {
        "id": 4,
        "nombre": "Cereza",
        "precio": 5000,
        "cantidad": 20,
        "image": "image/image",
        "caracteristica":"es una fruta dulce y jugosa que se consume fresca o en conserva",
        "category":"fruta"
    },
    {
        "id": 5,
        "nombre": "Durazno",
        "precio": 2500,
        "cantidad": 15,
        "image": "image/image",        
        "caracteristica":"es una fruta jugosa y dulce que se consume fresca o en conserva.",
        "category":"fruta"
    },
    {
        "id": 6,
        "nombre": "Sandia",
        "precio": 3000,
        "cantidad": 20,
        "image": "image/image",
        "caracteristica":"es una fruta grande y refrescante que se consume principalmente en verano.",
        "category":"fruta"
    },
    {
        "id": 7,
        "nombre": "Tomate",
        "precio": 1500,
        "cantidad": 30,
        "image": "image/image",
        "caracteristica":"es una hortaliza muy versátil que se utiliza en muchas preparaciones culinarias.",
        "category":"verdura"
    },
    {
        "id": 8,
        "nombre": "Mango",
        "precio": 3000,
        "cantidad": 15,
        "image": "image/image",
        "caracteristica": "es una fruta tropical dulce y jugosa que se consume fresca o en conserva.",
        "category":"fruta"
    },
    {
        "id": 9,
        "nombre": "Pera",
        "precio": 2000,
        "cantidad": 25,
        "image": "image/image",
        "caracteristica":"es una fruta  dulce y jugosa que se consume tantp cruda como al horno.",
        "category":"fruta"

    },
    {
        "id": 10,
        "nombre": "Kiwi",
        "precio": 2000,
        "cantidad": 12,
        "image": "image/image",
        "caracteristica":"es una fruta  dulce y jugosa.",
        "category":"fruta"

    }
]

app.get("/", (req, res) => {
    res.send(frutasProducts)
})

app.get("/frutasProducts", (req, res) => {
    const limit = req.query.limit || frutasProducts.length;
    res.json(frutasProducts.slice(0, limit));
})

app.get("/frutasProducts/:id", (req, res) => {
    let idProduct = parseInt(req.params.id);
    let product = frutasProducts.find(u => u.id === idProduct)

    if (!product) return res.send({ error: 'Product not found' })
    res.send({ product })
})

app.get("/category", (req, res) => {
    const category = req.query.category;

    if (!category) {
        return res.send({ error: "Search in one category" })
    }
    const categoryFiltered = frutasProducts.filter(product => product.category === category)
    if (categoryFiltered.length === 0) {
        return res.send({ error: "Don't exist in this category" })

    }
    res.send({ frutasProducts: categoryFiltered })
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
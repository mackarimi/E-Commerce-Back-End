const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: [{ model: Product, as: "products" }],
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    // be sure to include its associated Products
    include: [{ model: Product, as: "products" }],
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((categoryData) => {
      res.json({ message: "Category created!" });
    })
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => {
      res.json({ message: "Category updated!" });
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) =>
      res.json({ message: "Category deleted!" })
    )
    .catch((err) => res.json(err));
});

module.exports = router;
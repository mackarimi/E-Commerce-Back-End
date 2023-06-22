const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        through: ProductTag,
        foreignKey: "tag_id",
      },
    ],
  }).then((tag) => {
    res.json(tag);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {
    // be sure to include its associated Product data
    include: [
      {
        model: Product,
        through: ProductTag,
        foreignKey: "tag_id",
      },
    ],
  }).then((tag) => {
    res.json(tag);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((tagData) => {
      console.log(tagData);
      res.json({ message: "Tag updated!" });
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((tag) => {
    res.json({ message: "Tag deleted!" });
  });
});

module.exports = router;

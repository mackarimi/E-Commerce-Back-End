const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
        as: 'products',
      },
    ],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        through: ProductTag,
        as: 'products',
      },
    ],
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json(tag);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => res.status(201).json(tag))
    .catch((err) => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((updatedTag) => {
      if (updatedTag[0] === 0) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json({ message: 'Tag updated!' });
    })
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
    .then((deletedTag) => {
      if (deletedTag === 0) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json({ message: 'Tag deleted!' });
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

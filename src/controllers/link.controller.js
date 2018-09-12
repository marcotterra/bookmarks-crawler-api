class LinkController {
  constructor(model) {
    this.Link = model;
  }

  findAll(req, res) {
    return this.Link.find({})
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  }

  findById(req, res) {
    return this.Link.findById(req.params.id)
      .then(response => {
        response === null
          ? res.status(404).json({ message: "Link not found" })
          : res.json(response);
      })
      .catch(error => {
        res.status(400).json({ message: error.message });
      });
  }

  create(req, res) {
    return this.Link.create(req.body)
      .then(response => {
        res.status(201).json(response);
      })
      .catch(error => {
        res.status(422).json({ message: error.message });
      });
  }

  update(req, res) {
    return this.Link.fidByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
      .then(response => {
        response === null
          ? res.status(404).json({ message: "Link not found" })
          : res.json(response);
      })
      .catch(error => {
        res.status(422).json({ message: error.message });
      });
  }

  remove(req, res) {
    return this.Link.fidByIdAndRemove(req.params.id)
      .then(response => {
        response === null
          ? res.status(404).json({ message: "Link not found" })
          : res.json(response);
      })
      .catch(error => {
        res.status(422).json({ message: error.message });
      });
  }
}

export default LinkController;

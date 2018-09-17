import { parseMetadata } from "../middleware/metadata-parser";

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

  async create(req, res) {
    const { image, publisher, title, description, logo } = await parseMetadata(
      req.body.url
    );

    const linkData = {
      image,
      publisher,
      title,
      description,
      logo,
      url: req.body.url
    };

    return this.Link.create(linkData)
      .then(response => {
        res.status(201).json(response);
      })
      .catch(error => {
        res.status(422).json({ message: error.message });
      });
  }

  update(req, res) {
    return this.Link.findByIdAndUpdate(req.params.id, req.body, {
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
    return this.Link.findByIdAndRemove(req.params.id)
      .then(response => {
        response === null
          ? res.status(404).json({ message: "Link not found" }) // eslint-disable-next-line
          : res.json({ message: `Link '${response.title}' was deleted with success` });
      })
      .catch(error => {
        res.status(422).json({ message: error.message });
      });
  }
}

export default LinkController;

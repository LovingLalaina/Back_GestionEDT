import Niveau from "../model/niveau.js";

export const addNiveau = async (req, res) => {
  try {
    const { idNiveau, nom,nombreEleve,groupe } = req.body;
    const newNiveau = new Niveau({
      idNiveau,
      nom,
      nombreEleve,
      groupe
    });
    const saveNiveau = await newNiveau.save();

    res.status(200).json({ saveNiveau });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteNiveau = async (req, res) => {
  try {
    const niveau = await Niveau.findByIdAndDelete(req.params.id);
    res.status(200).json({ niveau });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editNiveau = async (req, res) => {
  try {
    const niveau = await Niveau.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ niveau });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const niveauById = async (req, res) => {
  try {
    const niveau = await Niveau.findById(req.params.id);
    res.status(200).json({ niveau });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllNiveau = async (req, res) => {
  try {
    const getAllNiveau = await Niveau.find();
    res.status(200).json(getAllNiveau );
  } catch (error) {
    res.status(500).send(error);
  }
};

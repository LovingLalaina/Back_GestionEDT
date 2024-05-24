import Classe from "../model/classe.js";

export const addClasse = async (req, res) => {
  try {
    const { idClasse, capacite } = req.body;
    const newClasse = new Classe({
      idClasse,
      capacite,
    });
    const saveClasse = await newClasse.save();

    res.status(200).json({ saveClasse });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteClasse = async (req, res) => {
  try {
    const classe = await Classe.findByIdAndDelete(req.params.id);
    res.status(200).json({ classe });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editClasse = async (req, res) => {
  try {
    const classe = await Classe.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ classe });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const classeById = async (req, res) => {
  try {
    const classe = await Classe.findById(req.params.id);
    res.status(200).json({ classe });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllClasse = async (req, res) => {
  try {
    const getAllClasse = await Classe.find();
    res.status(200).json(getAllClasse );
  } catch (error) {
    res.status(500).send(error);
  }
};

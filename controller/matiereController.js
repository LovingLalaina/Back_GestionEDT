import matiere from "../model/matiere.js";

export const addMat = async (req, res) => {
  try {
    const { idMat, nom } = req.body;
    const newMat = new matiere({
      idMat,
      nom,
    });
    const saveMat = await newMat.save();

    res.status(200).json({ saveMat });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteMat = async (req, res) => {
  try {
    const mat = await matiere.findByIdAndDelete(req.params.id);
    res.status(200).json({ mat });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editMat = async (req, res) => {
  try {
    const mat = await matiere.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ mat });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const matById = async (req, res) => {
  try {
    const mat = await matiere.findById(req.params.id);
    res.status(200).json({ mat });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllMat = async (req, res) => {
  try {
    const getAllMat = await matiere.find();
    res.status(200).json(getAllMat );
  } catch (error) {
    res.status(500).send(error);
  }
};

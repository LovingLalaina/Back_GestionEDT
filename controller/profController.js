import Prof from "../model/professeur.js";

export const addProf = async (req, res) => {
  try {
    const { idProf, nom,prenom, preferences } = req.body;
    const newProf = new Prof({
      idProf,
      nom,
      prenom,
      preferences,
    });
    const saveProf = await newProf.save();
    res.status(200).json( saveProf);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteProf = async (req, res) => {
  try {
    const prof = await Prof.findByIdAndDelete(req.params.id);
    res.status(200).json({ prof });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editProf = async (req, res) => {
  try {
    const prof = await Prof.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ prof });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const profById = async (req, res) => {
  try {
    const prof = await Prof.findById(req.params.id);
    res.status(200).json({ prof });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllProf = async (req, res) => {
  try {
    const getAllProf = await Prof.find();
    res.status(200).json(getAllProf);
  } catch (error) {
    res.status(500).send(error);
  }
};

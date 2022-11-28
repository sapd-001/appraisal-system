const router = require("express").Router();

/**
 * Crate an evaluation
 */
router.post("/create", async (req, res, next) => {
  const newEvaluation = await evaluationModel.create(req.body);
  res.status(200).json({
    status: "success",
    data: newEvaluation,
  });
});

/**
 * Get all evaluations
 */

router.get("/all", async (req, res, next) => {
  const evaluations = await evaluationModel.find({});
  res.status(200).json({
    status: "success",
    data: evaluations,
  });
});

/**
 * Get an evaluation by id
 */
router.get("/:id", async (req, res, next) => {
  const evaluation = await evaluationModel.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: evaluation,
  });
});

/**
 * Update an evaluation by id
 */
router.put("/:id", async (req, res, next) => {
  const evaluation = await evaluationModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: evaluation,
  });
});

/**
 * Delete an evaluation by id
 */
router.delete("/:id", async (req, res, next) => {
  const evaluation = await evaluationModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: evaluation,
  });
});

module.exports = router;

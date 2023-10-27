module.exports.api = async (res, action) => {
  try {
    await action();
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};

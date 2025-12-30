const home = (req, res) => {
  res.json({ message: "Welcome to the Express MVC Server" });
};

const about = (req, res) => {
  res.json({ message: "This is a simple Express MVC backend" });
};

const contact = (req, res) => {
  res.json({
    email: "contact@example.com",
    phone: "+251-900-000-000",
  });
};

const getTime = (req, res) => {
  res.json({ time: new Date().toLocaleTimeString() });
};

const echoData = (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({
      error: "name and message are required",
    });
  }

  res.json({
    received: { name, message },
  });
};

module.exports = {
  home,
  about,
  contact,
  getTime,
  echoData,
};

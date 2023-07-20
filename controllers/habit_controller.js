const Habit = require('../models/habits');

// Controller action to handle habit creation
module.exports.createHabit = async function(req,res){
  try {
    let days = {
      one:"none",
      two:"none",
      three:"none",
      four:"none",
      five:"none",
      six:"none",
      seven:"none",
  }
  const newHabit = await Habit.create({
      habitName : req.body.habitName,
      best:req.body.best,
      streak:req.body.streak,   
      date:Date(),
      time:req.body.time,
      frequency:req.body.frequency,
      days:days,
  });

  console.log(newHabit);
  return res.redirect('back');

  } catch (error) {
    console.log("error in creating habit",error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteHabit = async function (req, res) {
  try {
    let id = req.query.id;
    await Habit.findByIdAndDelete(id);
    return res.redirect('back');
  } catch (err) {
    console.log('Error in deleting Habit', err);
    return;
  }
};

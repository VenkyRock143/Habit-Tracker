const Habit = require('../models/habits');

module.exports.home = async function(req,res){
  try {
    const habits= await Habit.find({});
    res.render('_home',{
      title:'habit_tracker',
      habit_list: habits
    })
  } catch (err) {
    console.log('error in finding the data', err);
    res.status(500).send('error in finding the home data');
  }
}

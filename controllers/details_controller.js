const Habit = require('../models/habits')

//details controller to display the details of the habits
module.exports.details = async function(req,res){
    try {
        const habits = await Habit.find({});
        return res.render('details',{
            title:"Habit Tracker",
            habit_list: habits
        });
    } catch (error) {
        console.log("error in fecting the habits",error);
        return res.status(500).send("Internal Server Error")
    }
} 

//This code is used to updated the status of the habits
module.exports.updateHabit = async function (req, res) {
  try {
    const id = req.query.id;
    const day = req.query.day;
    const val = req.query.val;

    // finding the habit
    const habit = await Habit.findById(id);
    if (!habit) {
      console.log('Habit not found');
      return;
    }

    for (let prop in habit.days) {
      if (prop === day) {
        if (val === 'none') {
          habit.days[day] = 'yes';
          habit.streak++;
        } else if (val === 'yes') {
          habit.days[day] = 'no';
          habit.streak--;
        } else {
          habit.days[day] = 'none';
        }
      }
    }

    // updating that found habit
    await habit.save();
    return res.redirect('back');
  } catch (error) {
    console.log('Error in updating habit', error);
    return res.status(500).send('Internal Server Error');
  }
};

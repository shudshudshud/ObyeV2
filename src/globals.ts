// Storing user data
export const userDataStorageKey: string = "user-data";


// Streak classifications
export const dietDrinksStreakClassification: StreakClassification = 
{
    maintype: StreakType.Diet,
    subtype: StreakSubtype.Drink
}

export const dietFoodStreakClassification: StreakClassification = 
{
    maintype: StreakType.Diet,
    subtype: StreakSubtype.Food
}

export const exerciseStrengthStreakClassification: StreakClassification = 
{
    maintype: StreakType.Exercise,
    subtype: StreakSubtype.Strength
}


export const exerciseEnduranceStreakClassification: StreakClassification = 
{
    maintype: StreakType.Exercise,
    subtype: StreakSubtype.Endurance
}



// Frequencies
export const dailyFrequencyThreeWeeks: FrequencyInfo = 
{
    frequencyType: FrequencyType.Daily,
    cyclesToComplete: 21,
    instancesPerWeek: 7
}

// Frequencies
export const weeklyTwiceFrequency5Weeks: FrequencyInfo = 
{
    frequencyType: FrequencyType.Weekly,
    cyclesToComplete: 3,
    instancesPerWeek: 2
}




// Actual streaks

export const runStreak: Streak = 
{
  uid: 0,
  type: exerciseEnduranceStreakClassification,
  goalDescription: "Walk",
  frequencyInfo: dailyFrequencyThreeWeeks,
  imageURL: "assets/img/walking.png"
}

export const liftStreak: Streak = 
{
  uid: 1,
  type: exerciseStrengthStreakClassification,
  goalDescription: "Do squats",
  frequencyInfo: dailyFrequencyThreeWeeks,
  imageURL: "assets/img/squats.png"
}

export const miloStreak: Streak = 
{
  uid: 2,
  type: dietDrinksStreakClassification,
  goalDescription: "No milo",
  frequencyInfo: dailyFrequencyThreeWeeks,
  imageURL: "assets/img/milo.png"
}

export const oilyFoodStreak: Streak = 
{
  uid: 3,
  type: dietFoodStreakClassification,
  goalDescription: "No oily food",
  frequencyInfo: dailyFrequencyThreeWeeks,
  imageURL: "assets/img/oilyfood.png"
}

export const sweetDrinksStreak: Streak = 
{
  uid: 4,
  type: dietFoodStreakClassification,
  goalDescription: "No sweet drinks",
  frequencyInfo: dailyFrequencyThreeWeeks,
  imageURL: "assets/img/milo.png"
}

export const waterStreak: Streak = 
{
  uid: 5,
  type: dietFoodStreakClassification,
  goalDescription: "Drink 6 glasses of water",
  frequencyInfo: dailyFrequencyThreeWeeks,
  imageURL: "assets/img/water.png"
}

// Streaks to populate with
export const allStreaks: Streak[] = [runStreak, liftStreak, miloStreak, oilyFoodStreak, sweetDrinksStreak, waterStreak];




// Streak for a particular user
export const testUserNoMiloStreak: UserStreak = 
{
    streak: miloStreak,
    cyclesCompleted: 0,
    numberCompletedThisWeek: -1,
    startDate: new Date(),
    status: StreakStatus.Active
}





export const testBodyData: BodyData = 
{
    height: 170,
    weight: 70

}

export const testUserData: UserData = 
{
    streaks: [testUserNoMiloStreak],
    bodyData: testBodyData
}


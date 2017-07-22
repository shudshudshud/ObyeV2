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
export const dailyFrequencyTenWeeks: FrequencyInfo = 
{
    frequencyType: FrequencyType.Daily,
    cyclesToComplete: 10,
    instancesPerWeek: 7
}

// Frequencies
export const weeklyTwiceFrequency5Weeks: FrequencyInfo = 
{
    frequencyType: FrequencyType.Weekly,
    cyclesToComplete: 5,
    instancesPerWeek: 2
}




// Actual streaks

export const runStreak: Streak = 
{
  uid: 0,
  type: exerciseEnduranceStreakClassification,
  goalDescription: "Run 32km WITHOUT TRAINING",
  frequencyInfo: dailyFrequencyTenWeeks,
}

export const liftStreak: Streak = 
{
  uid: 1,
  type: exerciseStrengthStreakClassification,
  goalDescription: "Lift 100kg with your BARE HANDS",
  frequencyInfo: dailyFrequencyTenWeeks,
}

export const miloStreak: Streak = 
{
  uid: 2,
  type: dietDrinksStreakClassification,
  goalDescription: "No MILO",
  frequencyInfo: dailyFrequencyTenWeeks,
}

export const oilyFoodStreak: Streak = 
{
  uid: 3,
  type: dietFoodStreakClassification,
  goalDescription: "No oily food",
  frequencyInfo: weeklyTwiceFrequency5Weeks,
}

export const friedChickenFoodStreak: Streak = 
{
  uid: 4,
  type: dietFoodStreakClassification,
  goalDescription: "No fried chicken",
  frequencyInfo: weeklyTwiceFrequency5Weeks,
}

export const starvationFoodStreak: Streak = 
{
  uid: 5,
  type: dietFoodStreakClassification,
  goalDescription: "Starve yourself",
  frequencyInfo: weeklyTwiceFrequency5Weeks,
}





// Streaks to populate with
export const allStreaks: Streak[] = [runStreak, liftStreak, miloStreak, oilyFoodStreak, friedChickenFoodStreak, starvationFoodStreak];




// Streak for a particular user
export const testUserStreak: UserStreak = 
{
    streak: liftStreak,
    cyclesCompleted: 5,
    numberCompletedThisWeek: -1,
    startDate: new Date(2017, 6, 20, 10, 10, 10, 10),
    status: StreakStatus.Active
}

export const testBodyData: BodyData = 
{
    height: 170,
    weight: 70

}

export const testUserData: UserData = 
{
    streaks: [testUserStreak],
    bodyData: testBodyData
}


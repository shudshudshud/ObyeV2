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
  goalDescription: "Walk",
  frequencyInfo: dailyFrequencyTenWeeks,
}

export const liftStreak: Streak = 
{
  uid: 1,
  type: exerciseStrengthStreakClassification,
  goalDescription: "Do squats",
  frequencyInfo: dailyFrequencyTenWeeks,
}

export const miloStreak: Streak = 
{
  uid: 2,
  type: dietDrinksStreakClassification,
  goalDescription: "No milo",
  frequencyInfo: dailyFrequencyTenWeeks,
}

export const oilyFoodStreak: Streak = 
{
  uid: 3,
  type: dietFoodStreakClassification,
  goalDescription: "No oily food",
  frequencyInfo: weeklyTwiceFrequency5Weeks,
}

export const sweetDrinksStreak: Streak = 
{
  uid: 4,
  type: dietFoodStreakClassification,
  goalDescription: "No sweet drinks",
  frequencyInfo: weeklyTwiceFrequency5Weeks,
}


// Streaks to populate with
export const allStreaks: Streak[] = [runStreak, liftStreak, miloStreak, oilyFoodStreak, sweetDrinksStreak];




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


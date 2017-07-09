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
export const sweetDrinksStreak: Streak = 
{
  uid: 1,
  type: dietDrinksStreakClassification,
  goalDescription: "No sweet drinks",
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

// Streaks to populate with
export const allStreaks: Streak[] = [sweetDrinksStreak, miloStreak, oilyFoodStreak];




// Streak for a particular user
export const testUserStreak: UserStreak = 
{
    streak: sweetDrinksStreak,
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


// Storing user data
export const userDataStorageKey: string = "user-data";

export const dietDrinksStreakClassification: StreakClassification = 
{
    maintype: StreakType.Diet,
    subtype: StreakSubtype.Drink
}

export const dailyFrequencyTenWeeks: FrequencyInfo = 
{
    frequencyType: FrequencyType.Daily,
    cyclesToComplete: 10,
    instancesPerWeek: 7
}

export const sweetDrinksStreak: Streak = 
{
  uid: 1,
  type: dietDrinksStreakClassification,
  goalDescription: "No sweet drinks",
  frequencyInfo: dailyFrequencyTenWeeks,
}


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


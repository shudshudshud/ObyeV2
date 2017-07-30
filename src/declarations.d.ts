/*
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.

  A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
  provide their own type declarations.

  To learn more about using third party libraries in an Ionic app, check out the docs here:
  http://ionicframework.com/docs/v2/resources/third-party-libs/

  For more info on type definition files, check out the Typescript docs here:
  https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
*/
declare module '*';
// declare module 'userdata'

declare const enum StreakType { Exercise, Diet }
declare const enum StreakSubtype { Strength, Endurance, Food,  Drink }
declare const enum FrequencyType { Weekly, Daily }
declare const enum StreakStatus { Active, Failed, Succeeded }

declare interface StreakClassification {
  // Is this an Exercise or Diet streak?
  maintype: StreakType,
  // What kind of ex/diet streak is this - what is it targeting?
  subtype: StreakSubtype
}

declare interface FrequencyInfo {
  // Weekly or daily streak?
  frequencyType: FrequencyType,
  // For daily streaks: this is the number of days to complete
  // For weekly streaks: this is the number of weeks to complete
  cyclesToComplete: number,
  // If this is a weekly streak, this tells us the number
  // of times that we have to succeed per week
  // For daily streaks, this is set to 7, but ignored.
  instancesPerWeek: number
}

// Data referring to a single type of streak
declare interface Streak {
  // Unique identifier of this streak
  uid: number,
  // What classification of streak is this?
  type: StreakClassification,
  // A textual description of what need to be achieved
  goalDescription: string,
  // On what timescale will this streak be considered?
  frequencyInfo:  FrequencyInfo,
  // What image to display
  imageURL: string,
}

// Information about how well a user is doing in a streak
declare interface UserStreak {
  // Reference to a particular streak - commented out so we can store entire streak
  // streakUid: number,
  // Full streak object for this user
  streak: Streak,
  // Is this a streak that has been completed, failed, or actively being done?
  status: StreakStatus,
  // How many cycles of this streak are already completed (daily = how many days done, weekly = how many weeks done)
  cyclesCompleted: number,
  // If this is weekly - how many times have we completed it this week. Otherwise, irrelevant.
  numberCompletedThisWeek: number,
  // Exactly what date this streak was started.
  startDate: Date,
  // Reps, if this is an exercise
  reps: number
}

declare interface BodyData {
  weight: number,
  height: number,
}

// Every user has a list of streaks that 
declare interface UserData {
  streaks: UserStreak[],
  bodyData: BodyData
}


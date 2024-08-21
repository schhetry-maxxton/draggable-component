export interface IRoomAvailability {
    roomId : number,
    stayDateFrom: Date,
    stayDateTo:  Date,
    arrivalDays: string[],
    departureDays: string[],
    minStay: number,
    maxStay: number,
}

type Semester =
    "SP20" | "FA20" | "SP21" | "FA21" | "SP22" | "FA22" | "SP23" | "FA23"

export type EventGuestAdult = {
    name: string

}

export type EventGuestChild = {
    name: string
}

export type EventGuestGuardian = {
    name: string
}

export type GakugaiEvent = {
    campus: string,
    name: string,
    creationDate: Date,
    eventDate: Date,
    forChildren: boolean,
    semester: Semester,
    applicantCount: number,
    participantCount: number
    particpants: EventGuestChild[] | EventGuestAdult[]
    guardians: EventGuestGuardian[] | null
}
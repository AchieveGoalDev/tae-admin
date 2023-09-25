import { writable } from "svelte/store";
import { handleAPIDataPost } from "$lib/api/RESTFunctions";
import type { TextbookFetch, Textbook } from "$lib/data/textDefs";
import type { CourseFetch, Course } from "$lib/data/courseDefs";
import type { TimeSlot, TimeSlotFetch } from "$lib/data/scheduleDefs";

type SemesterMetaData = {
  [key: string]: [string, string];
};

export type CampusObject = {
  tag: string;
  label: string;
};

export const campuses: CampusObject[] = [
  {
    tag: "HAKUSAN",
    label: "白山",
  },
  {
    tag: "KAWAGOE",
    label: "川越",
  },
  {
    tag: "ITAKURA",
    label: "板倉",
  },
  {
    tag: "WELLB",
    label: "WELLB",
  },
  {
    tag: "INIAD",
    label: "INIAD",
  },
];

export type DataContext = {
  selectedCampus: string | null;
  selectedSemester: string | null;
  selectedYear: string | null;
  textbooks: Textbook[] | null;
  courses: Course[] | null;
  timeslots: TimeSlot[] | null;
  students: any;
};

export type MetaData = {
  campuses: string[];
  years: string[];
  semesterMetadata: SemesterMetaData | null;
};

const metaData: MetaData = {
  campuses: [],
  years: [],
  semesterMetadata: null,
};

const dataContext: DataContext = {
  students: null,
  selectedCampus: null,
  selectedSemester: null,
  selectedYear: null,
  textbooks: null,
  courses: null,
  timeslots: null,
};

export function sortByCampus(campus: CampusObject, dataSet: any[]) {
  const returnArray = dataSet.filter((item) => {
    return item.campus === campus.tag;
  });

  return returnArray;
}

export async function fetchSemesterMetadata() {
  try {
    const dbRes: SemesterMetaData = await handleAPIDataPost(
      "META",
      "GET_SEMESTER"
    );

    const data = {
      //@ts-ignore: unnecessary
      years: Object.keys(dbRes.data),
      meta: dbRes.data,
    };
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchTextData() {
  try {
    const dbRes: TextbookFetch = await handleAPIDataPost("TEXT", "GET_ALL");

    if (dbRes !== undefined) {
      return dbRes;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchCourseData() {
  try {
    const dbRes: CourseFetch = await handleAPIDataPost("COURSE", "GET_ALL");

    if (dbRes !== undefined) {
      return dbRes;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchSlotData() {
  try {
    const dbRes: TimeSlotFetch = await handleAPIDataPost("SLOT", "GET_ALL");

    if (dbRes !== undefined) {
      return dbRes;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchStudentData() {
  try {
    const dbRes: any = await handleAPIDataPost("STUDENT", "GET_ALL");

    if (dbRes !== undefined) {
      return dbRes;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function updateSlotBatch(payload: any) {
  try {
    const dbRes: any = await handleAPIDataPost("SLOT", "BATCH_UPDATE", payload);
    return dbRes;
  } catch (err) {
    console.log(err);
  }
}

export const meta = writable(metaData);
export const context = writable(dataContext);

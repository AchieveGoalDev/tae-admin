class Course {
  campus: string;
  type: string;
  text: string;
  change: boolean;
}

class TestHistory {
  toeic: string;
  toefl: string;
  ielts: string;
  others: string;
}

class Personal {
  number: string;
  gender: string;
  name: string;
  furigana: string;
  first: string;
  last: string;
  post: string;
  address: string;
  status: string;
  year: string;
  major: string;
  schoolMail: string;
  personalMail: string;
  phone: string;
}

class Misc {
  comment: string;
  found: string;
}

class Applicant {
  date: Date;
  course: Course;
  personal: Personal;
  scheduleData: string;
  misc: Misc;
}

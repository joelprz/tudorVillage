import delay from './delay';

const subjects = [
  {
    id:"Accounting",
    title: "Accounting",
    tutors: ["8111313"]
  },
  {
    id:"Algebra-1",
    title: "Algebra 1",
    tutors: ["7847491", "8493257", "8490923", "7890423"]
  },
  {
    id:"Biology",
    title: "Biology",
    tutors: ["8493257"]
  },
  {
    id:"Chemistry",
    title: "Chemistry",
    tutors: ["8467660", "7681719", "8111313"]
  },
  {
    id:"Finance",
    title: "Finance",
    tutors: ["7550116"]
  },
  {
    id:"Geometry",
    title: "Geometry",
    tutors: ["8111313", "7550116"]
  },
  {
    id:"Literature",
    title: "Literature",
    tutors: ["8490923", "8111313", "7550116"]
  },
  {
    id:"Philosophy",
    title: "Philosophy",
    tutors: ["7847491", "8493257", "7681719", "8490923", "9688", "7890423"]
  },
  {
    id:"Reading",
    title: "Reading",
    tutors: ["7681719", "7890423"]
  },
  {
    id:"Spanish",
    title: "Spanish",
    tutors: ["8467660", "7681719", "8490923", "8111313"]
  },
  {
    id:"Trigonometry",
    title: "Trigonometry",
    tutors: ["8467660", "8490923", "9688", "7890423"]
  },
  {
    id:"Writing",
    title: "Writing",
    tutors: ["8140762", "7550116"]
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (subject) => {
  return replaceAll(subject.title, ' ', '-');
};

class SubjectApi {
  static getAllSubjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], subjects));
      }, delay);
    });
  }

  static saveSubject(subject) {
    subject = Object.assign({}, subject);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minSubjectTitleLength = 1;
        if (subject.title.length < minSubjectTitleLength) {
          reject(`Title must be at least ${minSubjectTitleLength} characters.`);
        }

        if (subject.id) {
          const existingSubjectIndex = subjects.findIndex(a => a.id == subject.id);
          subjects.splice(existingSubjectIndex, 1, subject);
        } else {
          subject.id = generateId(subject);
          subjects.push(subject);
        }

        resolve(subject);
      }, delay);
    });
  }

  static deleteSubject(subjectId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSubjectToDelete = subjects.findIndex(subject => {
          subject.subjectId == subjectId;
        });
        subjects.splice(indexOfSubjectToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default SubjectApi;
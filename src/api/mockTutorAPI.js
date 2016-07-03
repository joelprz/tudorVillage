import delay from './delay';

const tutors = [
  {
    id: 7847491,
    name: "John E.",
    title: "Awesome Math and Test Prep Tutor",
    description: "I've been tutoring and teaching mathematics and test prep for 15 years. I've taught math and test prep on two continents. I have two years classroom experience at the high school level, so I know exactly what high school teachers expect. I taught Algebra 1 and 2...",
    distance: 3.9,
    city: "Chicago",
    state: "IL",
    zip: "60640",
    rate: 65,
    isOnline: true,
    subjects: ["Algebra 1", "Philosophy"],
    ratingCount: 100,
    starRating: 4.9,
    rank: 44
  },
  {
    id: 8493257,
    name: "Aaron B.",
    title: "Social Sciences, Study Skills, and Testing Skills",
    description: "As a trained clinician with a Master's in clinical psychology, emphasizing youth development, I bring diverse experiences to education. Having worked with youth who have various educational and behavioral challenges, I work with each individual student on their individualized...",
    distance: 6.6,
    city: "Chicago",
    state: "IL",
    zip: "60626",
    rate: 40,
    isOnline: false,
    subjects: ["Philosophy", "Algebra 1", "Biology"],
    ratingCount: 9,
    starRating: 4.6,
    rank: 85
  },
  {
    id: 8467660,
    name: "Elizabeth F.",
    title: "Certified Teacher Offering Mathematics Tutoring",
    description: "Since graduating summa cum laude in mathematics education, my passion for teaching math has only grown stronger.  I have two and a half years experience teaching high school math and three and a half years experience tutoring college math. Some of my favorite moments...",
    distance: 1.6,
    city: "Chicago",
    state: "IL",
    zip: "60618",
    rate: 60,
    isOnline: true,
    subjects: ["Spanish", "Trigonometry", "Chemistry"],
    ratingCount: 48,
    starRating: 5,
    rank: 76
  },
  {
    id: 7681719,
    name: "Barbara J H.",
    title: "Award Winning Educator, Published  Tutor, Highly Effective Tutor",
    description: "Hello, I am Barbara J., a former high school English teacher who has a law degree that is quite helpful to me in many ways, even in tutoring. I taught all levels of juniors and seniors for 10 plus years; this included students who took Advanced Placement English...",
    distance: 6,
    city: "River Forest",
    state: "IL",
    zip: "60305",
    rate: 70,
    isOnline: true,
    subjects: ["Chemistry", "Reading", "Philosophy", "Spanish"],
    ratingCount: 144,
    starRating: 5,
    rank: 91
  },
  {
    id: 8490923,
    name: "Emily W.",
    title: "English Tutor specializing in ESL",
    description: "I am interested in tutoring students at all levels in English (reading, writing and comprehension) and in test preparation such as ACT test prep and TOEFL.  I co-owned a language school in Prague, Czech Republic with my husband and taught writing and TOEFL at Northern...",
    distance: 6,
    city: "Chicago",
    state: "IL",
    zip: "60645",
    rate: 30,
    isOnline: false,
    subjects: ["Trigonometry", "Algebra 1", "Spanish", "Literature", "Philosophy"],
    ratingCount: 19,
    starRating: 5,
    rank: 73
  },
  {
    id: 9688,
    name: "Evan S.",
    title: "Talented Math,  Music Tutor",
    description: "Greetings, My name is Evan. I was a student at the University of Illinois at Chicago studying Biomedical Engineering. I graduated from Whitney M. Young high school, one of the leading high schools in Chicago. I was a part of their Academic Decathlon team, a...",
    distance: 3.6,
    city: "Chicago",
    state: "IL",
    zip: "60610",
    rate: 50,
    isOnline: true,
    subjects: ["Philosophy", "Trigonometry"],
    ratingCount: 83,
    starRating: 4.9,
    rank: 75
  },
  {
    id: 8111313,
    name: "Kathleen K.",
    title: "Term Paper, Thesis and Dissertation Writer",
    description: "Dear Prospective Students, As your dedicated tutor, I am excited to help you learn to write well and to express your ideas clearly and concisely. I have done so for students from grammar school through doctoral level programs for the past 25+ years as a teacher,...",
    distance: 5.8,
    city: "Lincolnwood",
    state: "IL",
    zip: "60712",
    rate: 46,
    isOnline: false,
    subjects: ["Chemistry", "Spanish", "Accounting", "Literature", "Geometry"],
    ratingCount: 20,
    starRating: 4.9,
    rank: 37
  },
  {
    id: 7890423,
    name: "Jordan V.",
    title: "Physics and Math Tutor for All Types of Learners",
    description: "Discover how you too can think like a physicist! As a student myself, I realize that physics and mathematics can often appear as the most daunting of school subjects.  And the puzzles posed by such demand a knack for creativity and the resolve for intense contemplation...",
    distance: 4.8,
    city: "Chicago",
    state: "IL",
    zip: "60640",
    rate: 55,
    isOnline: true,
    subjects: ["Trigonometry", "Algebra 1", "Reading", "Philosophy"],
    ratingCount: 318,
    starRating: 4.9,
    rank: 75
  },
  {
    id: 8140762,
    name: "Elizabeth M.",
    title: "Be Your Best Writer and Thinker",
    description: "Let me show you how to be your very best. Before committing, let's set up a brief meet and greet, to see if we are a good fit. Charges would only begin at an actual tutoring session. I have extensive tutoring experience with college students, as well as high school...",
    distance: 0.8,
    city: "Chicago",
    state: "IL",
    zip: "60647",
    rate: 35,
    isOnline: true,
    subjects: ["Writing"],
    ratingCount: 7,
    starRating: 4.4,
    rank: 52
  },
  {
    id: 7550116,
    name: "Stephen E.",
    title: "Stephen",
    description: "Hi!  My name is Stephen and teaching is what I love to do.  I have over six years' experience tutoring and teaching students of all ages, and I'm always ready for a new assignment. I have done most of my work in the United States through the Huntington Learning...",
    distance: 1,
    city: "Chicago",
    state: "IL",
    zip: "60618",
    rate: 40,
    isOnline: false,
    subjects: ["Writing", "Literature", "Geometry", "Finance"],
    ratingCount: 34,
    starRating: 4.6,
    rank: 49
  }
];

const generateId = (tutor) => {
  const rangeCeil = 999999;
  return (Math.floor(Math.random() * rangeCeil) + 1) + '-' + (Math.floor(Math.random() * rangeCeil) + 1);
};

class TutorApi {
  static getAllTutors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], tutors));
      }, delay);
    });
  }

  static saveTutor(tutor) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minTutorNameLength = 3;
        if (tutor.name.length < minTutorNameLength) {
          reject(`Name must be at least ${minTutorNameLength} characters.`);
        }

        if (tutor.id) {
          const existingTutorIndex = tutors.findIndex(a => a.id == tutor.id);
          tutors.splice(existingTutorIndex, 1, tutor);
        } else {
          tutor.id = generateId(tutor);
          tutors.push(tutor);
        }

        resolve(Object.assign({}, tutor));
      }, delay);
    });
  }

  static getTutorById(tutorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const tutor = tutors.find(function(tutor){  
          return tutor.id === tutorId;
        });

        resolve(Object.assign([], tutor));
      }, delay);
    });
  }

  static deleteTutor(tutorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTutorToDelete = tutors.findIndex(tutor => {
          tutor.tutorId == tutorId;
        });
        tutors.splice(indexOfTutorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TutorApi;
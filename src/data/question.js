// questions.js

// Full bank of 50 GTE questions
const allQuestions = [
  {
    question: "What does GTE stand for?",
    options: [
      "Global Training Exam",
      "Graduate Training Examination",
      "General Technical Evaluation",
      "Global Talent Exam"
    ],
    answer: "Graduate Training Examination"
  },
  {
    question: "Which skill is most important for effective teamwork?",
    options: ["Leadership", "Communication", "Coding", "Independence"],
    answer: "Communication"
  },
  {
    question: "What is the primary purpose of the GTE?",
    options: [
      "To test driving ability",
      "To evaluate graduate employability skills",
      "To certify academic transcripts",
      "To replace university exams"
    ],
    answer: "To evaluate graduate employability skills"
  },
  {
    question: "Which of these is a soft skill?",
    options: ["Problem-solving", "C++ Programming", "Typing Speed", "Data Entry"],
    answer: "Problem-solving"
  },
  {
    question: "Which of the following best describes critical thinking?",
    options: [
      "Repeating known facts",
      "Following instructions without question",
      "Analyzing and evaluating information logically",
      "Memorizing data"
    ],
    answer: "Analyzing and evaluating information logically"
  },
  {
    question: "Which Microsoft Office tool is best suited for data analysis?",
    options: ["Word", "PowerPoint", "Excel", "Outlook"],
    answer: "Excel"
  },
  {
    question: "What does ICT stand for?",
    options: [
      "Information and Communication Technology",
      "International Computer Training",
      "Internet Communication Tool",
      "Integrated Coding Technique"
    ],
    answer: "Information and Communication Technology"
  },
  {
    question: "In communication, feedback means?",
    options: [
      "Repeating the message",
      "Response from the receiver",
      "Sending more details",
      "Silence"
    ],
    answer: "Response from the receiver"
  },
  {
    question: "Which of these is an example of time management?",
    options: [
      "Multitasking without priorities",
      "Creating a daily schedule",
      "Ignoring deadlines",
      "Checking social media frequently"
    ],
    answer: "Creating a daily schedule"
  },
  {
    question: "What is the first step in problem-solving?",
    options: [
      "Brainstorm solutions",
      "Identify the problem",
      "Select an option",
      "Implement a solution"
    ],
    answer: "Identify the problem"
  },
  {
    question: "Which is an example of non-verbal communication?",
    options: ["Speech", "Gestures", "Phone call", "Email"],
    answer: "Gestures"
  },
  {
    question: "Which is an essential element of leadership?",
    options: ["Confidence", "Height", "Wealth", "Silence"],
    answer: "Confidence"
  },
  {
    question: "Which file format is commonly used for presentations?",
    options: ["DOCX", "XLSX", "PPTX", "PDF"],
    answer: "PPTX"
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Central Programming Utility",
      "Computer Personal Unit",
      "Central Peripheral Utility"
    ],
    answer: "Central Processing Unit"
  },
  {
    question: "Which of these is a cloud storage service?",
    options: ["Dropbox", "Notepad", "Excel", "Photoshop"],
    answer: "Dropbox"
  },
  {
    question: "Which of these is a search engine?",
    options: ["Google", "WhatsApp", "Zoom", "Slack"],
    answer: "Google"
  },
  {
    question: "What does PDF stand for?",
    options: [
      "Portable Document Format",
      "Public Data File",
      "Program Data Folder",
      "Printed Document Form"
    ],
    answer: "Portable Document Format"
  },
  {
    question: "Which of the following is NOT a web browser?",
    options: ["Chrome", "Firefox", "Safari", "Windows"],
    answer: "Windows"
  },
  {
    question: "What is plagiarism?",
    options: [
      "Using your own words",
      "Citing references",
      "Copying others' work without credit",
      "Writing an original paper"
    ],
    answer: "Copying others' work without credit"
  },
  {
    question: "Which shortcut copies selected text in Windows?",
    options: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    answer: "Ctrl + C"
  },
  {
    question: "Which of the following is an operating system?",
    options: ["Linux", "Photoshop", "Oracle", "MS Word"],
    answer: "Linux"
  },
  {
    question: "Which is an example of interpersonal skill?",
    options: ["Teamwork", "Typing", "Programming", "Filing"],
    answer: "Teamwork"
  },
  {
    question: "Which communication channel is fastest?",
    options: ["Letter", "Email", "Phone Call", "Report"],
    answer: "Phone Call"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Main Link"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which key is used to undo an action in Windows?",
    options: ["Ctrl + Z", "Ctrl + X", "Ctrl + A", "Ctrl + Y"],
    answer: "Ctrl + Z"
  },
  {
    question: "What is the main function of antivirus software?",
    options: [
      "Speed up internet",
      "Protect against malware",
      "Backup data",
      "Create documents"
    ],
    answer: "Protect against malware"
  },
  {
    question: "What does SWOT stand for?",
    options: [
      "Strengths, Weaknesses, Opportunities, Threats",
      "System Work Order Tracking",
      "Software With Online Training",
      "Strategic Workforce Operations Tool"
    ],
    answer: "Strengths, Weaknesses, Opportunities, Threats"
  },
  {
    question: "Which of these is an example of leadership?",
    options: [
      "Blaming others",
      "Guiding a team towards goals",
      "Ignoring problems",
      "Avoiding responsibility"
    ],
    answer: "Guiding a team towards goals"
  },
  {
    question: "What is the main purpose of email etiquette?",
    options: [
      "Make emails longer",
      "Ensure professional communication",
      "Avoid using greetings",
      "Send attachments only"
    ],
    answer: "Ensure professional communication"
  },
  {
    question: "Which is NOT a programming language?",
    options: ["Python", "Java", "C++", "Excel"],
    answer: "Excel"
  },
  {
    question: "Which is an advantage of teamwork?",
    options: [
      "Faster problem-solving",
      "Lack of coordination",
      "Increased conflict",
      "Duplication of work"
    ],
    answer: "Faster problem-solving"
  },
  {
    question: "Which shortcut pastes copied text?",
    options: ["Ctrl + P", "Ctrl + V", "Ctrl + X", "Ctrl + S"],
    answer: "Ctrl + V"
  },
  {
    question: "Which of the following is used for video conferencing?",
    options: ["Zoom", "Excel", "Notepad", "Paint"],
    answer: "Zoom"
  },
  {
    question: "What does LAN stand for?",
    options: [
      "Local Access Network",
      "Local Area Network",
      "Logical Area Node",
      "Linked Access Node"
    ],
    answer: "Local Area Network"
  },
  {
    question: "Which of the following is an example of ethics?",
    options: [
      "Honesty at work",
      "Cheating in exams",
      "Copying assignments",
      "Plagiarizing work"
    ],
    answer: "Honesty at work"
  },
  {
    question: "Which Microsoft tool is best for creating reports?",
    options: ["Excel", "Word", "PowerPoint", "Access"],
    answer: "Word"
  },
  {
    question: "Which of these is a benefit of ICT?",
    options: [
      "Faster communication",
      "Reduced access to information",
      "Slower processes",
      "More manual work"
    ],
    answer: "Faster communication"
  },
  {
    question: "What is emotional intelligence?",
    options: [
      "Managing emotions and relationships effectively",
      "Solving math equations",
      "Reading faster",
      "Typing accurately"
    ],
    answer: "Managing emotions and relationships effectively"
  },
  {
    question: "What is the default file extension for Excel?",
    options: [".docx", ".xlsx", ".pptx", ".pdf"],
    answer: ".xlsx"
  },
  {
    question: "Which shortcut saves a file in Windows?",
    options: ["Ctrl + A", "Ctrl + P", "Ctrl + S", "Ctrl + D"],
    answer: "Ctrl + S"
  },
  {
    question: "Which of these is an example of good workplace behavior?",
    options: [
      "Punctuality",
      "Gossiping",
      "Missing deadlines",
      "Ignoring colleagues"
    ],
    answer: "Punctuality"
  },
  {
    question: "Which is a feature of Google Docs?",
    options: [
      "Real-time collaboration",
      "Offline-only editing",
      "No sharing allowed",
      "Single-user access"
    ],
    answer: "Real-time collaboration"
  },
  {
    question: "Which of these is NOT social media?",
    options: ["Facebook", "Twitter", "LinkedIn", "MS Excel"],
    answer: "MS Excel"
  },
  {
    question: "What is the importance of CV writing?",
    options: [
      "To showcase skills and experience",
      "To submit academic grades only",
      "To replace interviews",
      "To avoid applying for jobs"
    ],
    answer: "To showcase skills and experience"
  },
  {
    question: "Which of the following is an online learning platform?",
    options: ["Coursera", "Photoshop", "MS Paint", "Notepad"],
    answer: "Coursera"
  },
  {
    question: "Which file extension is for Word documents?",
    options: [".pdf", ".pptx", ".docx", ".xlsx"],
    answer: ".docx"
  },
  {
    question: "What does URL stand for?",
    options: [
      "Universal Resource Locator",
      "Uniform Resource Locator",
      "Unified Research Link",
      "Unique Reference Location"
    ],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Which is an example of lifelong learning?",
    options: [
      "Attending training after graduation",
      "Stopping education after school",
      "Avoiding new skills",
      "Ignoring technology"
    ],
    answer: "Attending training after graduation"
  },
  {
    question: "What is the full meaning of ICT?",
    options: [
      "Information and Communication Technology",
      "International Coding Training",
      "Interconnected Computer Tools",
      "Information Control Terminal"
    ],
    answer: "Information and Communication Technology"
  }
];

// Utility to shuffle an array
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

// Function to get random 10 questions with shuffled options
function getRandomQuestions(limit = 10) {
  let shuffledQuestions = shuffleArray(allQuestions);
  let selectedQuestions = shuffledQuestions.slice(0, limit);
  selectedQuestions = selectedQuestions.map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
  return selectedQuestions;
}

// Export
export { getRandomQuestions };

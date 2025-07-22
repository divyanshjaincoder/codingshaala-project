// Sample test questions for the internship program
export const testQuestions = [
  {
    id: 1,
    question: "What is the correct way to declare a variable in JavaScript?",
    options: [
      "var name = 'John';",
      "variable name = 'John';",
      "v name = 'John';",
      "declare name = 'John';"
    ],
    correctAnswer: 0,
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which of the following is NOT a JavaScript data type?",
    options: [
      "Boolean",
      "Number",
      "String",
      "Float"
    ],
    correctAnswer: 3,
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is the output of: console.log(typeof null)?",
    options: [
      "null",
      "undefined",
      "object",
      "boolean"
    ],
    correctAnswer: 2,
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "Which method is used to add an element to the end of an array?",
    options: [
      "push()",
      "add()",
      "append()",
      "insert()"
    ],
    correctAnswer: 0,
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close the browser",
      "A function having access to variables from an outer scope",
      "A method to end a program",
      "A type of loop"
    ],
    correctAnswer: 1,
    difficulty: "Hard"
  },
  {
    id: 6,
    question: "Which of the following is the correct way to create a React component?",
    options: [
      "function Component() { return <div>Hello</div>; }",
      "create Component() { return <div>Hello</div>; }",
      "component Component() { return <div>Hello</div>; }",
      "class Component { return <div>Hello</div>; }"
    ],
    correctAnswer: 0,
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "What is the purpose of useState hook in React?",
    options: [
      "To fetch data from API",
      "To manage component state",
      "To handle side effects",
      "To create components"
    ],
    correctAnswer: 1,
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 2,
    difficulty: "Easy"
  },
  {
    id: 9,
    question: "Which CSS property is used to change the text color?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correctAnswer: 2,
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "What is the box model in CSS?",
    options: [
      "A way to create boxes",
      "A model that describes the rectangular boxes generated for elements",
      "A method to style forms",
      "A technique for responsive design"
    ],
    correctAnswer: 1,
    difficulty: "Medium"
  }
];

// Internship program syllabus
export const syllabus = [
  {
    week: 1,
    title: "Introduction to Web Development",
    topics: [
      "HTML Fundamentals",
      "CSS Basics", 
      "Setting up Development Environment",
      "Git & Version Control"
    ],
    completed: true
  },
  {
    week: 2,
    title: "Advanced HTML & CSS",
    topics: [
      "Semantic HTML",
      "CSS Flexbox & Grid",
      "Responsive Design",
      "CSS Animations"
    ],
    completed: true
  },
  {
    week: 3,
    title: "JavaScript Fundamentals",
    topics: [
      "Variables & Data Types",
      "Functions & Scope",
      "DOM Manipulation",
      "Event Handling"
    ],
    completed: false
  },
  {
    week: 4,
    title: "Advanced JavaScript",
    topics: [
      "Asynchronous Programming",
      "Promises & Async/Await",
      "ES6+ Features",
      "Error Handling"
    ],
    completed: false
  },
  {
    week: 5,
    title: "React.js Basics",
    topics: [
      "Components & JSX",
      "Props & State",
      "Event Handling",
      "Conditional Rendering"
    ],
    completed: false
  },
  {
    week: 6,
    title: "React.js Advanced",
    topics: [
      "Hooks (useState, useEffect)",
      "Context API",
      "React Router",
      "State Management"
    ],
    completed: false
  },
  {
    week: 7,
    title: "Backend Development",
    topics: [
      "Node.js Basics",
      "Express.js Framework",
      "REST APIs",
      "Database Integration"
    ],
    completed: false
  },
  {
    week: 8,
    title: "Full Stack Project",
    topics: [
      "Project Planning",
      "Backend Development",
      "Frontend Integration",
      "Testing & Deployment"
    ],
    completed: false
  }
];

// Sample payment plans
export const paymentPlans = [
  {
    id: 'full-payment',
    name: 'Full Payment',
    price: 15000,
    originalPrice: 20000,
    discount: 25,
    features: [
      'Complete 6-month internship program',
      'Live project experience',
      'One-on-one mentoring',
      'Certificate upon completion',
      'Job placement assistance',
      'Lifetime access to course materials'
    ],
    recommended: true
  },
  {
    id: 'installment',
    name: 'Monthly Installments',
    price: 3000,
    originalPrice: 3500,
    discount: 14,
    features: [
      'Pay in 6 monthly installments',
      'Complete 6-month internship program',
      'Live project experience',
      'One-on-one mentoring',
      'Certificate upon completion',
      'Job placement assistance'
    ],
    recommended: false
  }
];

// Mock API functions
export const mockAPI = {
  // Submit test answers
  submitTest: async (answers: Record<number, number>): Promise<{ score: number; result: 'passed' | 'failed' }> => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
    
    let score = 0;
    testQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score += 10;
      }
    });
    const result = score >= 60 ? 'test_passed' : 'test_failed';
    
    return { score, result };
  },

  // Process payment
  processPayment: async (planId: string, paymentDetails: any): Promise<{ success: boolean; transactionId?: string }> => {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate payment processing
    
    // Simulate payment success/failure (90% success rate)
    const success = Math.random() > 0.1;
    
    if (success) {
      return {
        success: true,
        transactionId: `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      };
    } else {
      return { success: false };
    }
  },

  // Submit project
  submitProject: async (projectData: { title: string; description: string; githubUrl: string; liveUrl?: string }): Promise<{ success: boolean; submissionId?: string }> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      success: true,
      submissionId: `SUB_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
};
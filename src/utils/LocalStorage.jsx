const employees = [
    {
      "id": 1,
      "email": "e1@example.com",
      "password": "123",
      "firstName": "Aarav",
      "tasks": [
        {
          "taskTitle": "Design Homepage",
          "taskDescription": "Create a responsive homepage layout for the website.",
          "taskDate": "2024-11-10",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Implement User Authentication",
          "taskDescription": "Build user login and registration functionality.",
          "taskDate": "2024-11-12",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Bug Fixing in Dashboard",
          "taskDescription": "Fix the layout issue on the dashboard page.",
          "taskDate": "2024-11-14",
          "category": "Maintenance",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstName": "Ishaan",
      "tasks": [
        {
          "taskTitle": "Prepare Project Documentation",
          "taskDescription": "Create detailed documentation for the project features.",
          "taskDate": "2024-11-09",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Create API Endpoints",
          "taskDescription": "Develop API endpoints for the application.",
          "taskDate": "2024-11-11",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Testing User Registration",
          "taskDescription": "Perform testing on the user registration form.",
          "taskDate": "2024-11-13",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 3,
        "newTask": 2,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstName": "Saanvi",
      "tasks": [
        {
          "taskTitle": "Design Mobile App",
          "taskDescription": "Create wireframes and mockups for the mobile app.",
          "taskDate": "2024-11-08",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize database queries for better performance.",
          "taskDate": "2024-11-10",
          "category": "Database",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstName": "Aditi",
      "tasks": [
        {
          "taskTitle": "SEO Optimization",
          "taskDescription": "Improve website SEO for better search engine ranking.",
          "taskDate": "2024-11-12",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "User Testing",
          "taskDescription": "Conduct usability testing with real users to gather feedback.",
          "taskDate": "2024-11-14",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Content Writing for Blog",
          "taskDescription": "Write a blog post about the latest trends in web development.",
          "taskDate": "2024-11-15",
          "category": "Content",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 3,
        "newTask": 3,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstName": "Rohan",
      "tasks": [
        {
          "taskTitle": "Fix Broken Links",
          "taskDescription": "Identify and fix broken links on the website.",
          "taskDate": "2024-11-06",
          "category": "Maintenance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update CMS Content",
          "taskDescription": "Update content in the CMS for the marketing pages.",
          "taskDate": "2024-11-09",
          "category": "Content",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Refactor Codebase",
          "taskDescription": "Refactor the existing code for better readability.",
          "taskDate": "2024-11-13",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 3,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      }
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "firstName": "Vikram"
    }
  ];
  
  export const setLocalStorage = () => {
    // console.log("This is localStorage");
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
    // console.log("This is localStorage");
  };
  
 
  // export const getLocalStorage = () => {
  //   // console.log("This is localStorage getStrorage");
  //   const employees = JSON.parse(localStorage.getItem('employees'));
  //   // const admin = JSON.parse(localStorage.getItem('admin'));
  //   // return { employees, admin };
  //   // return { employees: employees || [], admin: admin || null };
  //   // return {
  //   //   employees: employees ? JSON.parse(employees) : [], // Default to empty array if null
  //   //   admin: admin ? JSON.parse(admin) : null // Default to null if null
  //   // };
  //   return employees;
  // };

  // export const getLocalStorage = () => {
  //   // Get the 'employees' data from localStorage
  //   const employees = localStorage.getItem('employees');
    
  //   // If 'employees' exists in localStorage, parse it, otherwise return an empty array
  //   return employees ? JSON.parse(employees) : [];
  // };
  
  export const getLocalStorage = () => {
    const employees = localStorage.getItem('employees');
    // console.log("THis is employee data ",employees);
    return employees ? JSON.parse(employees) : [];  // If no data, return empty array
  };
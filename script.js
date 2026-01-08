const data=[
{q:"What is an algorithm?",a:"An algorithm is a finite sequence of well-defined steps used to solve a specific problem."},
{q:"Mention advantages and disadvantages of algorithm.",a:"Advantages: Easy to understand, language independent. Disadvantages: Time consuming and difficult for complex problems."},
{q:"Write characteristics of an algorithm.",a:"An algorithm should have input, output, definiteness, finiteness, and effectiveness."},
{q:"What is efficiency of algorithm?",a:"Efficiency of an algorithm refers to the amount of time and memory required to execute it."},
{q:"What is greedy approach?",a:"Greedy approach selects the best immediate solution at each step to reach an optimal result."},
{q:"What is backtracking?",a:"Backtracking is a method of solving problems by trying all possible solutions and undoing steps if needed."},
{q:"Define time and space complexity.",a:"Time complexity measures execution time; space complexity measures memory usage of an algorithm."},
{q:"Define Big-O, Omega and Theta notations.",a:"Big-O gives upper bound, Omega gives lower bound, Theta gives tight bound of algorithm complexity."},
{q:"What is ASCII code?",a:"ASCII is a character encoding standard used to represent characters using numeric values."},
{q:"How are characters stored in memory?",a:"Characters are stored in memory using ASCII values."},
{q:"What is a program?",a:"A program is a set of instructions written to perform a specific task by a computer."},
{q:"Which OS is written in C?",a:"UNIX operating system is written in C language."},
{q:"What are preprocessor directives?",a:"Preprocessor directives are instructions processed before compilation, starting with #."},
{q:"What are global and local variables?",a:"Global variables are accessible everywhere; local variables are accessible only within a function."},
{q:"What are header files?",a:"Header files contain declarations of functions and macros used in a program."},
{q:"What are high-level and low-level languages?",a:"High-level languages are user friendly; low-level languages are machine dependent."},
{q:"What are tokens?",a:"Tokens are the smallest meaningful elements in a program."},
{q:"What is keyword?",a:"Keywords are reserved words with predefined meaning in C language."},
{q:"What is identifier, constant, variable?",a:"Identifiers name variables/functions; constants have fixed values; variables store data."},
{q:"What is size of int in C?",a:"Size of int is typically 4 bytes."},
{q:"Mention two input/output functions.",a:"printf() and scanf()."},
{q:"Which operator is address operator?",a:"Ampersand (&) operator."},
{q:"What are format specifiers?",a:"Format specifiers define data type for input/output, e.g., %d, %f."},
{q:"What is operand?",a:"Operand is a value on which an operator performs operation."},
{q:"What is unary operator?",a:"Unary operator operates on a single operand."},
{q:"Syntax of conditional operator?",a:"condition ? expression1 : expression2;"},
{q:"Difference between = and ==",a:"= assigns value; == compares two values."},
{q:"Syntax of if-else ladder?",a:"Multiple if-else statements used to test several conditions."},
{q:"Which loop is exit control loop?",a:"do-while loop."},
{q:"Which loop is entry control loop?",a:"for and while loops."},
{q:"What is ambiguity?",a:"Ambiguity occurs when a statement has more than one possible meaning."},
{q:"What is an array?",a:"Array is collection of similar data elements."},
{q:"General syntax of array?",a:"datatype arrayName[size];"},
{q:"What is 2-D array?",a:"Array with rows and columns."},
{q:"What is sorting?",a:"Arranging data in ascending or descending order."},
{q:"What is string?",a:"String is array of characters ending with null character."},
{q:"How are strings declared?",a:"char str[20];"},
{q:"What is function?",a:"Function is a block of code that performs a specific task."},
{q:"What is prototype?",a:"Function declaration before main()."},
{q:"What is call?",a:"Calling a function means invoking it for execution."},
{q:"What is definition?",a:"Function definition contains actual code."},
{q:"Actual and formal parameters?",a:"Actual parameters are values passed; formal parameters receive them."},
{q:"What is recursion?",a:"Function calling itself."},
{q:"Define structure.",a:"Structure groups variables of different data types."},
{q:"Initialization of structure?",a:"Assigning values at time of declaration."},
{q:"What is union?",a:"Union allows different data types to share same memory."},
{q:"Difference between structure and union?",a:"Structure allocates memory for all members; union shares memory."},
{q:"What is pointer?",a:"Pointer stores address of another variable."},
{q:"What is factor of algorithm?",a:"Time and space are main factors."},
{q:"What is pseudo code?",a:"English-like representation of algorithm."},
{q:"What is flowchart?",a:"Graphical representation of algorithm."},
{q:"Pattern matching?",a:"Finding a pattern in text."},
{q:"Text processing?",a:"Manipulating textual data."}
];

const fiveMarkData = [
{
  q: "Explain the different steps in Problem Solving.",
  a: `
  <strong>Problem solving</strong> is a systematic process used to find effective solutions to a given problem.  
  The main steps involved are:

  <br><br>

  <strong>1. Problem Identification</strong><br>
  The first step is to clearly understand and define the problem. This includes knowing what the problem is, why it exists, and what needs to be solved.

  <br><br>

  <strong>2. Problem Analysis</strong><br>
  In this step, the problem is studied in detail. Relevant information is collected, constraints are identified, and the problem is broken into smaller parts for better understanding.

  <br><br>

  <strong>3. Designing the Solution (Algorithm / Planning)</strong><br>
  A logical plan or algorithm is prepared to solve the problem step by step. Flowcharts or pseudocode may be used to represent the solution clearly.

  <br><br>

  <strong>4. Implementation (Coding)</strong><br>
  The designed solution is converted into a program or actual solution using a suitable programming language or method.

  <br><br>

  <strong>5. Testing</strong><br>
  The solution is tested using different inputs to check whether it works correctly and produces the expected results.

  <br><br>

  <strong>6. Debugging</strong><br>
  Errors found during testing are identified and corrected to ensure the program runs smoothly and correctly.
  `
},
{
q:"Explain Divide and Conquer method.",
a:"Divide and Conquer divides a problem into smaller subproblems, solves them independently, and combines their results to obtain the final solution. Examples include merge sort and quick sort."
},
{
q:"Explain the structure of C program with diagram.",
a:"A C program consists of documentation section, link section, definition section, global declaration, main() function, and subprograms. Each section serves a specific purpose in program execution."
},
{
q:"Explain different data types supported by C language.",
a:"C supports basic data types like int, char, float, double, derived data types like arrays, pointers, structures, unions, and enumeration data types."
},
{
q:"Explain the use of #define with an example.",
a:"#define is used to define macros. It replaces a constant or expression before compilation. Example: #define PI 3.14."
},
{
q:"Write a program to find length of a string.",
a:"The program uses strlen() function or a loop to count characters until the null character is encountered."
},
{
q:"Differentiate between call by value and call by reference.",
a:"In call by value, a copy of variable is passed and changes do not affect original value. In call by reference, address is passed and changes affect original variable."
},
{
q:"Differentiate between pseudo code and ASCII code.",
a:"Pseudo code is an algorithm representation, whereas ASCII code is a character encoding standard."
}
];



let i=0;
function load(){
    q.innerText=data[i].q;
    a.innerText=data[i].a;
    a.style.display="none";
    progress.innerText=`Question ${i+1} of ${data.length}`;
}
function next(){ i=(i+1)%data.length; load(); }
function toggle(){ a.style.display=a.style.display==="none"?"block":"none"; }
function show(id){
    document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}
const q=document.getElementById("q"),
      a=document.getElementById("a"),
      progress=document.getElementById("progress"),
      list=document.getElementById("list");

data.forEach((x,n)=>{
    const c=document.createElement("div");
    c.className="card";
    c.innerHTML=`<div class="question">${n+1}. ${x.q}</div>
                 <button class="action-btn">Show Answer</button>
                 <div class="answer">${x.a}</div>`;
    c.querySelector("button").onclick=()=> {
        const ans=c.querySelector(".answer");
        ans.style.display=ans.style.display==="none"?"block":"none";
    };
    list.appendChild(c);
});
const fiveMarksList = document.getElementById("fiveMarksList");

fiveMarkData.forEach((x, n) => {
    const c = document.createElement("div");
    c.className = "card";

    c.innerHTML = `
        <div class="question">${n + 1}. ${x.q}</div>
        <button class="action-btn">Show / Hide Answer</button>
        <div class="answer">${x.a}</div>
    `;

    c.querySelector("button").onclick = () => {
        const ans = c.querySelector(".answer");
        ans.style.display = ans.style.display === "none" ? "block" : "none";
    };

    fiveMarksList.appendChild(c);
});

load();





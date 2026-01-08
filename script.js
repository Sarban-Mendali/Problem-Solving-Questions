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
  Errors found during testing are identified and corrected to ensure the program runs smoothly and correctly.<br><br>
  
  <strong>Conclusion:</strong><br>
Following these steps ensures a structured and efficient approach to problem solving, reducing errors and improving solution quality.
  `
},
{
q:"Explain Divide and Conquer method.",
a: `
  <strong>The Divide and Conquer method</strong> is a powerful problem-solving technique used in computer science to solve complex problems efficiently.
  The main idea is to divide a problem into smaller sub-problems, solve them individually, and then combine their solutions.

  <br><br>

  <strong>Steps of Divide and Conquer</strong>

  <br><br>

  <strong>1. Divide</strong><br>
  The given problem is divided into smaller sub-problems of the same type. This process continues until the sub-problems become simple enough to solve easily.

  <br><br>

  <strong>2. Conquer</strong><br>
  Each sub-problem is solved independently. If a sub-problem is still large, the divide and conquer strategy is applied recursively.

  <br><br>

  <strong>3. Combine</strong><br>
  The solutions of all sub-problems are combined to form the final solution to the original problem.

  <br><br>

  <strong>Advantages of Divide and Conquer</strong><br>
  • Reduces the complexity of large problems<br>
  • Improves efficiency and performance<br>
  • Easy to implement using recursion<br>
  • Suitable for parallel processing

  <br><br>

  <strong>Examples</strong><br>
  Common algorithms based on divide and conquer include <strong>Binary Search, Merge Sort, and Quick Sort</strong>.

  <br><br>

  <strong>Conclusion:</strong><br>
  Divide and Conquer simplifies problem solving by breaking complex problems into smaller, manageable parts, making algorithms faster and more efficient.
  `
},
{
q:"Explain the structure of C program with diagram.",
a:"A C program consists of documentation section, link section, definition section, global declaration, main() function, and subprograms. Each section serves a specific purpose in program execution."
},
{
q:"Explain different data types supported by C language.",
a:`
  <strong>Different Data Types Supported by C Language</strong><br><br>

  In the C programming language, data types specify the type of data a variable can store. 
  C supports several categories of data types to handle different kinds of data efficiently.

  <br><br>

  <strong>1. Basic (Primary) Data Types</strong><br>
  These are the fundamental data types used in C.

  <br>
  <strong>int</strong> – Used to store whole numbers (integers).<br>
  <strong>float</strong> – Used to store decimal (real) numbers with single precision.<br>
  <strong>double</strong> – Used to store decimal numbers with double precision.<br>
  <strong>char</strong> – Used to store a single character.

  <br><br>

  <strong>2. Derived Data Types</strong><br>
  These data types are derived from basic data types.

  <br>
  <strong>Array</strong> – Collection of elements of the same data type.<br>
  <strong>Pointer</strong> – Stores the address of another variable.<br>
  <strong>Function</strong> – A block of code that performs a specific task.

  <br><br>

  <strong>3. User-Defined Data Types</strong><br>
  These allow programmers to create their own data types.

  <br>
  <strong>struct (Structure)</strong> - Groups variables of different data types.<br>
  <strong>union</strong> - Similar to structure but shares memory among members.<br>
  <strong>enum (Enumeration)</strong> - Assigns names to integer constants.<br>
  <strong>typedef</strong> - Used to create an alias name for an existing data type.

  <br><br>

  <strong>4. Void Data Type</strong><br>
  <strong>void</strong> - Represents the absence of a value. Commonly used in functions that do not return a value.

  <br><br>

  <strong>Conclusion:</strong><br>
  C language provides a wide range of data types to efficiently manage data. 
  Understanding these data types helps programmers write optimized, clear, and effective C programs.
  `
},
{
q:"Explain the use of '#' and define with an example.",
a:`
  <strong>Use of # and #define in C Language (with Example)</strong><br><br>

  In the C programming language, the symbol <strong>#</strong> is used at the beginning of
  <strong>preprocessor directives</strong>. These directives are processed before compilation
  by the C preprocessor.

  <br><br>

  <strong>Use of # (Hash Symbol)</strong><br>
  The <strong>#</strong> symbol tells the compiler that the statement is a preprocessor directive.
  Some commonly used preprocessor directives are:

  <br><br>

  • <strong>#include</strong> - Includes header files<br>
  • <strong>#define</strong> - Defines constants or macros<br>
  • <strong>#undef</strong> - Undefines a macro

  <br><br>

  <strong>Example:</strong>

  <br><br>

  <code>
  #include &lt;stdio.h&gt;
  </code>

  <br><br>

  Here, the <strong>#</strong> symbol instructs the compiler to include the contents of the
  <strong>stdio.h</strong> header file before the program is compiled. This allows the use of
  input and output functions like <strong>printf()</strong> and <strong>scanf()</strong>.

  <br><br>

  <strong>Use of #define</strong><br>
  The <strong>#define</strong> directive is used to define constants or macros.
  The preprocessor replaces the defined identifier with its value before compilation.

  <br><br>

  <code>
  #define PI 3.14
  </code>

  <br><br>

  Wherever <strong>PI</strong> is used in the program, it is replaced with <strong>3.14</strong>
  during preprocessing.

  <br><br>

  <strong>Conclusion:</strong><br>
  The <strong>#</strong> symbol is essential for identifying preprocessor directives, while
  <strong>#define</strong> is mainly used to create symbolic constants and macros.
  These directives improve program readability, flexibility, and maintainability.
  `
},
{
q:"Write a program to find length of a string.",
a:`
  <strong>Program to Find the Length of a String in C</strong><br><br>

  Below is a simple C program to find the length of a string
  <strong>without using built-in functions</strong>, which is commonly expected in examinations.

  <br><br>

  <strong>Program (Without Using strlen)</strong>

  <br><br>

  <code>
  #include &lt;stdio.h&gt;<br><br>

  int main() {<br>
  &nbsp;&nbsp;char str[100];<br>
  &nbsp;&nbsp;int length = 0;<br><br>

  &nbsp;&nbsp;printf("Enter a string: ");<br>
  &nbsp;&nbsp;gets(str);<br><br>

  &nbsp;&nbsp;while (str[length] != '\\0') {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;length++;<br>
  &nbsp;&nbsp;}<br><br>

  &nbsp;&nbsp;printf("Length of the string = %d", length);<br>
  &nbsp;&nbsp;return 0;<br>
  }
  </code>

  <br><br>

  <strong>Explanation</strong><br>
  • A character array <strong>str</strong> is used to store the string.<br>
  • The loop counts characters until the null character <strong>'\\0'</strong> is encountered.<br>
  • The total count represents the length of the string.

  <br><br>

  <strong>Using Built-in Function (strlen)</strong>

  <br><br>

  <code>
  #include &lt;stdio.h&gt;<br>
  #include &lt;string.h&gt;<br><br>

  int main() {<br>
  &nbsp;&nbsp;char str[100];<br><br>

  &nbsp;&nbsp;printf("Enter a string: ");<br>
  &nbsp;&nbsp;gets(str);<br><br>

  &nbsp;&nbsp;printf("Length of the string = %lu", strlen(str));<br>
  &nbsp;&nbsp;return 0;<br>
  }
  </code>

  <br><br>

  <strong>Output (Example)</strong><br>
  Enter a string: Hello<br>
  Length of the string = 5

  <br><br>

  <strong>Conclusion:</strong><br>
  The length of a string in C can be determined either by manually counting characters
  until the null character or by using the built-in <strong>strlen()</strong> function.
  `
},
{
q:"Differentiate between call by value and call by reference.",
a:`
  <strong>Difference Between Call by Value and Call by Reference</strong>
  <br><br>

  <table border="1" cellpadding="8" cellspacing="0" width="100%" style="border-collapse:collapse; font-size:14px;">
    <tr style="background:#f3f4f6;">
      <th>Basis</th>
      <th>Call by Value</th>
      <th>Call by Reference</th>
    </tr>

    <tr>
      <td><strong>Definition</strong></td>
      <td>A copy of the actual argument is passed to the function</td>
      <td>The address of the actual argument is passed to the function</td>
    </tr>

    <tr>
      <td><strong>Data Change</strong></td>
      <td>Changes made inside the function do not affect the original variable</td>
      <td>Changes made inside the function affect the original variable</td>
    </tr>

    <tr>
      <td><strong>Memory Usage</strong></td>
      <td>Uses separate memory for function parameters</td>
      <td>Uses the same memory location through address</td>
    </tr>

    <tr>
      <td><strong>Safety</strong></td>
      <td>Original data is safe from accidental changes</td>
      <td>Original data can be modified</td>
    </tr>

    <tr>
      <td><strong>Function Arguments</strong></td>
      <td>Values are passed</td>
      <td>Pointers (addresses) are passed</td>
    </tr>

    <tr>
      <td><strong>Speed</strong></td>
      <td>Slightly slower due to copying of data</td>
      <td>Faster as no data copying is involved</td>
    </tr>

    <tr>
      <td><strong>Example</strong></td>
      <td><code>void func(int x)</code></td>
      <td><code>void func(int *x)</code></td>
    </tr>
  </table>

  <br>

  <strong>Conclusion:</strong><br>
  Call by Value provides better safety as it does not modify original data,
  whereas Call by Reference is more efficient and allows functions to modify
  the actual variables.
  `
},
{
q:"Differentiate between pseudo code and ASCII code.",
a:`
  <strong>Difference Between Pseudocode and ASCII Code</strong>
  <br><br>

  <table border="1" cellpadding="8" cellspacing="0" width="100%" 
         style="border-collapse:collapse; font-size:14px;">
    <tr style="background:#f3f4f6;">
      <th>Basis</th>
      <th>Pseudocode</th>
      <th>ASCII Code</th>
    </tr>

    <tr>
      <td><strong>Meaning</strong></td>
      <td>Pseudocode is an informal way of writing the logic of a program</td>
      <td>ASCII is a standard code used to represent characters in computers</td>
    </tr>

    <tr>
      <td><strong>Purpose</strong></td>
      <td>Used to plan and understand program logic before coding</td>
      <td>Used to represent letters, numbers, and symbols in binary form</td>
    </tr>

    <tr>
      <td><strong>Nature</strong></td>
      <td>Not a programming language</td>
      <td>Character encoding standard</td>
    </tr>

    <tr>
      <td><strong>Syntax Rules</strong></td>
      <td>No strict syntax rules</td>
      <td>Follows a fixed standard code</td>
    </tr>

    <tr>
      <td><strong>Execution</strong></td>
      <td>Cannot be executed by a computer</td>
      <td>Used internally by computers for data representation</td>
    </tr>

    <tr>
      <td><strong>Usage Stage</strong></td>
      <td>Used in problem analysis and design phase</td>
      <td>Used in data storage and data communication</td>
    </tr>

    <tr>
      <td><strong>Example</strong></td>
      <td><code>READ a, b; SUM = a + b</code></td>
      <td><code>'A' = 65, 'a' = 97, '0' = 48</code></td>
    </tr>
  </table>

  <br>

  <strong>Conclusion:</strong><br>
  Pseudocode helps programmers design and understand the solution logic,
  while ASCII code helps computers understand and represent characters.
  Both serve completely different purposes in computer science.
  `
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
                 <button class="action-btn">Show / Hide Answer</button>
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





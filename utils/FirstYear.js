export const FirstYear = [

	{
		id: 1,
		questionText: 'What is the size of an int data type in C (assuming a 32-bit system)?',
		answerOptions: [
			{ answerID: 'a', answerText: '2 bytes' },
			{ answerID: 'b', answerText: '4 bytes' },
			{ answerID: 'c', answerText: '8 bytes' },
			{ answerID: 'd', answerText: 'Compiler dependent' },
		],
		correctResponse: 'b',
	},
	{
		id: 2,
		questionText: 'Which component of a computer executes instructions?',
		answerOptions: [
			{ answerID: 'a', answerText: 'RAM' },
			{ answerID: 'b', answerText: 'Hard Disk' },
			{ answerID: 'c', answerText: 'CPU' },
			{ answerID: 'd', answerText: 'Power Supply' },
		],
		correctResponse: 'c',
	},
	{
		id: 3,
		questionText: 'What will be the output of the following C code?',
		code:
			`#include <stdio.h>
int main()
{
    char ch = 255;
    ch = ch + 10;
    printf("%d", ch);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '265' },
			{ answerID: 'b', answerText: '-1' },
			{ answerID: 'c', answerText: '10' },
			{ answerID: 'd', answerText: 'Undefined behavior' },
		],
		correctResponse: 'b',
	},
	{
		id: 4,
		questionText: 'What will be the output of the following C code?',
		code:
			`#include <stdio.h>
int main()
{
    int x = 5;
    printf("%d %d %d", x, x++, ++x);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '5 6 7' },
			{ answerID: 'b', answerText: '7 6 6' },
			{ answerID: 'c', answerText: 'Undefined behavior' },
			{ answerID: 'd', answerText: 'None of the mentioned' },
		],
		correctResponse: 'c',
	},
	{
		id: 5,
		questionText: 'What will be the final value of x in the following C code?',
		code:
			`#include <stdio.h>
int main()
{
    int x = (10 + 2) * 3 / 4;
    printf("%d", x);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '9' },
			{ answerID: 'b', answerText: '3' },
			{ answerID: 'c', answerText: '24' },
			{ answerID: 'd', answerText: '6' },
		],
		correctResponse: 'd',
	},
	{
		id: 6,
		questionText: 'What will happen if the following C code is executed?',
		code:
			`#include <stdio.h>
int main()
{
    char arr[] = "Hello";
    arr[0] = 'M';
    printf("%s", arr);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: ' It will cause a compile-time error ' },
			{ answerID: 'b', answerText: ' It will cause a segmentation fault ' },
			{ answerID: 'c', answerText: 'It will print "Mello"' },
			{ answerID: 'd', answerText: ' It will print "Hello" unchanged' },
		],
		correctResponse: 'c',
	},
	{
		id: 7,
		questionText: 'Which of the following correctly represents the NULL character in C?',
		answerOptions: [
			{ answerID: 'a', answerText: '0' },
			{ answerID: 'b', answerText: '\\0' },
			{ answerID: 'c', answerText: 'NULL' },
			{ answerID: 'd', answerText: 'All of the above' },
		],
		correctResponse: 'd',
	},
	{
		id: 8,
		questionText: 'What will be the output of the following C code?',
		code:
			`#include <stdio.h>
int main()
{
    char *str = "Hello World";
    printf("%c", *(str + 6));
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'H' },
			{ answerID: 'b', answerText: 'W' },
			{ answerID: 'c', answerText: 'o' },
			{ answerID: 'd', answerText: 'Compile-time error' },
		],
		correctResponse: 'b',
	},
	{
		id: 9,
		questionText: 'What does BIOS stand for in a computer system?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Basic Input Output System' },
			{ answerID: 'b', answerText: 'Binary Integrated Operating System' },
			{ answerID: 'c', answerText: 'Basic Internal Output System' },
			{ answerID: 'd', answerText: 'Basic Input Operating System' },
		],
		correctResponse: 'a',
	},
	{
		id: 10,
		questionText: 'Which type of software directly interacts with hardware?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Application software' },
			{ answerID: 'b', answerText: 'Utility software' },
			{ answerID: 'c', answerText: 'System software' },
			{ answerID: 'd', answerText: 'Antivirus software' },
		],
		correctResponse: 'c',
	},

	{
		id: 11,
		questionText: 'What will be the output of the following C code?',
		code:
			`#include <stdio.h>
int main()
{
    float f = 5.5;
    int i = (int)f * 2;
    printf("%d", i);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '10' },
			{ answerID: 'b', answerText: '11' },
			{ answerID: 'c', answerText: 'Compiler error' },
			{ answerID: 'd', answerText: 'Undefined behavior' },
		],
		correctResponse: 'a',
	},
	{
		id: 12,
		questionText: 'What will be the output of the following C code?',
		code:
			`#include <stdio.h>
int main()
{
    int i = 0;
    while (i < 3)
    {
        printf("%d ", i);
        i++;
    }
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '0 1 2' },
			{ answerID: 'b', answerText: '0 1 2 3' },
			{ answerID: 'c', answerText: 'Infinite loop' },
			{ answerID: 'd', answerText: 'Compile-time error' },
		],
		correctResponse: 'a',
	}, {
		id: 13,
		questionText: 'Which of the following is an example of system software?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Microsoft Word' },
			{ answerID: 'b', answerText: 'Windows OS' },
			{ answerID: 'c', answerText: 'Adobe Photoshop' },
			{ answerID: 'd', answerText: 'Google Chrome' },
		],
		correctResponse: 'b',
	},
	{
		id: 14,
		questionText: 'Which of the following is an exit controlled loop?',

		answerOptions: [
			{ answerID: 'a', answerText: 'While Loop' },
			{ answerID: 'b', answerText: 'For loop' },
			{ answerID: 'c', answerText: 'Do-While' },
			{ answerID: 'd', answerText: 'Nested For Loop' },
		],
		correctResponse: 'c',
	},

	{
		id: 15,
		questionText: 'What is the term for the process of dividing a program into smaller, more manageable modules or functions?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Modularization' },
			{ answerID: 'b', answerText: 'Encapsulation' },
			{ answerID: 'c', answerText: 'Abstraction' },
			{ answerID: 'd', answerText: 'Proceduralization' }
		],
		correctResponse: 'a'
	}
	,
	{
		id: 16,
		questionText: 'Which numbering system is commonly used in computing for memory addressing?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Binary' },
			{ answerID: 'b', answerText: 'Octal' },
			{ answerID: 'c', answerText: 'Hexadecimal' },
			{ answerID: 'd', answerText: 'Decimal' },
		],
		correctResponse: 'c',
	},
	{
		id: 17,
		questionText: "Which header file is needed for the printf() and scanf() functions in C?",
		answerOptions: [
			{ answerID: 'a', answerText: '<stdlib.h>' },
			{ answerID: 'b', answerText: '<stdio.h>' },
			{ answerID: 'c', answerText: '<string.h>' },
			{ answerID: 'd', answerText: '<math.h>' }
		],
		correctResponse: 'b'
	},
	{
		id: 18,
		questionText: "Which of the following is a valid identifier in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'int' },
			{ answerID: 'b', answerText: '_varName123' },
			{ answerID: 'c', answerText: '1variable' },
			{ answerID: 'd', answerText: 'char&' }
		],
		correctResponse: 'b'
	},
	{
		id: 19,
		questionText: "Which of the following correctly accesses an array element in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'array{2}' },
			{ answerID: 'b', answerText: 'array(2)' },
			{ answerID: 'c', answerText: 'array[2]' },
			{ answerID: 'd', answerText: 'array -> 2' }
		],
		correctResponse: 'c'
	},
	{
		id: 20,
		questionText: "Which of the following functions is used to copy a string in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'strcopy()' },
			{ answerID: 'b', answerText: 'copystr()' },
			{ answerID: 'c', answerText: 'strcpy()' },
			{ answerID: 'd', answerText: 'stringcopy()' }
		],
		correctResponse: 'c'
	},
	{
		id: 21,
		questionText: "Which data type is used to store a single character in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'int' },
			{ answerID: 'b', answerText: 'char' },
			{ answerID: 'c', answerText: 'float' },
			{ answerID: 'd', answerText: 'string' }
		],
		correctResponse: 'b'
	},
	{
		id: 22,
		questionText: "What will be the output of the following C code?",
		code:
			`#include <stdio.h>
int main() {
    char str[] = "Hello";
    printf("%c", str[1]);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'H' },
			{ answerID: 'b', answerText: 'e' },
			{ answerID: 'c', answerText: 'l' },
			{ answerID: 'd', answerText: 'o' }
		],
		correctResponse: 'b'
	},
	{
		id: 23,
		questionText: 'What is the smallest unit of data in a computer?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Bit' },
			{ answerID: 'b', answerText: 'Byte' },
			{ answerID: 'c', answerText: 'Kilobyte' },
			{ answerID: 'd', answerText: 'Megabyte' },
		],
		correctResponse: 'a',
	},
	{
		id: 24,
		questionText: "Which function is used to find the length of a string in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'strlen()' },
			{ answerID: 'b', answerText: 'size()' },
			{ answerID: 'c', answerText: 'length()' },
			{ answerID: 'd', answerText: 'strsize()' }
		],
		correctResponse: 'a'
	},
	{
		id: 25,
		questionText: "Which symbol is used to denote a pointer variable in C?",
		answerOptions: [
			{ answerID: 'a', answerText: '&' },
			{ answerID: 'b', answerText: '*' },
			{ answerID: 'c', answerText: '#' },
			{ answerID: 'd', answerText: '!' }
		],
		correctResponse: 'b'
	},
	{
		id: 26,
		questionText: "Which of the following is a valid string declaration in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'char str[] = "Hello";' },
			{ answerID: 'b', answerText: 'string str = "Hello";' },
			{ answerID: 'c', answerText: 'char str = "Hello";' },
			{ answerID: 'd', answerText: 'char str(5) = "Hello";' }
		],
		correctResponse: 'a'
	},
	{
		id: 27,
		questionText: "Which function is used to concatenate two strings in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'strconcat()' },
			{ answerID: 'b', answerText: 'strjoin()' },
			{ answerID: 'c', answerText: 'strcat()' },
			{ answerID: 'd', answerText: 'appendstr()' }
		],
		correctResponse: 'c'
	},
	{
		id: 28,
		questionText: "Which of the following statements about arrays in C is true?",
		answerOptions: [
			{ answerID: 'a', answerText: 'An array size can be changed after declaration' },
			{ answerID: 'b', answerText: 'Arrays can store elements of different data types' },
			{ answerID: 'c', answerText: 'Array indexing starts from 1' },
			{ answerID: 'd', answerText: 'An array can store multiple values of the same data type' }
		],
		correctResponse: 'd'
	},
	{
		id: 29,
		questionText: "What is the index of the last element in an array of size 5?",
		answerOptions: [
			{ answerID: 'a', answerText: '4' },
			{ answerID: 'b', answerText: '5' },
			{ answerID: 'c', answerText: '6' },
			{ answerID: 'd', answerText: '0' }
		],
		correctResponse: 'a'
	},
	{
		id: 30,
		questionText: "What is the purpose of the gets() function in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'To read a string from the user' },
			{ answerID: 'b', answerText: 'To print a string to the console' },
			{ answerID: 'c', answerText: 'To find the length of a string' },
			{ answerID: 'd', answerText: 'To concatenate two strings' }
		],
		correctResponse: 'a'
	},
	{
		id: 31,
		questionText: "Which of the following is the correct way to declare a constant in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'constant int x = 10;' },
			{ answerID: 'b', answerText: '#define x 10' },
			{ answerID: 'c', answerText: 'int const x = 10;' },
			{ answerID: 'd', answerText: 'Both b and c' }
		],
		correctResponse: 'd'
	},
	{
		id: 32,
		questionText: "Which of the following correctly initializes an integer array in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'int arr[3] = {1, 2, 3};' },
			{ answerID: 'b', answerText: 'int arr = {1, 2, 3};' },
			{ answerID: 'c', answerText: 'array<int> arr = {1, 2, 3};' },
			{ answerID: 'd', answerText: 'int arr(3) = {1, 2, 3};' }
		],
		correctResponse: 'a'
	},
	{
		id: 33,
		questionText: 'Which type of software directly interacts with hardware?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Application software' },
			{ answerID: 'b', answerText: 'Utility software' },
			{ answerID: 'c', answerText: 'System software' },
			{ answerID: 'd', answerText: 'Antivirus software' },
		],
		correctResponse: 'c',
	},
	{
		id: 34,
		questionText: "What will be the output of the following C code?",
		code:
			`#include <stdio.h>
int main() {
    int a = 5, b = 2;
    printf("%d", a / b);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '2.5' },
			{ answerID: 'b', answerText: '2' },
			{ answerID: 'c', answerText: '2.000000' },
			{ answerID: 'd', answerText: 'Error' }
		],
		correctResponse: 'b'
	},
	{
		id: 35,
		questionText: "What is the correct syntax for declaring a pointer to an integer in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'int ptr;' },
			{ answerID: 'b', answerText: 'int *ptr;' },
			{ answerID: 'c', answerText: '*ptr;' },
			{ answerID: 'd', answerText: 'pointer int ptr;' }
		],
		correctResponse: 'b'
	},
	{
		id: 36,
		questionText: "What will be the output of the following C code?",
		code:
			`#include <stdio.h>
int main() {
    char str[] = "Hello";
    printf("%s", str + 2);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Hello' },
			{ answerID: 'b', answerText: 'lo' },
			{ answerID: 'c', answerText: 'He' },
			{ answerID: 'd', answerText: 'Error' }
		],
		correctResponse: 'b'
	},
	{
		id: 37,
		questionText: "Which function is used to allocate dynamic memory in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'malloc()' },
			{ answerID: 'b', answerText: 'calloc()' },
			{ answerID: 'c', answerText: 'realloc()' },
			{ answerID: 'd', answerText: 'All of the above' }
		],
		correctResponse: 'd'
	},
	{
		id: 38,
		questionText: "Which of the following is not a valid C data type?",
		answerOptions: [
			{ answerID: 'a', answerText: 'float' },
			{ answerID: 'b', answerText: 'bool' },
			{ answerID: 'c', answerText: 'char' },
			{ answerID: 'd', answerText: 'double' }
		],
		correctResponse: 'b'
	},
	{
		id: 39,
		questionText: "Which escape sequence is used to print a new line in C?",
		answerOptions: [
			{ answerID: 'a', answerText: '\\n' },
			{ answerID: 'b', answerText: '\\t' },
			{ answerID: 'c', answerText: '\\r' },
			{ answerID: 'd', answerText: '\\b' }
		],
		correctResponse: 'a'
	},
	{
		id: 40,
		questionText: "Which of the following is true about string literals in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'They are stored in read-only memory' },
			{ answerID: 'b', answerText: 'They can be modified' },
			{ answerID: 'c', answerText: 'They must always end with a semicolon' },
			{ answerID: 'd', answerText: 'They are stored in the heap' }
		],
		correctResponse: 'a'
	},
	{
		id: 41,
		questionText: 'What is the full form of HTTP?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Hyper Text Transfer Protocol' },
			{ answerID: 'b', answerText: 'High Transfer Text Processing' },
			{ answerID: 'c', answerText: 'Hyperlink Transfer Text Protocol' },
			{ answerID: 'd', answerText: 'Hyper Transfer Text Processing' },
		],
		correctResponse: 'a',
	},
	{
		id: 42,
		questionText: "What is the output of the following code?",
		code:
			`#include <stdio.h>
int main() {
    int x = 10;
    printf("%d", x++);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '10' },
			{ answerID: 'b', answerText: '11' },
			{ answerID: 'c', answerText: 'Error' },
			{ answerID: 'd', answerText: 'Garbage Value' }
		],
		correctResponse: 'a'
	},
	{
		id: 43,
		questionText: "Which of the following correctly defines a character array in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'char str[] = "Hello";' },
			{ answerID: 'b', answerText: 'char str[5] = "Hello";' },
			{ answerID: 'c', answerText: 'char str[6] = "Hello";' },
			{ answerID: 'd', answerText: 'Both a and c' }
		],
		correctResponse: 'd'
	},
	{
		id: 44,
		questionText: "Which function is used to take input for a string in C?",
		answerOptions: [
			{ answerID: 'a', answerText: 'scanf()' },
			{ answerID: 'b', answerText: 'gets()' },
			{ answerID: 'c', answerText: 'Both a and b' },
			{ answerID: 'd', answerText: 'None of the above' }
		],
		correctResponse: 'c'
	},
	{
		id: 45,
		questionText: 'Which of the following storage devices has the highest speed?',
		answerOptions: [
			{ answerID: 'a', answerText: 'SSD' },
			{ answerID: 'b', answerText: 'HDD' },
			{ answerID: 'c', answerText: 'CD-ROM' },
			{ answerID: 'd', answerText: 'Floppy Disk' },
		],
		correctResponse: 'a',
	}

]
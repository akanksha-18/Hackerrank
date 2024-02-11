const codeText = document.getElementById('codeText');
let code = document.getElementById('code');

let output = document.getElementById('output')


function provideCode () {
    const language = document.getElementById('language');
    console.log(language.value);
    
    if (language.value == 'javascript') {
        code.innerHTML = `(function main()  
    {console.log('Hello World!');
}());`
    } else if (language.value == 'python') {
        code.innerHTML = `print "Hello World!"`
    } else if (language.value == 'java') {
        code.innerHTML = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`
    } else if (language.value == 'c') {
        code.innerHTML = `#include &lt;stdio.h&gt;
    int main(void) {
        puts("Hello World!");
        return 0;
    }`
    } else if (language.value == 'cpp') {
        code.innerHTML = `int main() {
    std::cout << "Hello World!";
}`
    }
    console.log(code.innerHTML);
    codeText.appendChild(code);
}

window.addEventListener('load', provideCode);

function runCode() {
    let outputVal = document.getElementById('outputval');
    outputVal.innerHTML = "Hello World!";
}
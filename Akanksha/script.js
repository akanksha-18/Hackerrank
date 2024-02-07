function runCode() {
    const code = document.getElementById('code').value;
    const outputFrame = document.getElementById('output');
    const output = outputFrame.contentDocument || outputFrame.contentWindow.document;
    
    output.open();
    output.write('<html><head><style>body { font-family: Arial, sans-serif; }</style></head><body>');
    output.write('<script>' + code + '</script>');
    output.write('</body></html>');
    output.close();
}

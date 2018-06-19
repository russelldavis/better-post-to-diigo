$ = document.querySelector.bind(document)

function main() {
  $('#tags').focus();
  $('#privateInput').checked = true;
  document.addEventListener('keypress', handleKeyPress, true);
  document.addEventListener('keydown', handleKeyPress, true);
}

function handleKeyPress(e)
{
  if (e.key === "Enter" && e.target.nodeName.toLowerCase() === "input") {
    $(".promptButton").click()
  }
}

main();

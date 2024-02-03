let boardsStr = localStorage.getItem("boards");

console.log(boardsStr);
if (boardsStr === null) {
    const listStr = JSON.stringify([]);
    localStorage.setItem("boards", listStr);
    boardsStr = listStr;
}
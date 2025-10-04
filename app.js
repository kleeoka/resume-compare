function gradePassages() {
  const p1 = document.getElementById("passage1").value;
  const p2 = document.getElementById("passage2").value;

  // Extract 5+ letter words
  const getWords = text => (text.toLowerCase().match(/\b[a-z]{5,}\b/g) || []);

  const words1 = getWords(p1);
  const words2 = getWords(p2);

  const set1 = new Set(words1);
  const set2 = new Set(words2);

  // Overlap calculation
  let overlap = [];
  set1.forEach(word => {
    if (set2.has(word)) overlap.push(word);
  });

  const totalWords = set1.size + set2.size;
  let grade = totalWords > 0 ? Math.round((overlap.length / totalWords) * 100) : 0;
  if(grade <= 20) grade = grade * 3;
  else if(grade <= 40) grade = grade * 2;


  // Display results
  document.getElementById("result").style.display = "block";
  document.getElementById("score").innerText = `Score: ${grade}/ 100`;
}

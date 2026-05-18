 
const form = document.getElementById("evaluator-form");
const jobDescriptionInput = document.getElementById("job-description");
const fileInput = document.getElementById("resume");
const resultsDiv = document.getElementById("results");


form.addEventListener("submit", function (event) {
  
  event.preventDefault(); 


  const jobDescriptionText = jobDescriptionInput.value.trim(); 
  


  if (jobDescriptionText === "") {
    resultsDiv.innerHTML = '<p style="color: red;">Please enter a job description.</p>';
    return; 
  }

 
  if (fileInput.files.length === 0) {
    resultsDiv.innerHTML = '<p style="color: red;">Please upload a PDF resume.</p>';
    return; 
  }

  const fileName = fileInput.files[0].name; 
  
  resultsDiv.innerHTML = `
    <p style="color: green;">
      <strong>Success!</strong><br><br>
      Evaluating <em>${fileName}</em> against the job description...<br>
      (ChatGPT integration coming in Stage 5)
    </p>
  `;
});

export default function Documents() {
  return (
    <>
      <h2 id="documents-title">Documents & Contact Info</h2>
      <div id="documents">
        <div id="documents-image">
          <h3>Resume:</h3>
          <img src="/res1.png" id="resume-image" alt="Page 1 of Ryan Petrat's Resume"/>
        </div>
        <div id="documents-other">
          <h3>Other:</h3>
          <ul>
            <li><a target="_blank" href="/RyanPetratResume.pdf">PDF of my Resume</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/rpetrat/">My linkedin Page</a></li>
            <li><a target="_blank" href="https://github.com/rypetrat"> My Github Page</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
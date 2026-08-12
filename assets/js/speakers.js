document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("speaker-modal");
  const modalName = document.getElementById("speaker-modal-name");
  const modalBio = document.getElementById("speaker-modal-bio");
  const closeButton = document.getElementById("speaker-modal-close");

  const modalLinkWrapper = document.getElementById("speaker-modal-link-wrapper");
  const modalLink = document.getElementById("speaker-modal-link");

  const speakerDataElement = document.getElementById("speaker-data");

  if (!modal || !speakerDataElement) {
    console.error("Speaker modal or speaker data not found.");
    return;
  }

  const speakers = JSON.parse(speakerDataElement.textContent);

  document.querySelectorAll(".speaker-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const speakerId = link.dataset.speakerId;
      const speaker = speakers[speakerId];

      if (!speaker) {
        console.error("Speaker not found:", speakerId);
        return;
      }

      modalName.textContent = speaker.name || "";
      modalBio.textContent = speaker.bio || "";

      if (speaker.website) {
        modalLink.href = speaker.website;
        modalLink.textContent = speaker.website_label || "Website";
        modalLinkWrapper.style.display = "block";
      } else {
        modalLink.href = "#";
        modalLinkWrapper.style.display = "none";
      }

      modal.showModal();
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modal.close();
    });
  }

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.close();
    }
  });
});

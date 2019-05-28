'use strict';

$(document).ready(onInit)

function onInit() {
    renderPortfolio();
    addEventListeners();
}

function addEventListeners() {
    $('.portfolio-link').click(function() {
        var projId = $(this).attr('data-id')
        renderProjModal(projId);
    })

    $('.contact-nav').click(openCanvas)

    $('.contact-submit').click(onContactSubmit)
    $('#input-message').on('keypress', function(ev) {
            if (ev.which === 13) onContactSubmit();
    })
}

function renderPortfolio() {
    console.log('rendering portfolio');
    var $elPortfolio = $('#portfolio .row')[1];
    gProjects.forEach(function(proj) {
        var elProject = genPortfolioProjEls(proj.id, proj.name, proj.title, proj.labels)
        $($elPortfolio).append(elProject);
    })
}

function renderProjModal(projId) {
    projId = parseInt(projId);
    var $elProjModal = $('.modal-body')[0]
    var proj = gProjects.find(function(proj) {
        return (projId === proj.id)
    })
    $($elProjModal).html(genProjModalEls(proj.id, proj.name, proj.title, proj.desc, proj.url, proj.publishedAt, proj.labels))
}

function genPortfolioProjEls(projId, projName, projLabels) {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" data-id="${projId}" href="#portfolioModal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${projId}-thumbnail.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${projName}</h4>
      <p class="text-muted">${projLabels}</p>
    </div>
  </div>`
}

function genProjModalEls(projId, projName, projTitle, projDesc, projUrl, publishedAt, projLabels) {
    return `<h2>${projName}</h2>
    <p class="item-intro text-muted">${projTitle}</p>
    <button><a href="${projUrl}" target="_blank">Check it out here!</a></button>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${projId}-full.jpg" alt="">
    <p>${projDesc}</p>
    <ul class="list-inline">
      <li>Date: ${publishedAt}</li>
      <li>Client: Coding Academy</li>
      <li>Category: ${projLabels}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
    `
}

function onContactSubmit() {
    var $email = $('#email').val(); // Not really used for now, user send from his private mail
    var $subject = $('#subject').val();
    var $message = $('#input-message').val();
    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=avnery@gmail.com&su=${$subject}&body=${$message}`,
        '_blank'
      )
    $('#email').val('')
    $('#subject').val('')
    $('#input-message').val('')
    openCanvas();
}

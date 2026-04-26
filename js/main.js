document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#111111';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
      } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
      }
    });
  }

  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]').value;
      if (email) {
        form.innerHTML =
          '<p class="text-success mb-0 fw-bold"><i class="fas fa-check-circle me-2"></i>Thank you for subscribing!</p>';
      }
    });
  });

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(contactForm);
      var name = formData.get('name');
      contactForm.innerHTML =
        '<div class="text-center py-4"><i class="fas fa-check-circle text-success" style="font-size:3rem"></i>' +
        '<h4 class="mt-3">Thank you, ' + escapeHtml(name) + '!</h4>' +
        '<p class="text-muted">We\'ll get back to you within 24 hours.</p></div>';
    });
  }

  var requestForm = document.getElementById('requestForm');
  if (requestForm) {
    requestForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(requestForm);
      var name = formData.get('name');
      requestForm.innerHTML =
        '<div class="text-center py-4"><i class="fas fa-check-circle text-success" style="font-size:3rem"></i>' +
        '<h4 class="mt-3">Thanks, ' + escapeHtml(name) + '!</h4>' +
        '<p class="text-muted">A team member will contact you shortly.</p></div>';
    });
  }

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // Scroll fade-in animations
  var fadeEls = document.querySelectorAll('.product-card, .testimonial-card, .blog-card, .contact-info-card, .value-card, .stat-item, .timeline-item, .accessory-item, .event-card, .dealer-card');
  fadeEls.forEach(function (el) { el.classList.add('fade-up'); });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  fadeEls.forEach(function (el) { observer.observe(el); });

  // Back to top button
  var btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(btn);
  window.addEventListener('scroll', function () {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

function escapeHtml(text) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

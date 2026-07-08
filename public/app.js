document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects-grid');
  const loadingSpinner = document.getElementById('loading-spinner');
  const filterTabs = document.getElementById('filter-tabs');
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const loader = submitBtn.querySelector('.loader');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  let allProjects = [];

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });

  async function fetchProjects() {
    try {
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Failed to retrieve projects from database.');
      }
      
      const data = await response.json();
      allProjects = data.projects || [];
      renderProjects(allProjects);
    } catch (err) {
      console.error('Error fetching projects:', err);
      projectsGrid.innerHTML = `
        <div class="no-projects">
          <p style="color: HSL(350, 80%, 60%)">⚠️ Error: Could not load projects at this time.</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Please check if the Node.js server is running.</p>
        </div>
      `;
    } finally {
      if (loadingSpinner) {
        loadingSpinner.remove();
      }
    }
  }

  function renderProjects(projectsToRender) {
    const spinner = document.getElementById('loading-spinner');
    projectsGrid.innerHTML = '';
    if (spinner) {
      projectsGrid.appendChild(spinner);
    }

    if (projectsToRender.length === 0) {
      projectsGrid.innerHTML = `
        <div class="no-projects">
          <p>No projects found matching this category.</p>
        </div>
      `;
      return;
    }

    projectsToRender.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card glass';

      const tagsHTML = project.tags
        .map(tag => `<span class="project-tag">${tag.trim()}</span>`)
        .join('');

      const githubLinkHTML = project.github_link && project.github_link !== '#'
        ? `<a href="${project.github_link}" target="_blank" rel="noopener noreferrer" class="project-link">
             <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
               <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
             </svg>
             Code
           </a>`
        : '';

      const demoLinkHTML = project.live_link && project.live_link !== '#'
        ? `<a href="${project.live_link}" target="_blank" rel="noopener noreferrer" class="project-link">
             <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
               <polyline points="15 3 21 3 21 9"></polyline>
               <line x1="10" y1="14" x2="21" y2="3"></line>
             </svg>
             Live Demo
           </a>`
        : '';

      card.innerHTML = `
        <div class="project-img-wrapper">
          <img src="${project.image_url}" alt="${project.title}" class="project-img" loading="lazy">
          <span class="project-category">${project.category}</span>
        </div>
        <div class="project-details">
          <h3>${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">${tagsHTML}</div>
          <div class="project-links">
            ${githubLinkHTML}
            ${demoLinkHTML}
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });
  }

  filterTabs.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    const selectedCategory = e.target.dataset.category;

    if (selectedCategory === 'all') {
      renderProjects(allProjects);
    } else {
      const filtered = allProjects.filter(p => p.category === selectedCategory);
      renderProjects(filtered);
    }
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    loader.classList.remove('hidden');

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        showToast('✓ message sent successfully!', 'success');
        contactForm.reset();
      } else {
        throw new Error(result.error || 'Server error occurred.');
      }
    } catch (error) {
      console.error('Contact error:', error);
      showToast(`❌ Error: ${error.message}`, 'error');
    } finally {
      submitBtn.disabled = false;
      btnText.classList.remove('hidden');
      loader.classList.add('hidden');
    }
  });

  fn_showToast = (message, type) => {
    toastMessage.textContent = message;
    
    const contentBox = toast.querySelector('.toast-content');
    const icon = toast.querySelector('.toast-icon');
    
    if (type === 'success') {
      contentBox.style.borderColor = 'rgba(20, 184, 166, 0.4)';
      icon.style.background = 'var(--color-secondary)';
      icon.textContent = '✓';
    } else {
      contentBox.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      icon.style.background = 'rgba(239, 68, 68, 1)';
      icon.textContent = '!';
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  function showToast(message, type) {
    fn_showToast(message, type);
  }

  fetchProjects();
});

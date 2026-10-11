
        document.getElementById('year-span').innerText = new Date().getFullYear();

        // Scroll Observer for Fade-In Effects
        function initScrollObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }

        // State trackers for Computer Operation & Coding
        let currentOpPrice = "30000";
        let currentOpDuration = "1 Month";
        let currentCodingPace = "1 Month (Intensive Boot)";

        function setOpPrice(price, duration) {
            currentOpPrice = price;
            currentOpDuration = duration;
        }

        function setCodingDuration(pace) {
            currentCodingPace = pace;
        }

        // Mobile drawer navigation toggle
        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }
        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

        // Code Sandbox Logic
        function runSandboxCode() {
            const code = document.getElementById('sandbox-code-input').value;
            document.getElementById('sandbox-output').innerHTML = code;
        }

        function loadTemplate(type) {
            const input = document.getElementById('sandbox-code-input');
            if (type === 'button') {
                input.value = `<div style="text-align:center; padding:20px;">
  <button style="background:#10b981; color:white; padding:12px 24px; border:none; border-radius:12px; font-weight:bold; cursor:pointer;">
    🚀 Send WhatsApp Application
  </button>
</div>`;
            } else if (type === 'card') {
                input.value = `<div style="background:#1e293b; padding:16px; border-radius:12px; font-family:sans-serif; color:white; max-width:250px; margin:auto; border:1px solid #334155;">
  <h3 style="color:#06b6d4; margin:0;">PrintKay's Tech</h3>
  <p style="font-size:12px; color:#94a3b8;">Coding & Networking Student</p>
  <span style="background:#10b981; font-size:10px; padding:2px 8px; border-radius:4px;">3 Hours Practical</span>
</div>`;
            }
            runSandboxCode();
        }

        // Curriculum Filter Logic
        let currentCategory = 'all';

        function setCategoryFilter(cat) {
            currentCategory = cat;
            ['all', 'appreciation', 'coding', 'networking'].forEach(c => {
                const btn = document.getElementById(`filter-btn-${c}`);
                if (c === cat) {
                    btn.className = "px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500 text-white font-semibold transition-all";
                } else {
                    btn.className = "px-4 py-2 rounded-xl text-xs font-mono glass-card text-slate-300 hover:text-white transition-all";
                }
            });
            filterCurriculum();
        }

        function filterCurriculum() {
            const query = document.getElementById('curriculum-search').value.toLowerCase().trim();
            const cards = document.querySelectorAll('.course-card');

            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                const keywords = card.getAttribute('data-keywords').toLowerCase();
                const text = card.innerText.toLowerCase();

                const matchesCat = (currentCategory === 'all' || category === currentCategory);
                const matchesSearch = (!query || keywords.includes(query) || text.includes(query));

                if (matchesCat && matchesSearch) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        // Certificate Preview
        function updateCertificate() {
            const name = document.getElementById('cert-name-input').value.trim();
            document.getElementById('cert-preview-name').innerText = name || "Your Full Name";
        }

        // Accordion
        function toggleFaq(id) {
            const ans = document.getElementById(`faq-ans-${id}`);
            const icon = document.getElementById(`faq-icon-${id}`);
            if (ans.classList.contains('hidden')) {
                ans.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                ans.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }

        // Open Enrollment Modal with Pre-filled Program Data
        function openEnrollModal(programName, price, duration) {
            document.getElementById('modal-course').value = programName;
            document.getElementById('modal-duration').value = duration || "Standard";
            document.getElementById('modal-fee').value = "₦" + parseInt(price).toLocaleString();
            document.getElementById('enroll-modal').classList.remove('hidden');
        }

        function closeEnrollModal() {
            document.getElementById('enroll-modal').classList.add('hidden');
        }

        // Construct & Send WhatsApp Message Directly to 09020730693 (+2349020730693)
        function sendToWhatsApp(event) {
            event.preventDefault();

            const name = document.getElementById('modal-name').value.trim();
            const phone = document.getElementById('modal-phone').value.trim();
            const program = document.getElementById('modal-course').value;
            const duration = document.getElementById('modal-duration').value;
            const fee = document.getElementById('modal-fee').value;
            
            const venueRadios = document.getElementsByName('learning-venue');
            let venue = "Facility (Free)";
            for (const radio of venueRadios) {
                if (radio.checked) {
                    venue = radio.value;
                    break;
                }
            }

            const targetWhatsApp = "2349020730693"; // Official WhatsApp Number: 09020730693

            const message = 
`*NEW ENROLLMENT APPLICATION - PRINTKAY'S TECH*
----------------------------------------
👤 *Full Name:* ${name}
📞 *Phone Number:* ${phone}
🎓 *Program:* ${program}
⏱️ *Duration/Pace:* ${duration}
💰 *Tuition Fee:* ${fee}
🏢 *Learning Venue:* ${venue}
🕒 *Session Length:* 3 Hours Per Class
----------------------------------------
Hello PrintKay's Tech, I would like to confirm my registration and receive payment details!`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${targetWhatsApp}?text=${encodedMessage}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');
            closeEnrollModal();
        }

        window.addEventListener('DOMContentLoaded', () => {
            runSandboxCode();
            initScrollObserver();
        });
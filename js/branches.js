// ===========================
// Branches Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('branchSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const branchCards = document.querySelectorAll('.branch-card');
    const noResults = document.getElementById('noResults');

    let currentFilter = 'all';

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterBranches();
        });
    }

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter value
            currentFilter = this.getAttribute('data-filter');
            
            // Filter branches
            filterBranches();
        });
    });

    function filterBranches() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        let visibleCount = 0;

        branchCards.forEach(card => {
            const zone = card.getAttribute('data-zone');
            const text = card.textContent.toLowerCase();
            
            // Check if card matches zone filter
            const matchesZone = currentFilter === 'all' || zone === currentFilter;
            
            // Check if card matches search term
            const matchesSearch = text.includes(searchTerm);
            
            // Show or hide card
            if (matchesZone && matchesSearch) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Show/hide no results message
        if (noResults) {
            if (visibleCount === 0) {
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
            }
        }
    }

    // Add transition styles to branch cards
    branchCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

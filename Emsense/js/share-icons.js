// Inject SVG icons into share buttons and add click handlers
document.addEventListener('DOMContentLoaded', function() {
    var pageUrl = encodeURIComponent(window.location.href);
    var pageTitle = encodeURIComponent(document.title);

    // Get first image for Pinterest
    var firstImg = document.querySelector('img[data-src], img[src]');
    var imageUrl = firstImg ? encodeURIComponent(firstImg.getAttribute('data-src') || firstImg.src) : '';

    // Facebook icon + click handler
    document.querySelectorAll('.elementor-share-btn_facebook').forEach(function(btn) {
        var iconEl = btn.querySelector('.elementor-share-btn__icon');
        if (iconEl) {
            iconEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 320 512" fill="white"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>';
        }
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + pageUrl, '_blank', 'width=600,height=400');
        });
    });

    // X/Twitter icon + click handler
    document.querySelectorAll('.elementor-share-btn_x-twitter, .elementor-share-btn_twitter').forEach(function(btn) {
        var iconEl = btn.querySelector('.elementor-share-btn__icon');
        if (iconEl) {
            iconEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512" fill="white"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>';
        }
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function() {
            window.open('https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + pageTitle, '_blank', 'width=600,height=400');
        });
    });

    // Pinterest icon + click handler
    document.querySelectorAll('.elementor-share-btn_pinterest').forEach(function(btn) {
        var iconEl = btn.querySelector('.elementor-share-btn__icon');
        if (iconEl) {
            iconEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512" fill="white"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>';
        }
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function() {
            window.open('https://pinterest.com/pin/create/button/?url=' + pageUrl + '&description=' + pageTitle + '&media=' + imageUrl, '_blank', 'width=600,height=400');
        });
    });

    // WhatsApp icon + click handler
    document.querySelectorAll('.elementor-share-btn_whatsapp').forEach(function(btn) {
        var iconEl = btn.querySelector('.elementor-share-btn__icon');
        if (iconEl) {
            iconEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>';
        }
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function() {
            window.open('https://wa.me/?text=' + pageTitle + '%20' + pageUrl, '_blank');
        });
    });
});
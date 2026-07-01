// Vercel Speed Insights
// https://vercel.com/docs/speed-insights/quickstart
(function() {
  window.si = window.si || function() {
    (window.siq = window.siq || []).push(arguments);
  };
  
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  // Append script to document head when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  } else {
    document.head.appendChild(script);
  }
})();

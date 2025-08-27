// Icon mapping component for Font Awesome icons
const Icon = ({ name, className = "", ...props }) => {
  const iconMap = {
    'home': 'fas fa-home',
    'book-open': 'fas fa-book-open',
    'file-text': 'fas fa-file-alt',
    'info': 'fas fa-info-circle',
    'mail': 'fas fa-envelope',
    'graduation-cap': 'fas fa-graduation-cap',
    'arrow-left': 'fas fa-arrow-left',
    'arrow-right': 'fas fa-arrow-right',
    'clock': 'fas fa-clock',
    'filter': 'fas fa-filter',
    'lightbulb': 'fas fa-lightbulb',
    'award': 'fas fa-award',
    'hourglass': 'fas fa-hourglass',
    'upload': 'fas fa-upload',
    'book': 'fas fa-book',
    'calendar': 'fas fa-calendar',
    'code': 'fas fa-code',
    'flask-conical': 'fas fa-flask',
    'users': 'fas fa-users'
  };

  const iconClass = iconMap[name] || `fas fa-${name}`;
  
  return React.createElement('i', {
    className: `${iconClass} ${className}`,
    ...props
  });
};

// Make Icon component globally available
window.Icon = Icon;

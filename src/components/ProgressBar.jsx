import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ height = '3px', backgroundColor = '#ccc', progressColor = '#4CAF50' }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lógica para calcular o progresso (exemplo simplificado)
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const progressPercent = ((scrollTop / (documentHeight - windowHeight)) * 100).toFixed(2);
      setProgress(progressPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full fixed shadow-xl " style={{ height, backgroundColor }}>
    <div className="" style={{ width: `${progress}%`, backgroundColor: progressColor, height }}>
      
    </div>
  </div>
  );
}
ProgressBar.propTypes = {
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  progressColor: PropTypes.string,
};

export default ProgressBar;

import React from 'react'
import { useState } from 'react';

export default function ReadingProgressBar({ target }) {
  const [readingProgress, setReadingProgress] = useState(0)

  const scrollListener = () => {
    if (!target.current) {
      return;
    }
    const element = target.current;
    const totalHeight = element.clientHeight - element.offsetTop - 571.5;
    if (totalHeight < 1000) {
      return;
    }
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }


    setReadingProgress((windowScrollTop / totalHeight) * 100);
    // console.log(windowScrollTop,totalHeight);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  })

  return (
    <div className={`reading-progress-bar`} style={{ width: `${readingProgress}%` }} />
  )
}


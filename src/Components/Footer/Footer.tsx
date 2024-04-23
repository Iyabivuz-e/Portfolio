// import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="text-center p-3 mt-6 dark:bg-neutral-900">
      <p className="text-zinc-600">
        &copy; {year} Designed and Developed by Dieudonne Iyabivuze. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer

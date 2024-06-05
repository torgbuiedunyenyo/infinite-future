import React from 'react'

const Footer = () => {
  return (
    <>
<footer className="  border-t border-current sticky top-[100vh]">
  <div className="mx-auto w-full max-w-screen-xl p-4 ">
   

    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm  sm:text-center ">© {new Date().getFullYear()} 
      {'.  '}
      {/* <a href="https://handshake.fyi/?utm_source=sisu" target='_blank' rel="noreferrer" className="hover:underline">Handshake</a>.
       */}
       All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0 items-center space-x-4">
        <a target='_blank' href="https://discord.gg/2wuvKHP7XY" title='Discord' className=" hover:text-gray-900">
       
        <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8944 4.34399C17.5184 3.71467 16.057 3.256 14.5317 3C14.3397 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14394 4.13067C8.9946 3.77866 8.77059 3.33067 8.58925 3C7.05328 3.256 5.59194 3.71467 4.22555 4.34399C1.46289 8.41865 0.716219 12.3973 1.08955 16.3226C2.92421 17.6559 4.6949 18.4666 6.43463 19C6.86129 18.424 7.2453 17.8053 7.57597 17.1546C6.94663 16.92 6.3493 16.632 5.7733 16.2906C5.92263 16.184 6.07197 16.0667 6.21064 15.9493C9.68796 17.5387 13.4544 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5237 17.1546C15.8543 17.8053 16.2384 18.424 16.665 19C18.4037 18.4666 20.185 17.6559 22.0101 16.3226C22.4687 11.7787 21.2837 7.83202 18.8944 4.34399ZM8.05596 13.9013C7.01061 13.9013 6.15728 12.952 6.15728 11.7893C6.15728 10.6267 6.98928 9.67731 8.05596 9.67731C9.11194 9.67731 9.97591 10.6267 9.95457 11.7893C9.95457 12.952 9.11194 13.9013 8.05596 13.9013ZM15.065 13.9013C14.0197 13.9013 13.1653 12.952 13.1653 11.7893C13.1653 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9637 11.7893C16.9637 12.952 16.1317 13.9013 15.065 13.9013Z" fill="currentColor"/>
</svg>
          <span className="sr-only">Discord</span>
        </a>
        <a target='_blank' title=" SubSlack" href="https://handshakefyi.substack.com" className=" hover:text-gray-900 ">
        <svg className="w-4 h-4"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.539 8.242H1.46V5.406h21.08zM1.46 10.812V24L12 18.11L22.54 24V10.812zM22.54 0H1.46v2.836h21.08z"/>
        </svg>
          <span className="sr-only"> SubSlack</span>
        </a>
        <a target='_blank' title="LinkedIn" href="https://www.linkedin.com/in/jeremy-kirshbaum-6294b01a1/" className=" hover:text-gray-900 ">
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
        <span className="sr-only">Linkedin page</span>
        </a>

      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
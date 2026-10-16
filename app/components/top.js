const Top = () => (
  <div className="topbar bg-[#241a24] text-[#ffec9e]">
    <div className="mx-auto flex min-h-[60px] max-w-[1600px] flex-col items-center justify-center gap-x-5 gap-y-0 px-3 py-1 text-[10px] sm:min-h-[40px] sm:flex-row sm:justify-end sm:gap-y-1 sm:px-7 sm:text-[11px] lg:px-10">
      <div className="inline-flex min-h-7 items-center gap-1.5 sm:gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3.5 w-3.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
        <a href="tel:+233503192450" className="hover:text-white">+233 50 319 2450</a>
        <span aria-hidden="true">|</span>
        <a href="tel:+233547873650" className="hover:text-white">+233 54 787 3650</a>
      </div>
      <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
      <a href="mailto:queennetifaquaye@gmail.com" className="inline-flex min-h-7 items-center gap-2 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3.5 w-3.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
        <span>queennetifaquaye@gmail.com</span>
      </a>
    </div>
  </div>
);

export default Top;

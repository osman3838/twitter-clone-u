import { useState } from "react"

const Search = () => {
    const [query,setQuery] = useState('');
    const [focus,setFocus] = useState('');

  return (
    <div className="min-h-[32px] w-full flex items-center h-[53px] mb-3">
        <label className=" relative  h-[43px] group w-full  rounded-full bg-[#202327] focus-within:bg-black border border-transparent focus-within:border-[#1D9BF0] "> 
        <div className="absolute w-[56px] h-full flex pointer-events-none  justify-center items-center">

        <svg height={18.75} viewBox="0 0 24 24" aria-hidden="true" className=" r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1bwzh9t r-4wgw6l r-f727ji  h-4 min-w-[32px] "><g><path  fill="#70757a"  d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
      </div>
<input onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Ara"  className="placeholder:text-[#70757a] w-full h-full rounded-full outline-none pl-[56px] pr-[43px] text-[15px] bg-transparent"/> 
{
    query &&(
        <button onClick={() => setQuery("")} type="button" className=" invisible group-focus-within:visible absolute right-3 top-1/2 -translate-y-1/2 bg-[#1D9BF0] p-1 rounded-full w-[22px] h-[22px] flex justify-center items-center">
            <svg viewBox="0 0 15 15" width={10} height={10} aria-hidden="true" fill="black"  className=" r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cqee49 r-1or9b2r r-5soawk"><g><path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path></g></svg>
        </button>
    )
} 
{
    focus || query  ?

    (

    
<div onClick={() => setFocus(true)} className="absolute justify-center min-h-[100px]  h-[100px] flex items-center shadow-box  top-full w-full max-h-[calc(80vh - 53px)] rounded-lg">
<p className="leading-5 px-4"> 
Kişileri, listeleri veya anahtar kelimeleri aramayı dene
</p>
</div>
) : null
} 
        </label>
        
        </div>
  )
}

export default Search
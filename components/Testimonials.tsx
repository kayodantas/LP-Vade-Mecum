"use client"

import { useRef, useEffect } from "react"
import SectionTitle from "./SectionTitle"

export default function Testimonials() {
  const pandaVideoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load PandaVideo script for testimonial
    const script = document.createElement("script")
    script.innerHTML = `
      if(!document.querySelector('script[src^="https://player.pandavideo.com.br/api.v2.js"]')){
        let s=document.createElement('script');
        s.src='https://player.pandavideo.com.br/api.v2.js';
        s.async=true;
        document.head.appendChild(s);
      }
      window.pandascripttag=window.pandascripttag||[];
      window.pandascripttag.push(function(){
        const p=new PandaPlayer('bdd1b9c1-ec99-46cc-bee7-2a6c1c290a08',{
          library_id: 'vz-f90b6bf6-020',
          video_id: 'bdd1b9c1-ec99-46cc-bee7-2a6c1c290a08',
          external_id: 'bdd1b9c1-ec99-46cc-bee7-2a6c1c290a08',
          defaultStyle:true
        });
      });
    `

    if (pandaVideoRef.current) {
      pandaVideoRef.current.appendChild(script)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="w-full bg-[#F4F6FA] section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              Quem confiou e estudou, aprovou o material e <span className="gradient-text">foi aprovado</span>
            </>
          }
        />

        {/* Video Testimonial */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto aspect-[9/16] rounded-xl overflow-hidden shadow-xl">
            <div id="bdd1b9c1-ec99-46cc-bee7-2a6c1c290a08" ref={pandaVideoRef} className="w-full h-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

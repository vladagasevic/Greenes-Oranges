'use client';

function Slide() {
  return (
    <div className="mySlides fade">
      <img src="covers/pexels-pixabay-356036.jpg"/>
    </div>
  )
}

function Dot() {
  return (
    <span className="dot" onClick={() => {
      const slides = document.getElementsByClassName("reklame-slides");
      const dots = document.getElementsByClassName("dot");

      let el = 0;
      for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
          el = -1;
          for (let j = 0; j < slides.length; j++)
            slides[j].className = slides[j].className.replace("oglas-result-location", "d-none");

          for (let j = 0; j < dots.length; j++)
            dots[j].classList.remove("active")

          slides[i].className = slides[i].className.replace("d-none", "oglas-result-location");
          dots[i].classList.add("active")
        });
      }
    }} />
  )
}

export default function Home() {
  function showSlides() {
    if (el === -1) return;
    if (el > slides.length - 1) el = 0;

    slides[el].className = slides[el].className.replace("d-none", "oglas-result-location");
    dots[el].classList.add("active");

    let prev = el === 0 ? dots.length - 1 : el - 1;
    dots[prev].classList.remove("active");
    slides[prev].className = slides[prev].className.replace("oglas-result-location", "d-none");
    el++;

    setTimeout(showSlides, 3000);
  }

  function leftClick() {
    const els = document.getElementsByClassName("ponuda");
    let fv = 0;
    if (fv > 0) {
      els[fv + 2].classList.add("d-none");
      els[fv - 1].classList.remove("d-none");
      fv--;
    }
  }

  function rightClick() {
    const els = document.getElementsByClassName("ponuda");
    let fv = 0;
    if (fv < els.length - 3) {
      els[fv].classList.add("d-none");
      els[fv + 3].classList.remove("d-none");
      fv++;
    }
  }

  return (
    <main>
      Digitalizacija u sektoru obnovljivih izvora energije igra ključnu ulogu u optimizaciji, praćenju i upravljanju obnovljivim izvorima energije. Razvojem seta potrebnih komptencija u okviru programa zaštite životne sredine, pojačaće se kvalitet i raznovrsnost stručnog kadra koji može da odgovori znanjem na izazove klimatskih promena i akutelne energetske krize.

      <div className="slideshow-container" onLoad={showSlides} style={{width: '100%'}}>
        <button onClick={leftClick}>&#10094;</button>
        <Slide />
        <button onClick={rightClick}>&#10095;</button>
      </div>

      <div style={{textAlign: 'center'}}>
        <Dot />
      </div>
    </main>
  )
}

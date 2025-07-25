import { useEffect, useRef, useState } from 'react';

const baseURL = '/assets';

const layers = {
  eyes: ["APE MOG.png", "Aviators.png", "Black.png", "Blue Beams.png", "Blue.png", "Bored.png", "Brown.png", "Closed.png", "Crash Dummy.png", "Cyborg.png", "Designer.png", "Eye Patch.png", "Futuristic Gold.png", "Futuristic.png", "GOB.png", "Geeked.png", "Goggles.png", "Gold Frame.png", "Green.png", "Grey.png", "Hacker.png", "Hazel.png", "Hetero.png", "High.png", "Hypno.png", "Laser.png", "MOG.png", "Morpheus.png", "NPC.png", "Not Cult.png", "Pink.png", "Purple.png", "Red.png", "Robo.png", "Scientist.png", "Scouter.png", "ScumBag.png", "Shades Red.png", "Shades.png", "Slim Shades.png", "Stoned.png", "Stunnas.png", "Sunglasses.png", "Sus.png", "Tired.png", "Tron.png", "VR.png", "Visor.png", "Welder.png", "Zombie.png"],
  fur: ["AI.png", "Alien.png", "Blue.png", "Brown.png", "Cheetah.png", "Cream.png", "DMT.png", "Death Bot.png", "Ember.png", "GOB.png", "Ghost.png", "Gold.png", "Golden Brown.png", "Golden Skellz.png", "Green.png", "Grey.png", "Incognito.png", "Magenta.png", "Noise.png", "OG.png", "Orange.png", "Pink Cheetah.png", "Pink.png", "Purp.png", "Red.png", "Skell.png", "Stone.png", "Tiger.png", "Trippy.png", "White.png", "Yellow.png", "Zombie.png"],
  hat: ["APE Brim Black.png", "APE Brim Cyan.png", "APE Brim Green.png", "APE Brim Magenta.png", "APE Brim Pink.png", "APE Brim Red.png", "APE Brim White.png", "APE Brim Yellow.png", "APE Brim.png", "APE Cap .png", "APE Cap Black.png", "APE Cap Cyan.png", "APE Cap Green.png", "APE Cap Magenta.png", "APE Cap Pink.png", "APE Cap Red.png", "APE Cap Yellow.png", "APE Knit Black.png", "APE Knit Green.png", "APE Knit Magenta.png", "APE Knit Pink.png", "APE Knit Red.png", "APE Knit Yellow.png", "APE Knit.png", "APE Ski 2.png", "APE Ski 3.png", "APE Ski.png", "Afro.png", "Anime.png", "Astro.png", "Beanie.png", "Big Brain.png", "BoHo.png", "Bored APE.png", "Bored Black.png", "Bored Cyan.png", "Bored Gold.png", "Bored Green.png", "Bored Magenta.png", "Bored N Hungry.png", "Bored Pink.png", "Bored Red.png", "Bored.png", "Bowler APE.png", "Bowler Cyan.png", "Bowler Green.png", "Bowler Magenta.png", "Bowler Pink.png", "Bowler Red.png", "Bowler White.png", "Bowler Yellow.png", "Brim APE.png", "Brim Black.png", "Brim Cyan.png", "Brim Green.png", "Brim Magenta.png", "Brim Pink.png", "Brim Red.png", "Brim White.png", "Brim Yellow.png", "Buildoor.png", "Cap APE.png", "Cap Black.png", "Cap Cyan.png", "Cap Green.png", "Cap Magenta.png", "Cap Pink.png", "Cap Red.png", "Cap Yellow.png", "Capt.png", "Commie.png", "Deng Diamond.png", "Deng Gold.png", "Deng.png", "Desperado.png", "DooM.png", "Fisher APE.png", "Fisher Black.png", "Fisher Cyan.png", "Fisher Green.png", "Fisher Magenta.png", "Fisher Pink.png", "Fisher Red.png", "Fisher White.png", "Fisher.png", "FrostByte.png", "GEE.png", "Gimp.png", "Habibi.png", "Halo.png", "Headband APE.png", "Headband Cyan.png", "Headband Green.png", "Headband Magenta.png", "Headband Pink.png", "Headband Red.png", "Headband Yellow.png", "Heisenberg.png", "Hero.png", "Horn.png", "HotHead.png", "Hunter.png", "King APE.png", "King.png", "Knit APE.png", "Knit Cyan.png", "Knit Green.png", "Knit Magenta.png", "Knit Pink.png", "Knit Red.png", "Knit Yellow.png", "Knit.png", "Madusa.png", "Mech.png", "Merica.png", "Miner.png", "Mohawk Cyan.png", "Mohawk Lime.png", "Mohawk Magenta.png", "Party 2.png", "Party 3.png", "Party.png", "Perm.png", "Pharoah.png", "Pirate APE.png", "Pirate Cyan.png", "Pirate Green.png", "Pirate Magenta.png", "Pirate Pink.png", "Pirate Red.png", "Pirate Yellow.png", "Prussian.png", "Rasta.png", "Red Ski 2.png", "Red Ski.png", "RiceHat.png", "Rose.png", "SSJ.png", "Safari.png", "Sailor.png", "Service.png", "Sheriff.png", "Ski.png", "Snap APE.png", "Snap Cyan.png", "Snap Green.png", "Snap Magenta.png", "Snap Pink.png", "Snap Red.png", "Snap White.png", "Snap Yellow.png", "Snap.png", "StrawHat.png", "Stunt.png", "Sweatband APE.png", "Sweatband.png", "UNI.png", "Viking.png", "Welder.png"],
  mouth: ["Blank.png", "Blunt.png", "Bored.png", "Bucky.png", "Cheerful.png", "ChocoNana.png", "Cig.png", "Drool CYMK.png", "Drool.png", "Dumbfounded.png", "GOB.png", "Gold Tooth.png", "Grill CYMK.png", "Grill Diamond.png", "Grill Gold.png", "Grin.png", "Grit.png", "Grr.png", "Gum.png", "Kazoo.png", "King Kong.png", "Kong.png", "Mask Red.png", "Mask.png", "Missing Tooth.png", "Nana.png", "Oohhh.png", "Pipe.png", "Pizza.png", "Puke CYMK.png", "Sad.png", "Shocked.png", "Smile.png", "Smirk.png", "StrawNana.png", "Tongue.png", "Toothless.png", "Vape.png", "Yikes.png"],
};

const layerOrder = ['background', 'fur', 'clothes', 'hat', 'eyes', 'mouth'];

export default function LayerEditor() {
  const canvasRef = useRef(null);
  const [selected, setSelected] = useState(
    Object.fromEntries(Object.entries(layers).map(([k, v]) => [k, v[0]]))
  );

  useEffect(() => {
    const draw = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const layer of layerOrder) {
        const img = new Image();
        img.src = `${baseURL}/${layer}/${selected[layer]}`;
        await new Promise((res) => (img.onload = res));
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };
    draw();
  }, [selected]);

  return (
    <div style={{
      padding: 20,
      fontFamily: 'Segoe UI, sans-serif',
      background: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center' }}>PRIME8 NFT Generator</h1>
      <canvas ref={canvasRef} width={500} height={500} style={{ display: 'block', margin: '0 auto', border: '1px solid #ccc' }} />

      {layerOrder.map((layer) => (
        <div key={layer} style={{ marginTop: 20 }}>
          <h3 style={{ marginBottom: 8 }}>{layer.toUpperCase()}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {layers[layer].map((filename) => (
              <div
                key={filename}
                onClick={() => setSelected((prev) => ({{ ...prev, [layer]: filename }}))}
                style={{
                  cursor: 'pointer',
                  border: selected[layer] === filename ? '3px solid #0070f3' : '1px solid #ccc',
                  borderRadius: 6,
                  padding: 4,
                  background: '#fff',
                  transition: 'all 0.2s'
                }}
              >
                <img
                  src={`${baseURL}/${layer}/${filename}`}
                  alt={filename}
                  width={64}
                  height={64}
                  style={{ display: 'block', borderRadius: 4 }}
                />
                <div style={{ fontSize: 12, textAlign: 'center', marginTop: 4, maxWidth: 80 }}>{filename.replace('.png','')}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

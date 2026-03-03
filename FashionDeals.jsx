import "./FashionDeals.css";
export default function FashionDeals() {
  return (
    <div className="fk-section-wrapper">
      <div className="fk-card">
        <div className="fk-card-header">
          <h3>Top picks of the sale</h3>
          <span className="fk-arrow">›</span>
        </div>

        <div className="fk-grid">
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/remote-control-toy/2/b/d/3d-police-friction-car-toy-with-lights-music-3-twist-n-turn-original-imahk48zqubqnc2y.jpeg?q=60"
            title="Remote Control Toy Vehicle"
            offer="Min. 50% Off"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/electric-cycle/0/j/6/udaan-black-60km-lcd-black-23-23-5-green-single-speed-original-imahhnfkqazgv4yc.jpeg?q=60"
            title="Electric Cycle"
            offer="Min. 40% Off"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/electronic-hobby-kit/v/x/3/diy-speaker-kit-with-bluetooth-board-electrobot-original-imah2y559shzjzef.jpeg?q=60"
            title="Electronic Kits"
            offer="Most-loved"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/dumbbell/f/l/n/30kg-pvc-weight-set-with-dumbbell-rods-3ft-straight-rod-acc-gym-original-imah6q92fu2gg2fc.jpeg?q=60"
            title="Back & Abdomen Support"
            offer="Special offer"
          />
        </div>
      </div>

      <div className="fk-card">
        <div className="fk-card-header">
          <h3>Home Decor & Furnishing</h3>
          <span className="fk-arrow">›</span>
        </div>

        <div className="fk-grid">
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/torch/g/y/o/3-1-s700-life-saving-led-torch-glass-breaker-seal-belt-cutter-3-original-imahjuwsjbezdfhj.jpeg?q=60"
            title="Torches"
            offer="Most-loved"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/pillow/j/a/f/15-p-4-top-ert-wyte-a41-4-p-4-wyte-top-ert-a41-goga-original-imah26cfrvhjqgyw.jpeg?q=60"
            title="Pillows"
            offer="Min. 50% Off"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/wall-clock/t/u/b/high-quality-quartz-decorative-classic-wall-clock-20-mt1202-20cm-original-imahgvggrfs9bzuw.jpeg?q=60"
            title="Wall Clocks"
            offer="Special offer"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/kz5vwy80/mat/v/c/r/medium-cotton-door-mats-5-01-asb-original-imagb85ruu47zzjy.jpeg?q=60"
            title="Mats"
            offer="Min. 50% Off"
          />
        </div>
      </div>

      <div className="fk-card">
        <div className="fk-card-header">
          <h3>Best Deals on Furniture</h3>
          <span className="fk-arrow">›</span>
        </div>

        <div className="fk-grid">
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/shoe-rack/x/q/x/4-layers-khodal-arth-black-original-imahbj52fhg6mhdq.jpeg?q=60"
            title="Shoe Rack"
            offer="Min. 50% Off"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/shopsy-collapsible-wardrobe/y/6/i/280-carbon-steel-570-1-4-at-4-firozi-attache-firozi-730-original-imahek4qcjkjzuvh.jpeg?q=60"
            title="Collapsible Wardrobes"
            offer="Min. 50% Off"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/home-temple/f/l/7/18-21-0-499-temple0201sdark-homewey-decor-32-original-imah3yzcnk9nhh5k.jpeg?q=60"
            title="Home Temple"
            offer="Min. 50% Off"
          />
          <Deal
            img="https://rukminim2.flixcart.com/image/420/420/xif0q/kitchen-trolley/b/r/e/0-3-stainless-steel-matka-stand-round-prerna-0-original-imah6gr3m9zmebuc.jpeg?q=60"
            title="Kitchen Trolleys"
            offer="Min. 50% Off"
          />
        </div>
      </div>

    </div>
  );
}

function Deal({ img, title, offer }) {
  return (
    <div className="fk-item">
      <img src={img} alt={title} />
      <p>{title}</p>
      <span>{offer}</span>
    </div>
  );
}

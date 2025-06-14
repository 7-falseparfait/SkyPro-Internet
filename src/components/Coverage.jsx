import { Button } from './Button';
import map from '/src/assets/map.png';
import { Modal } from './Modal';
import { coverageAreas as Areas } from '../data/coverageArea';
import { AreaList } from './AreaList';
import { useState } from 'react';
export function Coverage() {
  const [showModal, setModal] = useState(false);
  return (
    <section className="py-4 mt-10">
      <div className="lg:max-w-[1440px] mx-auto container-padding">
        <div className="w-full">
          <img className="object-contain" src={map} alt="map" />
        </div>
        <div className="w-full mx-auto flex flex-col items-center">
          <h1 className="!font-[800] !text-[3rem] place-self-center text-black">Our Reach</h1>
          <div className="my-8 text-[0.870rem] flex justify-between reach w-[80%] place-self-center">
            <div className="flex flex-col gap-6 text-left">
              <div>
                <h1>35+</h1>
                <p>Communities Covered</p>
              </div>
              <div>
                <h1>100+</h1>
                <p>Businesses Connected</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-left">
              <div>
                <h1>1,000+</h1>
                <p>Active Users</p>
              </div>
              <div>
                <h1>95.9%</h1>
                <p>Network Uptime</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Button
              className="font-[700] text-[1rem] w-[70%] mx-auto"
              variant="coverage"
              onClick={() => setModal(true)}
            >
              Check Coverage Now
            </Button>
            <Modal open={showModal} onClose={() => setModal(false)}>
              <h1 className="text-[#121212] !text-[1.24rem] mt-7 mb-4">
                {'Coverage Areas'.toUpperCase()}
              </h1>
              <AreaList areas={Areas} />
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';

function GreetingDialog() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/calender.json');
      const data = await response.json();

      const currentDate = new Date().toISOString().slice(0, 10);
      const matchingEntry = data.find(
        (entry) => entry.date === currentDate || entry.flag === "active"
      );

      setPopupData(matchingEntry);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (popupData) {
      setShowPopup(true);
    }
  }, [popupData]);
  console.log(popupData);
  return (
    <Dialog
      header={popupData?.title || 'Important Information'}
      visible={showPopup}
      onHide={() => setShowPopup(false)}
      style={{ width: '50vw' }}>
      <Tag severity="success" value={popupData?.tag}></Tag>
      {popupData && <p>{popupData.description}</p>}
    </Dialog>
  );
};

export default GreetingDialog;
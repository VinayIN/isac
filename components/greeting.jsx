import { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';

function GreetingDialog() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/popup.json');
      const data = await response.json();

      const currentDate = new Date().toISOString().slice(5, 10);
      const matchingEntry = (
        data.find((entry) => entry.date === currentDate)
        || 
        data.find((entry) => entry.flag === "active")
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
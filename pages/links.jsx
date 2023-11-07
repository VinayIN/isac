import { Card } from 'primereact/card';
import { ScrollTop } from 'primereact/scrolltop';

function Resources() {
    return (
        <div className='flex flex-column py-6 justify-content-center'>
        <Card title="Admission Procedure at Brandenburg Technical University">
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="Finding Accomodation">
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="City Registration">
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="Opening Bank Account">
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>

        <Card title="Reaching Cottbus">
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>
        
        <Card title="Emgergency Contacts">
          <div style={{height: '400px', 'overflow': 'auto' }}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
            <ScrollTop target="parent" threshold={100} icon="pi pi-arrow-up text-base" />
          </div>
        </Card>
        </div>
    )
  };
  
  export default Resources
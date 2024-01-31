import './App.css'

const stores = [
  '93384',
  '3948',
  '87346',
  '23834',
  '37345',
  '3945',
  '02393',
  '3948',
  '76534',
  '48356',
  '2039',
  '29338',
  '1029',
  '20339',
  '4920',
  '10329',
]

const amountOfStoresToShow = 10

const storesToRender = stores.slice(0, amountOfStoresToShow)

const remainingStores = stores.slice(amountOfStoresToShow)

function App() {
  return (
    <div className='wrapper'>
      <div className='left'></div>
      <div className='right'>
        <div className='storesContainer'>
          {storesToRender.map((store, index) => (
            <div key={index} className='store'>
              {store}
            </div>
          ))}
          <div className='remaining'>+{remainingStores.length} stores</div>
        </div>
      </div>
    </div>
  )
}

export default App

import Icon from '/components/Icon'
import Amenity from './Amenity';



function getPropertyAmenities() {
    return [{
        "_id": "663871754a65fb5a2e5ebaee",
        "title": "Smoke and carbon monoxide detectors",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "safety_features"
      },
      {
        "_id":  "6645d22c368d22b9bbe29872",
        "title": "Fire extinguisher",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "fire-extinguisher"
        },
        "category": "safety_features"
      },
      {
        "_id":  "6645d261368d22b9bbe29873",
        "title": "First-aid kit",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "briefcase-medical"
        },
        "category": "safety_features"
      },
      {
        "_id":  "6645d297368d22b9bbe29874",
        "title": "Glassware",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "wine"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d2c8368d22b9bbe29875",
        "title": "Dishes",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d340368d22b9bbe29877",
        "title": "Utensils",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d38d368d22b9bbe29878",
        "title": "Basic cookware",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d3aa368d22b9bbe29879",
        "title": "Toaster",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id":"6645d3d2368d22b9bbe2987a",
        "title": "Cofffee maker or French press",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d3f6368d22b9bbe2987b",
        "title": "Dishwasher",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id":"6645d416368d22b9bbe2987c",
        "title": "Microwave",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d446368d22b9bbe2987d",
        "title": "Refrigerator",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d460368d22b9bbe2987e",
        "title": "Stovetop/oven",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "kitchen"
      },
      {
        "_id": "6645d4af368d22b9bbe2987f",
        "title": "Laundry Detergent",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "laundry"
      },
      {
        "_id": "6645d507368d22b9bbe29880",
        "title": "Dryer",
        "description": "",
        "icon": {
          "type": "lucidicon",
          "name": "alarm-smoke"
        },
        "category": "laundry"
      }].reduce((result, item) => {
        const { category, ...rest } = item;
        result[category] = result[category] || [];
        result[category].push(rest);
        return result;
    }, {})
  }
  


 
export default function page() {
    const data = getPropertyAmenities()
    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>            
            <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8 ">
              <div className='grid grid-cols-2 gap-y-10 gap-x-20 '>
                {
                    Object.keys(data).map((catagory, index) => {
                        return  (<div key={index} className='grid-cols-1'>
                                    <h3 className=' font-medium text-xl mb-3 text-neutral-600 '>{conventionToNormalText(catagory)}</h3>
                                    {
                                        data[catagory].map((item, idx )=><Amenity key={idx} data={item}/>)
                                    }
                                </div>)
                        }
                    )
                }
              </div>

              <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
                <button className="btn btn-secondary max-w-36 relative">
                  <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
                  Back</button>
                <button className="btn btn-primary">
                  Continue
                </button>
              </div>
              </form>
          </div>
        </div>        
      )
}

function conventionToNormalText(text) {
  const words = text.replace(/[_-]/g, ' ').split(/\s+/);  
  const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return formattedWords.join(' ');
}




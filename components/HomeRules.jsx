// import React from 'react';


// const HomeRules = ({homerules}) => {
//     console.log(homerules)
//     return (
//         <>
//           <div className="my-14 text-neutral-700">
//                             <h3 className="text-2xl font-semibold text-neutral-700">Home rules</h3>
//                             <ul className="space-y-3 mt-6 font-normal text-lg">
//                                 <li>
//                                     <Icon name='info' className="icon inline mr-6" /> Only for Female
//                                 </li>
//                                 <li>
//                                     <Icon name='info' className="icon inline mr-6" /> Check In 15:00 PM
//                                 </li>
//                                 <li>
//                                     <Icon name='info' className="icon inline mr-6" /> Check Out: 11:00 AM
//                                 </li>
//                             </ul>
//                         </div>   
//         </>
//     );
// };





// export default HomeRules;
import React from 'react';
import Icon from "/components/Icon";

const HomeRules = ({ homerules }) => {
  if (!homerules) {
    console.warn('No home rules provided');
    return <div>No home rules available</div>;
  }

  return (
    <>
      <div className="my-14 text-neutral-700">
        <h3 className="text-2xl font-semibold text-neutral-700">Home rules</h3>
        <ul className="space-y-3 mt-6 font-normal text-lg">
          {Object.entries(homerules).map(([key, rule]) => (
            <li key={key}>
              <Icon name="dot" className="icon inline mr-6" /> {rule.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomeRules;

// const HomeRules = ({ homerules }) => {
//   console.log(homerules);

//   return (
//     <>
//       <div className="my-14 text-neutral-700">
//         <h3 className="text-2xl font-semibold text-neutral-700">Home rules</h3>
//         <ul className="space-y-3 mt-6 font-normal text-lg">
//           {Object.entries(homerules).map(([key, rule]) => (
//             <li key={key}>
//               <Icon name="info" className="icon inline mr-6" /> {rule.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default HomeRules;

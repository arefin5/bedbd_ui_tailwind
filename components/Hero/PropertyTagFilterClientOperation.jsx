'use client'
import { useEffect } from "react"

export default function PropertyTagFilterClientOperation() {
//   useEffect(() => {
//     const propertyTagSelect = document.getElementById('property_tag_filter');
//     const inputElements = propertyTagSelect.querySelectorAll('input');

//     inputElements.forEach(input => {
//         input.addEventListener('change', onChangeHandler);
//     });

//     function onChangeHandler(e) {
//       const inputElementId = e.target.id;
//         const label = document.querySelector(`label[for="${inputElementId}"]`);
//         const hasActiveClass = label.classList.contains('tag-filter-active');
//         if (!hasActiveClass) {
//             label.classList.add('tag-filter-active');
//         } else {
//             label.classList.remove('tag-filter-active');
//         }
//     }

//     // const onChangeHandler = (e) => {
//     //     const inputElementId = e.target.id;
//     //     const label = document.querySelector(`label[for="${inputElementId}"]`);
//     //     const hasActiveClass = label.classList.contains('tag-filter-active');
//     //     if (!hasActiveClass) {
//     //         label.classList.add('tag-filter-active');
//     //     } else {
//     //         label.classList.remove('tag-filter-active');
//     //     }
//     // };

//     // inputElements.forEach(input => {
//     //     input.addEventListener('change', onChangeHandler);
//     // });

    
//     // return () => {
//     //     inputElements.forEach(input => {
//     //         input.removeEventListener('change', onChangeHandler);
//     //     });
//     // };
//     // document.getElementById('all').click()
// }, []);

// useEffect(() => {
//   const propertyTagSelect = document.getElementById('property_tag_filter');
//   const inputElements = propertyTagSelect ? propertyTagSelect.querySelectorAll('input') : [];

//   const tagAllLabel = document.querySelector('label[for="tag-all"]');
//   if (tagAllLabel) {
//       tagAllLabel.classList.add('tag-filter-active');
//   } else {
//       console.error("Label for 'tag-all' not found.");
//   }

//   const onChangeHandler = (e) => {
//       const inputElementId = e.target.id;
//       const label = document.querySelector(`label[for="${inputElementId}"]`);
//       if (label) {
//           if (inputElementId === 'tag-all') {
//               inputElements.forEach(input => {
//                   const inputLabel = document.querySelector(`label[for="${input.id}"]`);
//                   if (inputLabel && input.id !== 'tag-all') {
//                       inputLabel.classList.remove('tag-filter-active');
//                   }
//               });
//           } else {
//               const tagAllLabel = document.querySelector('label[for="tag-all"]');
//               if (tagAllLabel) {
//                   tagAllLabel.classList.remove('tag-filter-active');
//               }
//           }
//           label.classList.toggle('tag-filter-active');
//       } else {
//           console.error(`Label for input with ID '${inputElementId}' not found.`);
//       }
//   };

//   inputElements.forEach(input => {
//       input.addEventListener('change', onChangeHandler);
//   });

//   // Cleanup function to remove event listeners when component unmounts
//   return () => {
//       inputElements.forEach(input => {
//           input.removeEventListener('change', onChangeHandler);
//       });
//   };
// }, []);
  
useEffect(() => {
    const propertyTagSelect = document.getElementById('property_tag_filter');
    const inputElements = propertyTagSelect ? propertyTagSelect.querySelectorAll('input') : [];
  
    const tagAllLabel = document.querySelector('label[for="tag-all"]');
    if (tagAllLabel) {
        tagAllLabel.classList.add('tag-filter-active');
    } else {
        console.error("Label for 'tag-all' not found.");
    }
  
    const onChangeHandler = (e) => {
        const inputElementId = e.target.id;
        const label = document.querySelector(`label[for="${inputElementId}"]`);
        if (label) {
            if (inputElementId === 'tag-all') {
                inputElements.forEach(input => {
                    const inputLabel = document.querySelector(`label[for="${input.id}"]`);
                    if (inputLabel && input.id !== 'tag-all') {
                        inputLabel.classList.remove('tag-filter-active');
                    }
                });
            } else {
                const tagAllLabel = document.querySelector('label[for="tag-all"]');
                if (tagAllLabel) {
                    tagAllLabel.classList.remove('tag-filter-active');
                }
            }
            label.classList.toggle('tag-filter-active');
        } else {
            console.error(`Label for input with ID '${inputElementId}' not found.`);
        }
    };
  
    inputElements.forEach(input => {
        input.addEventListener('change', onChangeHandler);
    });
  
    // Function to enable horizontal scrolling with mouse wheel
    const container = document.getElementById('property_tag_filter');
  
    container.addEventListener('wheel', (event) => {
      if (event.deltaY !== 0) {
        // Prevent vertical scrolling
        event.preventDefault();
  
        // Scroll horizontally instead
        container.scrollLeft += event.deltaY;
      }
    });
  
    // Cleanup function to remove event listeners when component unmounts
    return () => {
        inputElements.forEach(input => {
            input.removeEventListener('change', onChangeHandler);
        });
        container.removeEventListener('wheel', (event) => {
          if (event.deltaY !== 0) {
            // Prevent vertical scrolling
            event.preventDefault();
  
            // Scroll horizontally instead
            container.scrollLeft += event.deltaY;
          }
        });
    };
  }, []);

return null;
}
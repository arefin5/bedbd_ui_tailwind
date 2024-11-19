export const sampleData = [
    {
      GroundPrice: 25,
      Guest: {
        adultGuest: 2,
        childrenGuest: 1,
      },
      Postedby: {
        fname: "John",
        lname: "Doe",
        isVerified: true,
        profilePic: {
          public_id: "user123pic",
          url: "https://res.cloudinary.com/demo/image/upload/v1234567890/user123pic.png",
        },
      },
      _id: "123456abcdef789",
      availablecheck: {
        allowExtend: "yes",
        bookingExtend: "no",
        checkInStart: "3:00 PM",
      },
      bookings: [
        "booking1", "booking2", "booking3", "booking4",
        "booking5", "booking6", "booking7", "booking8",
      ],
      bookingtype: {
        aprivateroom: {
          name: "A private room",
          value: true,
        },
      },
      checkInTime: "4:00 PM",
      checkOutTime: "11:00 AM",
      createdAt: "2024-11-01T12:00:00.000Z",
      description: "A cozy private room in a quiet neighborhood.",
      gender: "anyone",
      homerule: {
        inhousesmokingallowed: { name: "In House Smoking allowed", value: false },
        "parties/eventsallowed": { name: "Parties/events allowed", value: true },
        petallowed: { name: "Pet allowed", value: true },
      },
      images: [
        {
          public_id: "t8pwva2igbkrwo5e40or",
          url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/t8pwva2igbkrwo5e40or.jpg",
          _id: "672651384dcc314535af8530",
        },
        {
          public_id: "h8cxsw6g7uugeznyrjqc",
          url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564384/h8cxsw6g7uugeznyrjqc.jpg",
          _id: "672651384dcc314535af8531",
        },
        {
            public_id: "dlupdn4iktqhspjnqzqt",
            url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/dlupdn4iktqhspjnqzqt.jpg",
            _id: "672651384dcc314535af8532",
        },
        {
            public_id: "bg0uorb4jy6bwwkmh25f",
            url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/bg0uorb4jy6bwwkmh25f.jpg",
            _id: "672651384dcc314535af8532",
        }
      ],
      location: {
        address: "Someplace, City, Country",
        coordinates: [-122.4194, 37.7749],
        country: "Sample Country",
        district: "Sample District",
        floor: "1st Floor",
        googlemap: "https://maps.google.com/?q=Sample+Place",
        postcode: "12345",
        streetAddress: "123 Sample Street",
        thana: "Sample Thana",
        type: "Point",
      },
      price: 50,
      propertyCondition: "Semi-furnished",
      propertyFeature: {
        features: {
          beachview: { name: "Beach View", value: false },
          dedicatedworkspace: { name: "Dedicated Workspace", value: true },
          sharedbathroom: { name: "Shared Bathroom", value: false },
        },
      },
      propertyTitle: "Sample Property 1",
      reviews: [
        { avgRating: 4.5, _id: "review1" },
        { avgRating: 4.0, _id: "review2" },
      ],
      serviceFee: 5,
      status: "published",
      tax: 4.5,
      totalBed: {
        doubleBed: 1,
        extraBed: 1,
        extrabed: 1,
        singleBed: 2,
      },
      totalroom: {
        bedRoom: 2,
        diningRoom: 1,
        others: 1,
        washRoom: 1,
      },
      typeOfguests: "An Entire Place",
      typeOfproperty: "Apartment",
      updatedAt: "2024-11-10T10:00:00.000Z",
      __v: 0,
    },
    {
        GroundPrice: 30,
        Guest: {
          adultGuest: 3,
          childrenGuest: 2,
        },
        Postedby: {
          fname: "Sarah",
          lname: "Johnson",
          isVerified: false,
          profilePic: {
            public_id: "user456pic",
            url: "https://res.cloudinary.com/demo/image/upload/v1234567890/user456pic.png",
          },
        },
        _id: "abcdef123456789",
        availablecheck: {
          allowExtend: "no",
          bookingExtend: "yes",
          checkInStart: "6:00 PM",
        },
        bookings: [
          "booking101", "booking102", "booking103", "booking104",
          "booking105", "booking106", "booking107", "booking108",
        ],
        bookingtype: {
          entirehouse: {
            name: "An Entire House",
            value: true,
          },
        },
        checkInTime: "2:00 PM",
        checkOutTime: "10:00 AM",
        createdAt: "2024-11-05T14:00:00.000Z",
        description: "A large family home with a beautiful garden.",
        gender: "family",
        homerule: {
          inhousesmokingallowed: { name: "In House Smoking allowed", value: false },
          "parties/eventsallowed": { name: "Parties/events allowed", value: false },
          petallowed: { name: "Pet allowed", value: true },
        },
        images: [
            {
              public_id: "t8pwva2igbkrwo5e40or",
              url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/t8pwva2igbkrwo5e40or.jpg",
              _id: "672651384dcc314535af8530",
            },
            {
              public_id: "h8cxsw6g7uugeznyrjqc",
              url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564384/h8cxsw6g7uugeznyrjqc.jpg",
              _id: "672651384dcc314535af8531",
            },
            {
                public_id: "dlupdn4iktqhspjnqzqt",
                url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/dlupdn4iktqhspjnqzqt.jpg",
                _id: "672651384dcc314535af8532",
            },
            {
                public_id: "bg0uorb4jy6bwwkmh25f",
                url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/bg0uorb4jy6bwwkmh25f.jpg",
                _id: "672651384dcc314535af8532",
            }
          ],
        location: {
          address: "Hometown, Cityville, Country",
          coordinates: [-80.1918, 25.7617],
          country: "Sampleland",
          district: "Sample District 2",
          floor: "Ground Floor",
          googlemap: "https://maps.google.com/?q=Sample+Place+2",
          postcode: "67890",
          streetAddress: "456 Another Street",
          thana: "Sample Thana 2",
          type: "Point",
        },
        price: 75,
        propertyCondition: "Fully-furnished",
        propertyFeature: {
          features: {
            beachview: { name: "Beach View", value: true },
            dedicatedworkspace: { name: "Dedicated Workspace", value: true },
            sharedbathroom: { name: "Shared Bathroom", value: false },
          },
        },
        propertyTitle: "Sample Property 2",
        reviews: [
          { avgRating: 4.8, _id: "review201" },
          { avgRating: 4.2, _id: "review202" },
        ],
        serviceFee: 10,
        status: "published",
        tax: 6.5,
        totalBed: {
          doubleBed: 2,
          extraBed: 0,
          extrabed: 1,
          singleBed: 3,
        },
        totalroom: {
          bedRoom: 3,
          diningRoom: 1,
          others: 2,
          washRoom: 2,
        },
        typeOfguests: "A Family Place",
        typeOfproperty: "Villa",
        updatedAt: "2024-11-15T09:30:00.000Z",
        __v: 0,
      },
      {
        GroundPrice: 45,
        Guest: {
          adultGuest: 1,
          childrenGuest: 0,
        },
        Postedby: {
          fname: "Mike",
          lname: "Smith",
          isVerified: true,
          profilePic: {
            public_id: "user789pic",
            url: "https://res.cloudinary.com/demo/image/upload/v1234567890/user789pic.png",
          },
        },
        _id: "zyx9876543210",
        availablecheck: {
          allowExtend: "yes",
          bookingExtend: "yes",
          checkInStart: "9:00 AM",
        },
        bookings: [
          "booking201", "booking202", "booking203",
        ],
        bookingtype: {
          sharedroom: {
            name: "A Shared Room",
            value: true,
          },
        },
        checkInTime: "10:00 AM",
        checkOutTime: "4:00 PM",
        createdAt: "2024-11-08T11:00:00.000Z",
        description: "A compact shared room ideal for solo travelers.",
        gender: "anyone",
        homerule: {
          inhousesmokingallowed: { name: "In House Smoking allowed", value: true },
          "parties/eventsallowed": { name: "Parties/events allowed", value: false },
          petallowed: { name: "Pet allowed", value: false },
        },
        images: [
            {
              public_id: "t8pwva2igbkrwo5e40or",
              url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/t8pwva2igbkrwo5e40or.jpg",
              _id: "672651384dcc314535af8530",
            },
            {
              public_id: "h8cxsw6g7uugeznyrjqc",
              url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564384/h8cxsw6g7uugeznyrjqc.jpg",
              _id: "672651384dcc314535af8531",
            },
            {
                public_id: "dlupdn4iktqhspjnqzqt",
                url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/dlupdn4iktqhspjnqzqt.jpg",
                _id: "672651384dcc314535af8532",
            },
            {
                public_id: "bg0uorb4jy6bwwkmh25f",
                url: "https://res.cloudinary.com/arefintalukder5/image/upload/v1730564385/bg0uorb4jy6bwwkmh25f.jpg",
                _id: "672651384dcc314535af8532",
            }
          ],
        location: {
          address: "Downtown, Cityville, Country",
          coordinates: [-74.006, 40.7128],
          country: "Exampleland",
          district: "District 3",
          floor: "2nd Floor",
          googlemap: "https://maps.google.com/?q=Sample+Place+3",
          postcode: "56789",
          streetAddress: "789 New Street",
          thana: "Sample Thana 3",
          type: "Point",
        },
        price: 35,
        propertyCondition: "Basic-furnished",
        propertyFeature: {
          features: {
            beachview: { name: "Beach View", value: false },
            dedicatedworkspace: { name: "Dedicated Workspace", value: false },
            sharedbathroom: { name: "Shared Bathroom", value: true },
          },
        },
        propertyTitle: "Sample Property 3",
        reviews: [
          { avgRating: 3.8, _id: "review301" },
          { avgRating: 3.5, _id: "review302" },
        ],
        serviceFee: 3,
        status: "published",
        tax: 2.5,
        totalBed: {
          doubleBed: 0,
          extraBed: 0,
          extrabed: 1,
          singleBed: 1,
        },
        totalroom: {
          bedRoom: 1,
          diningRoom: 0,
          others: 1,
          washRoom: 1,
        },
        typeOfguests: "Solo Travelers",
        typeOfproperty: "Hostel",
        updatedAt: "2024-11-14T14:00:00.000Z",
        __v: 0,
      },
  ];
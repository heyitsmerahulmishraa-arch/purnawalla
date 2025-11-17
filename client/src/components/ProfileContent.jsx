import React, { useState } from 'react'

const ProfileContent = () => {



    const contactList = {
      accountDetails: {
        fields: [
          { label: "name", value: "Rajan Awasthi" },
          { label: "email", value: "Rajan@gmail.co" },
          { label: "password", value: "Rajan Awasthi" },
        ],
      },

      profile: {
        fields: [
          { label: "userName", value: "Rajan Awasthi" },
          { label: "email", value: "Rajan@gmail.co" },
          { label: "password", value: "Rajan Awasthi" },
          { label: "address", value: "Fatehpur" },
          { label: "pincode", value: "212601" },
        ],
      },

      userDetails: {
        fields: [
          { label: "userName", value: "Rajan Awasthi" },
          { label: "email", value: "Rajan@gmail.co" },
          { label: "password", value: "Rajan Awasthi" },
          { label: "address", value: "Fatehpur" },
          { label: "pincode", value: "212601" },
        ],
      },

      productDetails: {
        fields: [
          { label: "userName", value: "Rajan Awasthi" },
          { label: "email", value: "Rajan@gmail.co" },
          { label: "password", value: "Rajan Awasthi" },
          { label: "address", value: "Fatehpur" },
          { label: "pincode", value: "212601" },
        ],
      },
    };

    function renderFilds(field) {
        return (
            <div className="container">
                <label>{field.label}</label>
                <input type="text" placeholder={'enter your'+field.label}/>
        </div>
        )
       }

  return <div>{contactList[active].fields.map(props=> renderFilds(props))}</div>;
}



export default ProfileContent

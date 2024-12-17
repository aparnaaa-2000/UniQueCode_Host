import React from 'react';
import './addbranchesitems.css';
import Nav from '../../components/Nav';

const AddBranchesItems = () => {
  return (
    <div className="container">

   <Nav/>
   <br />
      <button className="back-button">&lt; Back</button>
      <h5 style={{fontWeight:'800px'}}>Branches & Items</h5>

      <div className="main-content" style={{gap:6}}>
       
       <table border="1" style={{ borderCollapse: 'collapse' , width:'20%', alignContent:'center'}}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'center' }}>Branch's</th>
          </tr>
        </thead>
        <tbody >
          <tr><td style={{ padding: '10px', textAlign: 'center',  }}>Grooms Kottayam</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Edappally</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Perumbavoor</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Thrissur</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Palakkad</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Chavakkad</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Edappal</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Vatakara</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Perinthalmanna</td></tr>
          <tr><td style={{ padding: '10px', textAlign: 'center' }}>Grooms Manjeri</td></tr>
         
        </tbody>
      </table> <br /><br />

        <div className="table-section">
          <table style={{alignContent:'center' }}>
            <thead style={{ border: 'none'}}>
              <tr>
                <th style={{ padding: '10px', textAlign: 'center' }}>Sub-Category</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Code</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Category</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Code</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Item</th>
                <th style={{ padding: '10px', textAlign: 'center' }}>Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>Indo Western</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>IW</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>Premium</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>P</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>Waist</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>WC</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>Bangala</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>B</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>Non Premium</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>NP</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>Pant</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>T</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>Jodhpuri</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>JP</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>Luxury</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>LX</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>Blazer</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>BZ</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>3 Pcs Suit</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>3P</td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}>Kurta</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>K</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>Nehru Jacket</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>NJ</td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>2 Pcs Suit</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>2P</td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>Kids Suit</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>KD</td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
              </tr>
              <tr>
                <td style={{ padding: '10px', textAlign: 'center' }}>Kurtha</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>KU</td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
                <td style={{ padding: '10px', textAlign: 'center' }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddBranchesItems;

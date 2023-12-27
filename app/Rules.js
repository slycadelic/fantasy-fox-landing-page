import React from 'react'

const Rules = () => {
  return (
    <>
      {/* How to Play Section */}
      <div className='how-to-play'>
                    <h2>How to Play</h2>
                    <div className='steps'>
                        <div className='step'>
                            <img src='/step1-icon.png' alt='Step 1 Icon' className='step-icon' />
                            <h3>Step 1</h3>
                            <p>Description of step 1</p>
                        </div>
                        <div className='step'>
                            <img src='/step2-icon.png' alt='Step 2 Icon' className='step-icon' />
                            <h3>Step 2</h3>
                            <p>Description of step 2</p>
                        </div>
                        <div className='step'>
                            <img src='/step3-icon.png' alt='Step 3 Icon' className='step-icon' />
                            <h3>Step 3</h3>
                            <p>Description of step 3</p>
                        </div>
                        <div className='step'>
                            <img src='/step4-icon.png' alt='Step 4 Icon' className='step-icon' />
                            <h3>Step 4</h3>
                            <p>Description of step 4</p>
                        </div>
                    </div>
                    </div>
    </>
  )
}

export default Rules

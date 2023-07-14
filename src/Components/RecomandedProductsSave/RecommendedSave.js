import React from 'react'
import './RecommendedSave.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import motor from "../../assets/img/motores.png"


function RecomendedSave() {
    return (
        <>
        <div className='horizontalSmallBoxProduct Recommended'>
            <div className='horizontalSmallBoxProductImage Recommended'>
                <img src={motor} alt='' className='productCardImage Recommended' height={90} width={90}></img>
            </div>
            <div className='horizontalSmallBoxProductInfo Recommended'>

                <div className='horizontalSmallBoxProductTitle Recommended'>
                    <h5>W12 Motor</h5>
                </div>

                <div className='horizontalSmallBoxProductPrice Recommended'>
                    <p className='horizontalSmallPriceProduct Recommended'>R$ 1.259,00</p>
                </div>
                <p style={{ paddingLeft: '1rem', paddingTop: '0.4rem' }}>Á vista no pix</p>
            </div>
            <div className='detailSmallProduct Recommended'>
                <div className='detailTextSmallProduct Recommended'>
                </div>
            </div>
        </div>
        </>
    );
};
export default RecomendedSave
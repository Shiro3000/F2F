'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from './ui/button';

const mrr = 6.98;
const surInr = 0.75;

const formatNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

const getRating = (rating: string) => {
    switch (rating) {
      case 'AAA':
        return { textColor: 'text-green-700', bgColor: 'bg-green-100' }; // Very good
      case 'AA':
        return { textColor: 'text-green-600', bgColor: 'bg-green-100' };
      case 'A':
        return { textColor: 'text-green-500', bgColor: 'bg-green-100' };
      case 'BBB':
        return { textColor: 'text-yellow-400', bgColor: 'bg-yellow-100' };
      case 'BB':
        return { textColor: 'text-orange-400', bgColor: 'bg-orange-100' };
      case 'B':
        return { textColor: 'text-red-400', bgColor: 'bg-red-200' };
      case 'CC':
        return { textColor: 'text-red-500', bgColor: 'bg-red-200' };
      case 'C':
        return { textColor: 'text-red-600', bgColor: 'bg-red-200' };
      case 'D':
        return { textColor: 'text-red-800', bgColor: 'bg-red-200' }; // Very bad
      default:
        return { textColor: 'text-gray-700', bgColor: 'bg-gray-200' }; // Default color
    }
  }

  const getInterest = (rating: string) => {
    switch (rating) {
      case 'AAA':
        return mrr+(1*surInr);
      case 'AA':
        return mrr+(2*surInr);
      case 'A':
        return mrr+(3*surInr);
      case 'BBB':
        return mrr+(4*surInr);
      case 'BB':
        return mrr+(5*surInr);
      case 'B':
        return mrr+(6*surInr);
      case 'CC':
        return mrr+(7*surInr);
      case 'C':
        return mrr+(8*surInr);
      case 'D':
        return mrr+(9*surInr);
      default:
        return mrr;
    }
  }

const LendBox = ({
    firstName, lastName, province, age, postalCode, annualIncome, lendAmount, plant, rating, imageURL, exp
}: LendBoxProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const { textColor, bgColor } = getRating(rating);
    const formattedAnnualIncome = formatNumber(annualIncome);
    const formattedLendAmount = formatNumber(lendAmount);
    const interestRate = getInterest(rating);
    
    const toggleDetails = () => {
        setShowDetails(prevState => !prevState);
    }

  return (
    <section className='total-balance cursor-pointer' onClick={toggleDetails}>
        <div className='flex flex-col gap-6'>
            <div className= 'lend-name'>
                <Image 
                    src={imageURL}
                    width={50}
                    height={50}
                    alt={firstName}
                    className="h-[90px] w-[90px]"
                />
            </div>
        </div>
        
        <section className='w-full'>
            <div className='mb-4'>
                <p className='text-20 truncate text-gray-700 font-semibold'>
                    {firstName} {lastName}
                </p>
            </div>
            <div className='flex gap-4 w-full'>
                <div className='flex flex-col gap-1 w-2/4'>
                    <h1 className='text-12 text-gray-600 font-semibold'>
                        Annual Income:
                            <span className='text-12 text-gray-600 font-normal'>
                                &nbsp;{formattedAnnualIncome}
                            </span>
                    </h1>
                    <h2 className='text-12 text-gray-600 font-semibold'>
                        Age:
                        <span className='text-12 text-gray-600 font-normal'>
                            &nbsp;{age}
                        </span>
                    </h2>
                    <h4 className='text-12 text-gray-600 font-semibold'>
                        Year of Experience:
                        <span className='text-12 text-gray-600 font-normal'>
                            &nbsp;{exp}
                        </span>
                    </h4>
                    <h3 className='text-12 text-gray-600 font-semibold'>
                        Province:
                        <span className='text-12 text-gray-600 font-normal'>
                            &nbsp;{province}
                        </span>
                    </h3>
                    <h4 className='text-12 text-gray-600 font-semibold'>
                        Postal Code:
                        <span className='text-12 text-gray-600 font-normal'>
                            &nbsp;{postalCode}
                        </span>
                    </h4>
                </div>
                <div className='flex flex-col gap-1 w-1/2'>
                    <h2 className='text-12 text-gray-600 font-semibold'>
                        Interest Rate:
                        <span className='text-12 text-gray-600 font-normal'>
                            &nbsp;{interestRate}%
                        </span>
                    </h2>
                    <h3 className='text-12 text-gray-600 font-semibold'>
                        Lend Amount:
                        <span className='text-12 text-gray-600 font-normal'>
                            &nbsp;{formattedLendAmount}
                        </span>
                    </h3>
                    <h4 className='text-12 text-gray-600 font-semibold'>
                        Crops:
                        <span className='text-12 text-gray-600 font-normal'>
                            &nbsp;{plant}
                        </span>
                    </h4>
                </div>
            </div>
            {showDetails && (
                <Button className='form-btn mt-5'>Contact Farmer</Button>
            )}
        </section>
        <div className='flex flex-col gap-6'>
            <div className= {`flex size-20 items-center ${bgColor} justify-center rounded-full`}>
                <p className={`text-xl font-bold ${textColor}`}>
                    {rating}
                </p>
            </div>
        </div>
    </section>
  )
}

export default LendBox
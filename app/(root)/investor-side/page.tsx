import HeaderBox from '@/components/HeaderBox'
import LendBox from '@/components/LendBox';
import { farmerMock } from '@/constants';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const InvestorSide = async() => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || 'Guest'}
              subtext="Support the future of farming with your investments and drive positive change."
            />
        </header>
        {farmerMock.map((item) => (
          <LendBox key={item.firstName} {...item} />
        ))}
      </div>
    </section>
  )
}

export default InvestorSide
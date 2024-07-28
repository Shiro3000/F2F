import HeaderBox from '@/components/HeaderBox'
import LendBox from '@/components/LendBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { farmerMock } from '@/constants';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const InvestorSide = async() => {
  const loggedIn = await getLoggedInUser();
  const type = 'investor'
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

            <TotalBalanceBox 
              type = {type}
              accounts={[]}
              totalBanks={loggedIn?.name.split(' ')[0]}
              totalCurrentBalance={350000.00}
            />
        </header>
        <h1 className='subheader-box-title'>Current Investments</h1>
        <LendBox key={farmerMock[1].firstName} {...farmerMock[1]} />
        <h1 className='subheader-box-title'>Available Loans</h1>
        {farmerMock.map((item) => (
          <LendBox key={item.firstName} {...item} />
        ))}

      </div>
    </section>
  )
}

export default InvestorSide
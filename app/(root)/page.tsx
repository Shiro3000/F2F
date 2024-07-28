import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { Button } from '@/components/ui/button';
import WeatherSideBar from '@/components/WeatherSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React, { useEffect, useState } from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  const type = 'farmer';
  useEffect(() => {
    const hasRefreshed = sessionStorage.getItem('hasRefreshed');

    if (!hasRefreshed) {
      sessionStorage.setItem('hasRefreshed', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Connect with like-minded individuals and unlock new financial opportunities."
          />

          <TotalBalanceBox 
            type = {type}
            accounts={[]}
            totalBanks={loggedIn?.name.split(' ')[0]}
            totalCurrentBalance={100000.00}
            />
        </header>
        <Button className='form-btn mt-2'>Apply for Loan</Button>
      </div>
      <WeatherSideBar />
    </section>
  )
}

export default Home
import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChartInvestor from './DoughnutChartInvestor'
import DoughnutChartFarmer from './DoughnutChartFarmer'


const TotalBalanceBox = ({
    type, accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {type === 'investor'
                ? <DoughnutChartInvestor accounts={accounts}/>
                : <DoughnutChartFarmer accounts={accounts}/>
            }
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                {totalBanks}'s Wallet
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>

                <div className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount={totalCurrentBalance} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
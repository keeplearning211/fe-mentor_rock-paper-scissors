'use client'
import { useDispatch, useSelector } from '@/lib/redux';
import { setUserDecision, GameDecision, selectUserDecision, selectAppDecision, selectResult, setResult, GameResult, setScore, } from '@/lib/redux/slices/gameSlice'
import Option from '../components/Option/Option';
import { useRouter } from 'next/navigation';
import styles from './result.module.css'
import { useEffect } from 'react';

const TIMEOUT = 1000
export default function ResultPage() {
  const dispatch = useDispatch()
  const userDecision = useSelector(selectUserDecision)
  const appDecision = useSelector(selectAppDecision)
  const result = useSelector(selectResult)

  const res = getResult(userDecision, appDecision)
  useEffect(() => {
    const announcing = setTimeout(() => {
      dispatch(setResult(res))
      dispatch(setScore(res))
    }, TIMEOUT)
    return () => {
      clearTimeout(announcing)
    }
  }, [])

  const router = useRouter()
  if (!userDecision || !appDecision) {
    router.push('/')
  }

  const onPlayAgain = () => {
    router.push('/')
  }
  return (
    <div className={styles.container}>
      <div className={styles.decision}>
        <h2>You Picked</h2>
        {userDecision &&
          <div className={styles.winnerWrapper}>
            <Option name={userDecision} size="large" />
            {result === 'win' ? <div className={styles.winner}></div> : null}
          </div>
        }
      </div>
      {result &&
        <div className={styles.result}>
          <p>{getResultLabel(result)}</p>
          <button aria-label="play again button" className={styles.playAgainBtn} onClick={onPlayAgain}>Play again</button>

        </div>
      }
      <div className={styles.decision}>
        <h2>The House Picked</h2>
        {appDecision &&
          <div className={styles.winnerWrapper}>
            <Option name={appDecision} size="large" />
            {result === 'lose' ? <div className={styles.winner}></div> : null}
          </div>
        }
      </div>
    </div>
  )
}

function getResult(userDecision: GameDecision, appDecision: GameDecision) {
  if (userDecision === appDecision) {
    return 'draw';
  }

  switch (userDecision) {
    case 'rock':
      return appDecision === 'scissors' ? 'win' : 'lose';
    case 'paper':
      return appDecision === 'rock' ? 'win' : 'lose';
    case 'scissors':
      return appDecision === 'paper' ? 'win' : 'lose';
    default:
      return null;
  }
}

function getResultLabel(result: GameResult) {
  switch (result) {
    case 'win':
      return 'You win';
    case 'lose':
      return 'You lose';
    case 'draw':
      return 'Draw';
    default:
      return null;
  }
}

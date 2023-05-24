import css from "./Statistic.module.css";
import {randomColor} from '../../utils/makeColor';




export function Statistic({title, stats}) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>

        {stats.map( stat => {
          return (
            <li key={stat.id} className={css.item} style={{backgroundColor: randomColor(30, 180)}} >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          )
        })}

      </ul>
    </section>
  )
}



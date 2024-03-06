import {useTranslations} from 'next-intl';
import { INDIVIDUAL } from '@/constants'
import Link from "next/link";

const IndividualTours = () => {
  const t = useTranslations('Tours');
  return (
    <div>
      <h2 className='tour_items_header'>{t('individual_title')}</h2>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {INDIVIDUAL.map((element, index) => (
          <div key={index} className='main_page_individual_tours_container'>
            <a href={element.href}>
              <img
                src={element.src}
                alt=''
                width='100%'
                height='auto'
              />
            </a>
            <div style={{textAlign: "center", backgroundColor: "#ffde4d", padding: "1%", marginBottom: "4%"}}>
              <Link href={element.href} className='mainpage_festivals_title'>
                {t(`individuals.${index}.tour`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default IndividualTours
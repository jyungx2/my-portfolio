interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI 기반 기업 컬쳐핏 분석 플랫폼 ’Fitin’',
    description: `인사담당자의 설문 응답 데이터를 K-means 알고리즘으로 군집화하여 선호 인재상과 채용 성향을 분석하고, 이를 시각화하여 차트 형태의 결과로 제공하는 AI 기반 웹서비스입니다.`,
    imgSrc: '/static/images/fitin/fitin-main.png',
    href: '/blog/fitin',
  },
  {
    title: '해외 중고거래 플랫폼 ‘유랑마켓’',
    description: `'당근마켓'을 모티브로 한 해외 거주 한인을 위한 중고거래 웹 서비스입니다. 워킹홀리데이 기간 동안 캐나다와 영국에서 실제 중고거래를 하며 겪은 불편함을 바탕으로, 해외에 거주하는 한인들이 보다 수월하고 안전하게 중고거래와 정보 교류를 할 수 있는 플랫폼을 직접 기획·개발했습니다.`,
    imgSrc: '/static/images/urang-market/urang-market-main.png',
    href: '/blog/urang-market',
  },
  {
    title: '친환경 쇼핑몰 ‘다시봄’',
    description: `친환경 제품 전문 쇼핑몰 ‘자연상점’을 참고하여 제작한 ‘다시봄’은 지속 가능한 소비를 촉진하고, “다시 지구에 봄이 오길 바란다”는 의미를 담아 기획한 친환경 쇼핑몰 웹 서비스입니다.`,
    imgSrc: '/static/images/again-spring/again-spring-main.png',
    href: '/blog/again-spring',
  },
]

export default projectsData

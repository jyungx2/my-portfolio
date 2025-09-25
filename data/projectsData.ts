interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '친환경 쇼핑몰 ‘다시봄’',
    description: `친환경 제품 전문 쇼핑몰 ‘자연상점’을 참고하여 제작한 ‘다시봄’은 지속 가능한 소비를 촉진하고, 다시 지구에 봄이 오길 바라는 마음을 담아 이름 지은 친환경 쇼핑몰 웹사이트입니다.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/again-spring',
  },
  {
    title: '해외 중고거래 플랫폼 ‘유랑마켓’',
    description: `워킹홀리데이 기간 중 겪었던 불편함을 바탕으로, 해외에 거주하는 한인들이 쉽고 안전하게 중고거래 및 정보 교류를 할 수 있도록 직접 기획하고 개발하게 되었습니다.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/urang-market',
  },
  {
    title: 'AI 기반 기업 컬쳐핏 분석 플랫폼 ’Fitin’',
    description: `인사담당자의 설문 응답 데이터를 기반으로, 군집화 알고리즘을 적용해 채용 성향을 분석하고, 결과를 시각화하여 제공합니다. 이를 통해 인사담당자는 채용 과정에서 참고할 수 있는 기준과 인사이트를 얻고, 수강생과의 조직문화 적합도(Culture Fit)를 분석할 수 있습니다.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/fitin',
  },
]

export default projectsData

const key = 'kaa5wQXJlwO%2B%2BE8awhFJtMDyzp0gxlIPShrbip98pjwFE%2BY%2BZMGJSwBQAFjHT0IlypaBplmF5fwOElwSg4gpgg%3D%3D'

export const getArea = () => {
  return `/areaCode?ServiceKey=${key}&MobileOS=ETC&MobileApp=AppTest&numOfRows=30`
}

export const getGugun = (sidoCd) => {
  return `/areaCode?ServiceKey=${key}&MobileOS=ETC&MobileApp=AppTest&numOfRows=30&&areaCode=${sidoCd}`
}

export const getDefaultList = () => {
  return `/areaBasedList?ServiceKey=${key}&MobileOS=ETC&contentTypeId=82&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=20&pageNo=1`
}

export const changeList = (sidoCd, gugunCd) => {
  return `/areaBasedList?ServiceKey=${key}&MobileOS=ETC&contentTypeId=82&areaCode=${sidoCd}&sigunguCode=${gugunCd}&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=20&pageNo=1`
}

export const addList = (sidoCd, gugunCd, page) => {
  return `/areaBasedList?ServiceKey=${key}&MobileOS=ETC&contentTypeId=82&areaCode=${sidoCd}&sigunguCode=${gugunCd}&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=20&pageNo=${page}`
}

export const getContentInfo = (contentId) => {
  return `/detailCommon?ServiceKey=${key}&MobileOS=ETC&contentTypeId=82&contentId=${contentId}&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&`
}

export const getContentInfo1 = (contentId) => {
  return `/detailIntro?ServiceKey=${key}&contentTypeId=82&contentId=${contentId}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&introYN=Y`
}

export const getAddImg = (contentId) => {
  return `/detailImage?ServiceKey=${key}&contentTypeId=82&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&contentId=${contentId}&imageYN=Y`

}

export const getMenuImg = (contentId) => {
  return `/detailImage?ServiceKey=${key}&contentTypeId=82&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&contentId=${contentId}&imageYN=N`;

}

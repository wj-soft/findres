const key = 'kaa5wQXJlwO%2B%2BE8awhFJtMDyzp0gxlIPShrbip98pjwFE%2BY%2BZMGJSwBQAFjHT0IlypaBplmF5fwOElwSg4gpgg%3D%3D&MobileOS'

export const getArea = () => {
  return `/areaCode?ServiceKey=${key}=ETC&MobileApp=AppTest&numOfRows=30`
}

export const getGugun = (sidoCd) => {
  return `/areaCode?ServiceKey=${key}=ETC&MobileApp=AppTest&numOfRows=30&&areaCode=${sidoCd}`
}

export const getDefaultList = () => {
  return `/areaBasedList?ServiceKey=${key}=ETC&contentTypeId=82&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=12&pageNo=1`
}

export const changeList = (sidoCd, gugunCd) => {
  return `/areaBasedList?ServiceKey=${key}=ETC&contentTypeId=82&areaCode=${sidoCd}&sigunguCode=${gugunCd}&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=12&pageNo=1`
}

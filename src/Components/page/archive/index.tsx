import {  Typography } from '@mui/material'
import './archive.scss'

//icon
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";


const Archive = () => {
    const gitpage = 'https://github.com/DongEsssss'
const tistorypage = 'https://developer-donge.tistory.com/'
    return (
        <section className='archive-section'>
            <div className="archive">
                <Typography className='title' fontSize={50} fontWeight={1000}>Archive</Typography>
                <div className="archive-box">
                    <div className="box" onClick={() => window.open(`${gitpage}`)}>
                        <div className='icon-item'>
                            <FaGithub className="icon" color='#000000' />
                            <Typography>Github</Typography>
                        </div>
                        <div className="icon-description">
                            <a href="https://github.com/DongEsssss">https://github.com/DongEsssss</a>
                            <Typography sx={{ fontWeight: 'bold', margin: '10px 0px' }}>
                                소스 코드 저장소
                            </Typography>
                            <li>학부 시절부터의 프로젝트, 프로그램 과제 소스 코드</li>
                            <li>혼자서 코딩 연습을 위해 적었던 코드</li>
                            <li>협업시 소스 코드 관리</li>
                        </div>
                    </div>
                    <div className="box" onClick={()=>window.open(`${tistorypage}`)}>
                        <div className="icon-item">
                            <SiTistory className="icon" color='#eb531f' />
                            <Typography color='#eb531f'>Tistory</Typography>
                        </div>
                        <div className="icon-description">
                            <a href="https://developer-donge.tistory.com/">https://developer-donge.tistory.com/</a>
                            <Typography sx={{ fontWeight: 'bold', margin: '10px 0px' }}>
                                공부 및 지식 공유
                            </Typography>
                            <li>공부한 것을 나의 것으로 만들기 위한 기록</li>
                            <li>개발자의 길을 걸으며 공부한 개발 관련 지식 정리</li>
                            <li>취업 이후 내가 배운 것들을 다시 정리하면서 배움</li>
                            <li>지식 공유를 하면서 피드백 및 선한 영향력 행사</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Archive
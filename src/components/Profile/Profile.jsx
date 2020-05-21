import React from 'react';
import './ProfilePosition.css';
import {TopScreen} from "../TopScreen/TopScreen";
import {InfoUser} from "../InfoUser/InfoUser";
import {HeadText} from "../HeadText/HeadText";
import {SetArea} from "../SetArea/SetArea";
import {Post} from "../Post/Post";

export const Profile = (props) => {
    return (
        <div className={`${props.className} Profile`}>
            <TopScreen
                className='Profile_TopScreen--position'
                src='https://wallpapershome.ru/images/wallpapers/linii-2560x1440-abstrakciya-20702.jpg'/>
            <InfoUser/>
            <HeadText/>
            <SetArea/>
            <Post
                foto='https://sun9-4.userapi.com/c623426/v623426804/ded9/QSoglzxUJTE.jpg'
                name='Гриффин Стьюи Питорович'
                text='./src/components/Foto/Foto.jsx Line 7:9:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text'
            />
            <Post
                foto='https://2x2tv.ru/upload/iblock/a1e/a1ec41e519f70c81d7a6f1ab650e9eec.jpg'
                name='Гриффин Брайан'
                text='Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить'
            />
        </div>
    );
}

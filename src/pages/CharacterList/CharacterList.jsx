import React, {useEffect, useState} from 'react';
import {getAllCharacters} from "../../requests/getAllCharacters/getCaharcters";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../features/data/dataSlice";
import {useNavigate} from "react-router-dom";
import {setId} from "../../features/id/idSlice";

const CharacterList = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.data)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const result = await getAllCharacters()
                dispatch(setData(result))
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }) ()
    }, [])

    const toDetail = (id) => {
        dispatch(setId(id))
        navigate('/detail')
    }

    return (
        <div>
            <h2>Общий список персонажей Игры Престолов</h2>

            {isLoading ?
                <div>Loading...</div>
                :
                <>
                    {data.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                onClick={() => toDetail(item.id)}
                            >
                                {item.fullName}
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
};

export default CharacterList;
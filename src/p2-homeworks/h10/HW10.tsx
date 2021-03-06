import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from './assets/oval.svg'

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.loadingStatus)
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {loading
                ? (
                    <div><img src={preloader} alt={'wait..'}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
        </div>
    )
}

export default HW10

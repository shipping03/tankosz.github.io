import * as React from "react";
import Map, {MapApiLoaderHOC} from 'react-bmapgl/Map'
import {InfoWindow} from 'react-bmapgl'

class Example extends React.Component {
    render() {
        return (

            <Map
                style={{ height: 450 }}
                //注意：在REACT脚手架中全局对象需要window来访问,生产环境不
                center={new  window.BMapGL.Point(113.798024, 22.692425)}
                zoom={18}
            >
                <InfoWindow
                    position={new  window.BMapGL.Point(113.798024, 22.692425)}
                    title="深圳市腾柯科技有限公司"
                    height={150}
                    width={360}
                >
                    <p>地址:深圳市宝安区福海街道和平社区永和路41号同富裕
                        工业区和平大友工贸大厦B栋5楼</p>
                    <p>电话:  (0755)  85244473</p>
                    <p>邮箱:   tina@tankosz.com</p>
                </InfoWindow>
            </Map>
        )
    }
}


export default MapApiLoaderHOC({ak: '7nN9iBjivZFNEED93TKTvBA31z3WqjMs'})(Example)


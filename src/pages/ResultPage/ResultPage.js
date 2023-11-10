import styles from "./ResultPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import profile from "../../profile.json"
import Spinner from "../../components/Spinner/Spinner";

const ResultPage = () => {
    const history = useNavigate()
    const cx = classNames.bind(styles)
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)
    const [showImage, setShowImage] = useState(true);

    const rule = (data) => {
        let result = ""
        var score = {}
        for (var key in profile) {
            score[key] = 0
        }
        var threshold = 1

        function countCommonElements(array1, array2) {
            var commonCount = 0;
        
            for (var i = 0; i < array1.length; i++) {
              var element = array1[i];
              
              if (array2.includes(element)) {
                commonCount++;
              }
            }
          
            return commonCount;
        }
        
        function findRandomMaxKey(jsonObj) {
            let maxKeys = [];
            let maxValue = -Infinity;
          
            for (const key in jsonObj) {
              if (jsonObj.hasOwnProperty(key) && Number.isInteger(jsonObj[key])) {
                if (jsonObj[key] > maxValue) {
                  maxKeys = [key];
                  maxValue = jsonObj[key];
                } else if (jsonObj[key] === maxValue) {
                  maxKeys.push(key);
                }
              }
            }
          
            if (maxKeys.length === 0) {
              return null;
            }
            const randomIndex = Math.floor(Math.random() * maxKeys.length);
            return maxKeys[randomIndex];
        }   

        for (let key in profile) {
            if (profile[key]["Habitat"] == data['habitat']){
                score[key] += 1
            }
            if (Math.abs(profile[key]["Size"] - data['size'])<=threshold){
                score[key] += 1
            }
            if (profile[key]["Beak"] == data['beak']){
                score[key] += 1
            }
            score[key] += (countCommonElements(profile[key]['Color'], data['color']))/data['color'].length    
        }

        result = findRandomMaxKey(score)

        return result
    }

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowImage(false);
      }, 1000 * 1000); // t 초를 밀리초로 변환
  
      return () => clearTimeout(timeoutId);
    }, []);

    const result = rule(data)
    const imgpath = `../result/${result.toString()}.jpg`
    const resultnm = profile[result]['Name']
    const divStyle = {
      backgroundImage: `url(${imgpath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '1366px',
      height: '1024px',
      zIndex: 10,
      position: "fixed"
    }
  
    return (
      <div>
        {showImage && <div className={cx("loading")}>
          <Spinner className={cx("spinner")}/>
          </div>}
        <div className="masterdiv" style={divStyle}>
          {/* <img src={imgpath} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> */}
          <button className="returnBtn" onClick={() => window.location.href = '/'}/>
        </div>
      </div>
    )
}

export default ResultPage
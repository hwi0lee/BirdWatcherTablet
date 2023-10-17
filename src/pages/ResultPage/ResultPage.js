import styles from "./ResultPage.module.css";
import { useNavigate } from "react-router"
import classNames from "classnames/bind"
import { useState, useEffect, useContext } from "react"
import DataContext from "../../DataContext"
import profile from "../../profile.json"

const ResultPage = () => {
    const history = useNavigate()
    const cx = classNames.bind(styles)
    const navigator = useNavigate()
    const {data, setData} = useContext(DataContext)

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
            score[key] += countCommonElements(profile[key]['Color'], data['color'])     
        }

        result = findRandomMaxKey(score)

        return result
    }
    const result = rule(data)

    return (
        <div>
            {result}
            <button onClick={() => window.location.href = '/habitat'}>처음으로</button>
        </div>
    )
}

export default ResultPage
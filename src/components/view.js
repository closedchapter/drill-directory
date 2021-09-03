/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from "react-router-dom";
import Convicts from './data.json';
import moment from 'moment';

const View = () => {

    let { id } = useParams();
      function b(idToSearch) {
        return Convicts.filter(item => {
          return item.tagname.toLowerCase() === idToSearch
        })
      };
    let artist = b(id)[0]


    function TimeSince(date) {
        var raw = moment(new Date()).diff(moment(date), 'year', true)
        var months = Math.round((raw % 1) * 12)
        var years = ((Math.round(raw * 100)/100)-((Math.round(raw * 100)/100)%1))
        return (years + " year(s) " + months + " month(s).")
    }

    return (
        <div className='absolute inset-0 space-y-5 p-5'>
            <div className='mt-5 mb-10'>
                <div className='text-3xl font-bold'>{artist.firstname} "{artist.tagname}" {artist.lastname}</div>
            </div>
            <div className='ring-1 ring-gray-300 rounded p-5'>
                <div className='text-xl font-semibold'>Summary</div>
                <div className='text-lg font-normal mt-5'>{artist.tagname} was found guilty of <b>{artist.offence[0].charge}</b> and <b>{artist.offence[1].charge}</b> in {artist.crime_location}.</div>
            </div>
            <div className='ring-1 ring-gray-300 rounded p-5 bg-gray-200'>
                <div className='text-xl font-semibold'>Sentence</div>
                <div className='text-lg font-normal mt-5'>
                    {artist.tagname} was <b>sentenced to {artist.sentence}</b> with a minimum of <b>{artist.min_years} years</b> to serve. 
                    He has been in prison for <b>{TimeSince(artist.sentence_date)}</b> He will be exactly <b>{artist.min_years + artist.age} years old</b> at time of release.
                </div>
            </div>
            <div className='ring-1 ring-gray-300 rounded p-5 opacity-60'>
                <div className='text-xl font-semibold'>Parole</div>
                <div className='text-lg font-normal mt-5'>
                    This section is currently under construction.
                </div>
            </div>
        </div>
    )
}

export default View;
'use client'
import React, {  createContext, useContext, useEffect, useState } from 'react'

const NeedsContext = createContext();

export const useNeeds = () => useContext(NeedsContext)

export const NeedsProvider = ({ children }) =>{
    const [needsData, setNeedsData] = useState(null);
    const [needs, setNeeds] = useState([]);
    const [currentNeedsSlug, setCurrentNeedsSlug] = useState('');

    const fetchNeeds = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/needs`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setNeeds(data);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        if (needs.length > 0 && currentNeedsSlug) {
          const foundNeeds = needs.find(Needs => Needs.slug === currentNeedsSlug);
          setNeedsData(foundNeeds);
        }
      }, [needs, currentNeedsSlug]);
    
      useEffect(() => {
        fetchNeeds();
      }, []);


    return (
        <NeedsContext.Provider value={{needs, needsData, setCurrentNeedsSlug}} >
            {children}
        </NeedsContext.Provider>
    )
}